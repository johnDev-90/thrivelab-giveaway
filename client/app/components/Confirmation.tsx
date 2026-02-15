import React from 'react'



const Confirmation = () => {

   
    
  return (
    <div className="text-center space-y-6 py-12">
      {/* Success Icon/Emoji */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-4">
        You're In!
      </h1>

      {/* Message */}
      <div className="max-w-md mx-auto space-y-4">
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          The winner will be announced on our instagram page{' '}
          <a 
            href="https://instagram.com/mythrivelab" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3d4f3a] font-medium hover:underline"
          >
            @mythrivelab
          </a>
        </p>

        <div className="border-t border-gray-200 pt-4 mt-6">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Thank you for sharing more about your health goals. Whether you're the lucky winner or not, this is the first step toward exploring what's possible with regenerative medicine.
          </p>
        </div>

        <p className="text-sm text-gray-600 pt-4">
          We'll be in touch with the results soon.
        </p>
      </div>

      {/* Optional: Close or Home button */}
      <div className="pt-8">
        <button className="
          px-8 py-3 rounded-xl
          bg-gray-100 hover:bg-gray-200
          text-gray-700 font-medium text-base
          transition-all duration-200
        ">
          Close
        </button>
      </div>
    </div>
  );
}

export default Confirmation
