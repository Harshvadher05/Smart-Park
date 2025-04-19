import React from "react";
import Video from "../assets/mobile_final.mp4";

export default function About() {
  const restartVideo = () => {
    const video = document.getElementById("myVideo");
    video.currentTime = 0;
    video.play();
  };

  return (
    <div className="bg-[#C1A5A9] min-h-screen font-sans">

      <section className="grid md:grid-cols-2 gap-6 items-center p-6 md:p-12">
        {/* Left Side */}
        <div className="bg-[#d7c8cf] text-center p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-8">Why use SmartPark?</h2>

          {/* Feature Box */}
          <div className="bg-[#C1A5A9] border border-black mx-auto mb-6 p-4 w-[80%] rounded-md">
            <h3 className="text-xl font-semibold mb-4">Customizable</h3>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://img.icons8.com/clouds/100/sorting-options.png"
                alt="sorting-options"
                className="w-[60px] h-[60px]"
              />
              <p className="text-sm">
                Features can be quickly and easily added or tailored to specific needs.
              </p>
            </div>
          </div>

          <div className="bg-[#C1A5A9] border border-black mx-auto mb-6 p-4 w-[80%] rounded-md ml-auto">
            <h3 className="text-xl font-semibold mb-4">Easy to Use</h3>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://img.icons8.com/external-bearicons-outline-color-bearicons/64/external-Easy-to-Use-miscellany-texts-and-badges-bearicons-outline-color-bearicons.png"
                alt="easy-to-use"
                className="w-[50px] h-[50px]"
              />
              <p className="text-sm">
                Manage the entire parking area using your handheld device. No training required.
              </p>
            </div>
          </div>

          <div className="bg-[#C1A5A9] border border-black mx-auto p-4 w-[80%] rounded-md">
            <h3 className="text-xl font-semibold mb-4">Live Trends & Reports</h3>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://img.icons8.com/clouds/100/business-report.png"
                alt="business-report"
                className="w-[60px] h-[60px]"
              />
              <p className="text-sm">
                Built-in statistical tools help you use the data captured for further decision making.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Video */}
        <div className="flex justify-center">
          <video
            id="myVideo"
            width="600"
            height="600"
            autoPlay
            onEnded={restartVideo}
            className="rounded-lg"
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

