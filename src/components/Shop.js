import { useEffect,useState } from "react";
import ShopLayout from "./ShopLayout";
import Books from "./Books";
const Shop=(searchBook)=>{
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        const fetchBooks = async () => {
          Books?setBooks(Books):searchBook([]);
        };
        fetchBooks();
    },[]);

    return books.length === 0? 
    (<ShopLayout/>):(
        <div className="shop-container">
            <div className="book-container">
                {books.map((book,index) => (
                    <div className="book-card" key={`${book.id}-${index}`}>
                        <img className="book-cover" src={book.cover.href} alt={book.cover?.alt || book.name} />
                        <h2 className="book-title">{book.title}</h2>
                        <p className="book-price">₹{500}</p>
                        <a className="add-to-cart">Buy Now</a>
                        {/* {console.log(book.cover)} */}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Shop;