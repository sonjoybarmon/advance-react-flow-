import { useState } from "react";
import ReactFlow, { Background, Panel } from "reactflow";
import "reactflow/dist/style.css";

const defaultNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 250, y: 25 },
  },

  {
    id: "2",
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    type: "output",
    data: { label: "Output Node" },
    position: { x: 250, y: 250 },
  },
];
const defaultEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3", animated: true },
];

const BackgroundComponent = () => {
  const [variant, setVariant] = useState("cross");

  return (
    <div style={{ height: "700px" }}>
      <div>
        <h1 style={{ textAlign: "center", margin: "20px 0" }}>Background</h1>
      </div>
      <ReactFlow
        defaultNodes={defaultNodes}
        defaultEdges={defaultEdges}
        fitView
      >
        <Background color="#99b3ec" variant={variant} />
        <Panel>
          <div>variant:</div>
          <button onClick={() => setVariant("dots")}>dots</button>
          <button onClick={() => setVariant("lines")}>lines</button>
          <button onClick={() => setVariant("cross")}>cross</button>
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default BackgroundComponent;
