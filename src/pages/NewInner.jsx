import React, { useEffect, useState, useContext } from "react";
import Header from "../components/Header";

import surat from "../images/NewImg.png";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axiosInstance";
import formatDate from "../components/formatDate";
import { SebedimContext } from "../context/Context";

const NewInner = () => {
  const { dil } = useContext(SebedimContext);
  const { id } = useParams();
  console.log(id);
  const [newsData, setNewsData] = useState();
  async function getAllNews(params) {
    axiosInstance.get("/guest/news/getonenew/" + id).then((res) => {
      setNewsData(res?.data);
    });
  }
  useEffect(() => {
    getAllNews();
  }, []);

  // Output: 20 August 2024 12:25
  return (
    <div className="w-full px-6 lg:w-[60%] mx-auto">
      <Header
        header={dil == "en" ? "News" : "Habarlar"}
        visible={true}
        pathname={"/news-list"}
      />

      <div className="w-full">
        <div className="flex items-center justify-start gap-4 text-white font-[outfit-light] text-[14px] mb-5">
          <p>{formatDate(newsData?.createdAt)}</p>
        </div>

        <h1 className="text-white font-[outfit-bold] text-[25px] lg:text-[36px] mb-[50px] ">
          {dil == "en" ? newsData?.name_en : newsData?.name_tm}
        </h1>

        <div>
          <img src={newsData?.img} alt="surat" />
        </div>

        <p className="text-white font-[outfit-light] text-[16px] my-[50px]">
          {dil == "en" ? newsData?.desc_en : newsData?.desc_tm}
        </p>
      </div>
    </div>
  );
};

export default NewInner;
