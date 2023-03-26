import BackgroundComponent from "./components/Background";
import BackgroundControl from "./components/BackgroundControl";
import Example from "./components/Example";
import ExampleFive from "./components/ExampleFive";
import ExampleFour from "./components/ExampleFour";
import ExampleThree from "./components/ExampleThree";
import ExampleTwo from "./components/ExampleTwo";

function App() {
  return (
    <div>
      <Example />
      <ExampleTwo />
      <ExampleThree />
      <ExampleFour />
      <ExampleFive />
      <BackgroundComponent />
      <BackgroundControl />
    </div>
  );
}

export default App;
