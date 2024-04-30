export default function Hero() {
  return (
    <div className="absolut top-0 w-full h-full z-10">
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1656918151020-92bfec7bcc96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="dfd"
          class="w-full h-full inset-0 brightness-50 absolute object-cover"
        />
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex  lg:h-screen lg:items-center">
          <div className="max-w-xl text-white ">
            <div className="flex gap-2 items-center">
              <div className="box-border w-[27.9px] h-px border-t-[1px] border-solid border-primary " />
              <div className="text-xs uppercase font-roboto tracking-widest text-primary">
                Kayuu Furniture Store
              </div>
            </div>

            <h1 className="mt-12 text-5xl     font-semibold">
              Make Yourself At Home
            </h1>

            <p className="mt-8 text-base font-light leading-[1.8] font-roboto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              consequuntur perspiciatis id laboriosam dolor nam impedit
              voluptates dolore laborum delectus. In deleniti quae quaerat
              explicabo corporis eos temporibus sapiente quod?
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full  bg-rose-600 px-12 py-3 text-xs tracking-widest font-light uppercase text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Shop Now
              </a>

              {/* <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
