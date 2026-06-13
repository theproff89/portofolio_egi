# Product Requirements Document (PRD)
## Personal Bio Portfolio Website — Egi Martha Rahmatullah Marlis

---

## 1. Overview

| Field         | Detail                                              |
|---------------|-----------------------------------------------------|
| Product Name  | Egi Martha — Personal Portfolio Website            |
| Version       | 1.1                                                 |
| Date          | June 13, 2026                                       |
| Platform      | Web (Responsive - Desktop, Tablet, Mobile)          |
| Tech Stack    | HTML5, CSS3, Vanilla JavaScript                     |
| Hosting       | Local (XAMPP - Apache)                              |
| Design Style  | **Minimalist, clean, modern**                       |

---

## 2. Background & Objective

### Background
A personal portfolio website is needed to showcase Egi Martha's professional identity, skills, work experience in telecommunications and IT, and projects. This website serves as a digital resume and personal branding tool to complement the existing CV.

### Objective
- Provide a centralized platform presenting personal bio and professional portfolio
- Make a strong first impression on potential employers, clients, or collaborators
- Showcase 12+ years of telecommunications and IT experience in an engaging manner
- Reflect a **minimalist and professional** personal brand

---

## 3. Target Audience

- Recruiters and HR professionals in telecommunications and IT
- Potential clients or freelance collaborators
- Fellow engineers and tech community members
- Anyone interested in learning about Egi's professional background

---

## 4. Design Philosophy — Minimalist

### Core Principles
| Principle        | Description |
|------------------|-------------|
| **Less is More** | Remove all unnecessary elements. Every element must have a purpose |
| **Whitespace**   | Generous spacing and breathing room between sections |
| **Typography**   | Large, readable typography as the primary design element |
| **Muted Palette** | Neutral base colors with one accent color |
| **No Clutter**   | No decorative elements that don't serve a function |

### Color Palette
| Role          | Color           | Hex       |
|---------------|-----------------|-----------|
| Background    | Off-white       | `#FAFAFA` |
| Text Primary  | Dark Charcoal   | `#1A1A2E` |
| Text Secondary| Warm Gray       | `#6B7280` |
| Accent        | Deep Teal       | `#0F766E` |
| Accent Hover  | Dark Teal       | `#0D5F58` |
| Card BG       | White           | `#FFFFFF` |
| Dark BG       | Dark Navy       | `#1A1A2E` |
| Dark Card     | Slate           | `#242438` |

### Typography
| Usage      | Font           | Weight    | Size (Desktop) |
|------------|----------------|-----------|----------------|
| Headings   | Inter          | 700 Bold  | 2.5rem - 3.5rem |
| Subheading | Inter          | 500 Medium| 1.25rem - 1.5rem |
| Body       | Inter          | 400 Regular | 1rem - 1.125rem |
| Accent/Tag | JetBrains Mono | 400       | 0.875rem       |

### Animation Guidelines
- **Subtle only**: Fade-in on scroll (opacity 0→1, translateY 20px→0)
- **Duration**: 400-600ms with ease-out
- **No flashy effects**: No spinning, bouncing, or parallax
- **Hover**: Gentle scale (1.02) or shadow elevation on cards

---

## 5. Features & Requirements

### 5.1 Hero Section (Landing)
| ID     | Requirement | Priority |
|--------|-------------|----------|
| F-1.1  | Clean hero layout with name **"Egi Martha Rahmatullah Marlis"** and tagline **"Field Quality Assurance Professional"** | High |
| F-1.2  | Subtle profile photo placeholder (circular, minimal border) | High |
| F-1.3  | Short one-liner intro text below name | Medium |
| F-1.4  | Two CTA buttons: "View My Work" → Projects, "Contact Me" → Contact | High |
| F-1.5  | Minimal scroll-down indicator (thin animated line) | Low |

### 5.2 About Me (Bio)
| ID     | Requirement | Priority |
|--------|-------------|----------|
| F-2.1  | Professional bio (translated/adapted from CV): _"Profesional yang adaptif dan berorientasi pada hasil dengan pengalaman di bidang telekomunikasi serta teknologi informasi. Saat ini berkarier di PT iForte Solusi Infotek dengan tanggung jawab dalam pengelolaan infrastruktur jaringan, dukungan teknis, koordinasi proyek, serta memastikan kelancaran operasional dan implementasi layanan."_ | High |
| F-2.2  | Key info cards: Location (Bekasi, Indonesia), Email, Phone, LinkedIn | High |
| F-2.3  | Downloadable CV button (links to `CV egi update.pdf`) | High |

