import React from "react";
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import uuidv1 from "uuid";
import * as formActions from "../actions/index";
import { reverseList }  from "../actions/index";

// reducer will take this data as the payload for the action
// switch on the name of the input that was updated
// update the props with the new value
// app js will update form with new form data

const Form = (props) => {
  
  const handleChange = (event) => {
    const data = {
      name: event.target.name,
      value: event.target.value
    }
    props.formActions.updateForm(data)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.formActions.addArticle(props.formData)
    props.formActions.clearForm()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
              type="text"
              className="form-control"
              name="title"
              value={props.formData.title}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            SAVE
          </Button>
      </form>
        <Button variant="contained" color="secondary" onClick={props.reverseList}>
            REVERSE
        </Button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  formActions: bindActionCreators(formActions, dispatch),
  reverseList: bindActionCreators(reverseList, dispatch)
})

const mapStateToProps = state => ({
  formData: state.addArticleForm,
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);