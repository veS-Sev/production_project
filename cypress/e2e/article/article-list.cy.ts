describe('Пользователь заходит на страницу со списком статей', () => {
  beforeEach(() => {
    cy.login().then(() => cy.visit('articles'))

  })
  it('список успешно подгружается', () => {
    cy.getByTestId('ArticleList').should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })

  it('список успешно подгружается. Пример со стабом на фикстурах', () => {
      cy.intercept('GET','**/atricles?*', {fixture:'articles.json'})
      cy.getByTestId('ArticleList').should('exist')
      cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
    })
})