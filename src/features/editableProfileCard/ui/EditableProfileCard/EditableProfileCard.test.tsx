import { fireEvent, screen } from '@testing-library/react'
import { EditableProfileCard } from './EditableProfileCard'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { profileReducer } from '../../model/slice/profileSlice'
import userEvent from '@testing-library/user-event'
import { $api } from 'shared/api'

const profile = {
  id: '1',
  firstname: 'Fifa',
  lastname: 'Cool',
  username: 'admin',
  currency: Currency.RUB,
  avatar: '',
  city: 'Norilsk',
  age: 98,
  country: Country.RUS
}

const options = {
  initialState: {
    profile: {
      data: profile,
      form: profile,
      readonly: true
    },
    user: {
      authData: {
        id: '1',
        username: 'admin'
      }
    }
  },
  asyncReducers: {
    profile: profileReducer
  }
}
describe('features/EditableProfileCard', () => {
  test('Remove the readonly mode', async () => {
    componentRender(<EditableProfileCard id={'1'} />, options)
    await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'))

    expect(screen.getByTestId('EditableProfileHeader.SaveButton')).toBeInTheDocument()
  })

  test('when cancelled, the values return to their original state.', async () => {
    componentRender(<EditableProfileCard id={'1'} />, options)
    await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'))
    await userEvent.clear(screen.getByTestId('EditableProfileCard.Firstname'))
    await userEvent.clear(screen.getByTestId('EditableProfileCard.Lastname'))

    await userEvent.type(screen.getByTestId('EditableProfileCard.Firstname'), 'Pupkin')
    await userEvent.type(screen.getByTestId('EditableProfileCard.Lastname'), 'Lalala')

    expect(screen.getByTestId('EditableProfileCard.Firstname')).toHaveValue('Pupkin')
    expect(screen.getByTestId('EditableProfileCard.Lastname')).toHaveValue('Lalala')

    await userEvent.click(screen.getByTestId('EditableProfileHeader.CancelButton'))

    expect(screen.getByTestId('EditableProfileCard.Firstname')).toHaveValue('Fifa')
    expect(screen.getByTestId('EditableProfileCard.Lastname')).toHaveValue('Cool')
  })

  test('error when saving an empty field', async () => {
    componentRender(<EditableProfileCard id={'1'} />, options)
    await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'))
    await userEvent.clear(screen.getByTestId('EditableProfileCard.Firstname'))

    await userEvent.click(screen.getByTestId('EditableProfileHeader.SaveButton'))

    expect(screen.getByTestId('EditableProfileCard.Error.paragraph')).toBeInTheDocument()
  })

  test('if there are no validation errors, a happents PUT request', async () => {
    const mockApi = jest.spyOn($api, 'put')
    componentRender(<EditableProfileCard id={'1'} />, options)

    await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'))
    await userEvent.type(screen.getByTestId('EditableProfileCard.Firstname'), 'Pupkin')

    await userEvent.click(screen.getByTestId('EditableProfileHeader.SaveButton'))

    expect(mockApi).toHaveBeenCalled()
  })
})
