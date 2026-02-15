'use client'
import { useState, useEffect } from "react";

import { stepOneSchema } from "../lib/validations";

import { useData } from "../contexts/GiveawayContext";
import ContinueButton from "./ContinueButton";




function ContactInfo() {




  const {dataForm,setDataForm} = useData()

  const [emailError, setEmailError] = useState<string>('')

 

  const isValid = stepOneSchema.safeParse(dataForm).success

  const result = stepOneSchema.safeParse(dataForm)



  useEffect(() => {

    if (isValid) {
      setEmailError('')
    }

  },[isValid])
 

 function handleEmailError(){

   if (result.error?.issues[0].code === 'invalid_format') {
    setEmailError(result.error?.issues[0].message)
      
      return
  }

  
  }


 

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

      {/* Form Fields */}
      <div className="space-y-4">
        {/* First Name & Last Name - Side by side en desktop, stack en mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="block text-sm font-normal text-gray-700 mb-2">
              First Name
            </label>
            <input
            value={dataForm.firstName}
            onChange={(e) => setDataForm((prev) => ({
              ...prev,
              firstName:e.target.value
            }))}
              type="text"
              placeholder="First Name"
              className="
                w-full px-4 py-3.5
                border border-gray-300 rounded-xl
                bg-white
                text-gray-900 text-base
                placeholder:text-gray-400
                focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-300
                transition-all
              "
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-normal text-gray-700 mb-2">
              Last Name
            </label>
            <input
            value={dataForm.lastName}
            onChange={(e) => setDataForm((prev) => ({
              ...prev,
              lastName:e.target.value
            }))}
              type="text"
              placeholder="Last Name"
              className="
                w-full px-4 py-3.5
                border border-gray-300 rounded-xl
                bg-white
                text-gray-900 text-base
                placeholder:text-gray-400
                focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-300
                transition-all
              "
            />
          </div>
        </div>

        {/* Instagram Handle */}
        <div>
          <label className="block text-sm font-normal text-gray-700 mb-2">
            Your Instagram Handle
          </label>
          <input
          value={dataForm.instagramHandle}
          onChange={(e) => setDataForm((prev) => ({
            ...prev,
            instagramHandle:e.target.value
          }))}
            type="text"
            placeholder="e.g. @thrivelab"
            className="
              w-full px-4 py-3.5
              border border-gray-300 rounded-xl
              bg-white
              text-gray-900 text-base
              placeholder:text-gray-400
              focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-300
              transition-all
            "
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-normal text-gray-700 mb-2">
            Email
          </label>
          <input
          value={dataForm.email}
          onChange={(e) => setDataForm((prev) => ({
            ...prev,
            email:e.target.value
          })) }
          onBlur={ () => handleEmailError()}
            type="email"
            placeholder="Your email address"
            className="
              w-full px-4 py-3.5
              border border-gray-300 rounded-xl
              bg-white
              text-gray-900 text-base
              placeholder:text-gray-400
              focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-gray-300
              transition-all
            "
          />
          <p className="text-xs font-light text-red-700">{emailError}</p>
        </div>
      </div>

      {/* Continue Button */}
 
            <ContinueButton isValid={isValid} />
      {/* Disclaimer Text */}
      <p className="text-sm text-gray-500 text-center mt-6 px-4 leading-relaxed">
        This is an in-home treatment. If you are not located in one of our service areas, travel will be required.
      </p>

      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-3 mt-8">
        {/* Back Arrow */}
        <button 
          disabled 
          className="p-2.5 rounded-lg text-gray-300 cursor-not-allowed"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Step Counter */}
        <div className="px-6 py-2 bg-gray-200 rounded-full">
          <span className="text-sm font-medium text-gray-600">1 / 5</span>
        </div>

        {/* Forward Arrow */}
        <button className="p-2.5 rounded-lg text-gray-500 hover:bg-gray-100 transition-all">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ContactInfo
