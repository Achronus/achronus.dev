import "./App.css";
import About from "@components/about";
import { AboutDetails } from "@data/about";

function App() {
  return (
    <>
      <div className="m-10 grid gap-4 sm:grid-cols-12">
        <div className="grid sm:col-span-3 sm:px-10">
          <About {...AboutDetails} />
        </div>
        <div className="grid gap-4 grid-cols-2 sm:col-span-9">
          <div className="text-center bg-teal-500">Col 1</div>
          <div className="text-center bg-red-500">Col 2</div>
        </div>
      </div>
    </>
  );
}

export default App;
