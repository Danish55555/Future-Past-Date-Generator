import { useState, useMemo } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
  
    const date = useMemo(() => {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + count);
      return currentDate;
    }, [count]);
  
    return (
      <div >
        <div className="gridContainer">
          <button onClick={() => setStep((c) => c - 1)}>-</button>
          <span>Step: {step}</span>
          <button onClick={() => setStep((c) => c + 1)}>+</button>
        </div>
  
        <div className="gridContainer">
          <button onClick={() => setCount((c) => c - step)}>-</button>
          <span>Count: {count}</span>
          <button onClick={() => setCount((c) => c + step)}>+</button>
        </div>
  
        <p className="resultDate">
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    );
  }