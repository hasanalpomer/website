import image from "../Images/ai-generated-8239322_1280.png";
import first from "../Images/first.png";
import cargo from "../Images/cargo.png";

export function Hero() {
    

    return (
        <>
             <div className="w-full h-[750px]   relative  flex justify-center   ">
        <div className=" flex flex-col gap-7 absolute w-[1300px] h-[600px] my-[100px] ">
          <div className=" h-28  flex  w-full flex-col justify-center items-center">
            <h1 className="text-[60px] font-semibold text-white">
              Hasan Alp Omer
            </h1>
            <h2 className="text-[60px] font-semibold text-white">Makina</h2>
          </div>
          <div className=" w-full h-11 flex justify-center itm mt-[200px]">

            <ul className="flex w-[600px] justify-between items-center text-2xl font-medium " >
              <li>
             
                <div className=" flex ">
               
                  <img className="w-[60px] h-[60px]" src={first} />{" "}
                  <div className="text-white  gap-1 flex flex-col ">
                    #1 Kalite <span className="text-sm">Herzaman</span>
                  </div>
                </div>
              </li>
              <li>
               
                <div className=" flex ">
            
                  <img className="w-[60px] h-[60px]" src={cargo} />
                  <div className="text-white  gap-1  flex flex-col">
                    100+ <span className="text-sm">Basarili gonderim</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <img src={image} className="w-full h-full  object-cover " />
      </div>
        </>
    )
}
