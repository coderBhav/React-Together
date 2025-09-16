import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import Books from "./Books";
import Pdf from "./Pdf";

const Trending = () => {
  const [trendingBooks, settrendingBooks] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState("");
  useEffect(() => {
    settrendingBooks(Books);
  }, []);

  return (
    <>
      <h1 className="trending-title">Trending Books For You</h1>
      <div className="trending-row">
        {trendingBooks.length > 0
          ? trendingBooks.map((book) => {
              return (
                <div className="trending-card" key={book.id}>
                  <img
                    src={book.cover}
                    alt={book.title}
                    onClick={() => setSelectedPdf(book.pdf)}
                    style={{ cursor: "pointer" }}
                  />
                  <h1>{book.title ? book.title : "title"}</h1>
                  <h2>{book.author ? book.author : "author"}</h2>
                </div>
              );
            })
          : Array.from({ length: 5 }).map((_, i) => <Shimmer key={i} />)}

        
      </div>
      {selectedPdf && (
        <Pdf selectedPdf={selectedPdf} setSelectedPdf={setSelectedPdf}/>
      )}


    </>
  );
};
export default Trending;
