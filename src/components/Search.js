import Placeholder from "./Placeholder";
import Books from "./Books";

import { useState } from "react";
const Search=()=>{
    const type = "text";
    const [search, setSearch] = useState("");
    const [listOfBooks,setlistofBooks]=useState([]);
    return <div> 
        <div className="search-container">
        <input className="Search" type={type} placeholder={Placeholder({ type })} value={search} onChange={(e)=>{
            setSearch(e.target.value);
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
        }}
          />
        <button className="search-btn">Search</button>
        
      </div>

      <div className="resultBox">

         {listOfBooks.map((book)=>(
            <li key={book.id}>{book.title}</li>
         ))}
         </div>
      </div>
}

export default Search; 