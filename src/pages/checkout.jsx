import Header from "../components/Header";
import Image from "next/image";

function Checkout(props) {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="/images/banner-2.jpg"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h3 className="text-3xl border-b pb-4">Your Shopping Basket</h3>
          </div>
        </div>

        {/* right */}
        <div></div>
      </main>
    </div>
  );
}

export default Checkout;
