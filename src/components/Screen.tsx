import React from "react";

type ScreenPropsType = {
  count: number;
  maxCount?: number;
};

export default function Screen({ count, maxCount }: ScreenPropsType) {
  // total → counter
  return <h1 style={{ color: count === maxCount ? "red" : "" }}>{count}</h1>;
}
