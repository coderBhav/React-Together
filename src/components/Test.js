import { useState } from "react";
import Books from "./Books";
const Test=()=>{
    const [listOfBooks,setlistofBooks]=useState([]);
    return <div>
        <h1>JUST for testing will remove it later</h1>
        <div className="container">
         <div className="searchInput">
        <input type="text" placeholder="Saisir une adresse.." onKeyUp={(e)=>{
            if(e.target.value==="")
            {
            setlistofBooks([]);
            return;
            }
            const filteredBooks=Books.filter((book)=>{
                // console.log(book.title);
                return book.title.toLowerCase().includes(e.target.value.toLowerCase());
            })
            console.log(filteredBooks);
            
           setlistofBooks(filteredBooks);
        }}/>
         <div className="resultBox">
         {/* <!-- here list are inserted from javascript --> */}
         {listOfBooks.map((book)=>(
            <li key={book.id}>{book.title}</li>
         ))}
         </div>
         <div className="icon"><i className="fas fa-search"></i></div>
        </div>
        </div>
    </div>
}

export default Test;