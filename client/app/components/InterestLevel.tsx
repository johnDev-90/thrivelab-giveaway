"use client";

import { useState } from "react";
import React from "react";
import { useData } from "../contexts/GiveawayContext";
import { stepFourSchema, finalSchema } from "../lib/validations";
import StepIndicator from "./StepIndicator";
import Swal from "sweetalert2";
import LoadingOverlay from "../utils/LoadingOverlay";

import { createClient } from "@supabase/supabase-js";

const InterestLevel = () => {
  const { nextStep, dataForm, setDataForm, initialDataForm } = useData();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValid = stepFourSchema.safeParse(dataForm).success;

async function handleFinalSubmit() {
  const result = finalSchema.safeParse(dataForm);

  if (!result.success) {
    console.log(result.error.issues);
    return;
  }

  try {
    setIsSubmitting(true);

    // Crear client de Supabase
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    // Insertar datos en la tabla 'giveaway'
    const { data, error } = await supabase.from("FormData").insert([dataForm]);

    if (error) {
      console.error(error);
      Swal.fire({
        title: "Oops!",
        text: error.message || "Something went wrong!",
        confirmButtonText: "Got it",
        confirmButtonColor: "#3d4f3a",
      });
      return;
    }

    console.log("Datos insertados:", data);

    // Simular tiempo de espera
    await new Promise((resolve) => setTimeout(resolve, 800));

    nextStep();
    setDataForm(initialDataForm);
  } catch (error) {
    console.error(error);
    Swal.fire({
      title: "Oops!",
      text: "Something went wrong!",
      confirmButtonText: "Got it",
      confirmButtonColor: "#3d4f3a",
    });
  } finally {
    setIsSubmitting(false);
  }
}

  return (
    <div className="relative space-y-6">
      {isSubmitting && <LoadingOverlay />}

      <div className="text-center mb-8">
        <p className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
          Exclusive Giveaway
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-serif text-gray-900 leading-tight px-4">
          Win a $10,000 in-home stem cell treatment
        </h1>
      </div>

      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
          If you don't win the giveaway, would you still be interested in
          learning more or receiving treatment?
        </h2>
        <p className="text-sm text-gray-500">
          Treatments typically start at $237/month or around $5,000 total.
        </p>
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
        Please select at least one pain area
        <span className="text-red-700 text-base font-bold">*</span>
      </legend>

      <form className="space-y-3">
        <label className="flex items-start justify-between w-full px-4 py-4 border border-gray-300 rounded-xl bg-white cursor-pointer hover:bg-gray-50 transition-all">
          <span className="text-base text-gray-900 pr-4">
            Yes, I'd like to explore treatment options
          </span>
          <input
            checked={dataForm.interestLevel === "yes"}
            onChange={(e) =>
              setDataForm((prev) => ({
                ...prev,
                interestLevel: e.target.value,
              }))
            }
            type="radio"
            name="interestLevel"
            value="yes"
            className="w-5 h-5 mt-0.5 text-[#3d4f3a] focus:ring-[#3d4f3a]"
          />
        </label>

        <label className="flex items-start justify-between w-full px-4 py-4 border border-gray-300 rounded-xl bg-white cursor-pointer hover:bg-gray-50 transition-all">
          <span className="text-base text-gray-900 pr-4">
            Possibly, depending on financing
          </span>
          <input
            checked={dataForm.interestLevel === "maybe"}
            onChange={(e) =>
              setDataForm((prev) => ({
                ...prev,
                interestLevel: e.target.value,
              }))
            }
            type="radio"
            name="interestLevel"
            value="maybe"
            className="w-5 h-5 mt-0.5 text-[#3d4f3a] focus:ring-[#3d4f3a]"
          />
        </label>

        <label className="flex items-start justify-between w-full px-4 py-4 border border-gray-300 rounded-xl bg-white cursor-pointer hover:bg-gray-50 transition-all">
          <span className="text-base text-gray-900 pr-4">
            I'm only interested if I win the giveaway
          </span>
          <input
            checked={dataForm.interestLevel === "no"}
            onChange={(e) =>
              setDataForm((prev) => ({
                ...prev,
                interestLevel: e.target.value,
              }))
            }
            type="radio"
            name="interestLevel"
            value="no"
            className="w-5 h-5 mt-0.5 text-[#3d4f3a] focus:ring-[#3d4f3a]"
          />
        </label>
      </form>

      <button
        onClick={handleFinalSubmit}
        disabled={!isValid}
        className={`${!isValid ? "cursor-not-allowed bg-gray-400" : "bg-[#3d4f3a] hover:bg-[#2f3f2c]"} 
          w-full py-4 px-6 rounded-xl text-white font-medium text-base
          transition-all duration-200 flex items-center justify-center gap-2 mt-6 cursor-pointer`}
      >
        Continue
      </button>

      <StepIndicator />

      <p className="text-sm text-gray-500 text-center mt-6 px-4 leading-relaxed">
        This is an in-home treatment. If you are not located in one of our
        service areas, travel will be required.
      </p>
    </div>
  );
};

export default InterestLevel;
