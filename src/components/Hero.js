import Quote from "./Quote";
const Hero=()=>{
return (
    <div className="hero-section">
    <div className="hero-text">
          <h1>Welcome to BOOKSHELF</h1>
          <p>Your Online Library</p>
          <button>Explore Now</button>
        </div>

        <Quote/>
  </div>
)
}

export default Hero;