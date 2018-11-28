import React from "react";
import { connect } from 'react-redux';
import List from "./List";
import Form from "./Form";

const App = (props) => {
  return (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2>Articles</h2>
            <List 
              articles={props.articles}
            />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2> Add a new article</h2>
            <Form 
              formData={props.addArticleForm}
            />
        </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    addArticleForm: state.addArticleForm,
  }
}

export default connect(mapStateToProps)(App);