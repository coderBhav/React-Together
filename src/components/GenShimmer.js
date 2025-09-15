const GenShimmer = () => {
  return (
    <div className="fic-container">
      <h1 className="fic-genre">Loading...</h1>
      <div className="fic-list">
        {Array.from({ length: 8 }).map((_, index) => (
          <div className="fic-card shimmer" key={index}>
            <div className="fic-cover shimmer-img"></div>
            <div className="fic-title shimmer-text"></div>
            <div className="fic-author shimmer-text"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenShimmer;
