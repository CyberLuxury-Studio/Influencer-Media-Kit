"use client";

import Spline from '@splinetool/react-spline';

export function SplineHeroScene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Abstract geometric placeholder for 3D scene while loading, or if Spline fails */}
      <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_60s_linear_infinite] pointer-events-none"></div>
      <div className="absolute inset-4 rounded-full border border-secondary-container/20 animate-[spin_40s_linear_infinite_reverse] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>

      {/* Spline Scene */}
      <div className="w-full h-full flex items-center justify-center scale-75 md:scale-100 z-10">
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </div>
    </div>
  );
}
