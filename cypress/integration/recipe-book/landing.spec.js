describe('Landing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
      })
    it('displays the title', () => {
        const title = 'My Recipe Book'
        cy.get('.pageheader')
        .should('contain.text', title)
    });
    it('displays the first recipe', () => {
        cy.get('.recipe .name')
        .should('contain.text', 'Chicken & Mushroom Soup')
    });
});