const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
let books = [
  {
    name: "thanh fake",
  },
];
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World, from express");
});

app.post("/book", (req, res) => {
  const book = req.body;

  // Output the book to the console for debugging
  console.log(book);
  books.push(book);

  res.send("Book is added to the database");
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/book/:isbn", (req, res) => {
  // Reading isbn from the URL
  const isbn = req.params.isbn;
  console.log(isbn);
  res.send("Book is added to the database");
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
