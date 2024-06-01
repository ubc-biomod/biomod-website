import React from "react";

const Sponsors = () => {
  const steps = [0.25, 0.5, 1, 0.5, 0.25];

  return (
    <div className="flex flex-col gap-8">
      {steps.map((opacity, i) => {
        return <FakeSponsor key={i} style={{ opacity: opacity }} />;
      })}
    </div>
  );
};

const FakeSponsor = ({ style }: { style?: React.CSSProperties }) => (
  <div className="flex gap-4 overflow-hidden">
    {Array.from(Array(7)).map((_, i) => (
      <div className="w-40 h-32 bg-primary" style={style} key={i}></div>
    ))}
  </div>
);

export default Sponsors;
