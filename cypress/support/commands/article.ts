import { selectByTestId } from 'cypress/helpers/selectByTestId'
import { Article } from '@/entities/Article'

const defaultArticle = {
  title: 'Javascript news',
  subtitle: 'Что нового в E2E тестах в 2025 году?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '04.08.2025',
  userId: '1',
  type: ['IT'],
  blocks: [],
}

export const createArticle = (article: Article) => {
  return cy.request({
    method: 'POST',
    url: `http://localhost:8000/articles`,
    headers: { Authorization: 'asda' },
    body: article ?? defaultArticle,
  })
  // достаем из response body
    .then((res) => res.body)
}

export const removeArticle = (articleId:string) => {
 return cy.request({
     method: 'DELETE',
     url: `http://localhost:8000/articles/${articleId}`,
     headers: { Authorization: 'asda' },
   })
}

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: string): Chainable<Article>
      removeArticle(articleId: string): Chainable<void>
    }
  }
}
