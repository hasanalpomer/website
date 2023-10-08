import { ItemCard } from "./ItemCard";

export function Pouleritme() {
  return (
    <>
      <div className=" w-full h-auto flex flex-col items-center py-6 ">
        <h3 className=" font-bold text-4xl mb-5  ">Populer Urunlerimiz</h3>
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
        </div>
      </div>
    </>
  );
}
