import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import React, { useState, useEffect } from "react";

const Home = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1080px)");

  return (
    <section id="home" className="mt-30 items-center justify-center md:flex md:justify-between md:items-center gap-16 md:h-full md:mt-20">
      <div className="z-10 mt-40 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full">
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src={require('../assets/h1.jpg')}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src={require('../assets/h1.jpg')}
          />
        )}
      </div>

      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <p className="text-5xl font-playfair z-10 text-center md:text-start">
          Focus Being Productive
          <span className="xs:relative xs:text-white xs:font-semibold z-20 xs:before: before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"></span>
        </p>

        <p className="mt-10 mb-7 text-5m text-center md:text-start text-3xl">
          Good things happen when you set your priorities straight.
        </p>
      </div>
    </section>
  );
};

export default Home;
