import React from "react";

function Props1({ name, hex }) {
  return (
    <>
      <div className="w-[19%] h-[300px] shadow-lg">
        <div className="w-full h-[70%]" style={{ backgroundColor: hex }}></div>
        <div className="mt-5 px-1">
        <p className="text-gray-500">{hex}</p>
          <p style={{ color: hex }} className="text-gray-500">{name}</p>
         
        </div>
      </div>
    </>
  );
}

export default Props1;
