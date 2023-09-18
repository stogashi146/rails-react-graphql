import React, { Component } from "react";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOOKS = gql`
  query {
    books {
      id
      title
    }
  }
`;

interface Book {
  id: string;
  title: string;
}

function App() {
  const { data: { books } = {} } = useQuery(FETCH_BOOKS);
  console.log(books);

  return (
    <div>
      <p>aaa</p>
      {books &&
        books.map((book: Book) => <div key={book.id}>{book.title}</div>)}
    </div>
  );
}

export default App;
