import { useState ,useEffect} from "react";
import Shimmer from "./Shimmer";
const Trending=()=>{
    const [trendingBooks,settrendingBooks]=useState([]);
    useEffect(()=>{
        const fetchTrending=async()=>{
            try{
                const res=await fetch("https://openlibrary.org/trending/daily.json");
                const data=await res.json();
                console.log(data.works)
                settrendingBooks(data.works||[]);
            }
            catch(error)
            {
                console.error(error,"failed fetching books")
            }
        }
        fetchTrending();
    },[])
    
    return (
        <>
        <h1 className="trending-title">Trending Books For You</h1>
        <div className="trending-row">
            
            {
                trendingBooks.length>0?trendingBooks.map((book)=>{
           return  <div className="trending-card" key={book.key}>
           
           <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
              />
            <h1 >{book.title?book.title:"title"}</h1>
            <h2 >{book.author_name?book.author_name:"author"}</h2>
            
            </div>
                })
                :
                Array.from({ length: 5 }).map((_, i) => (
                    <Shimmer key={i} />
                  ))
                
            }
        </div>
        </>
    )
}
export default Trending;