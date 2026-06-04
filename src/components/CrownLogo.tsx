import React from "react";

interface CrownLogoProps {
  className?: string;
  variant?: "solid-red" | "transparent-red" | "plain";
}

export default function CrownLogo({ className = "w-full h-full", variant = "solid-red" }: CrownLogoProps) {
  // If the variant is plain, we just render the raw crown structure so it can be colored dynamically using Tailwind classes (e.g., text-brand-red)
  // Otherwise we render the exact white-crown-on-deep-red-square matching the user's uploaded logo.
  
  if (variant === "plain") {
    return (
      <svg
        id="crown-logo-plain-svg"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g fill="currentColor">
          {/* Main Crown Body */}
          <path d="M 23,71 C 23,71 18,52 6,32 C 16,33 22,44 26,48 C 30,36 41,36 50,47 C 59,36 70,36 74,48 C 78,44 84,33 94,32 C 82,52 77,71 77,71 Q 50,75 23,71 Z" />
          
          {/* Circular bulbous nodes on middle peak and upper left/right side tips */}
          <circle cx="50" cy="42" r="7.5" />
          
          {/* Bottom Bar Segment */}
          <path d="M 24,75 Q 50,79 76,75 L 75.5,78 Q 50,82 24.5,78 Z" />
        </g>
      </svg>
    );
  }

  // Exact matching premium white crown on red square format (user's uploaded logo)
  return (
    <svg
      id="crown-logo-square-svg"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Red container square matching the crown logo from the user's upload */}
      <rect width="100" height="100" rx="8" fill="#8B0000" />
      
      {/* Crown shape in pure white fill */}
      <g fill="#FFFFFF">
        {/* Main Crown Body */}
        <path d="M 23,69 C 23,69 18,51 6,32 C 16,33 22,44 26,48 C 30,36 41,36 50,47 C 59,36 70,36 74,48 C 78,44 84,33 94,32 C 82,52 77,69 77,69 Q 50,73 23,69 Z" />
        
        {/* Central main circular ball */}
        <circle cx="50" cy="41" r="7.5" />
        
        {/* Separated Bottom Base Line */}
        <path d="M 24,73 Q 50,77 76,73 L 75.5,76 Q 50,80 24.5,76 Z" />
      </g>
    </svg>
  );
}
