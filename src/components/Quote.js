import { useState ,useEffect} from "react";
const Quote= ()=>{
    const [quoteText,setquoteText]=useState({});
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch("https://recite.onrender.com/api/v1/random");
            const data = await res.json();
            console.log(data);
            setquoteText({
              quote: data.quote,
              author: data.author,
              book:data.book,
            });
          } catch (error) {
            console.error("Error fetching data", error);
          }
        };
    
        fetchData(); 
      }, []);
  

    return (
        
        <div className="quote">
        <h1 >
        "{quoteText.quote?quoteText.quote:"A reader lives a thousand lives before he dies, the man who never reads lives only one"}"

        </h1>
        <h2>By- {quoteText.author?quoteText.author:"George R.R. Martin"}</h2>
        <h3>Book- {quoteText.book?quoteText.book:"A Dance with Dragons"}</h3>
        </div>
    )
};

export default Quote;