import { IoMdHeartEmpty } from "react-icons/io";

export default function BestSelling() {
  return (
    <section class="relative py-20 overflow-hidden">
      <div class=" mx-auto max-w-screen-xl  px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="w-6/12">
            <div className="flex gap-2 items-center">
              <div className="box-border w-[100px] h-px border-t-[1px] border-solid  border-primary" />
              <div className="text-xs uppercase font-roboto tracking-widest text-primary">
                BEST SELLER
              </div>
            </div>

            <h1 className="mt-10 text-[40px] font-semibold">
              Discover Our <br /> Most Selling Products
            </h1>
          </div>
          <div>
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full  bg-rose-600 px-8 py-3 text-xs tracking-widest font-light uppercase text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Shop This Collection
              </a>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap mt-12">
          {Array.from({ length: 8 }).map((item, index) => (
            <div key={index} class="w-full lg:w-1/4 p-3">
              <div class="group">
                <div
                  class="relative overflow-hidden mb-6"
                  style={{ height: 350 }}
                >
                  <a href="#">
                    <img
                      class=" object-cover w-full h-full transform group-hover:scale-105 transition duration-200"
                      src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </a>
                  <div class="absolute top-4 left-4 right-4">
                    <div class="flex justify-between flex-wrap gap-4">
                      <div class="flex flex-wrap gap-2">
                        <span class="h-fit bg-white rounded-full px-3 py-1 text-xs">
                          New arrival
                        </span>
                        <span class="h-fit bg-white rounded-full px-3 py-1 text-xs text-red-600">
                          30% OFF
                        </span>
                      </div>
                      <a
                        href="#"
                        class="bg-white border  text-primary border-gray-200 rounded-full hover:bg-gray-50 focus:ring-4 focus:ring-gray-200  text-sm font-semibold w-7 h-7 flex items-center justify-center transition duration-200"
                      >
                        <IoMdHeartEmpty />
                      </a>
                    </div>
                  </div>
                </div>
                <h2 class=" text- mb-2 text-center text-primary">
                  Lorem product name{" "}
                </h2>
                <p class="text-center text-gray-600">$145.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
