import React from "react";

function Exit(props) {
  return (
    <svg onClick={() => {
      props.onClick()
     }}
      className="w-6 h-6 exit-icon"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );
}

export default Exit;
