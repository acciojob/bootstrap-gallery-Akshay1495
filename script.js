    // Check for at least six cards and implement lightbox effect
    cy.get('.card').should('have.length.at.least', 6).each(($card) => {
      cy.wrap($card).within(() => {
        cy.get('.card-body').should('exist');
        cy.get('img').click();
        cy.get('.modal-dialog').should('exist');
        cy.get('[data-dismiss="modal"]').click();
      });
    });

    // Check for exactly six images, headings, and paragraphs within the cards
    cy.get('.card').should('have.length.at.least', 6).each(($card) => {
      cy.wrap($card).within(() => {
        cy.get('img').should('have.length', 1);
        cy.get('h6').should('have.length', 1);
        cy.get('p').should('have.length', 1);
      });
    });
  });
});
