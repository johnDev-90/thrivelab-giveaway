import React from 'react'

import { useData } from '../contexts/GiveawayContext'
import { stepTwoSchema } from "../lib/validations";

const StepIndicator = () => {
     const {step, prevStep, dataForm, nextStep} = useData()

     const isValid = stepTwoSchema.safeParse(dataForm).success


  return (
    <div className="flex items-center justify-center gap-3 mt-8">
        {/* Back Arrow */}
        <button 
        disabled={step < 1? true : false}
        onClick={ prevStep}
          
          className={`${step > 1? 'cursor-pointer p-2.5 rounded-lg text-black font-bold transition-all hover:translate-0.5' : 'cursor-not-allowed text-gray-200'}  `}
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
          <span className="text-sm font-medium text-gray-600">{step} / 5</span>
        </div>

        {/* Forward Arrow */}
        <button
        disabled={!isValid}
        onClick={nextStep}
        className="p-2.5 rounded-lg text-gray-300 cursor-not-allowed">
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
  )
}

export default StepIndicator
