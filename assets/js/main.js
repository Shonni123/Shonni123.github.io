document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq__item');
  
  faqItems.forEach(item => {
    const toggle = item.querySelector('.faq__toggle');
    const question = item.querySelector('.faq__question');
    
    function toggleFaq() {
      // Закрываем все другие открытые вопросы
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Открываем/закрываем текущий
      item.classList.toggle('active');
    }
    
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleFaq();
    });
    
    question.addEventListener('click', toggleFaq);
  });
});