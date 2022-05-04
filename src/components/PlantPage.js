import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onFormSubmit, handleSearchFilter, search }) {

  const filteredPlants = plants.filter(plant => {
   return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm plants={plants} onFormSubmit={onFormSubmit} />
      <Search handleSearchFilter={handleSearchFilter} search={search} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
