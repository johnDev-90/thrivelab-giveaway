'use client'

import { useState, useEffect } from "react";


import { useData } from "../contexts/GiveawayContext";

import ContinueButton from "./ContinueButton";
import StepIndicator from "./StepIndicator";

import { stepTwoSchema } from "../lib/validations";

export function PainArea() {

  const [isOtherClicked, setIsOtherClicked] = useState(false)


    const {nextStep,dataForm,setDataForm} = useData()

    const isValid = stepTwoSchema.safeParse(dataForm).success
    
      const result = stepTwoSchema.safeParse(dataForm)

    console.log(isValid)
    console.log(result)

    useEffect(() => {
  if (dataForm.painArea.includes('other')) {
    setIsOtherClicked(true);
  } else {
    setIsOtherClicked(false);

    // Solo limpia si realmente hay algo en painAreaOther
    if (dataForm.painAreaOther !== '') {
      setDataForm((prev) => ({
        ...prev,
        painAreaOther: ''
      }));
    }
  }
}, [dataForm.painArea, dataForm.painAreaOther])

    

   



  return (
    <div className="space-y-6">
      {/* Header */}
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
          What area of your body are you experiencing pain or discomfort in?
        </h2>
      </div>

      <legend  
     className={`

      
       
    overflow-hidden
    text-left
    pt-3
    text-xs
    transition-all duration-300 ease-in-out
    ${!isValid
      ? "max-h-40 opacity-100 translate-y-0"
      : "max-h-0 opacity-0 -translate-y-2"}
      
      `}
      
      >Please select at least one pain area<span className="text-red-700 text-base font-bold">*</span></legend>

      {/* Radio Options */}
      <div className="space-y-3">
        {/* Knee */}
        <label className="
          flex items-center justify-between
          w-full px-4 py-4
          border border-gray-300 rounded-xl
          bg-white
          cursor-pointer
          hover:bg-gray-50
          transition-all
        ">
          <span className="text-base text-gray-900">Knee</span>
          <input

            checked={dataForm.painArea.includes("knee")}
            onChange={(e) =>  

              {
                const {value,checked} = e.target

                setDataForm((prev) => ({
                  ...prev,
                  painArea:checked? [...prev.painArea, value]:prev.painArea.filter((item) => item !== value),
                }));
              }

             }

              
                
           
            type="checkbox"
            name="painArea"
            value="knee"
            className="w-5 h-5 text-[#3d4f3a] focus:ring-[#3d4f3a]"
          />
        </label>

        {/* Shoulder */}
        <label className="
          flex items-center justify-between
          w-full px-4 py-4
          border border-gray-300 rounded-xl
          bg-white
          cursor-pointer
          hover:bg-gray-50
          transition-all
        ">
          <span className="text-base text-gray-900">Shoulder</span>
          <input

          checked={dataForm.painArea.includes("shoulder")}
            onChange={(e) =>  

              {
                const {value,checked} = e.target

                setDataForm((prev) => ({
                  ...prev,
                  painArea:checked? [...prev.painArea, value]:prev.painArea.filter((item) => item !== value),
                }));
              }

             }
          
          
            

            type="checkbox"
            name="painArea"
            value="shoulder"
            className="w-5 h-5 text-[#3d4f3a] focus:ring-[#3d4f3a]"
          />
        </label>

        {/* Back */}
        <label className="
          flex items-center justify-between
          w-full px-4 py-4
          border border-gray-300 rounded-xl
          bg-white
          cursor-pointer
          hover:bg-gray-50
          transition-all
        ">
          <span className="text-base text-gray-900">Back</span>
          <input
       
          checked={dataForm.painArea.includes("back")}
            onChange={(e) =>  

              {
                const {value,checked} = e.target

                setDataForm((prev) => ({
                  ...prev,
                  painArea:checked? [...prev.painArea, value]:prev.painArea.filter((item) => item !== value),
                }));
              }

             }
            type="checkbox"
            name="painArea"
            value="back"
            className="w-5 h-5 text-[#3d4f3a] focus:ring-[#3d4f3a]"
          />
        </label>

        {/* Other */}
        <label className="
          flex items-center justify-between
          w-full px-4 py-4
          border border-gray-300 rounded-xl
          bg-white
          cursor-pointer
          hover:bg-gray-50
          transition-all
        ">
          <span className="text-base text-gray-900">Other</span>
          <input
         
          checked={dataForm.painArea.includes("other")}
            onChange={(e) =>  

              {
                const {value,checked} = e.target

                setDataForm((prev) => ({
                  ...prev,
                  painArea:checked? [...prev.painArea, value]:prev.painArea.filter((item) => item !== value),
                }));
              }

             }
            type="checkbox"
            name="painArea"
            value="other"
            className="w-5 h-5 text-[#3d4f3a] focus:ring-[#3d4f3a]"
          />
        </label>

        {/* Other - Text Input (se muestra si seleccionan "Other") */}
             
             <div
  className={`
    pl-4
    overflow-hidden
    transition-all duration-300 ease-in-out
    ${isOtherClicked
      ? "max-h-40 opacity-100 translate-y-0"
      : "max-h-0 opacity-0 -translate-y-2"}
  `}
>
  <label className="block text-sm font-normal text-gray-500 mb-2">
    Please specify
  </label>

  <textarea
  value={dataForm.painAreaOther}
    onChange={(e) => {
      const {value} = e.target

      setDataForm((prev) => ({
        ...prev,
        painAreaOther:value
      }))

    }}
    placeholder="Type here"
    rows={3}
    className="
      w-full px-4 py-3
      border border-gray-300 rounded-xl
      bg-white
      text-gray-900 text-base
      placeholder:text-gray-400
      focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-300
      resize-none
      transition-all
    "
  />
</div>
      </div>

      {/* Continue Button */}

            <ContinueButton isValid={isValid} />

      {/* Disclaimer */}
      <p className="text-sm text-gray-500 text-center mt-6 px-4 leading-relaxed">
        This is an in-home treatment. If you are not located in one of our service areas, travel will be required.
      </p>

      <StepIndicator />
    </div>
  );
}

export default PainArea
