import React from "react";

export default function Shared({ ...props }) {
  return <div className="shared-main-wrapper">{...props}</div>;
}
