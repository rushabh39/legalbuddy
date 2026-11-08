document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // 2. Reading Progress Bar for article pages
  const progressBar = document.getElementById('reading-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / docHeight) * 100;
      progressBar.style.width = scrolled + '%';
    });
  }

  // 3. Blog List Rendering & Filtering (for index & blog.html)
  const articlesContainer = document.getElementById('articles-grid');
  const filterPills = document.querySelectorAll('.filter-pill');
  const searchInput = document.getElementById('blog-search');

  if (articlesContainer && typeof BLOG_ARTICLES !== 'undefined') {
    let currentFilter = 'all';
    let searchQuery = '';

    function renderArticles() {
      const filtered = BLOG_ARTICLES.filter(item => {
        const matchesCategory = currentFilter === 'all' || 
          item.categorySlug === currentFilter || 
          item.jurisdictionCode === currentFilter;

        const matchesQuery = !searchQuery || 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesQuery;
      });

      if (filtered.length === 0) {
        articlesContainer.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">⚖️</div>
            <h3 style="color: var(--text-main); margin-bottom: 0.5rem;">No legal articles found</h3>
            <p style="color: var(--text-light); max-width: 450px; margin: 0 auto;">
              Try modifying your search or switching jurisdictions between US, UK, or Transatlantic.
            </p>
          </div>
        `;
        return;
      }

      articlesContainer.innerHTML = filtered.map(article => `
        <article class="blog-card" data-category="${article.categorySlug}" data-jurisdiction="${article.jurisdictionCode}">
          <div class="blog-card-media" style="background-image: url('${article.image}')">
            <div class="media-overlay">
              <span style="color: #fff; font-size: 0.8rem; font-weight: 600; opacity: 0.95;">
                ${article.jurisdictionFlags} ${article.jurisdiction}
              </span>
            </div>
            <div class="blog-card-badge-box">
              <span class="badge ${article.jurisdictionBadgeClass}">${article.category}</span>
            </div>
          </div>
          <div class="blog-card-content">
            <div class="blog-card-meta">
              <span>📅 ${article.date}</span>
              <span>•</span>
              <span>⏱️ ${article.readTime}</span>
            </div>
            <h3 class="blog-card-title">
              <a href="${article.slug}">${article.title}</a>
            </h3>
            <p class="blog-card-excerpt">
              ${article.excerpt}
            </p>
            <div class="blog-card-footer">
              <div class="author-mini">
                <div class="author-avatar">${article.author.charAt(0)}</div>
                <div>
                  <div style="font-weight: 700; color: var(--text-main); font-size: 0.82rem;">${article.author}</div>
                  <div style="font-size: 0.72rem; color: var(--text-light);">${article.authorRole}</div>
                </div>
              </div>
              <a href="${article.slug}" class="read-more-link" title="Read full legal analysis">
                Read Analysis ➔
              </a>
            </div>
          </div>
        </article>
      `).join('');
    }

    renderArticles();

    // Event listeners for filter pills
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentFilter = pill.getAttribute('data-filter');
        renderArticles();
      });
    });

    // Event listener for search
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderArticles();
      });
    }
  }

  // 4. Newsletter form submission
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast(`🎉 Thank you for subscribing! Transatlantic legal briefings will be sent to ${input.value}.`);
        input.value = '';
      }
    });
  });

  // 5. Contact / Inquiry Form submission
  const contactForm = document.getElementById('legal-inquiry-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('inquiry-name')?.value || 'Client';
      const jurisdiction = document.getElementById('inquiry-jurisdiction')?.value || 'Transatlantic';
      showToast(`⚖️ Thank you, ${name}! Your transatlantic inquiry (${jurisdiction}) has been routed to our editorial advisory team.`);
      contactForm.reset();
    });
  }

  // 6. Generic Toast Function
  function showToast(message) {
    let toast = document.getElementById('app-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-toast';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span>${message}</span>`;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // Expose toast if needed
  window.showLegalBuddyToast = showToast;
});
