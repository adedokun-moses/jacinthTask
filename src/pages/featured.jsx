import { useState } from "react";
import "./App.css";

const Featured = () => {
  const [books, useBooks] = useState([
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg",
      price: 29.99,
      author: "John Doe",
      category: "Fiction",
      description: "Great work of art in history",
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/61Iz2yy2CKL.jpg",
      price: 19.99,
      author: "Jane Smith",
      category: "Non-Fiction",
      description: "One of the best books in history",
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
      price: 39.99,
      author: "Mike Johnson",
      category: "Science",
      description: "Best selling books in history",
    },
    {
      id: 4,
      image: "https://m.media-amazon.com/images/I/81eB+7+CkUL.jpg",
      price: 24.99,
      author: "Emily Davis",
      category: "History",
      description: "One of the best books in history",
    },
    {
      id: 5,
      image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
      price: 24.99,
      author: "Emily Davis",
      category: "History",
      description: "This is one of the best books in history",
    },
    {
      id: 6,
      image: "https://m.media-amazon.com/images/I/51b5YG6Y1rL.jpg",
      price: 24.99,
      author: "Antony Rudiger",
      category: "History",
      description: "This is one of the best books",
    },
  ]);
  return (
    <div className="p-12">
      <div className="flex justify-between border-t-2 border-b-2 pb-3 pt-3 items-center border-solid ">
        <p>Featured Books</p>
        <div className="flex space-x-7 items-center">
          <span>See All</span>
          <div className="arror-cursor">
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.54601 6.68948L0.938674 7.27035L0.843223 5.85602L9.45057 5.27515L5.40137 1.73792L6.33396 0.670342L12.2056 5.79961L7.07634 11.6713L6.00877 10.7387L9.54601 6.68948Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 mt-5">
        {books.map((book) => (
          <div className="imageCard" key={book.id}>
            <div className="imageTab">
              <img src={book.image} />
            </div>
            <p>{book.category}</p>
            <p className="mt-2">{book.description.substring(0,30)}</p>
            <p>{book.author}</p>
            <h5>{book.price}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
