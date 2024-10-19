const PORT = process.env.PORT || 5500;

describe('BMI Calculator', function () {
    it('successfully loads', function () {
        cy.visit(`http://localhost:${PORT}`) // ändern Sie URL zu Ihrer App
    })
})

describe('Slider Integration Test', () => {
    const sliderSelector = '#weight';
    const inputSelector = '#weight_input';
  
    it('should update input field when slider value changes', () => {
      // Visit the page
      cy.visit(`http://localhost:${PORT}`);
  
      // Get the slider and input field
      cy.get(sliderSelector).as('slider');
      cy.get(inputSelector).as('inputField');
  
      // Change the slider value
      cy.get('@slider').invoke('val', 50).trigger('input');
  
      // Verify the input field value changes accordingly
      cy.get('@inputField').should('have.value', '50');
    });
  });

describe('BMI no Input Test', () => {
    it('should display "Bitte geben Sie gültige Werte ein." when no input', () => {
        cy.visit(`http://localhost:${PORT}`);
        cy.contains('BMI Berechnen').click();
        cy.get('#result').should('have.text', 'Bitte geben Sie gültige Werte ein.');
    });
});
