// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
import HoverImage from "./HoverImage";
import HeadingText from "./HeadingText";
import "../styles/Home.css"; // Import the CSS file

const Home = () => {
  const bannerImage =
    "https://images.ctfassets.net/wowgx05xsdrr/FuyuOgIBjnHyehF0IR8zY/8109414c34065431d14886a5aad2f60a/Article-Header_Ecommerce_Website.jpg?fm=webp&w=3840&q=75";

  const hoverImages = [
    {
      src: "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2022/10/6%20(9)_1666108920.png",
      alt: "Image 1",
      productId: "1",
    },
    {
      src: "https://www.srisatyanarayananursery.in/web_assets/uploads/1551459747.jpg",
      alt: "Image 2",
      productId: "2",
    },
    {
      src: "https://tiimg.tistatic.com/fp/1/008/596/college-uniform-for-boy-and-girl-272.jpg",
      alt: "Image 3",
      productId: "3",
    },
  ];

  return (
    <div className="main">
      <Header />
      <div>
        <Link to="/list" className="banner-link">
          <Banner
            imageUrl={bannerImage}
            altText="Banner 1"
            bannerText="Welcome to our store!"
          />
        </Link>
        <HeadingText text="Here are the Few Products we Sell online" />
        <div className="hover-images-container">
          {hoverImages.map((image) => (
            <HoverImage key={image.productId} {...image} />
          ))}
        </div>
        {/* <div class="hero__media hero__media--163005536892e767ae">
          <video
            id="Mp4Video-163005536892e767ae"
            src="https://cdn.shopify.com/s/files/1/1132/3440/files/cutdown_1_1080_1.mp4?v=1630055283"
            loop=""
            muted=""
            playsinline=""
            autoplay="true"
          ></video>
        </div> */}
        {/* <Banner imageUrl={}></Banner> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
