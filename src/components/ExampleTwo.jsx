import React, { useCallback, useState } from "react";
import ReactFlow, { applyEdgeChanges, applyNodeChanges } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 150, y: 25 },
  },

  {
    id: "2",
    // you can also pass a React component as a label
    data: { label: <div style={{ color: "red" }}>Default Node</div> },
    position: { x: 150, y: 100 },
  },
  {
    id: "3",
    // type: "output",
    data: { label: "Output Node" },
    position: { x: 150, y: 170 },
  },
  {
    id: "4",
    // type: "input",
    data: { label: "Node Sonjoy" },
    position: { x: 150, y: 250 },
  },
];
const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3", animated: true },
  { id: "e3-4", source: "3", target: "4" },
];

const ExampleTwo = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  return (
    <div style={{ width: "100%", height: "100vh", padding: "100px 0" }}>
      <div>
        <h1 style={{ textAlign: "center", margin: "20px 0" }}>Example 2</h1>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      />
    </div>
  );
};

export default ExampleTwo;
