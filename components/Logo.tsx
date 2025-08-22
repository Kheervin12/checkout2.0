import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Logo = ({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
    <Link href={"/"} className="inline-flex">
      <Image
        src="/images/checkout_logo.png"
        alt="logo"
        width={30}
        height={1}
      />
      <h2
        className={cn(
          "ml-0 text-2xl text-shop_dark_green font-black tracking-wider uppercase hover:text-shop_light_green hoverEffect group font-sans",
          className
        )}
      >
        Checkou
        <span
          className={cn(
            "text-shop_light_green group-hover:text-shop_dark_green hoverEffect",
            spanDesign
          )}
        >
          t
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
