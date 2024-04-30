import BestSelling from "@/components/best-selling";
import CallToAction from "@/components/call-to-action";
import Feature from "@/components/feature";
import FeaturedProduct from "@/components/featured-products.jsx";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import Hero from "@/components/hero";
import NewsLetterSubscription from "@/components/news-letters";
import Testimonies from "@/components/testimonies";
import WhyUs from "@/components/why-us";

export default function Home() {
  return (
    <div className="relative bg-gray-50">
      <Header />
      <Hero />
      <Feature />
      <FeaturedProduct />
      <Gallery />
      <BestSelling />
      <CallToAction />
      <Testimonies />
      <WhyUs />
      <NewsLetterSubscription />
      <Footer />
      {/* <ProductList /> */}

      {/* <WebsitedemosnetByHtmltode /> */}
    </div>
  );
}
