import { Article } from '@/entities/Article'

let currentArtilceId = ''
describe('Пользователь посещает страницу статьи', () => {
  beforeEach(() => {
    cy.login()
    cy.createArticle().then((article: Article) => {
      currentArtilceId = article.id
      cy.visit(`articles/${currentArtilceId}`)
    })
  })

  afterEach(() => {
    cy.removeArticle(currentArtilceId)
  })

  it('и видит содержание статьи', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist')
  })

  it('и видит список рекомендаций', () => {
    cy.getByTestId('ArticleRecomendationsList').should('exist')
  })
    it('и пишет коментарии', () => {
      cy.getByTestId('ArticleDetails.Info')
      cy.getByTestId('AddCommentForm').scrollIntoView()
      cy.addComment('text')
      cy.getByTestId('CommentCard.Content').should('have.length',1)
    })
  
      it('оценивает статью', () => {
        cy.getByTestId('ArticleDetails.Info')
        cy.getByTestId('RatingCard').scrollIntoView()
        cy.setRate(4,'feedback')
        cy.get('[data-selected=true]').should('have.length', 4)
      })
})

