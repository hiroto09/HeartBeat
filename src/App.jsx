import { useState } from "react";
import HeartBeat from "./heart-beat/HeartBeat";

export default function App() {
  const [speed, setSpeed] = useState(1);

  const handleSpeedChange = () => {
    // クリックごとに3段階で速度を変更（1 → 0.5 → 2 → 1）
    setSpeed((prevSpeed) => {
      if (prevSpeed === 1) return 0.5;
      if (prevSpeed === 0.5) return 2;
      return 1;
    });
  };

  return (
    <>
      <HeartBeat speed={speed} />
      <button onClick={handleSpeedChange}>Change Animation Speed</button>
    </>
  );
}
