// components/giveaway/steps/PainArea.tsx

import { useData } from "../contexts/GiveawayContext";

export function PainArea() {

    const {nextStep,dataForm,setDataForm} = useData()



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
          
           onChange={(e) => setDataForm((prev) => ({
             ...prev,
             painArea:e.target.value
           }))}
            type="radio"
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
          onChange={(e) => setDataForm((prev) => ({
             ...prev,
             painArea:e.target.value
           }))}
            type="radio"
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
          onChange={(e) => setDataForm((prev) => ({
             ...prev,
             painArea:e.target.value
           }))}
            type="radio"
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
          onChange={(e) => setDataForm((prev) => ({
             ...prev,
             painArea:e.target.value
           }))}
            type="radio"
            name="painArea"
            value="other"
            className="w-5 h-5 text-[#3d4f3a] focus:ring-[#3d4f3a]"
          />
        </label>

        {/* Other - Text Input (se muestra si seleccionan "Other") */}
        <div className="pl-4">
          <label className="block text-sm font-normal text-gray-500 mb-2">
            Please specify
          </label>
          <textarea
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
      <button
      onClick={nextStep}
        className="
          w-full py-4 px-6 rounded-xl
          bg-[#3d4f3a] hover:bg-[#2f3f2c]
          text-white font-medium text-base
          transition-all duration-200
          flex items-center justify-center gap-2
          mt-8
        "
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

      {/* Disclaimer */}
      <p className="text-sm text-gray-500 text-center mt-6 px-4 leading-relaxed">
        This is an in-home treatment. If you are not located in one of our service areas, travel will be required.
      </p>
    </div>
  );
}

export default PainArea
