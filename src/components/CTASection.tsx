import React from "react";

const page = () => {
  return <div className="border-8 max-w-6xl mx-auto rounded-3xl border-green-300/15 mt-6 backdrop-blur-sm ">

    <div className="w-full flex flex-col justify-start bg-gradient-to-tr from-gray-950 to-green-500 max-w-6xl mx-auto h-max py-20 p-8 relative overflow-hidden rounded-2xl ">
    <h1 className="text-5xl font-bold text-white mb-2">Ace Your Next Interview with AceMock!</h1>
    <p className="text-gray-100 max-w-2xl mb-6">
        Sharpen your interview skills with realistic AI-driven mock interviews. Get instant feedback and expert insights to level up your confidence and performance.
    </p>
    
    <div className="flex gap-4">
        <button className="px-6 py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Start Free Trial →
        </button>
        <button className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:bg-opacity-10 transition-all">
            See How It Works
        </button>
    </div>

    {/* Decorative elements */}
    <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-white bg-opacity-10"></div>
    <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-white bg-opacity-5"></div>
</div>
  </div>
};

export default page;
