
let gl;

function cor(){
    // console.log("cor");
    if (!gl) {
        var canvas = document.getElementById("canvas-view");
        gl = canvas.getContext("webgl");
        if (!gl) {
        clearInterval(timer);
        alert(
            "Failed to get WebGL context.\n" +
            "Your browser or device may not support WebGL."
        );
            return;
        }
        
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    }
    function getRandomColor() {
        return [Math.random(), Math.random(), Math.random()];
    }

      // Get a random color value using a helper function.
    var color = getRandomColor();
      // Set the WebGLRenderingContext clear color to the
      // random color.
    gl.clearColor(color[0], color[1], color[2], 1.0);
      // Clear the context with the newly set color.
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.addEventListener("keydown", function(event) {
    cor(event.key)
    // console.log("key");
    if(event.key == "c"){

    }
});