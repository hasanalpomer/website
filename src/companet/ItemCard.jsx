import urun1 from "../Images/urun1.jpg";

export function ItemCard() {
    

    return (
        <>
               <div className="max-w-xs group hover:bg-gray-100 border hover:border-sky-800 border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#" className="w-full">
              <img
                className="rounded-t-lg  w-full mx-auto  max-h-[250px]"
                src={urun1}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Badem Soyma Makinesi
                </h5>
              </a>
              <p className="mb-3  text-gray-700 dark:text-gray-400">
                Urun Kodu: BKM-6058
              </p>
              <p className="mb-3  text-gray-700 dark:text-gray-400">
                Fiyat:26.5000 TL
              </p>
              <div className="flex items-center justify-between">
              
                <a
                  href="https://wa.me/905436915964"
                  className="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  iletisime gec
                 
               
                </a>
                <a
                  href="#"
                  className="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                 Urunun bilgisi
               
                </a>
              </div>
              
            </div>
          </div>
        </>
    )
}
