import React from "react";

export default function Screen({ count }) {
  // total → counter
  return <h1 style={{ color: count === 5 ? "red" : "" }}>{count}</h1>;
}
