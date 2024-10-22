'use client';

import dynamic from 'next/dynamic';

const CanvasContainer = dynamic(() => import('@/components/threejs/canvas-container'), { ssr: false });

const ThreeJS = () => {
  return (
    <div className="flex-1 flex flex-col">
      <div className="container flex-1 flex flex-col">
        <div className="flex-1 flex flex-col space-y-6">
          <h1 className="text-6xl">ThreeJS</h1>
          <div className="flex-1">
            <CanvasContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeJS;
