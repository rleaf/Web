function App() {
  var conf = {
    el: 'canvas',
    fov: 50,
    cameraZ: 400
  };
  var _THREE = THREE,
      WebGLRenderer = _THREE.WebGLRenderer,
      PerspectiveCamera = _THREE.PerspectiveCamera,
      OrbitControls = _THREE.OrbitControls,
      AmbientLight = _THREE.AmbientLight,
      DirectionalLight = _THREE.DirectionalLight,
      Scene = _THREE.Scene;

      console.log(_THREE);
}

App();
