const ShopLayout = () => {
  return (
    <div className="shimmer-container">
      {Array(12).fill("").map((_, index) => (
        <div className="shimmer-card" key={index}>
          <div className="shimmer-cover"></div>
          <div className="shimmer-name"></div>
          <div className="shimmer-writer"></div>
          <div className="shimmer-price"></div>
          <div className="shimmer-button"></div>
        </div>
      ))}
    </div>
  );
};

export default ShopLayout;