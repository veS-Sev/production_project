import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage'
import { type User } from '../../../src/entities/User'
import { selectByTestId } from 'cypress/helpers/selectByTestId';



export const updateProfile = (firstname: string, lastname:string) => {
  cy.getByTestId('EditableProfileHeader.EditButton').click()
  cy.getByTestId('EditableProfileCard.Firstname').clear().type(firstname)
  cy.getByTestId('EditableProfileCard.Lastname').clear().type(lastname)
   cy.getByTestId('EditableProfileHeader.SaveButton'
   ).click()
}

export const resetProfile = (
  profileId: string
) => {
return  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers:{Authorization:'asda'},
    body: {
      id: '4',
      firstname: 'testUserName',
      lastname: 'testUserLastname',
      username: 'testUser',
      currency: 'RUB',
      avatar:
        'https://i.pinimg.com/originals/d2/60/35/d260355157095d3552efa64fbd893a3d.jpg',
      city: 'Venera',
      age: 45,
      country: 'Russia',
    },
  })
}


declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>
      resetProfile(profileId: string): Chainable<void>
    }
  }
}