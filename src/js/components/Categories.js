import React from "react";
import "../../css/Categories.scss";
function Categories({plantList, setCategories}){
    const categoriesList = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    function onCatSelect(e){
        let selected = e.target.querySelector(':checked').getAttribute('value');
        setCategories(selected);
    }

    return (
        <select name="categories" className="categories_selector" onChange={(e) => onCatSelect(e)}>
            <option key="all_categories" value="all_categories">Toutes les catégories</option>
            {categoriesList.map((cat, index) => (
                <option key={cat + index} value={cat}>{cat}</option>
            ))}
        </select>
    )
}

export default Categories
