"use client";
import React from "react";
import { useState } from "react";
import ContactInfo from "./components/ContactInfo";
import InterestLevel from "./components/InterestLevel";
import PainArea from "./components/PainArea";
import WhyNotYet from "./components/WhyNotYet";
import Confirmation from "./components/Confirmation";
import { DataProvider } from "./contexts/GiveawayContext";

import FormContent from "./components/FormContent";

const page = () => {
  return (
    <DataProvider>
      <div
        className="
      w-full 
      max-w-xl
      mx-auto 
      bg-white 
      rounded-3xl 
      shadow-2xl 
      p-6 sm:p-8 lg:p-12
    "
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 tracking-wider">
            thrivelab
          </h2>
        </div>

        <FormContent />
      </div>
    </DataProvider>
  );
};

export default page;
