describe('Landing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
      })
    it('displays the first recipe', () => {
        cy.get('.recipe .name')
        .should('contain.text', 'Creamy Tuscan Garlic Chicken (Keto)')
    });
    it('displays the recipe type', () => {
        cy.get('.recipe .dishtype')
        .should('contain.text', 'Main Dish')
    });
    it('displays ingredients title', () => {
        cy.get('.recipe .ingredients-title')
        .should('contain.text', 'Ingredients')
    });
    it('displays ingredients', () => {
        cy.get('.recipe .ingredients')
        .should('contain.text', '1½ pounds boneless skinless chicken breasts')
    });
    it('displays instructions title', () => {
        cy.get('.recipe .instructions-title')
        .should('contain.text', 'Instructions')
    });
    it('displays instructions', () => {
        cy.get('.recipe .instructions')
        .should('contain.text', 'In a large skillet add olive oil')
    });
    it('displays left navigational arrow as gray', () => {
        cy.get('.prev-arrow')
        .should(($image) => {
            expect($image).to.have.css('opacity', '0.1')
        })
    });
    it('displays right navigational arrow as black', () => {
        cy.get('.next-arrow')
        .should(($image) => {
            expect($image).to.have.css('opacity', '1')
        })
    });
});