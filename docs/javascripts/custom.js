/**
 * A&R Admin Boot Camp - Custom JavaScript
 * Enhances interactivity and user experience
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize smooth scrolling for anchor links
  initializeSmoothScroll();
  
  // Add animation observer for cards
  initializeCardAnimations();
  
  // Track popular sections
  trackSectionViews();
  
  // Add search chip functionality
  initializeSearchChips();
});

/**
 * Smooth scroll for anchor links
 */
function initializeSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

/**
 * Animate cards as they come into view
 */
function initializeCardAnimations() {
  const cards = document.querySelectorAll(
    '.stat-card, .learning-card, .dashboard-card, .orientation-panel'
  );
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });
  }
}

/**
 * Track which sections users view
 */
function trackSectionViews() {
  const sections = document.querySelectorAll('h2');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionName = entry.target.textContent;
        // Could be used for analytics
        console.log('Viewing section:', sectionName);
      }
    });
  }, {
    threshold: 0.5
  });
  
  sections.forEach(section => {
    observer.observe(section);
  });
}

/**
 * Make search chips clickable for quick navigation
 */
function initializeSearchChips() {
  const chips = document.querySelectorAll('.search-chip');
  
  chips.forEach(chip => {
    chip.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href) {
        window.location.href = href;
      }
    });
    
    // Add keyboard accessibility
    chip.setAttribute('role', 'button');
    chip.setAttribute('tabindex', '0');
    
    chip.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });
}

/**
 * Add copy-to-clipboard functionality for code blocks
 */
function initializeCodeCopy() {
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach(block => {
    const button = document.createElement('button');
    button.className = 'code-copy-btn';
    button.textContent = 'Copy';
    button.style.position = 'absolute';
    button.style.top = '0.5rem';
    button.style.right = '0.5rem';
    button.style.padding = '0.5rem 1rem';
    button.style.backgroundColor = '#d4af37';
    button.style.color = '#0a0a0a';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';
    button.style.fontSize = '0.85rem';
    button.style.fontWeight = '600';
    
    const pre = block.parentElement;
    pre.style.position = 'relative';
    pre.appendChild(button);
    
    button.addEventListener('click', function() {
      const text = block.textContent;
      navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      });
    });
  });
}

/**
 * Enhance keyboard navigation
 */
function initializeKeyboardNavigation() {
  document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K for search (optional)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const searchBox = document.querySelector('.md-search__input');
      if (searchBox) {
        searchBox.focus();
      }
    }
  });
}

// Run initialization functions
initializeCodeCopy();
initializeKeyboardNavigation();

// Log that the script loaded successfully
console.log('A&R Admin Boot Camp custom scripts loaded');
