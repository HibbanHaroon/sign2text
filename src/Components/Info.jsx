import React from "react";

const Info = () => {
  return (
    <div className="flex max-md:flex-col md:mx-24 md:gap-11">
      <div className="md:w-1/2 mt-11 mb-11 animate-fade-in-left max-sm:mx-5">
        <h1 className="headings">What is Sign2Text</h1>
        <p className="text text-justify">
          Sign2Text revolutionizes real-time sign language translation, bridging
          communication gaps between sign language users and non-signers.{" "}
          <br></br>
          <br></br>With static and dynamic modes, it accurately interprets a
          wide array of expressions. Powered by cutting-edge CNNs and LSTMs,
          integrated seamlessly with MediaPipe and OpenCV, Sign2Text ensures
          precise translation into written or spoken language. <br></br>
          <br></br>Pioneering dynamic translation and enabling full
          conversations with GPT-3.5 Turbo, Sign2Text sets a new standard for
          inclusivity. Its intuitive interface makes communication effortless
          for individuals with hearing impairments in any setting.
        </p>
      </div>
      <div className="md:w-1/2 mt-11 animate-fade-in-right max-sm:mx-5">
        <img src="/Images/info_img.webp" className="about_img" alt="" />
      </div>
    </div>
  );
};

export default Info;
