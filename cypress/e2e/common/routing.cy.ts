import { selectByTestId } from "cypress/helpers/selectByTestId"
describe('Пользователь НЕ авторизован', () => {
  it('переход открывает главную страницу', () => {
    cy.visit('/')
    cy.get('[data-testid=MainPage]').should('exist')
  })
    it('переход на страницу профиля', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('MainPage')).should('exist')
    })
  
      it('переход на несуществующую страницу', () => {
      cy.visit('/asdasd')
      cy.get(selectByTestId('NotFoundPage')).should('exist')
    })
})

describe('Пользователь авторизован', () => {
          beforeEach(() => {
            cy.login('testUser', '123')
          })
  it('переход на страницу профиля', () => {
      cy.visit('/profile/1')
      cy.get(selectByTestId('ProfilePage')).should('exist')
  })
  
    it('переход к списку статей', () => {
      cy.visit('/articles')
      cy.get(selectByTestId('ArticlesPage')).should('exist')
    })
})