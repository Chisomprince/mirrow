export default function NewsLetterSubscription() {
  return (
    <section class="relative  overflow-hidden bg-white">
      <div class="">
        <div class="grid grid-cols-2 gap-16 ">
          <div class="w-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1656918151020-92bfec7bcc96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <div class="w-full p-6 h-full flex items-center">
            <div class="lg:max-w-lg">
              <div className="flex gap-2 items-center">
                <div className="box-border w-[60px] h-px border-t-[1px] border-solid  border-primary" />
                <div className="text-xs uppercase font-roboto tracking-widest text-primary">
                  SUBSCRIBE TO OUR NEWSLETTER
                </div>
              </div>

              <h1 className="mt-10 text-4xl font-semibold">
                See The Latest Collection & Get Special Offer
              </h1>

              <p className="mt-7 text- font-light leading-[1.8] font-roboto w-11/12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus consequuntur perspiciatis id laboriosam dolor nam
                impedit voluptates dolore laborum delectus.
              </p>

              <div className="mt-8 flex flex-wra gap-4 text-center">
                <input
                  className="border w-full text-sm text-black px-4"
                  placeholder="Email Address"
                />
                <a
                  href="#"
                  className="block w-full whitespace-nowrap  bg-rose-600 px-8 py-3 text-xs tracking-widest font-light uppercase text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Subscribe
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
        </div>
      </div>
    </section>
  );
}
