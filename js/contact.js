document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('customForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Form validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      
      if (!name || !email) {
        alert('Please fill in all required fields.');
        return;
      }
      
      // Form submission logic would go here
      // For demo purposes, we'll just show an alert
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
  
  // Enhance phone number links for mobile devices
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  phoneLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Analytics or tracking could be added here
      console.log('Phone number clicked: ' + this.getAttribute('href'));
    });
  });
});