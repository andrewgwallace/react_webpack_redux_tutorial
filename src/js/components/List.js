import React from "react";
import uuidv1 from "uuid"

const renderArticles = articles => articles.map(article => {
  return (
    <li
      className='list-group-item'
      key={uuidv1()}
      >
        {article.title}
      </li>
  )
})

const List = ({ articles }) => (
    <ul className="list-group list-group-flush">
    {/* {console.log(articles)} */}
      {renderArticles(articles)}
    </ul>
);

export default List;