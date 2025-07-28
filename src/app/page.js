import Base from "./components/Base";
import Bottom from "./components/Bottom";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
    <div className="container w-11/12 mx-auto my-8 grid gap-6">
      {/* First section */}
      <Base/>

      {/* Second section */}
      <Bottom/>
    </div>
    
    </>
  );
}
