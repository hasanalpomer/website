import { Hero } from "../Hero";
import { Pouleritme } from "../Pouleritme";
import Map from "../Map"
export function Hompage() {
  return (
    <>
    <div className="w-full">
        <Hero/>
        <div className="  max-w-6xl mx-auto">
          <Pouleritme/>
          <hr/>
          <hr/>
          <hr/>
          <hr/>
        <Map/>
        </div>
    </div>
     
    </>
  );
}
