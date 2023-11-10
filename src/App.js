import "./App.css";
import { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <button disabled={isChecked}>Test Button</button>
      <input
        name="Test Checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
        }}
      />
    </div>
  );
}

export default App;
