import { useEffect, useRef, useState } from "react"
import circuitDiagram from "./test"

const Test1 = ()=>{
    const canvasRef = useRef()
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    // function drawComponent(component, ctx) {
    //     ctx.beginPath();
    //     ctx.rect(component.position.x, component.position.y, component.size.width, component.size.height);
    //     ctx.stroke();
  
    //     component.pins.forEach(pin => {
    //       ctx.beginPath();
    //       ctx.arc(
    //         component.position.x + pin.position.x,
    //         component.position.y + pin.position.y,
    //         5, 0, 2 * Math.PI
    //       );
    //       ctx.fill();
    //       ctx.stroke();
    //     });
    //   }

    function drawComponent(component,ctx) {
        const image = new Image();
        image.src = component.imagePath;
        image.onload = function () {
          ctx.drawImage(image, component.position.x, component.position.y, component.size.width, component.size.height);
  
          component.pins.forEach(pin => {
            ctx.beginPath();
            ctx.arc(
              component.position.x + pin.position.x,
              component.position.y + pin.position.y,
              5, 0, 2 * Math.PI
            );
            ctx.fill();
            ctx.stroke();
          });
        };
      }

    //   function drawConnection(connection,ctx) {
    //     const fromPin = getPinById(connection.from);
    //     const toPin = getPinById(connection.to);
  
    //     ctx.beginPath();
    //     ctx.moveTo(
    //       circuitDiagram.components[connection.from.componentId - 1].position.x + fromPin.position.x,
    //       circuitDiagram.components[connection.from.componentId - 1].position.y + fromPin.position.y
    //     );
    //     ctx.lineTo(
    //       circuitDiagram.components[connection.to.componentId - 1].position.x + toPin.position.x,
    //       circuitDiagram.components[connection.to.componentId - 1].position.y + toPin.position.y
    //     );
    //     ctx.stroke();
    //   }

    function drawConnection(connection, ctx) {
      // Find the starting component and pin
      const fromComponent = circuitDiagram.components.find(component => component.id === connection.from.componentId);
      const fromPin = fromComponent.pins.find(pin => pin.id === connection.from.pinId);
      const startX = fromComponent.position.x + fromPin.position.x;
      const startY = fromComponent.position.y + fromPin.position.y;
  
      // Find the ending component and pin
      const toComponent = circuitDiagram.components.find(component => component.id === connection.to.componentId);
      const toPin = toComponent.pins.find(pin => pin.id === connection.to.pinId);
      const endX = toComponent.position.x + toPin.position.x;
      const endY = toComponent.position.y + toPin.position.y;
  
      // Draw the wire
      ctx.beginPath();
      ctx.moveTo(startX, startY);
  
      // Determine the control points for the Bezier curve. This is an example; adjust as needed
      let cp1x = startX;
      let cp1y = startY + (endY - startY) / 2;
      let cp2x = endX;
      let cp2y = startY + (endY - startY) / 2;
  
      // Draw a Bezier curve for a smooth connection
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
  
      // Set the wire color to white and stroke the path
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;
      ctx.stroke();
  }
  
  
  
  

      function getPinById(pinInfo) {
        return circuitDiagram.components[pinInfo.componentId - 1].pins.find(pin => pin.id === pinInfo.pinId);
      }

useEffect(()=>{
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)
},[])

    useEffect(()=>{
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        circuitDiagram.components.forEach(component => drawComponent(component, ctx));
        circuitDiagram.connections.forEach(connection=>drawConnection(connection, ctx));
    },
    [circuitDiagram.components, circuitDiagram.connections, drawComponent, drawConnection])


    
    return <>
        <canvas ref={canvasRef} width={width}  height={height}>
            <p>This is a canvas</p>
        </canvas>
    </>
}

export default Test1