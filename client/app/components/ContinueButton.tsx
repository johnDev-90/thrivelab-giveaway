import React from "react";

import { useData } from "../contexts/GiveawayContext";

type Props = {
  isValid: boolean;
};

const ContinueButton = ({ isValid }: Props) => {
  const { nextStep } = useData();
  return (
    <button
      type="submit"
      onClick={nextStep}
      disabled={!isValid && true}
      className={`${!isValid && "cursor-not-allowed bg-gray-400  "} w-full py-4 px-6 rounded-xl
          bg-[#3d4f3a] enabled:hover:bg-[#2f3f2c] cursor-pointer
          text-white font-medium text-base
          transition-all duration-200
          flex items-center justify-center gap-2
          mt-6`}
    >
      Continue
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </button>
  );
};

export default ContinueButton;
