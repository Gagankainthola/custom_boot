import React from "react";

const MainSection = ({ formImgUrl, text }) => {
  return (
    <section className="container flex md:flex-nowrap gap-6 py-4">
      <div className="w-full md:w-1/2">
        <img src={formImgUrl} alt="form-img" className="w-full rounded-lg" />
      </div>

      <div className="w-full md:w-1/2 bg-light border-2 border-primary rounded-lg p-4">
        <pre className="txt-secondary overflow-x-auto">
          <code className="whitespace-pre-wrap">{text}</code>
        </pre>
      </div>
    </section>
  );
};

export default MainSection;
