import * as api from './index'
import { mockFetch } from '../testUtils'

describe('#API', () => {
  const data = { user : "Eduard" }
  beforeAll(() => {
    mockFetch(data)
  })

  it('getUsers()', async () => {
    const response = await api.getUsers()
    expect(response.data).toEqual(data)
  })

  it('getUser()', async () => {
    const response = await api.getUser("paco")
    expect(response.params).toEqual('/data/users/paco.json')
    expect(response.data).toEqual(data)
  })

  it('getUsers()', async () => {

  })

  it('getUser()', async () => {

  })
})