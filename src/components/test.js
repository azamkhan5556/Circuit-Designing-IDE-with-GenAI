const circuitDiagram = {
  components: [
    {
      id: 1,
      type: "arduino",
      position: { x: 100, y: 100 },
      size: { width: 240, height: 260 },
      pins: [
        { id: 1, name: "5V", type: "power", position: { x: 240, y: 20 } },
        { id: 2, name: "GND", type: "power", position: { x: 240, y: 40 } },
        { id: 3, name: "D2", type: "digital", position: { x: 240, y: 60 } },
        { id: 4, name: "D3", type: "digital", position: { x: 240, y: 80 } }
      ],
      imagePath: "arduino.png"
    },
    {
      id: 2,
      type: "sound_sensor",
      position: { x: 400, y: 100 },
      size: { width: 60, height: 80 },
      pins: [
        { id: 1, name: "VCC", type: "power", position: { x: 0, y: 10 } },
        { id: 2, name: "GND", type: "power", position: { x: 60, y: 10 } },
        { id: 3, name: "OUT", type: "digital", position: { x: 30, y: 30 } }
      ],
      imagePath: "sound_sensor.png"
    },
    {
      id: 3,
      type: "relay",
      position: { x: 550, y: 300 },
      size: { width: 60, height: 80 },
      pins: [
        { id: 1, name: "VCC", type: "power", position: { x: 0, y: 20 } },
        { id: 2, name: "GND", type: "power", position: { x: 60, y: 20 } },
        { id: 3, name: "IN", type: "digital", position: { x: 30, y: 30 } }
      ],
      imagePath: "relay.png"
    }
  ],
  connections: [
    { from: { componentId: 2, pinId: 1 }, to: { componentId: 1, pinId: 1 } },
    { from: { componentId: 2, pinId: 2 }, to: { componentId: 1, pinId: 2 } },
    { from: { componentId: 2, pinId: 3 }, to: { componentId: 1, pinId: 3 } },
    { from: { componentId: 3, pinId: 1 }, to: { componentId: 1, pinId: 1 } },
    { from: { componentId: 3, pinId: 2 }, to: { componentId: 1, pinId: 2 } },
    { from: { componentId: 3, pinId: 3 }, to: { componentId: 1, pinId: 4 } }
  ]
};

export default circuitDiagram;



        
    
