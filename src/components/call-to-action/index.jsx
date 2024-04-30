export default function CallToAction() {
  return (
    <section class="pb-24 relative mt-20">
      <div className="flex">
        <div className="absolute bg-white shadow-2xl pb-16 top-32 left-28 py-12 px-16 max-w-xl ">
          <h1 className=" text-[40px] font-semibold">Sales up to 50% OFF</h1>

          <p className="mt-4 text- font-light leading-[1.8] font-roboto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            consequuntur perspiciatis id laboriosam dolor nam impedit voluptates
            dolore laborum delectus. In deleniti quae quaerat explicabo corporis
            eos temporibus sapiente quod?
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full  bg-rose-600 px-8 py-3 text-xs tracking-widest font-light uppercase text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Shop This Collection
            </a>
          </div>
        </div>
        <div className="w-3/12" />
        <div className="w-9/12 max-h-[75vh] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
