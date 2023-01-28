import { useRef, useState } from "react";
export default function RefComponent() {
  const [stateSwitch, setStateSwitch] = useState(true);
  const domRef = useRef();
  const valueRef = useRef(0);

  return (
    <>
      <h3 ref={domRef}>Count {valueRef.current}</h3>
      <button onClick={() => valueRef.current++}> Count ++ </button>
      <button onClick={() => setStateSwitch(!stateSwitch)}>Rerender</button>
      <button onClick={() => (domRef.current.style.backgroundColor = "red")}>
        Change color
      </button>
    </>
  );
}
