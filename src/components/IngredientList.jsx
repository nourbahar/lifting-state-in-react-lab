// src/components/IngredientList.jsx
const IngredientList = (props) => {
    return (
    <ul>
   {props.availableIngredients.map((ingredient, idx) => (
   <li key={idx} style={{ backgroundColor: ingredient.color }}>
    {ingredient.name}
    <button onClick={() => props.addToBurger(ingredient)} type="submit">+</button>
    </li>
        ))}
     </ul>
    );
  };
  
  export default IngredientList;