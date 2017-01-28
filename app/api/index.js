import es6promise from 'es6-promise'
import 'isomorphic-fetch'

es6promise.polyfill()

export const getUsers = () => (
  fetch('/data/users.js', {
    method: 'get'
  }).then((response) => {
    return response.json()
  })
)

export const getUser = (username) => (
  fetch(`/data/users/${username}.json`, {
    method: 'get'
  }).then((response) => {
    return response.json()
  })
)

export const getWorkshops = () => (
  fetch('/data/workshops.js', {
    method: 'get'
  }).then((response) => {
    return response.json()
  })
)

export const getWorkshop = (workshop) => (
  fetch(`/data/workshops/${workshop}.json`, {
    method: 'get'
  }).then((response) => {
    return response.json()
  })
)