describe("CRUD", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  describe("create", () => {
    it("opens modal to add recipe", () => {
      cy.get(".plus-circle").click();
    });
  });

  describe("edit", () => {
    beforeEach(() => {
        cy.get(".pencil").click();
    });
    it("displays the recipe name", () => {
      cy.get(".edit-recipe .edit-name").should(
        "have.value",
        "Creamy Tuscan Garlic Chicken (Keto)"
      );
    });
    it("displays the recipe type", () => {
      cy.get(".edit-recipe .edit-dishtype").should('have.value', "Main");
    });
    it("displays ingredients", () => {
      cy.get(".edit-recipe .edit-ingredients").should(
        "contain.value",
        "1½ pounds boneless skinless chicken breasts"
      );
    });
    it("displays instructions", () => {
      cy.get(".edit-recipe .edit-instructions").should(
        "contain.value",
        "In a large skillet add olive oil"
      );
    });
    it("allows the recipe title to be changed", () => {
      cy.get(".edit-recipe .edit-name").type("Chocolate Cake");
      cy.get(".edit-submit").click();
      cy.get('.recipe .name')
        .should('contain.text', 'Chocolate Cake')
    });
  });

  describe("delete", () => {
    beforeEach(() => {
        cy.get(".trash").click();
    });
    it("opens modal with delete prompt ", () => {
      cy.get('.overlay .content').should('be.visible')
    });
    it('closes the modal', () => {
        cy.get('.noBtn').click();
        cy.get('.recipe .name')
        .should('contain.text', 'Creamy Tuscan Garlic Chicken (Keto)');
    });
    it('closes the modal', () => {
        cy.get('.exit-icon').click();
        cy.get('.recipe .name')
        .should('contain.text', 'Creamy Tuscan Garlic Chicken (Keto)');
    });
    it('deletes the recipe on selecting yes', () => {
        cy.get('.yesBtn').click();
        cy.get('.recipe .name')
        .should('contain.text', 'Mexican Cauliflower Rice Skillet (Keto)');
    });
  });
});
