describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get(".nextArrow").click();
  });
  it("displays the title", () => {
    const title = "My Recipe Book";
    cy.get(".pageheader").should("contain.text", title);
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
    cy.get(".recipe .ingredientsTitle").should("contain.text", "Ingredients");
  });
  it("displays ingredients", () => {
    cy.get(".recipe .ingredients").should("contain.text", "1 lb ground beef");
  });
  it("displays instructions title", () => {
    cy.get(".recipe .instructionsTitle").should("contain.text", "Instructions");
  });
  it("displays instructions", () => {
    cy.get(".recipe .instructions").should(
      "contain.text",
      "In a large skillet over medium heat"
    );
  });
  it("displays left navigational arrow as black", () => {
    cy.get(".prevArrow").should(($image) => {
      expect($image).to.have.css("opacity", "1");
    });
  });
  it("displays right navigational arrow as black", () => {
    cy.get(".nextArrow").should(($image) => {
      expect($image).to.have.css("opacity", "1");
    });
  });
});
