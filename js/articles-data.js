const BLOG_ARTICLES = [
  {
    id: "gdpr-vs-ccpa",
    slug: "article-data-privacy.html",
    title: "GDPR vs. CCPA / CPRA: Navigating Cross-Border Data Privacy for US & UK Businesses",
    excerpt: "A tactical compliance guide for SaaS founders and digital merchants handling UK/EU citizen data and US consumer privacy. Understand consent mechanisms, opt-outs, and enforcement penalties.",
    category: "Data Privacy & Cyber Law",
    categorySlug: "privacy",
    jurisdiction: "Transatlantic (US & UK)",
    jurisdictionCode: "both",
    jurisdictionBadgeClass: "badge-both",
    jurisdictionFlags: "🇺🇸 🇬🇧",
    author: "Eleanor Vance, Solicitor",
    authorRole: "Tech & Privacy Counsel, London",
    date: "October 24, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    keyTakeaway: "While the UK GDPR enforces strict 'opt-in' prior consent before tracking, US regulations under CCPA/CPRA focus heavily on 'opt-out' rights (Do Not Sell/Share My Info) and sensitive data governance."
  },
  {
    id: "us-llc-vs-uk-ltd",
    slug: "article-us-uk-business.html",
    title: "Starting a Business in the US vs. UK: Delaware LLC vs. UK Ltd Company Formation & Liabilities",
    excerpt: "Expanding across the pond? Deciding between an American Delaware LLC and an English Private Limited Company (Ltd) involves fundamental differences in pass-through taxation, corporate veil protection, and filing duties.",
    category: "Corporate & Commercial",
    categorySlug: "corporate",
    jurisdiction: "Transatlantic (US & UK)",
    jurisdictionCode: "both",
    jurisdictionBadgeClass: "badge-both",
    jurisdictionFlags: "🇺🇸 🇬🇧",
    author: "Harrison Reed, Esq.",
    authorRole: "Cross-Border Corporate Attorney, NYC",
    date: "November 02, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    keyTakeaway: "Delaware LLCs offer immense contractual flexibility and pass-through partnership tax, whereas UK Ltd companies require strict statutory officer disclosures at Companies House and standardized 19-25% corporation tax."
  },
  {
    id: "employment-law-us-uk",
    slug: "article-employment-law.html",
    title: "Employment Contracts Across the Atlantic: US 'At-Will' Doctrine vs. UK Statutory Worker Protections",
    excerpt: "Hiring remote staff or opening a regional office? Compare the American standard of at-will termination and non-compete clauses against the UK Employment Rights Act, mandatory notice periods, and unfair dismissal safeguards.",
    category: "Employment & Labor",
    categorySlug: "employment",
    jurisdiction: "Transatlantic (US & UK)",
    jurisdictionCode: "both",
    jurisdictionBadgeClass: "badge-both",
    jurisdictionFlags: "🇺🇸 🇬🇧",
    author: "Alistair Finch, Barrister",
    authorRole: "Senior Employment Consultant, London",
    date: "November 05, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    keyTakeaway: "In the United States, employees may be terminated at any time without statutory notice unless contractually negotiated, whereas in the UK, employees gain extensive statutory unfair dismissal rights and mandatory minimum notice after qualifying periods."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BLOG_ARTICLES };
}
