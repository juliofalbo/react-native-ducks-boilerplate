import * as registerTypes from './types'

export const update = registerUpdate => ({
  type: registerTypes.UPDATE,
  registerUpdate
})

export const loading = () => ({
  type: registerTypes.LOADING
})

export const error = message => ({
  type: registerTypes.ERROR,
  message
})
