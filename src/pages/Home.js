import React from "react";
import SliderCoupon from "../components/SliderCoupon";
import FlashDeal from "../components/FlashDeal";
import BannerSaleOne from "../components/BannerSaleOne";
import ProductIconOne from "../components/ProductIconOne";
import BannerSaleTwo from "../components/BannerSaleTwo";
import SliderCouponOne from "../components/SliderCouponOne";
import BannerSaleThird from "../components/BannerSaleThird";
import ProductIconTwo from "../components/ProductIconTwo";
import ShoppingTrends from "../components/ShoppingTrends";
import BannerSaleFour from "../components/BannerSaleFour";
import SuggestionsTiki from "../components/SuggestionsTiki";
import ProductListTiki from "../components/ProductListTiki";

function Home() {
    return (
        <div className="container">
        <SliderCoupon></SliderCoupon>
        <FlashDeal></FlashDeal>
        <BannerSaleOne></BannerSaleOne>
        <ProductIconOne></ProductIconOne>
        <BannerSaleTwo></BannerSaleTwo>
        <SliderCouponOne></SliderCouponOne>
        <BannerSaleThird></BannerSaleThird>
        <ProductIconTwo></ProductIconTwo>
        <ShoppingTrends></ShoppingTrends>
        <BannerSaleFour></BannerSaleFour>
        <SuggestionsTiki></SuggestionsTiki>
        <ProductListTiki></ProductListTiki>
      </div>
    )
}

export default Home
