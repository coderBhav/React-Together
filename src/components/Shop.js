import { useEffect,useState } from "react";

const Shop=()=>{
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        const fetchBooks = async () => {
            const res = await fetch("https://www.googleapis.com/books/v1/volumes?q=javascript");
            const data = await res.json();
            setBooks(data.items);
        };
        fetchBooks();
    },[]);
    return(
        <div className="book-container">
        {books.map((book) => (
            <div className="book-card" key={book.id}>
                <img className="book-cover" src={book.volumeInfo.imageLinks?.thumbnail || "default-cover.jpg"} alt={book.volumeInfo.title}/>
                <h1 className="book-title">{book.volumeInfo.title}</h1>
                <p className="book-author">{book.volumeInfo.authors?.join(", ") || "Unknown-author"}</p>
            </div>
        ))
        }
        </div>
    );
};
export default Shop;