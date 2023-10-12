const PORT = process.env.PORT || 5500;

describe('BMI Calculator', function () {
    it('successfully loads', function () {
        cy.visit(`http://localhost:${PORT}`) // ändern Sie URL zu Ihrer App
    })
})