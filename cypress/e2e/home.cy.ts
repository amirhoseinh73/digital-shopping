describe("Homepage", function () {
  it("passes", () => {
    cy.visit("/")

    cy.get("h1").contains("Digital Shopping")

    cy.get("#numbers")
      .type("3,4,5")
      .then(() => {
        cy.get("button.bg-amber-900")
          .click()
          .then(() => {
            cy.get("#result_sum").get("abbr").contains(12)

            cy.get("#result_sub > abbr").contains(-6)
          })
      })
  })
})
