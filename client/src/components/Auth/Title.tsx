import React from "react";

const Title: React.FC<{ header: string; subtitle?: string }> = ({
  header,
  subtitle,
}) => {
  return (
    <div>
      <h1 className="text-3xl font-serif my-2">{header}</h1>
      {subtitle && <h4>{subtitle}</h4>}
    </div>
  );
};

export default Title;
