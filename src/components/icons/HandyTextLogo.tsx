import React from "react";

const BRAND_NAME = "Parler";

const ParlerBrandMark = () => (
  <svg x="412" y="72" width="56" height="56" viewBox="0 0 64 64">
    <rect x="1" y="1" width="62" height="62" rx="15" fill="#1d1f24" />
    <rect x="26" y="10" width="12" height="25" rx="6" fill="#e4e7ed" />
    <path
      d="M20 32c1.5 9 6.5 13.5 12 13.5S42.5 41 44 32"
      fill="none"
      stroke="#e4e7ed"
      strokeWidth="4"
    />
    <path d="M32 45.5v5M25 51h14" stroke="#e4e7ed" strokeWidth="4" />
    <circle cx="48" cy="48" r="13" fill="#ed454b" />
    <path
      d="M43 47v-2a5 5 0 0 1 10 0v2"
      fill="none"
      stroke="#f2f3f6"
      strokeWidth="3"
    />
    <rect x="41.5" y="47" width="13" height="10" rx="2.5" fill="#f2f3f6" />
  </svg>
);

const HandyTextLogo = ({
  width,
  height,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 480 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Parler"
    >
      <text
        x="0"
        y="112"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="120"
        fontWeight="700"
        letterSpacing="-4"
        className="logo-primary"
      >
        {BRAND_NAME}
      </text>
      <ParlerBrandMark />
    </svg>
  );
};

export default HandyTextLogo;
