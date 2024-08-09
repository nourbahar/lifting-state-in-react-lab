// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
    return (
    
    <ul>
    {props.stack.map((ingredient, idx) => (
    <li key={idx} style={{ backgroundColor: ingredient.color }}>
    {ingredient.name}
      <button onClick={() => props.removeFromBurger(ingredient, idx)}type="submit">x</button>
    </li>
       ))}

    </ul>

    );
  };
  
  export default BurgerStack;