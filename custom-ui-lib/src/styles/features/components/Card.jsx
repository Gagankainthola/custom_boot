import React from "react";

const CardComponent = ({ title, description, imgUrl }) => {
  return (
    <div className="card-container border-2 border-black rounded-lg overflow-hidden shadow-md w-[664px] h-[530px]">
      <div className="card-header p-3 ">
        <h2 className="txt-xl  fw-semibold">{title}</h2>
      </div>
      <div className="card-body p-3">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-[240px] object-cover rounded-md mb-3"
        />
        <p className="txt-md txt-secondary">{description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
