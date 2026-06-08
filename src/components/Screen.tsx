import React from "react";

export default function Screen({ count, maxCount }) {
  return (
    <div className={`screen ${count === maxCount ? "max-reached" : ""}`}>
      {count}
    </div>
  );
}
