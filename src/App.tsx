import "./App.css";
import About from "@components/about";
import { AboutDetails } from "@data/about";

function App() {
  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row">
        <About {...AboutDetails} />
        <div className="flex gap-4 justify-center align-middle content-center mt-5">
          <div className="w-full">Col 1</div>
          <div className="w-full">Col 2</div>
        </div>
      </div>
    </>
  );
}

export default App;
