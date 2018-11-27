import { ADD_ARTICLE, UPDATE_FORM } from "../constants/action-types";

export const addArticle = formData => {
  console.log("FORM DATA ", formData)  
  return {
    type: ADD_ARTICLE,
    formData
  }
}

export const updateForm = data => ({
  type: UPDATE_FORM,
  data,
})


export const clearForm = () => ({ type: 'CLEAR_FORM'})