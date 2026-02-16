function LoadingOverlay() {
  return (
    <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl z-50">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin mb-4" />
      <p className="text-gray-700 font-medium">Saving your information...</p>
    </div>
  );
}

export default LoadingOverlay;
