import "./App.css";
import AddTudo from "./components/AddTudo";

function App() {
  return (
    <>
    <div className="flex flex-col justify-center items-center">

      <h1 className="text-2xl font-bold">
        Todo typescript learning project
      </h1>
      <AddTudo />
    </div>
    </>
  );
}

export default App;
