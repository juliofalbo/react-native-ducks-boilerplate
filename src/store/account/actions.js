import * as accountTypes from './types'

export const receive = account => ({
  type: accountTypes.RECEIVE,
  account
})

export const update = accountUpdate => ({
  type: accountTypes.UPDATE,
  accountUpdate
})

export const reset = () => ({
  type: accountTypes.RESET
})

export const loading = () => ({
  type: accountTypes.LOADING
})

export const error = message => ({
  type: accountTypes.ERROR,
  message
})
