import React from "react";
import CustomButton from "../CustomButton";
import { useSearchParams } from "react-router-dom";

type ShowMoreProps = {
  limit: number;
  isNext: boolean;
};

const index = ({ limit, isNext }: ShowMoreProps) => {
  const [params, setPrams] = useSearchParams();

  // url'deki limit paremetresine tıklandığında 5 ekler
  const handleNavigate = () => {
    // yeni limit
    const newLimit: number = limit + 5;

    // diğer paremetreleri silmeden yenisini ekle
    params.set("limit", String(newLimit));
    // url güncelle
    setPrams(params);
  };

  return (
    <div className="w-full flex-center gap-5 my-10">
      {isNext && (
        <CustomButton title="Daha fazla" handleClick={handleNavigate} />
      )}
    </div>
  );
};

export default index;
