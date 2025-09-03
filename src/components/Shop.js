import { useEffect,useState } from "react";
import ShopLayout from "./ShopLayout";

const Shop=(searchBook)=>{
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        const fetchBooks = async () => {
            try{
                const res = await fetch("https://www.delhibookmarket.com/data/search-index.json");
                const data = await res.json(); 
                setBooks(Array.isArray(data) ? data : data.items || []);
            }
            catch(err){
                console.error("Error fetching books:", err);
                setBooks([]);
            }
        };
        fetchBooks();
    },[]);

    return books.length === 0? 
    (<ShopLayout/>):(
        <div className="shop-container">
            <div className="book-container">
                {books.map((book,index) => (
                    <div className="book-card" key={`${book.id}-${index}`}>
                        <img className="book-cover" src={book.images[0]?.src || "default-cover.jpg"} alt={book.images[0]?.alt || book.name} />
                        <h2 className="book-title">{book.name}</h2>
                        <p className="book-price">₹{book.price}</p>
                        <a className="add-to-cart">Buy Now</a>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Shop;