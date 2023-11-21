export const ToppingOption = ({ name, imagePath }) => {
  return (
    <div>
      <img src={imagePath} alt={`${name} toppings`} />
    </div>
  );
};
