import React, { useEffect, useState } from "react";
import "./stopWatch.css";

const StopWatch = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [start, setStart] = useState(false)

let timer;

  useEffect(() => {
    if(start) {
    timer = setInterval(() => {  
      setSec((sec) => sec + 1);
      if (sec === 59) {
        setMin((min) => min + 1);
        setSec(0);
      }
    }, 1000);
}
else {
    clearInterval(timer);
}   return () => clearInterval(timer);
  },[start])

  const handleReset = () => {
    setSec(0);
    setMin(0);
  };
  

  return (
    <div>
      Stop Watch
      <div>
        {min < 10 ? "0" + min : min} : {sec < 10 ? "0" + sec : sec}
      </div>
      <button className="w-10" onClick={() => setStart(true)}>
        Start
      </button>
      <button className="w-10 ml-10" onClick={() => setStart(true)}>
        Resume
      </button>
      <button className="w-10 ml-10" onClick={handleReset}>
        Reset
      </button>
      <button className="w-10 ml-10" onClick={() => setStart(false)}>
        Stop
      </button>
    </div>
  );
};

export default StopWatch;
