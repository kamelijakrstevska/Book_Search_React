import React, { useEffect, useState } from 'react'
import {TextField, Button, MenuItem, Select} from "@mui/material";

const BookListComponent = () => {
  // TODO: export to another file in constants folder
  var books = [
    {
      "author": "Margaret Atwood",
      "title": "The Handmaid's Tale",
      "genre": "Dystopian Fiction"
    },
    {
      "author": "George Orwell",
      "title": "1984",
      "genre": "Dystopian Fiction"
    },
    {
      "author": "Aldous Huxley",
      "title": "Brave New World",
      "genre": "Dystopian Fiction"
    },
    {
      "author": "Ray Bradbury",
      "title": "Fahrenheit 451",
      "genre": "Dystopian Fiction"
    },
    {
      "author": "Suzanne Collins",
      "title": "The Hunger Games",
      "genre": "Dystopian Fiction"
    },
    {
      "author": "J.K. Rowling",
      "title": "Harry Potter and the Philosopher's Stone",
      "genre": "Fantasy"
    },
    {
      "author": "J.R.R. Tolkien",
      "title": "The Lord of the Rings",
      "genre": "Fantasy"
    },
    {
      "author": "Terry Pratchett",
      "title": "The Colour of Magic",
      "genre": "Fantasy"
    },
    {
      "author": "Neil Gaiman",
      "title": "American Gods",
      "genre": "Fantasy"
    },
    {
      "author": "George R.R. Martin",
      "title": "A Game of Thrones",
      "genre": "Fantasy"
    },
    {
      "author": "Jane Austen",
      "title": "Pride and Prejudice",
      "genre": "Romance"
    },
    {
      "author": "Emily Bronte",
      "title": "Wuthering Heights",
      "genre": "Romance"
    },
    {
      "author": "Nicholas Sparks",
      "title": "The Notebook",
      "genre": "Romance"
    },
    {
      "author": "Charlotte Bronte",
      "title": "Jane Eyre",
      "genre": "Romance"
    },
    {
      "author": "Gabriel Garcia Marquez",
      "title": "Love in the Time of Cholera",
      "genre": "Romance"
    },
    {
      "author": "Agatha Christie",
      "title": "Murder on the Orient Express",
      "genre": "Mystery"
    },
    {
      "author": "Arthur Conan Doyle",
      "title": "The Hound of the Baskervilles",
      "genre": "Mystery"
    },
    {
      "author": "Gillian Flynn",
      "title": "Gone Girl",
      "genre": "Mystery"
    },
    {
      "author": "Stieg Larsson",
      "title": "The Girl with the Dragon Tattoo",
      "genre": "Mystery"
    },
    {
      "author": "Dan Brown",
      "title": "The Da Vinci Code",
      "genre": "Mystery"
    },
    {
      "author": "Stephen King",
      "title": "The Shining",
      "genre": "Horror"
    },
    {
      "author": "H.P. Lovecraft",
      "title": "The Call of Cthulhu",
      "genre": "Horror"
    },
    {
      "author": "Bram Stoker",
      "title": "Dracula",
      "genre": "Horror"
    }, 
    {
      "author": "Mary Shelley",
      "title": "Frankenstein",
      "genre": "Horror"
    },
    {
      "author": "Shirley Jackson",
      "title": "The Haunting of Hill House",
      "genre": "Horror"
    },
    {
      "author": "Bret Easton Ellis",
      "title": "American Psycho",
      "genre": "Horror"
    },
    {
      "author": "Edgar Allan Poe",
      "title": "The Tell-Tale Heart",
      "genre": "Horror"
    },
    {
      "author": "Jules Verne",
      "title": "Twenty Thousand Leagues Under the Sea",
      "genre": "Adventure"
    },
    {
      "author": "Ernest Hemingway",
      "title": "The Old Man and the Sea",
      "genre": "Adventure"
    },
    {
      "author": "Jack London",
      "title": "The Call of the Wild",
      "genre": "Adventure"
    },
    {
      "author": "Herman Melville",
      "title": "Moby-Dick",
      "genre": "Adventure"
    },
    {
      "author": "Michael Crichton",
      "title": "Jurassic Park",
      "genre": "Science Fiction"
    },
    {
      "author": "Philip K. Dick",
      "title": "Do Androids Dream of Electric Sheep?",
      "genre": "Science Fiction"
    },
    {
      "author": "Isaac Asimov",
      "title": "Foundation",
      "genre": "Science Fiction"
    },
    {
      "author": "Ray Bradbury",
      "title": "The Martian Chronicles",
      "genre": "Science Fiction"
    },
    {
      "author": "Douglas Adams",
      "title": "The Hitchhiker's Guide to the Galaxy",
      "genre": "Science Fiction"
    },
    {
      "author": "Kurt Vonnegut",
      "title": "Slaughterhouse-Five",
      "genre": "Science Fiction"
    },
    {
      "author": "William Gibson",
      "title": "Neuromancer",
      "genre": "Science Fiction"
    },
    {
      "author": "Octavia Butler",
      "title": "Kindred",
      "genre": "Science Fiction"
    },
    {
      "author": "Ursula K. Le Guin",
      "title": "The Left Hand of Darkness",
      "genre": "Science Fiction"
    },
    {
      "author": "David Mitchell",
      "title": "Cloud Atlas",
      "genre": "Science Fiction"
    },
    {
      "author": "Frank Herbert",
      "title": "Dune",
      "genre": "Science Fiction"
    },
    {
      "author": "C.S. Lewis",
      "title": "The Lion, the Witch and the Wardrobe",
      "genre": "Children's"
    }
  ];
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