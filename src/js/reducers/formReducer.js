import initialState from './initialState'

const addArticleFormReducer = (state = initialState.addArticleForm, action) => {
  // console.log(state);
  switch(action.type) {
    case "UPDATE_FORM":
      switch(action.data.name) {
        case 'title':
          return Object.assign({},state , {title: action.data.value})
      }
    case 'CLEAR_FORM':
    console.log(":CEAR FORM ", initialState)
      return Object.assign({}, state, {title: ''})
    default:
      return state
  } 
}



const clearForm = (state) => {
  const newObject = {}
  Object
    .keys(state)
    .forEach(key => {
      newObject[key] = ''
  })
  return newObject
}

export default addArticleFormReducer

