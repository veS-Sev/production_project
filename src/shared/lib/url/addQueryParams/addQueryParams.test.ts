import { getQueryParams } from './addQueryParams'

describe('shared/lib/url/addQueryParams', function () {
  test('with one param', () => {
    const params = getQueryParams({ test: 'value' })
    expect(params).toBe('?test=value')
  })

  test('with multiply params', () => {
    const params = getQueryParams({ test: 'value', sort: 'asc' })
    expect(params).toBe('?test=value&sort=asc')
  })

  test('with undefined', () => {
    const params = getQueryParams(
      { test: 'value', sort: undefined }
    )
    expect(params).toBe('?test=value')
  })
})
