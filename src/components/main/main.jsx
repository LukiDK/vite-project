const foods = ["Pizza", "Burger", "Salad", "Pasta", "Sushi"];
const randomFoods = foods[Math.floor(Math.random() * foods.length)];

export const Name = (props) => {
  return <p>Welcome {props.textValue}</p>;
};

export const RandomFood = () => {
  return <p>Random food: {randomFoods}</p>;
};

export const FoodList = (props) => {
  return (
    <ul>
      {props.foods.map((food, index) => (
        <li key={index}>{food}</li>
      ))}
    </ul>
  );
};

export const Main = () => {
  return (
    <>
      <main>
        <h1>Main</h1>
        <Name textValue="John Doe" />
        <RandomFood />
        <FoodList foods={foods} />
      </main>
    </>
  );
};
