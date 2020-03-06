const key = 'userState'

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(key)

    if (serializedState === null) {
      return undefined
    }

    return JSON.parse(serializedState)
  } catch (err) {
    return undefined    
  }
}

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(key, serializedState)
  } catch (err) {
    
  }
}

const localStorageMiddleware = store => next => action => {
  next(action)

  const { user } = store.getState()
  saveState(user)
}

export default localStorageMiddleware