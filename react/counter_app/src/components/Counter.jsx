import React, { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  return (
    <div className="text-center">
      <h1 className="my-5">Counter app</h1>
      <span onClick={() => setCount(--count)}>
				<i className="bi bi-dash-square h1 text-danger"></i>
      </span>
      <span className="h1 mx-3">{count}</span>
			<span onClick={() => setCount(++count)}>
				<i className="bi bi-plus-square h1 text-success"></i>
      </span>
    </div>
  );
}
