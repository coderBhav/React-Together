import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Books from "./Books";

const Trending = () => {
  const [trendingBooks, setTrendingBooks] = useState([]);

  useEffect(() => {
    setTrendingBooks(Books);
  }, []);

  const openPdf=(pdfUrl) => {
    window.open(pdfUrl,"_blank");
  };

  return (
    <>
      <h1 className="trending-title">Trending Books For You</h1>
      <div className="trending-row">
        {trendingBooks.length >0?(
          trendingBooks.map((book)=>(
            <div className="trending-card" key={book.id} onClick={()=>openPdf(book.pdf)} style={{ cursor:"pointer"}}>
              <img src={book.cover} alt={book.title} />
              <h1>{book.title || "title"}</h1>
              <h2>{book.author || "author"}</h2>
            </div>
          ))
        ) : (
          Array.from({ length: 5 }).map((_, i) => <Shimmer key={i} />)
        )}
      </div>
    </>
  );
};

export default Trending;
