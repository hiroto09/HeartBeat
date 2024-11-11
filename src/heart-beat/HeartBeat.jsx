import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // 追加
import "./HeartBeat.scss";
import Heart from "./RedHeart.png";

function HeartBeat({ speed }) {
  const [animationDuration, setAnimationDuration] = useState(speed);

  useEffect(() => {
    setAnimationDuration(speed);
  }, [speed]);

  return (
    <>
      <div
        className="animate73"
        style={{
          animationDuration: `${animationDuration}s`,
          WebkitAnimationDuration: `${animationDuration}s`,
          MozAnimationDuration: `${animationDuration}s`,
        }}
      >
        <img src={Heart} alt="Heart" width="100px" />
      </div>
    </>
  );
}

// speedプロップの型定義
HeartBeat.propTypes = {
  speed: PropTypes.number.isRequired,
};

export default HeartBeat;
