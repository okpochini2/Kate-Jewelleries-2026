import { useEffect, useState } from "react";

function Products() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const arr = [];

    for (let i = 1; i <= 39; i++) {
      arr.push(
        new URL(`../assets/products/Photo-${i}.jpg`, import.meta.url).href
      );
    }

    setImages(arr);
  }, []);

  return (
    <div className="page">
      <h2>Our Collections</h2>

      <div className="grid">
        {images.map((img, i) => (
          <div className="card" key={i}>
            <img src={img} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;