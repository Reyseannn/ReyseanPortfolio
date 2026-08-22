"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = event.currentTarget;
    const payload = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/policarpioreysean3@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload,
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success === "false") throw new Error("Message delivery failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" action="https://formsubmit.co/policarpioreysean3@gmail.com" method="POST" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New portfolio project inquiry" />
      <input type="hidden" name="_template" value="table" />
      <input className="honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="field-pair">
        <label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
      </div>
      <label>
        Project type
        <select name="project_type" defaultValue="" required>
          <option value="" disabled>Select a project</option>
          <option>Simple website</option>
          <option>Portfolio website</option>
          <option>UI/UX design</option>
          <option>Something else</option>
        </select>
      </label>
      <label>Message<textarea name="message" placeholder="Tell me about your idea and what you need the project to do." rows={6} required /></label>
      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send project details"}
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>
      </button>
      <p className={`form-status ${status}`} aria-live="polite">
        {status === "success" && "Your message was sent. I’ll reply by email."}
        {status === "error" && "The form could not send your message. Email me directly instead."}
      </p>
    </form>
  );
}
