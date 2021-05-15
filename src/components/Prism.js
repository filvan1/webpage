import React from 'react';
import Unity, {UnityContext} from 'react-unity-webgl';


const unityContext = new UnityContext({
    loaderUrl: "Build/prism.loader.js",
    dataUrl: "Build/prism.data",
    frameworkUrl: "Build/prism.framework.js",
    codeUrl: "Build/prism.wasm",
  });

  /*unityContext.on("canvas", (canvas) => {
    canvas.width = 1000;
    canvas.height = 500;
  });*/

 const Prism = () => {
    return (
        <Unity unityContext={unityContext}
        style={{ width: "80%", height: "50%" }}
        />
    )
}

export default Prism;
