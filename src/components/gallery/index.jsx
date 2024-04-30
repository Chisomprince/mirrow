import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function Gallery() {
  return (
    <section>
      <div className="grid grid-cols-4 py-20">
        <div className="relative font-poppins" style={{ height: 500 }}>
          <img
            src="https://images.unsplash.com/photo-1656918151020-92bfec7bcc96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="dfd"
            class="w-full h-full inset-0 brightness-50 absolute object-cover"
          />
          <div className="absolute px-8 bottom-0 mb-12    flex gap-2 items-center text-white w-full z-10">
            <p className="text-2xl capitalize tracking-wider ">Living Room</p>
            <HiOutlineArrowNarrowRight size={20} />
          </div>
        </div>
        <div className="relative font-poppins" style={{ height: 500 }}>
          <img
            src="https://images.unsplash.com/photo-1656918151020-92bfec7bcc96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="dfd"
            class="w-full h-full inset-0 brightness-50 absolute object-cover"
          />
          <div className="absolute px-8 bottom-0 mb-12    flex gap-2 items-center text-white w-full z-10">
            <p className="text-2xl capitalize tracking-wider ">Living Room</p>
            <HiOutlineArrowNarrowRight size={20} />
          </div>
        </div>
        <div className="relative font-poppins" style={{ height: 500 }}>
          <img
            src="https://images.unsplash.com/photo-1656918151020-92bfec7bcc96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="dfd"
            class="w-full h-full inset-0 brightness-50 absolute object-cover"
          />
          <div className="absolute px-8 bottom-0 mb-12    flex gap-2 items-center text-white w-full z-10">
            <p className="text-2xl capitalize tracking-wider ">Living Room</p>
            <HiOutlineArrowNarrowRight size={20} />
          </div>
        </div>
        <div className="relative font-poppins" style={{ height: 500 }}>
          <img
            src="https://images.unsplash.com/photo-1656918151020-92bfec7bcc96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="dfd"
            class="w-full h-full inset-0 brightness-50 absolute object-cover"
          />
          <div className="absolute px-8 bottom-0 mb-12    flex gap-2 items-center text-white w-full z-10">
            <p className="text-2xl capitalize tracking-wider ">Living Room</p>
            <HiOutlineArrowNarrowRight size={20} />
          </div>
        </div>
      </div>
    </section>
  );
}
