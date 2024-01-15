import React from "react";
import { IButtonTypes } from "../../types";

const index = ({
  title,
  designs,
  handleClick,
  isDisabled,
  btnType,
  rIcons,
}: IButtonTypes) => {
  return (
    <button
      type={btnType || "button"}
      disabled={isDisabled}
      onClick={handleClick}
      className={`custom-btn ${designs} bg-primary-blue rounded-full text-white transition hover:bg-blue-800`}
    >
      <span className="flex-1">{title}</span>
      {rIcons && (
        <div className="relative w-6 h-6">
          <img src={rIcons} alt="r-icon" />
        </div>
      )}
    </button>
  );
};

export default index;
