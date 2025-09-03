const ShopLayout = () => {
  return (
    <div className="shimmer-container">
      {Array(12).fill("").map((_, index) => (
        <div className="shimmer-card" key={index}>
          <img className="shimmer-img" />
          <h1 className="shimmer-title"></h1>
          <p className="shimmer-author"></p>
        </div>
      ))}
    </div>
  );
};
export default ShopLayout;