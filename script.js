document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('currentYear').textContent = new Date().getFullYear();
  
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
  
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('hidden');
        this.classList.toggle('active');
      });
    }
  
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
      animatedElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('visible');
        }
      });
    }
    
    checkScroll();
    
    window.addEventListener('scroll', checkScroll);
    
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const phoneNumber = '9934863299';
      
        const message = 'Hola, estoy interesado en sus servicios de soporte técnico.';

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
      });
    }
  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
          
          if (!mobileNav.classList.contains('hidden')) {
            mobileNav.classList.add('hidden');
            mobileMenuBtn.classList.remove('active');
          }
        }
      });
    });

    const animatedButtons = document.querySelectorAll('.btn-animated');
    
    animatedButtons.forEach(btn => {
      btn.addEventListener('mouseenter', function(e) {
        const x = e.clientX - this.getBoundingClientRect().left;
        const y = e.clientY - this.getBoundingClientRect().top;
        
        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  });
  