### 5.3 Education
| ID     | Requirement | Priority |
|--------|-------------|----------|
| F-3.1  | Education timeline with entries: | High |
|        | - **Universitas Bina Sarana Informatika** — Sistem Informasi (2023 - Present) | |
|        | - **Universitas Trisakti** — Teknik Elektro (2010 - 2011) | |
|        | - **Akademi Teknik Telekomunikasi** (2007 - 2009) | |
|        | - **SMK Telkom Sandhy Putra Jakarta** (2004 - 2007) | |
| F-3.2  | Clean vertical timeline with institution name, major, and year range | High |

### 5.4 Skills & Competencies
| ID     | Requirement | Priority |
|--------|-------------|----------|
| F-4.1  | Soft skills displayed as minimalist cards/badges: | High |
|        | - Initiative & Adaptability | |
|        | - Team Leadership & Management | |
|        | - Project Coordination | |
|        | - Problem Solving | |
|        | - Cross-team Collaboration | |
| F-4.2  | Technical skills section: | High |
|        | - Network Infrastructure Management | |
|        - Fiber Optic Planning & Implementation | |
|        | - Huawei BTS/Microwave/RTN Systems | |
|        | - NOC Operations & Monitoring | |
|        | - FTTH Project Management | |
|        | - Quality Assurance & ATP | |
| F-4.3  | Clean icon-based or badge-based layout (no progress bars) | Medium |

### 5.5 Work Experience
| ID     | Requirement | Priority |
|--------|-------------|----------|
| F-5.1  | Experience timeline (vertical, minimalist): | High |
|        | **Field Quality of Assurance — PT iForte Solusi Infotek** (2013 - Present) | |
|        | - NOC HBTS: Manage Service untuk SLA TT HBTS | |
|        | - HBTS Owner: Manage Service SLA TT Area Regional Jakarta Barat (Telkomsel & XL) | |
|        | - Planning Fiberisasi: Project Plan implementasi jalur Fiber Optik Nasional (XL, Indosat, H3I, Akses Protelindo, SmartFriend) | |
|        | - GTM IOH: Monitoring Project FTTH IOH | |
|        | - ATP Fisik FQA: Plan & koordinasi ATP fisik all area | |
|        | - Regional Migrasi Fiberisasi area Sumatra (XL & Huawei) | |
|        | **Field Engineer — PT Xerindo** (2012 - 2013) | |
|        | **Core Engineer — PT Ciptakom** (2011 - 2012) | |
|        | - Commissioning BTS3900A (Huawei), Integrasi E1 Nokia/NSN & Huawei RTN | |
|        | **Commissioning Project — Huawei Microwave** | |
|        | - Instalasi Antena Microwave, RTN, BTS3900A | |
| F-5.2  | Each entry: role, company, period, bullet-point responsibilities | High |
| F-5.3  | Expandable/collapsible details for long entries | Medium |

### 5.6 Projects / Key Achievements
| ID     | Requirement | Priority |
|--------|-------------|----------|
| F-6.1  | Card grid (2-3 columns) showcasing key project highlights: | High |
|        | - **Fiber Optic National Planning** — XL, Indosat, H3I, SmartFriend | |
|        | - **FTTH IOH Monitoring** — End-to-end FTTH project monitoring | |
|        | - **Regional Fiber Migration Sumatra** — XL & Huawei collaboration | |
|        | - **ATP Physical QA Dashboard** — WhatsApp BOT reminder system | |
|        | - **NOC HBTS Management** — SLA ticket management | |
|        | - **Huawei Microwave Commissioning** — Antenna & BTS installation | |
| F-6.2  | Each card: title, short description, tech/tools used, year | High |
| F-6.3  | Hover effect: subtle shadow elevation | Medium |

### 5.7 Certifications
| ID     | Requirement | Priority |
|--------|-------------|----------|
| F-7.1  | Section placeholder for certifications (to be updated with actual certs) | Medium |
| F-7.2  | Clean card/badge layout for each certification | Medium |

### 5.8 Contact
| ID     | Requirement | Priority |
|--------|-------------|----------|
| F-8.1  | Contact form (Name, Email, Message) with client-side validation | High |
| F-8.2  | Direct contact info display: | High |
|        | - Email: egimartha8@gmail.com | |
|        | - Phone: +6282213371848 | |
|        | - LinkedIn: linkedin.com/in/egi-martha-7865ba62 | |
|        | - Location: Bekasi, Indonesia | |
| F-8.3  | Social media icon links (LinkedIn, Email) | High |

### 5.9 Navigation
| ID     | Requirement | Priority |
|--------|-------------|----------|
| F-9.1  | Fixed/sticky top navigation bar — transparent, blur background | High |
| F-9.2  | Nav items: Home, About, Education, Skills, Experience, Projects, Contact | High |
| F-9.3  | Smooth scroll to sections | High |
| F-9.4  | Mobile-responsive hamburger menu (slide-in from right) | High |
| F-9.5  | Active section indicator (underline or dot) | Medium |
| F-9.6  | Nav shrinks on scroll | Low |

