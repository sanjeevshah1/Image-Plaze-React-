import React from 'react';
import "./Main.css";

const displayImages = (images) => {
  if (!images || images.length === 0) {
    return <p id="notfound" style={{ marginTop: "10px" }}>No images found</p>;
  }

  return images.map((image) => {
    const altDescription = image.alt_description || "No description";
    return (
      <div key={image.id} className="image-card">
        <img src={image.urls.regular} alt={altDescription} />
        <p>{altDescription[0].toUpperCase() + altDescription.slice(1)}</p>
        <button
          className="view"
          onClick={() => {
            window.open(image.links.download, "_blank");
          }}
        >
          View image
        </button>
      </div>
    );
  });
};

const Main = ({ images }) => {
  return (
    <main id="image-container">
      {displayImages(images)}
    </main>
  );
}

export default Main;
