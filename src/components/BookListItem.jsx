import React from "react";

export const BookListItem = ({ book }) => {
  return (
    <tr>
      <td>{book.category.name}</td>
      <td>{book.tag}</td>
      <td>{book.title}</td>
      <td>{book.authors}</td>
      <td>
        <a href="#">
          <i className="fa fa-edit"></i>
        </a>
      </td>
    </tr>
  );
};
