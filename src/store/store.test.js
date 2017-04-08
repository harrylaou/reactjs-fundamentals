import configureStore from './index'

test('Store: gets default State', () => {
  const initialState = { user: 'Paco' }
  const store = configureStore(initialState)

  expect(store.getState()).toEqual({
    session: {
      token: undefined,
    },
    user: "Paco",
    users: [],
    workshop: null,
    workshops: []
  })
})