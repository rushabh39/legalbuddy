# LegalBuddy ⚖️

> **Your Trusted Transatlantic Legal Companion**  
> A premium, dual-jurisdiction legal blog and resource hub specifically tailored for American & British entrepreneurs, counsels, and cross-border businesses.

---

## 🌟 Highlights & Features

- **White & Red Editorial Aesthetics**: Elegant typography (`Plus Jakarta Sans` & `Outfit`), crimson and ruby red accents (`#D90429`, `#8D0801`), crisp cards, smooth hover micro-interactions, and a responsive modern layout.
- **Transatlantic Dual Jurisdiction**: Dedicated comparison markers between **🇺🇸 United States** (Federal & State statutes) and **🇬🇧 United Kingdom** (English & Welsh Common Law).
- **3 Comprehensive In-Depth Legal Articles**:
  1. **Data Privacy & Tech**: *GDPR vs. CCPA / CPRA: Navigating Cross-Border Data Privacy for US & UK Businesses*
  2. **Corporate & Commercial**: *Starting a Business in the US vs. UK: Delaware LLC vs. UK Ltd Company Formation & Liabilities*
  3. **Employment & Labor**: *Employment Contracts Across the Atlantic: US "At-Will" Doctrine vs. UK Statutory Worker Protections*
- **Interactive Multi-Page Architecture**:
  - `index.html`: Hero with dynamic comparison matrix, key transatlantic metrics, filterable blog cards, trust badges, and newsletter dispatch.
  - `blog.html`: Dedicated archive with instant live search and multi-discipline filtering.
  - `about.html`: Legal mission, editorial review board, and contributor profiles (Solicitors, Attorneys, Barristers).
  - `contact.html`: Transatlantic consultation & topic submission form with instant feedback toast notifications and office bureaus (New York & London).
  - `disclaimer.html`: Full Attorney-Client disclaimer and transatlantic GDPR / CCPA privacy disclosures.
  - `article-data-privacy.html`, `article-us-uk-business.html`, `article-employment-law.html`: Dedicated standalone reading pages with reading progress indicators.

---

## 🚀 Getting Started

No build step or heavy dependencies required. The site is built with pure, semantic HTML5, modern Vanilla CSS, and lightweight vanilla JavaScript.

### Running Locally

Simply open `index.html` in any modern web browser, or run a local lightweight HTTP server:

```bash
# Using Python 3:
python -m http.server 8000

# Using Node npx:
npx serve .
```

Open `http://localhost:8000` in your browser.

---

## 📁 Repository Structure

```
legalbuddy/
├── index.html                   # Homepage with hero, comparisons & featured articles
├── blog.html                    # Blog archive with live search & filters
├── about.html                   # Mission, editorial board & bar admissions
├── contact.html                 # Inquiry form with validation & transatlantic offices
├── disclaimer.html              # Legal & Attorney-client relationship disclaimer
├── article-data-privacy.html    # In-depth guide 1: GDPR vs. CCPA
├── article-us-uk-business.html  # In-depth guide 2: Delaware LLC vs UK Ltd
├── article-employment-law.html  # In-depth guide 3: US At-Will vs UK Worker Rights
├── css/
│   └── style.css                # Premium White & Red design system
├── js/
│   ├── articles-data.js         # Structured data for dynamic search & filtering
│   └── main.js                  # Navigation, search, filter, toast & reading progress
├── .gitignore                   # Standard git exclusions
└── README.md                    # Project documentation
```

---

## ⚖️ Legal Notice

*LegalBuddy is an educational publication. The materials on this site do not constitute legal advice and do not establish an attorney-client or solicitor-client relationship under US State Bar or UK SRA standards.*
