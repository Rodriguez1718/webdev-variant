/**
 * Parallax Scroll Animation for Hero Section
 * 
 * Effects:
 * - GROW: Fixed in place (no movement)
 * - Build: Fixed in place (no movement)
 * - Dominate: Fixed in place (no movement)
 * - Button/Content: Slow movement with scroll (0.4x speed)
 */

class HeroParallax {
  constructor() {
    this.elements = {
      grow: null,
      build: null,
      dominate: null,
      content: null
    };
    
    this.isDesktop = window.innerWidth >= 768;
    this.ticking = false;
    
    this.init();
  }

  init() {
    // Only run on desktop
    if (!this.isDesktop) return;
    
    // Get elements
    this.elements.grow = document.querySelector('.grow-text');
    this.elements.build = document.querySelector('.slide-in-left');
    this.elements.dominate = document.querySelector('.slide-in-right');
    this.elements.content = document.querySelector('.animate-slide-in-left')?.parentElement;
    
    // Check if elements exist
    if (!this.elements.grow || !this.elements.build || !this.elements.dominate) {
      console.warn('Hero parallax elements not found');
      return;
    }
    
    // Bind scroll event
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    
    // Handle resize
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth >= 768;
      if (!this.isDesktop) {
        this.resetTransforms();
      }
    });
  }

  handleScroll() {
    if (!this.isDesktop || this.ticking) return;
    
    this.ticking = true;
    requestAnimationFrame(() => {
      this.updateParallax();
      this.ticking = false;
    });
  }

  updateParallax() {
    const scrollY = window.pageYOffset;
    const heroHeight = window.innerHeight;
    
    // Only apply parallax while hero is visible
    if (scrollY > heroHeight) return;
    
    // Calculate parallax offset - only for content
    const contentOffset = scrollY * 0.4; // Slow movement for content only
    
    // Apply transforms
    // GROW, Build, and Dominate stay fixed (no transforms applied)
    
    // Only content moves with parallax effect
    const heroContent = document.getElementById('hero-content');
    if (heroContent) {
      heroContent.style.transform = `translateY(${contentOffset}px)`;
    }
  }

  resetTransforms() {
    // Reset content transform only
    const heroContent = document.getElementById('hero-content');
    
    if (heroContent) {
      heroContent.style.transform = '';
    }
  }

  destroy() {
    window.removeEventListener('scroll', this.handleScroll);
    this.resetTransforms();
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Small delay to ensure all elements are rendered
  setTimeout(() => {
    new HeroParallax();
  }, 100);
});

// Export for potential external use
window.HeroParallax = HeroParallax;