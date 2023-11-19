import { useState } from "react";

export const SummaryForm = () => {
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        <input
          type="checkbox"
          name="checkcheck"
          checked={checked}
          onChange={() => {
            setChecked((prev) => !prev);
          }}
        />
        I agree to Terms and Conditions
      </label>
      <button disabled={!checked}>My Button</button>

      <div
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        hover me
      </div>

      {show && <div>no icecream will actually be delivered</div>}
    </>
  );
};
