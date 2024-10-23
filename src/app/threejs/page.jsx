import CanvasContainer from '@/components/threejs/canvas-container';

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
