let profileId=''
describe('Редактирование профиля', () => {
  beforeEach(() => {
    cy.visit('')
    cy.login().then((data) => {
      cy.visit(`profile/${data.id}`)
      profileId = data.id
    })
   
  })
  afterEach(() => {
     cy.resetProfile(profileId)
  })
  it('Успешно загружен профиль', () => {
 cy.getByTestId('EditableProfileCard.Firstname').should(
   'have.value',
   'testUserName'
 )
  })
  it('Пользователь редактирует профиль', () => {
    const newFirstname = 'newFirstname'
    const newLastname = 'newLastname'
    cy.updateProfile(newFirstname, newLastname)
    cy.getByTestId('EditableProfileCard.Firstname').should('have.value',newFirstname)
    cy.getByTestId('EditableProfileCard.Lastname').should('have.value',newLastname)
    })
})