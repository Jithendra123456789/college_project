// src/components/ProductDetailPage.js
import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import { useCart } from "../context/CartContext";
import SuggestedProductsBanner from "./SuggestProducts";
import VideoPlayer from "./VideoPlayer";
import "../styles/ProductDetailPage.css";
const ProductDetailPage = ({ match }) => {
  const { addToCart } = useCart();
  const productId = match.params.id; // Access the product ID from the URL params
  const products = {
    1: {
      id: 1,
      name: "EV Vehicles",
      description:
        "Explore our range of electric vehicles, crafted on campus by university students. These eco-friendly EVs feature cutting-edge battery technology for extended range, solar-powered charging, and smart monitoring systems, all housed in sleek, recycled frames. Ideal for campus mobility, they embody sustainability and innovation. Perfect for reducing your carbon footprint in style!",
      price: "INR 10050.00",
      imageUrl:
        "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2022/10/6%20(9)_1666108920.png",
      specifications: [
        "Colour Shown: White/White/Black",
        "SStyle: DV0788-103",
        "Specification 3",
      ],
    },
    2: {
      id: 2,
      name: "Campus Grown Plants",
      description:
        "Discover our collection of campus-grown plants, nurtured by university students in our sustainable gardens. These plants range from vibrant flowers to robust herbs and vegetables, all cultivated using organic practices. Perfect for adding a touch of green to your space or starting your own garden, our plants promote biodiversity and environmental responsibility. Bring home a piece of campus nature today!",
      price: "INR 175.00",
      imageUrl:
        "https://www.srisatyanarayananursery.in/web_assets/uploads/1551459747.jpg",
      specifications: [
        "Colour Shown: Black/White",
        "Style: DR5540-002",
        "Specification 3",
      ],
    },
    3: {
      id: 3,
      name: "Uniforms",
      description:
        "Elevate your wardrobe with our exclusive range of campus-made uniforms, designed and produced by university students. Crafted from high-quality, sustainable fabrics, these uniforms offer both comfort and durability. Featuring the university's signature colors and logo, they're perfect for showcasing school spirit. Ideal for daily wear, sports teams, or special university events, our uniforms blend style with tradition.",
      price: "INR 775.00",
      imageUrl:
        "https://tiimg.tistatic.com/fp/1/008/596/college-uniform-for-boy-and-girl-272.jpg",
      specifications: [
        "Colour Shown: Black/Black/Wolf Grey",
        "Style: CJ9684-002",
        "Specification 3",
      ],
    },
  };
  const product = products[productId];

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    // Implement logic to add the product to the cart (e.g., use a state or dispatch an action)
    addToCart(product);
    console.log(`Added ${JSON.stringify(product)} to the cart`);
  };

  // Fetch and display details for the specific product using the productId

  return (
    <div>
      <Header />
      <div className="product-detail-page">
        <div className="product-image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="product-details">
          <h2>{product.name}</h2>
          <p className="price">{product.price}</p>
          <p className="description">{product.description}</p>
          <div className="specifications">
            <h3>Specifications:</h3>
            <ul>
              {product.specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <SuggestedProductsBanner></SuggestedProductsBanner>

          {/* <Link to="/">Back to Home</Link> */}
        </div>
      </div>
      <Banner
        imageUrl={
          "https://media.licdn.com/dms/image/D4D12AQEKUuDav1SyQg/article-cover_image-shrink_720_1280/0/1673003658363?e=2147483647&v=beta&t=XafyqWTYFeeAUBwXs-h54YvnHGDF5_6QIryac_l-tQc"
        }
        altText="Banner 1"
      ></Banner>
      {/* <VideoPlayer></VideoPlayer> */}
      <Footer></Footer>
    </div>
  );
};

export default ProductDetailPage;
