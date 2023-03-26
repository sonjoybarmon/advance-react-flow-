import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

const defaultNodes = [
  {
    id: "1",
    data: { label: "Hello" },
    position: { x: 500, y: 100 },
    type: "input",
  },
  {
    id: "2",
    data: { label: "World" },
    position: { x: 600, y: 400 },
  },
];
const defaultEdges = [
  { id: "1-2", source: "1", target: "2", label: "to the", type: "step" },
];

const BackgroundControl = () => {
  // const [variant, setVariant] = useState("cross");

  return (
    <div style={{ height: "700px", marginTop: "50px" }}>
      <div>
        <h1 style={{ textAlign: "center", margin: "20px 0" }}>
          Background + controls + label
        </h1>
      </div>
      <ReactFlow nodes={defaultNodes} edges={defaultEdges}>
        <Background variant={"dots"} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default BackgroundControl;
