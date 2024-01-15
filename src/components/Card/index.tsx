import React, { useState } from "react";
import { carsType } from "../../types";
import CardInfo from "./CardInfo";
import CustomButton from "../CustomButton";
import DetailModal from "./DetailModal";
import { generateImage } from "../../utils";

interface ICardProps {
  data: carsType;
}

const index = ({ data }: ICardProps) => {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  return (
    <div className="car-card group">
      {/* araba ismi */}
      <h2 className="car-card__content-title">
        {data.make} {data.model}
      </h2>
      {/* fiyat alanı */}
      <p className="flex mt-6 text-[32px]">
        <span className="text-[16px] font-semibold">₺</span>
        {Math.round(Math.random() * 4300) + 500}
        <span className="text-[16px] font-medium self-end">/gün</span>
      </p>
      {/* resim alanı */}
      <div className="relative w-full h-40 my-3 object-contain">
        <img
          src={generateImage(data)}
          alt="cars-pic"
          className="w-full h-full object-contain"
        />
      </div>
      {/* alt kısım  */}
      <div className="w-full mt-2 flex relative">
        <div className="mt-2 w-full flex justify-between text-gray group-hover:invisible">
          <CardInfo
            title={data.transmission === "a" ? "Automatic" : "Manuel"}
            icon="./steering-wheel.svg"
          />
          <CardInfo title={data.drive.toUpperCase()} icon="./tire.svg" />
          <CardInfo title={data.city_mpg + "MPG"} icon="./gas.svg" />
        </div>
        <div className="car-card__btn-container ">
          <CustomButton
            rIcons="/right-arrow.svg"
            title="Daha Fazla"
            designs="w-full py-[16px]"
            handleClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      {/* detal modal'ı */}
      <DetailModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        car={data}
      />
    </div>
  );
};

export default index;
