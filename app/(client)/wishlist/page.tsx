import NoAccess from "@/components/NoAccess";
import WishListProducts from "@/components/WishListProducts";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const WishListPage = async () => {
  const user = await currentUser();
  return (
    <>
      {user ? (
        <WishListProducts />
      ) : (
        <NoAccess
          details="Log in to view your wishlist items. 
        Don't miss out on products in your cart - complete your payment now!"
        />
      )}
    </>
  );
};

export default WishListPage;
