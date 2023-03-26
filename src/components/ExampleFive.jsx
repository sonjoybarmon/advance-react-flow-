import ReactFlow, { Controls } from "reactflow";
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

const ExampleFive = () => {
  return (
    <div style={{ height: "700px" }}>
      <div>
        <h1 style={{ textAlign: "center", margin: "20px 0" }}>Controls</h1>
      </div>
      <ReactFlow
        defaultNodes={defaultNodes}
        defaultEdges={defaultEdges}
        fitView
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default ExampleFive;
