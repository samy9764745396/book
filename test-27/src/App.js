import axios from 'axios';
import { useState } from 'react';
import './App.css';


function App() {

  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  // const [apiKey, setApiKey] = useState("AIzaSyDwEwaYfii4y1Mh7DoachBr42jDUxuafxc");

  const handleChange = (event) => {
    const book = event.target.value;
    setBook(book)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(book)
    axios.get("https://www.googleapis.com/books/v1/volumes?q=%7BbookTitle")   //+ book + "&key=" + apiKey + "&maxResults=30
      .then(data => {
        console.log(data.data.items)
        setResult(data.data.items)
        // console.log(data)
      })
  }

  return (
    <div className="container">
      <h1>Book Search App</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text"
            onChange={handleChange}
            className='form-control my-3'
            placeholder='Search for Books'
            autoComplete='off' />
        </div>
        <button className='btn btn-danger'
          type='submit'>Search</button>
      </form>
      {result.map(book => (
        <a href={book.volumeInfo.imageLinks
          .previewLink}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
        </a>
      )

      )}
    </div>
  );
}

export default App;

//https://www.googleapis.com/books/v1/volumes?q=%7BbookTitle
//"https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=30"