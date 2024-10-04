import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <h1 className="text-2xl font-bold underline">
        Currently Developing this website, please check in future to see updates
      </h1>
      <div className="p-4">
        <button className="btn-primary">Button from Flowbite</button>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
