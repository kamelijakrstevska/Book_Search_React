import React, { useEffect, useState } from 'react'
import {TextField, Button, MenuItem, Select} from "@mui/material";
import booksList from '../constants/bookList'

const BookListComponent = () => {
  // TODO: export to another file in constants folder
  var books = booksList;
const [bookList, setBookList] = useState(books);
 // 1. initially sorted by Author name alphabetically
const [shownBookList, setShownBookList] = useState(sortBookList("author", "ASC"));
const [keyWord, setKeyword] = useState(""); 
const [searchProperty, setSearchProperty] = useState("title");  // by title, author ...

function sortBookList (property, order) {
  if(order){
    var tempList = books.sort(function(a, b) {
      var textA = a[property].toUpperCase();
      var textB = b[property].toUpperCase();
      if(order == "ASC")
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      else if(order == "DESC")
        return (textB < textA) ? -1 : (textB > textA) ? 1 : 0;
    });

    return tempList;
  }
  return books;
}

const handleInputChange = (event) => {
  setKeyword(event.target.value);
}

const handleDropdownChange = (event) => {
  setSearchProperty(event.target.value);
};

const handleSearch = () => {
  searchBooks();
}

function searchBooks() {
  var tempList = bookList.filter((el) => el[searchProperty].toString().toLowerCase().includes(keyWord.toLowerCase()));
  setShownBookList(tempList);
}

 
return(
    <>
    <h1>Book list component</h1>
    <hr/>
    <TextField onChange={handleInputChange} id="outlined-basic" label="Search for books" variant="outlined" />
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={searchProperty}
      label="Seacrh type"
      onChange={handleDropdownChange}
    >
        <MenuItem value="title">Title</MenuItem>
        <MenuItem value="author">Author</MenuItem>
        <MenuItem value="genre">Genre</MenuItem>
    </Select>
    <Button variant="text" onClick={handleSearch}>Search</Button>
    <ul>
    {
        shownBookList.map((el, index) => {
            return <>
            <li key={index}>
                Author: {el.author}
                <br/>
                Title: {el.title}
            </li>
            </>
        })
    }
    </ul>
    </>
)
}

export default BookListComponent;