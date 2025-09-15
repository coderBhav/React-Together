import useFiction from "../utils/useFiction";
import GenShimmer from "./GenShimmer";

const Fiction = () => {
    const data=useFiction();
    if(!data || !data.works)
        return <GenShimmer/>
    const ficbooks = data.works;
    return (
        <div className="fic-container">
        <h1 className="fic-genre">FICTION</h1>
        <div className="fic-list">
            {ficbooks.map((book) => (
            <div className="fic-card" key={book.key}>
                <img className="fic-cover" src={book.cover_id?`https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`:"https://via.placeholder.com/150"}
                alt={book.title}/>
                <h2 className="fic-title">{book.title}</h2>
                <p className="fic-author">{book.authors?.map((a) => a.name).join(", ")}</p>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Fiction;
