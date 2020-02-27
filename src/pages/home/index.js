import React from "react";
import NavBar from "../../component/navbar";
import { Main } from "../../component/main";
import { Collections } from "../../component/collections";
import Popular from "../../component/popular";
import Testimonial from "../../component/testimonial";
import Footer from "../../component/footer";
import ContactUs from "../../component/contactUs";

const Home = () => {
  return <div>
      <NavBar/>
      <Main/>
      <Collections/>
      <Popular/>
      <Testimonial/>
      <ContactUs/>
      <Footer/>
  </div>;
};

export default Home;
