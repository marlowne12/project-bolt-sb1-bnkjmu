document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('assessmentForm');
  let currentStep = 1;
  
  form.addEventListener('change', (e) => {
    const target = e.target;
    
    if (target.id === 'budget' && target.value !== '') {
      showStep(2);
    }
    
    if (target.id === 'goals' && target.value !== '') {
      showStep(3);
    }
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const budget = form.budget.value;
    const goals = form.goals.value;
    
    // Generate personalized recommendations
    const recommendation = generateRecommendation(budget, goals);
    
    // Display the recommendation
    displayRecommendation(recommendation);
  });
  
  function showStep(step) {
    currentStep = step;
    document.querySelectorAll('.form-step').forEach((stepDiv) => {
      stepDiv.style.display = 'none';
    });
    document.querySelector(`.form-step[data-step="${step}"]`).style.display = 'block';
  }
  
  function generateRecommendation(budget, goals) {
    // Simple logic for demonstration
    if (budget === '2-5k' && goals === 'brand-awareness') {
      return 'Consider investing in Social Media Marketing to increase your brand visibility.';
    } else if (budget === '5-10k' && goals === 'lead-generation') {
      return 'Our SEO Services can help drive targeted traffic and generate quality leads.';
    } else if (budget === '10k+' && goals === 'sales') {
      return 'A combination of PPC Advertising and Conversion Rate Optimization will maximize your sales.';
    } else {
      return 'Contact us for a customized marketing strategy tailored to your needs.';
    }
  }
  
  function displayRecommendation(message) {
    const recommendationSection = document.createElement('section');
    recommendationSection.classList.add('recommendation');
    recommendationSection.innerHTML = `<h3>Your Recommended Strategy</h3><p>${message}</p>`;
    form.parentNode.appendChild(recommendationSection);
  }
}); 