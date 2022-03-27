class WEBGL{
    
    cor(){
        if (!this.gl) {
            var canvas = document.getElementById("canvas-view");
            this.gl = canvas.getContext("webgl");
            if (!this.gl) {
            clearInterval(timer);
            alert(
                "Failed to get WebGL context.\n" +
                "Your browser or device may not support WebGL."
            );
                return;
            }
            
            this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        }
        function getRandomColor() {
            return [Math.random(), Math.random(), Math.random()];
        }
    
          // Get a random color value using a helper function.
        var color = getRandomColor();
          // Set the WebGLRenderingContext clear color to the
          // random color.
        this.gl.clearColor(color[0], color[1], color[2], 1.0);
          // Clear the context with the newly set color.
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }

    Draw2d(){
        alert('2d')
    }
    constructor(){
        const canvas = document.querySelector("#canvas-view");
        this.gl = canvas.getContext('webgl')
        if(!this.gl){
            alert("deu ruim rapaz");
            return;
        }
        this.gl.viewport(0, 0, this.gl.drawingBufferWidth, this.gl.drawingBufferHeight);
        this.gl.clearColor(0.0,0.0,0.0,1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT)
    }
}









function main(key = ""){
    
    a  = new WEBGL()

    const exemplos={
        c: ()=>{
            a.cor()
        },
        2: ()=>{
            a.Draw2d()
        }

    }
    if(exemplos[key]){
        exemplos[key]()
    }else{
        console.log("nenhum exercico selecionado");
    }
}

window.addEventListener('load', main)


window.addEventListener("keydown", function(event) {
    main(event.key)
});
// main()