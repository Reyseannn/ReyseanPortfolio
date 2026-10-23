import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { runInNewContext } from "node:vm";

test("mobile menu resets across layout changes and keeps its closing controls", async () => {
  const script = await readFile(new URL("../public/portfolio/script.js", import.meta.url), "utf8");
  const button = new EventTarget();
  const attributes = new Map([["aria-expanded", "false"]]);
  button.getAttribute = (name) => attributes.get(name);
  button.setAttribute = (name, value) => attributes.set(name, value);
  let focusCount = 0;
  button.focus = () => { focusCount += 1; };

  const classes = new Set();
  const link = new EventTarget();
  const linkAttributes = new Map([["href", "#about"]]);
  link.getAttribute = (name) => linkAttributes.get(name);
  link.setAttribute = (name, value) => linkAttributes.set(name, value);
  link.removeAttribute = (name) => linkAttributes.delete(name);
  const aboutSection = { id: "about" };
  const navigation = {
    classList: {
      toggle: (name, present) => present ? classes.add(name) : classes.delete(name),
      remove: (name) => classes.delete(name),
    },
    querySelectorAll: () => [link],
  };
  const observedSections = [];
  let updateActiveSection;
  class IntersectionObserver {
    constructor(callback, options) {
      updateActiveSection = callback;
      assert.equal(options.rootMargin, "-20% 0px -65%");
      assert.equal(options.threshold, 0);
    }
    observe(section) { observedSections.push(section); }
  }
  const document = new EventTarget();
  document.querySelector = (selector) => ({
    ".menu-toggle": button,
    ".side-links": navigation,
    "#project-list": { innerHTML: "" },
    "#about": aboutSection,
  })[selector];
  const layout = new EventTarget();
  const window = {
    matchMedia: (query) => {
      assert.equal(query, "(max-width: 760px)");
      return layout;
    },
    IntersectionObserver,
  };
  runInNewContext(script, { document, window });

  const assertClosed = () => {
    assert.equal(button.getAttribute("aria-expanded"), "false");
    assert.equal(button.getAttribute("aria-label"), "Open navigation");
    assert.equal(classes.has("open"), false);
  };
  const changeLayout = (matches) => layout.dispatchEvent(Object.assign(new Event("change"), { matches }));
  button.dispatchEvent(new Event("click"));
  assert.equal(button.getAttribute("aria-expanded"), "true");
  assert.equal(button.getAttribute("aria-label"), "Close navigation");
  assert.equal(classes.has("open"), true);
  changeLayout(false);
  assertClosed();
  assert.equal(focusCount, 0, "resizing must not focus the hidden toggle");
  changeLayout(true);
  assertClosed();

  button.dispatchEvent(new Event("click"));
  document.dispatchEvent(Object.assign(new Event("keydown"), { key: "Escape" }));
  assertClosed();
  assert.equal(focusCount, 1);
  button.dispatchEvent(new Event("click"));
  link.dispatchEvent(new Event("click"));
  assertClosed();
  assert.equal(focusCount, 1, "section selection must not pull focus back to the toggle");

  assert.deepEqual(observedSections, [aboutSection]);
  updateActiveSection([{ target: aboutSection, isIntersecting: true }]);
  assert.equal(link.getAttribute("aria-current"), "location");
});
