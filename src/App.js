import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}
function App() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <button
        style={{ backgroundColor: isChecked ? "gray" : "blue" }}
        disabled={isChecked}
      >
        Test Button
      </button>
      <input
        id="checkbox"
        name="Test Checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
        }}
      />
      <label htmlFor="checkbox">Test Checkbox</label>
    </div>
  );
}

export default App;
