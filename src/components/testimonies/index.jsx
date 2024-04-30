"use client";

import { InstagramEmbed, TikTokEmbed, XEmbed } from "react-social-media-embed";

export default function Testimonies() {
  return (
    <section class="relative py-20 overflow-hidden">
      <div class=" mx-auto max-w-screen-lg  px-4 sm:px-6">
        <div className="flex gap-2 items-center">
          <div className="box-border w-[60px] h-px border-t-[1px] border-solid  border-primary" />
          <div className="text-xs uppercase font-roboto tracking-widest text-primary">
            Testimonials
          </div>
        </div>
        <h1 className="mt-10 text-[40px] font-semibold">What People Say</h1>
        <div className="mt-12">
          <div className="flex gap-4 justify-center">
            <XEmbed
              url="https://twitter.com/PixelAndBracket/status/1356633038717923333"
              width={325}
            />

            {/* <PinterestEmbed
              url="https://www.pinterest.co.uk/pin/875105771321194304/"
              width={250}
            /> */}
            <TikTokEmbed
              url="https://www.tiktok.com/@epicgardening/video/7055411162212633903"
              width={325}
            />
            <InstagramEmbed
              url="https://www.instagram.com/p/CUbHfhpswxt/"
              width={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
