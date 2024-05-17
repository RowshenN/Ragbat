import React, { useState, useEffect, useContext } from "react";

import "./Gallery.css";
import Footer from "../../components/footer/Footer";
import GalleryCard from "./GalleryCard";
import { axiosInstance } from "../../utils/axiosInstance";
import { SebedimContext } from "../../context/Context";
import Address from "../../components/address/Address";
import Navigation2 from "../../components/Navigation2/Navigation2";
import telegram from "../../images/telegram.png";
import whatsapp from "../../images/whatsapp.png";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  // const [openSlide, setOpenSlide] = useState(false);
  // const [indexSlide, setIndexSlide] = useState(0);
  const { dil } = useContext(SebedimContext);
  useEffect(() => {
    getGallery();
  }, []);

  const getGallery = async () => {
    await axiosInstance
      .get("guest/gallery/getAll")
      .then((res) => {
        console.log(res.data);
        setGallery(res.data);
      })
      .catch((err) => console.log(err));
  };

  // console.log(gallery);

  // const nextSlide = () => {
  //   if (indexSlide == gallery.length - 1) {
  //     setIndexSlide(0);
  //   }
  //   setIndexSlide((prev) => prev + 1);
  //   console.log(indexSlide);
  // };

  // const prevSlide = () => {
  //   if (indexSlide == 0) {
  //     setIndexSlide(gallery.length - 1);
  //   }
  //   setIndexSlide((prev) => prev - 1);
  //   console.log(indexSlide);
  // };

  return (
    <React.Fragment>
      {/* <HomeMain /> */}
      <Address />
      <Navigation2 />
      <div className="gallery_container">
        <div data-aos="zoom-in-right" className="gallery_inner_container">
          {gallery.map((item, i) => {
            return (
              <React.Fragment>
                <GalleryCard
                  key={item.id + "t"}
                  img={item.img}
                  index={i}
                  // setIndexSlide={setIndexSlide}
                  header={
                    dil === "tm"
                      ? item?.name_tm
                      : dil === "ru"
                      ? item?.name_ru
                      : item?.name_en
                  }
                  // setOpenSlide={setOpenSlide}
                />
              </React.Fragment>
            );
          })}
        </div>

        {/* {openSlide && (
          <div data-aos="fade-up" className="gallery_image_slider">
            <div className="gallery_image_slider_inner">
              <button
                onClick={() => setOpenSlide(false)}
                className="gallery_image_cancel"
              >
                <img src={cancel} alt="cancel" />
              </button>
              <button
                className="prevButton"
                onClick={() => prevSlide()}
                style={{ top: "47%", left: "-8%" }}
              >
                <FaArrowLeft />
              </button>
              <img
                data-aos="zoom-out"
                id="galley_img"
                src={gallery[indexSlide].img}
                alt="surat"
              />
              <button
                className="prevButton"
                onClick={() => nextSlide()}
                style={{ top: "47%", right: "-8%" }}
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        )} */}
        <div className="static_icons_div">
          <a
            className="bg-[#86B817] flex pt-3 pb-3 pr-3 pl-3 rounded-full items-center justify-center h-[50px] w-[50px] md:w-[75px] md:h-[75px] fixed right-[30px] bottom-[30px] md:right-[50px] md:bottom-[50px]"
            href="https://t.me/+993"
          >
            <img className="w-full h-full" src={telegram} alt="icon" />
          </a>
          <a
            className="bg-[#86B817] flex pt-3 pb-3 pr-3 pl-3 rounded-full items-center justify-center h-[50px] w-[50px] md:w-[75px] md:h-[75px] fixed left-[30px] bottom-[30px] md:left-[50px] md:bottom-[50px]"
            href="hhtps://wa.me/+993"
          >
            <img src={whatsapp} alt="icon" />
          </a>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default React.memo(Gallery);
