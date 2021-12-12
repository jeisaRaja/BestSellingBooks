import React from "react";
import ReactDOM  from "react-dom";
import './index.css'
import {books} from './books'
import Book from './Book'
function Booklist(){
  return (<section className="container">
    <div className="header">
    <div className="titleCon">
      <div className="flexCon">
        <h1 className="title">Best Selling Books <br></br> 2021</h1>
      </div>
    </div>
    <div className="listCon">
      <div className="list">
        {books.map((book,index)=>{
          console.log(book)
          return <Book key={index} {...book}/>
        })}
      </div>
    </div>
    </div>
  </section>)
}


// function BookTitle(){
//   const title = "Atlas of the Heart";
//   return(
//     <h1>{title}</h1>
//   )
// }

// function BookImage(){
//   return(
//     <img src="https://images-na.ssl-images-amazon.com/images/I/51KvAoff+ZL._SX407_BO1,204,203,200_.jpg" alt="book"/>
//   )
// }

// function BookAuthor(){
//   return( 
//   <p>Brené Brown</p>
//     )
   
// }

ReactDOM.render(<Booklist/>, document.getElementById('root'))