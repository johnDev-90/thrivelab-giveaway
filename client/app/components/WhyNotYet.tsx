import React from "react";

import { useData } from "../contexts/GiveawayContext";
import StepIndicator from "./StepIndicator";
import { stepThreeSchema } from "../lib/validations";

import ContinueButton from "./ContinueButton";

const WhyNotYet = () => {
  const { prevStep, nextStep, dataForm, setDataForm } = useData();

  const isValid = stepThreeSchema.safeParse(dataForm).success;

  const result = stepThreeSchema.safeParse(dataForm);

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <p className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
          Exclusive Giveaway
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-serif text-gray-900 leading-tight px-4">
          Win a $10,000 in-home stem cell treatment
        </h1>
      </div>

      {/* Question */}
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-medium text-gray-900">
          Why haven't you already received a stem cell treatment?
        </h2>
      </div>

      <legend
        className={`

      
       
    overflow-hidden
    text-left
    pt-3
    text-xs
    transition-all duration-300 ease-in-out
    ${
      !isValid
        ? "max-h-40 opacity-100 translate-y-0"
        : "max-h-0 opacity-0 -translate-y-2"
    }
      
      `}
      >
        Please select at least one option
        <span className="text-red-700 text-base font-bold">*</span>
      </legend>

      <div className="space-y-3">
        <label
          className="
          flex items-center justify-between
          w-full px-4 py-4
          border border-gray-300 rounded-xl
          bg-white
          cursor-pointer
          hover:bg-gray-50
          transition-all
        "
        >
          <span className="text-base text-gray-900">
            I don't know who I can trust
          </span>
          <input
            checked={dataForm.whyNotYet.includes("trust")}
            onChange={(e) => {
              const { value, checked } = e.target;

              setDataForm((prev) => ({
                ...prev,
                whyNotYet: checked
                  ? [...prev.whyNotYet, value]
                  : prev.whyNotYet.filter((item) => item !== value),
              }));
            }}
            type="checkbox"
            name="whyNotYet"
            value="trust"
            className="w-5 h-5 text-[#3d4f3a] rounded focus:ring-[#3d4f3a]"
          />
        </label>

        <label
          className="
          flex items-center justify-between
          w-full px-4 py-4
          border border-gray-300 rounded-xl
          bg-white
          cursor-pointer
          hover:bg-gray-50
          transition-all
        "
        >
          <span className="text-base text-gray-900">The cost of treatment</span>
          <input
            checked={dataForm.whyNotYet.includes("cost")}
            onChange={(e) => {
              const { value, checked } = e.target;

              setDataForm((prev) => ({
                ...prev,
                whyNotYet: checked
                  ? [...prev.whyNotYet, value]
                  : prev.whyNotYet.filter((item) => item !== value),
              }));
            }}
            type="checkbox"
            name="whyNotYet"
            value="cost"
            className="w-5 h-5 text-[#3d4f3a] rounded focus:ring-[#3d4f3a]"
          />
        </label>

        <label
          className="
          flex items-center justify-between
          w-full px-4 py-4
          border border-gray-300 rounded-xl
          bg-white
          cursor-pointer
          hover:bg-gray-50
          transition-all
        "
        >
          <span className="text-base text-gray-900">
            I'm still learning more about it
          </span>
          <input
            checked={dataForm.whyNotYet.includes("learning")}
            onChange={(e) => {
              const { value, checked } = e.target;

              setDataForm((prev) => ({
                ...prev,
                whyNotYet: checked
                  ? [...prev.whyNotYet, value]
                  : prev.whyNotYet.filter((item) => item !== value),
              }));
            }}
            type="checkbox"
            name="whyNotYet"
            value="learning"
            className="w-5 h-5 text-[#3d4f3a] rounded focus:ring-[#3d4f3a]"
          />
        </label>
      </div>

      <ContinueButton isValid={isValid} />

      <p className="text-sm text-gray-500 text-center mt-6 px-4 leading-relaxed">
        This is an in-home treatment. If you are not located in one of our
        service areas, travel will be required.
      </p>

      <StepIndicator />
    </div>
  );
};

export default WhyNotYet;
