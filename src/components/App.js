import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
    .then(res => res.json())
    .then(data=> setPlants(data))
  }, [])

  function onFormSubmit(newPlant) {
    fetch(`http://localhost:6001/plants`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(setPlants([...plants, newPlant]))
  }

  function handleSearchFilter(text) {
    setSearch(text)
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} onFormSubmit={onFormSubmit} handleSearchFilter={handleSearchFilter} search={search} />
    </div>
  );
}

export default App;
