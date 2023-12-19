import React from "react";

const Button = ({ label }) => {
  return (
    <button
      className="flex items-center justify-center py-4 gap-2
    px-7 border font-inter w-[214px] h-[38px] rounded-sm text-sm font-bold leading-[14px] bg-secondary border-none 
    "
    >
      {label}
    </button>
  );
};

export default Button;
