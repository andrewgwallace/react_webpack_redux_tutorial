import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => {
    return { articles: state.articles };
  };

ConnectedList.propTypes = {
    articles: PropTypes.object.isRequired,
}

const List = connect(mapStateToProps)(ConnectedList);
export default List;