import React from "react";
import { useState } from "react";

const ConditionalRendering1 = () => {
  const [flag, setFlag] = useState(true);
  return (
    <>
      <div>
        <button
          className="btn btn-warning"
          onClick={() => {
            if (flag) {
              setFlag(false);
            } else {
              setFlag(true);
            }
          }}
        >
          Show Message
        </button>
        {flag ? <p>Good morning!</p> : null}
      </div>
    </>
  );
};

export default ConditionalRendering1;
