from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "downloads" / "Reysean_Policarpio_Resume.pdf"

INK = colors.HexColor("#1B2434")
SUBTLE = colors.HexColor("#4C5565")
PAPER = colors.HexColor("#FAFAFA")
LINE = colors.HexColor("#253043")

pdfmetrics.registerFont(TTFont("ResumeSans", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("ResumeSans-Bold", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))


def page_frame(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(PAPER)
    canvas.rect(0, 0, A4[0], A4[1], fill=1, stroke=0)
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.8)
    canvas.rect(13 * mm, 13 * mm, A4[0] - 26 * mm, A4[1] - 26 * mm, fill=0, stroke=1)
    canvas.setTitle("Reysean Policarpio Resume")
    canvas.setAuthor("Reysean Policarpio")
    canvas.setSubject("Resume and student project experience")
    canvas.restoreState()


styles = getSampleStyleSheet()
name_style = ParagraphStyle(
    "Name",
    parent=styles["Normal"],
    fontName="ResumeSans-Bold",
    fontSize=28,
    leading=31,
    textColor=INK,
    spaceAfter=4,
)
section_style = ParagraphStyle(
    "Section",
    parent=styles["Heading2"],
    fontName="ResumeSans-Bold",
    fontSize=14,
    leading=17,
    textColor=INK,
    spaceBefore=4,
    spaceAfter=4,
)
body_style = ParagraphStyle(
    "Body",
    parent=styles["BodyText"],
    fontName="ResumeSans",
    fontSize=8.1,
    leading=10.7,
    textColor=SUBTLE,
    alignment=TA_LEFT,
)
small_style = ParagraphStyle(
    "Small",
    parent=body_style,
    fontSize=7.4,
    leading=9.2,
)
label_style = ParagraphStyle(
    "Label",
    parent=body_style,
    fontName="ResumeSans-Bold",
    fontSize=9.2,
    leading=11.2,
    textColor=INK,
)
title_style = ParagraphStyle(
    "Title",
    parent=body_style,
    fontName="ResumeSans-Bold",
    fontSize=9.2,
    leading=11.4,
    textColor=INK,
    spaceAfter=1,
)
link_style = ParagraphStyle(
    "Link",
    parent=small_style,
    textColor=INK,
)
award_style = ParagraphStyle(
    "Award",
    parent=small_style,
    leftIndent=8,
    firstLineIndent=-6,
    bulletIndent=0,
)


def rule():
    return HRFlowable(width="100%", thickness=0.75, color=LINE, spaceBefore=1, spaceAfter=5)


def project_block(role, name, context, date, bullets):
    heading = Table(
        [[Paragraph(role, label_style), Paragraph(date, small_style)]],
        colWidths=[116 * mm, 48 * mm],
    )
    heading.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("ALIGN", (1, 0), (1, 0), "RIGHT"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    items = [heading, Paragraph(f"{name} - {context}", title_style)]
    for bullet in bullets:
        items.append(Paragraph(f"• {bullet}", small_style))
    items.append(Spacer(1, 3.5))
    return KeepTogether(items)


doc = BaseDocTemplate(
    str(OUTPUT),
    pagesize=A4,
    leftMargin=24 * mm,
    rightMargin=24 * mm,
    topMargin=20 * mm,
    bottomMargin=18 * mm,
)
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main", leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
doc.addPageTemplates([PageTemplate(id="resume", frames=[frame], onPage=page_frame)])

story = [Paragraph("REYSEAN POLICARPIO", name_style), rule()]

contact = Table(
    [[
        Paragraph("+63 994 661 7530", link_style),
        Paragraph("Quezon City, Metro Manila", link_style),
        Paragraph('<link href="mailto:policarpioreysean3@gmail.com">policarpioreysean3@gmail.com</link>', link_style),
    ]],
    colWidths=[43 * mm, 54 * mm, 67 * mm],
)
contact.setStyle(
    TableStyle(
        [
            ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ("ALIGN", (0, 0), (0, 0), "LEFT"),
            ("ALIGN", (1, 0), (1, 0), "CENTER"),
            ("ALIGN", (2, 0), (2, 0), "RIGHT"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 0),
            ("TOPPADDING", (0, 0), (-1, -1), 1),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
        ]
    )
)
story.extend([contact])
profiles = Paragraph(
    '<link href="https://github.com/Reyseannn">github.com/Reyseannn</link>  |  '
    '<link href="https://www.linkedin.com/in/reyseanpolicarpio21/">linkedin.com/in/reyseanpolicarpio21</link>',
    link_style,
)
story.extend([profiles, rule()])

story.extend(
    [
        Paragraph("ABOUT ME", section_style),
        rule(),
        Paragraph(
            "First-year Computer Engineering student with hands-on experience from school programming, interface, and hardware projects. I have led student teams, built working web and Android projects, and contributed to a physical kiosk. I am currently looking for small freelance website projects and opportunities to keep improving as a developer.",
            body_style,
        ),
        Spacer(1, 5),
        Paragraph("EDUCATION", section_style),
        rule(),
    ]
)

education = Table(
    [
        [
            Paragraph("2026 - Present<br/><b>Technological Institute of the Philippines</b>", small_style),
            Paragraph("<b>Bachelor of Science in Computer Engineering</b><br/>First-year Computer Engineering student.", body_style),
        ],
        [
            Paragraph("2024 - 2026<br/><b>STI College Fairview</b>", small_style),
            Paragraph("<b>Senior High School Diploma, ICT Strand</b><br/>Completed programming and software development projects, served as ICT Club Auditor, managed a TypeRacer competition, and led programming project teams.", body_style),
        ],
    ],
    colWidths=[48 * mm, 116 * mm],
)
education.setStyle(
    TableStyle(
        [
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 6),
            ("TOPPADDING", (0, 0), (-1, -1), 1),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ]
    )
)
story.extend([education, Paragraph("PROJECT EXPERIENCE", section_style), rule()])

story.extend(
    [
        project_block(
            "ASSISTANT PROJECT LEADER",
            "eTickette",
            "Group Capstone Project",
            "February 2026 - June 2026",
            [
                "Supported group planning and delivery for a smart queue system for school Registrar and Cashier services.",
                "Coded the first web page in HTML and CSS and focused on the physical kiosk setup.",
            ],
        ),
        project_block(
            "LEAD DEVELOPER WITHIN A STUDENT TEAM",
            "FireFlies",
            "HTML, CSS, and JavaScript Web Game",
            "April 2025 - June 2025",
            [
                "Led development of an educational creature-collecting game focused on programming and debugging.",
                "Built character interactions, dialogue activities, and coding challenges with the team.",
            ],
        ),
        project_block(
            "LEAD DEVELOPER",
            "Beyond the Lens",
            "Java and Android Studio School Project",
            "Grade 11 - Two months",
            [
                "Built an Android app for discovering photographers, creating an account, and viewing profile galleries.",
            ],
        ),
        Paragraph("SKILLS", section_style),
        rule(),
    ]
)

skill_data = [
    ["• HTML", "• CSS", "• JavaScript", "• Java"],
    ["• Android Studio", "• Python", "• C++", "• UI/UX"],
]
skill_table = Table([[Paragraph(cell, body_style) for cell in row] for row in skill_data], colWidths=[41 * mm] * 4)
skill_table.setStyle(
    TableStyle(
        [
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("LEFTPADDING", (0, 0), (-1, -1), 0),
            ("RIGHTPADDING", (0, 0), (-1, -1), 2),
            ("TOPPADDING", (0, 0), (-1, -1), 1),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
        ]
    )
)
story.extend([skill_table, Spacer(1, 4), Paragraph("AWARDS", section_style), rule()])

for award in [
    "STI Tagisan ng Talino 2025-2026, Local Level Participant - March 2026",
    "Best Application, 1st Runner-Up, STI College Fairview - May 2026",
    "Best Presenter, 3rd Runner-Up, STI College Fairview - May 2026",
    "Best Capstone Project, 1st Runner-Up, STI College Fairview - May 2026",
]:
    story.append(Paragraph(f"• {award}", award_style))

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
doc.build(story)
print(OUTPUT)
