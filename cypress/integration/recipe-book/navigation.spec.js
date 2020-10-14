describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get(".next-arrow").click();
  });
  it("should navigate right on click", () => {
    cy.get(".recipe .dishtype").should("contain.text", "Main Dish");
  });
  it("displays the second recipe", () => {
    cy.get(".recipe .name").should(
      "contain.text",
      "Mexican Cauliflower Rice Skillet (Keto)"
    );
  });
  it("displays ingredients title", () => {
    cy.get(".recipe .ingredients-title").should("contain.text", "Ingredients");
  });
  it("displays ingredients", () => {
    cy.get(".recipe .ingredients").should("contain.text", "1 lb ground beef");
  });
  it("displays instructions title", () => {
    cy.get(".recipe .instructions-title").should("contain.text", "Instructions");
  });
  it("displays instructions", () => {
    cy.get(".recipe .instructions").should(
      "contain.text",
      "In a large skillet over medium heat"
    );
  });
  it("displays left navigational arrow as black", () => {
    cy.get(".prev-arrow").should(($image) => {
      expect($image).to.have.css("opacity", "1");
    });
  });
  it("displays right navigational arrow as black", () => {
    cy.get(".next-arrow").should(($image) => {
      expect($image).to.have.css("opacity", "1");
    });
  });
});
