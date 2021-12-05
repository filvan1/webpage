import React from 'react';
import Unity, {UnityContext} from 'react-unity-webgl';


const unityContext = new UnityContext({
    loaderUrl: "GameBuild/prism.loader.js",
    dataUrl: "GameBuild/prism.data",
    frameworkUrl: "GameBuild/prism.framework.js",
    codeUrl: "GameBuild/prism.wasm",
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
