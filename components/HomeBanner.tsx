import React from "react";
import { Title } from "./ui/text";
import Link from "next/link";
import Image from "next/image";
import { banner_1 } from "@/images";

const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 bg-shop_light_pink rounded-lg px-10 lg:px-24 flex items-center justify-between">
      <div className="mb-5">
        <Title>Get 20% off on your first order</Title>
        <Link
          href={"/shop"}
          className="bg-shop_dark_green text-white/90 py-2 px-5 rounded-md mt-4 text-semibold hover:text-white text-sm hover:bg-shop_dark_green/90 hoverEffect"
        >
          Buy Now
        </Link>
      </div>
      <div>
        <Image
          src={banner_1}
          alt="banner_1"
          className="hidden md:inline-flex w-96"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
