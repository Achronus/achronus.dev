import "./App.css";
import AboutCard from "@/components/AboutCard";
import { AboutDetailsData } from "@data/about";

function App() {
  return (
    <>
      <div className="grid gap-4 lg:grid-cols-12 mb-10 lg:h-[65vh]">
        <div className="grid lg:col-span-4 xl:col-span-3 xl:px-10">
          <AboutCard {...AboutDetailsData} />
        </div>
        <div className="grid gap-4 grid-cols-2 lg:col-span-8 xl:col-span-9">
          <div className="text-center bg-teal-500">
            Col 1
          </div>
          <div className="text-center bg-red-500">
            Col 2
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
