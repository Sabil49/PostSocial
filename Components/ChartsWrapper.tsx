import React, { forwardRef } from "react";

export interface ChartsWrapperProps {
  children: React.ReactNode;
  // other props if needed
}

// 👇 Wrap with forwardRef
const ChartsWrapper = forwardRef<HTMLDivElement, ChartsWrapperProps>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className="charts-wrapper">
        {children}
      </div>
    );
  }
);

ChartsWrapper.displayName = "ChartsWrapper"; // 👈 best practice when using forwardRef

export default ChartsWrapper;
