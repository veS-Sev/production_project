export const getQueryParams = (params: OptionalRecord<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search)
  console.log('addQueryParams/window.location.search', window.location.search)
  console.log('addQueryParams/searchParams', searchParams)
  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParams.set(name, value)
    }
  })
  return `?${searchParams.toString()}`
}

export const addQueryParams = (params: OptionalRecord<string, string>) => {
  console.log('window.history', window.history)
  window.history.pushState('', '', getQueryParams(params))
}
