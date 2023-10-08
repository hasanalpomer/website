import { Outlet } from "react-router-dom";
import Header from "./companet/header";
import Footer from "./companet/Footer";

function App() {
  return (
    <>
      <div className=" min-h-[2500px] h-auto  flex flex-col">
        <Header />

        <div className=" flex flex-wrap   items-center justify-between  ">
          <Outlet />
        </div>
<div className="">
        <Footer />

</div>
      </div>
    </>
  );
}

export default App;