### 5.10 Footer
| ID     | Requirement | Priority |
|--------|-------------|----------|
| F-10.1 | Copyright: "© 2026 Egi Martha Rahmatullah Marlis" | Medium |
| F-10.2 | Minimal footer with back-to-top button | Low |
| F-10.3 | Tagline: "Semangat Dalam Bekerja, Ikhlas dan Bertanggung Jawab" | Medium |

### 5.11 Dark/Light Mode Toggle
| ID     | Requirement | Priority |
|--------|-------------|----------|
| F-11.1 | Toggle button (sun/moon icon) in navigation | Medium |
| F-11.2 | CSS variables for theme switching | Medium |
| F-11.3 | Save preference to localStorage | Low |

---

## 6. Non-Functional Requirements

| ID      | Requirement | Priority |
|---------|-------------|----------|
| NF-1    | Fully responsive (mobile-first, breakpoints: 480px, 768px, 1024px, 1200px) | High |
| NF-2    | Fast loading (< 2 seconds, minimal dependencies) | High |
| NF-3    | Cross-browser compatibility (Chrome, Firefox, Edge, Safari) | High |
| NF-4    | Semantic HTML5 and accessibility (alt texts, ARIA labels, keyboard nav) | Medium |
| NF-5    | SEO-friendly (meta tags, Open Graph, structured data) | Medium |
| NF-6    | No external JS frameworks — vanilla only for performance | Medium |
| NF-7    | Lighthouse score > 90 for Performance, Accessibility, Best Practices | Medium |

---

## 7. Site Structure

```
Single Page — All sections on one scrollable page
  ├── #home        (Hero)
  ├── #about       (About Me / Bio)
  ├── #education   (Education Timeline)
  ├── #skills      (Skills & Competencies)
  ├── #experience  (Work Experience Timeline)
  ├── #projects    (Key Projects / Achievements)
  ├── #certifications (Certifications placeholder)
  └── #contact     (Contact Form & Info)
```

---

## 8. Technology Stack

| Layer       | Technology |
|-------------|-----------|
| Structure   | HTML5 (semantic) |
| Styling     | CSS3 (CSS Variables, Flexbox, Grid) |
| Interactivity | Vanilla JavaScript (ES6+) |
| Icons       | Lucide Icons or Font Awesome CDN |
| Fonts       | Google Fonts (Inter, JetBrains Mono) |
| Server      | Apache (XAMPP) |

---

## 9. File Structure

```
web myself/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       └── profile.jpg      (placeholder)
├── CV egi update.pdf         (existing, for download)
└── PRD.md
```

---

## 10. Design References — Minimalist Inspiration

- **Layout**: Single column with max-width container (1200px), generous padding
- **Cards**: White cards with subtle `box-shadow: 0 1px 3px rgba(0,0,0,0.1)`, 8px border-radius
- **Timeline**: Thin vertical line (2px, accent color) with dot markers
- **Buttons**: Rounded (6px), accent color fill, subtle hover transitions
- **Spacing**: Section padding 80px vertical on desktop, 48px on mobile
- **Images**: Minimal borders, no heavy frames

---

## 11. Success Metrics

- Website loads successfully on all major browsers
- Fully navigable on mobile without horizontal scrolling
- All sections accessible via smooth-scroll navigation
- Contact form validates input correctly
- Lighthouse performance score > 90
- CV download button functions correctly

---

## 12. Future Enhancements (Out of Scope for v1)

- Blog/articles section
- Backend CMS for dynamic content
- Multi-language toggle (ID/EN)
- Google Analytics integration
- Testimonials/recommendations section
- Live project demos

---

## 13. Development Milestones

| Task | Description | Status |
|------|-------------|--------|
| Task 1 | Project setup — file structure, HTML skeleton with all sections | Pending |
| Task 2 | CSS styling — variables, responsive grid, typography, color palette | Pending |
| Task 3 | Navigation bar — sticky, blur effect, hamburger menu | Pending |
| Task 4 | Hero section — name, tagline, CTA buttons | Pending |
| Task 5 | About Me section — bio text, info cards, CV download | Pending |
| Task 6 | Education timeline section | Pending |
| Task 7 | Skills section — badge/card layout | Pending |
| Task 8 | Work Experience timeline with expandable details | Pending |
| Task 9 | Projects grid section | Pending |
| Task 10 | Certifications placeholder section | Pending |
| Task 11 | Contact section — form + contact info | Pending |
| Task 12 | Footer with back-to-top | Pending |
| Task 13 | Dark/Light mode toggle | Pending |
| Task 14 | Scroll animations, responsive testing, final polish | Pending |

---

*End of PRD Document — v1.1*
