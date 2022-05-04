import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function NewPlantForm({ onFormSubmit }) {
  const [plantName, setPlantName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [plantPrice, setPlantPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newPlant = {
      id: uuidv4(),
      name: plantName,
      image: imageUrl,
      price: plantPrice
    }
    onFormSubmit(newPlant);
    setPlantName("");
    setImageUrl("");
    setPlantPrice("");
  }

  function handleChangePlantName (e) {
    setPlantName(e.target.value)
  }

  function handleImageUrlChange(e) {
    setImageUrl(e.target.value);
  }

  function handlePlantPriceChange(e) {
    setPlantPrice(e.target.value);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={plantName} onChange={handleChangePlantName} />
        <input type="text" name="image" placeholder="Image URL" value={imageUrl} onChange={handleImageUrlChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={plantPrice} onChange={handlePlantPriceChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
