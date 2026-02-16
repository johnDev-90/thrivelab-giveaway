'use client'

import React from 'react'
import { useData } from '../contexts/GiveawayContext';
import ContinueButton from './ContinueButton';
import { stepFourSchema,finalSchema } from '../lib/validations';
import StepIndicator from './StepIndicator';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';


const InterestLevel = () => {



  const {nextStep, dataForm, setDataForm, initialDataForm} = useData()

  
   const isValid = stepFourSchema.safeParse(dataForm).success

  async function handleFinalSubmit(
) {
   
  const result = finalSchema.safeParse(dataForm);

  if (!result.success) {
    console.log(result.error.issues);
    return;
  }

  // Aquí sí envías al backend
  console.log("Formulario válido:", dataForm);

  try {
    const response = await fetch('http://localhost:3001/api/giveaway', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },body:JSON.stringify(dataForm)
    })

    const res = await response.json()
    console.log(res)

      if (!res.ok) {
        
       Swal.fire({
  title: "Oops!",
  text: res.message,

  
  // Personalización visual
  confirmButtonText: "Got it",
  confirmButtonColor: "#3d4f3a", // Verde del botón Continue
  
  // Animaciones
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  },
  
  // Estilo personalizado
  customClass: {
    popup: 'rounded-2xl shadow-2xl',
    title: 'text-2xl font-serif',
    confirmButton: 'px-8 py-3 rounded-xl font-medium',
  },
  
  // Opciones adicionales
  backdrop: true,
  allowOutsideClick: true,
});
        return
        
      }


      console.log('Datos cuardados en la base de datos')
   nextStep()

  setDataForm(initialDataForm)

  } catch (error) {
    console.log(error)
  }



  //mensaje de success

 //si base de datos mensaje success enviar a mensaje de completado.

 // debe haber spiner



 




  



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

      {/* Question */}
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
          If you don't win the giveaway, would you still be interested in learning more or receiving treatment?
        </h2>
        <p className="text-sm text-gray-500">
          Treatments typically start at $237/month or around $5,000 total.
        </p>
      </div>

      {/* Radio Options */}
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
      
      >Please select at least one option<span className="text-red-700 text-base font-bold">*</span></legend>
      <form
      
     
      className="space-y-3">
        {/* Option 1 */}
        <label className="
          flex items-start justify-between
          w-full px-4 py-4
          border border-gray-300 rounded-xl
          bg-white
          cursor-pointer
          hover:bg-gray-50
          transition-all
        ">
          <span className="text-base text-gray-900 pr-4">
            Yes, I'd like to explore treatment options
          </span>
          <input
          checked={dataForm.interestLevel === 'yes'}
            onChange={(e) => 
              setDataForm((prev) => ({
                ...prev,
                 interestLevel:e.target.value
              }))
             }
            type="radio"
            name="interestLevel"
            value="yes"
            className="w-5 h-5 mt-0.5 text-[#3d4f3a] focus:ring-[#3d4f3a] flex-shrink-0"
          />
        </label>

        {/* Option 2 */}
        <label className="
          flex items-start justify-between
          w-full px-4 py-4
          border border-gray-300 rounded-xl
          bg-white
          cursor-pointer
          hover:bg-gray-50
          transition-all
        ">
          <span className="text-base text-gray-900 pr-4">
            Possibly, depending on financing
          </span>
          <input

           checked={dataForm.interestLevel === 'maybe'}
            onChange={(e) => 
              setDataForm((prev) => ({
                ...prev,
                 interestLevel:e.target.value
              }))
             }
            type="radio"
            name="interestLevel"
            value="maybe"
            className="w-5 h-5 mt-0.5 text-[#3d4f3a] focus:ring-[#3d4f3a] flex-shrink-0"
          />
        </label>

        {/* Option 3 */}
        <label className="
          flex items-start justify-between
          w-full px-4 py-4
          border border-gray-300 rounded-xl
          bg-white
          cursor-pointer
          hover:bg-gray-50
          transition-all
        ">
          <span className="text-base text-gray-900 pr-4">
            I'm only interested if I win the giveaway
          </span>
          <input

          checked={dataForm.interestLevel === 'no'}
            onChange={(e) => 
              setDataForm((prev) => ({
                ...prev,
                 interestLevel:e.target.value
              }))
             }
          
            type="radio"
            name="interestLevel"
            value="no"
            className="w-5 h-5 mt-0.5 text-[#3d4f3a] focus:ring-[#3d4f3a] flex-shrink-0"
          />
        </label>
      </form>

      {/* Continue Button */}
      <button
         onClick={handleFinalSubmit}
     
        disabled={!isValid && true}
        className={`${!isValid && 'cursor-not-allowed bg-gray-400  '} w-full py-4 px-6 rounded-xl
          bg-[#3d4f3a] enabled:hover:bg-[#2f3f2c] cursor-pointer
          text-white font-medium text-base
          transition-all duration-200
          flex items-center justify-center gap-2
          mt-6`}>
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
     <StepIndicator />

      {/* Disclaimer */}
      <p className="text-sm text-gray-500 text-center mt-6 px-4 leading-relaxed">
        This is an in-home treatment. If you are not located in one of our service areas, travel will be required.
      </p>
    </div>
  );
}

export default InterestLevel
