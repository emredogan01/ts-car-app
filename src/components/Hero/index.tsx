import CustomButton from "../CustomButton";
import { motion } from "framer-motion";

const index = () => {
  //todo
  const flyTo = () => {};

  return (
    <div className="hero ">
      <div className="flex-1 pt-36 padding-x max-h-[920px]">
        <h1 className="hero__title">Özgürlüğü Hisset, Yolculuğa Başla!</h1>
        <p className="hero__subtitle text-gray-300">
          Altın standartta bir hizmetle unutulmaz bir yolculuğa hazır mısın ?
          Araç kiralama deneyimini Altın seçenekleri ile taçlandırarak her anı
          özel kılabilirsin.
        </p>
        <CustomButton
          title="Arbaları Keşfet"
          designs="mt-10"
          handleClick={flyTo}
        />
      </div>
      <div className="w-100 flex justify-center">
        <motion.img
          initial={{ translateX: 300 }}
          whileInView={{ translateX: 0 }}
          transition={{ duration: 0.9 }}
          src="/hero.png"
          alt="banner"
          className="img-fluid object-contain"
        />
      </div>
    </div>
  );
};

export default index;
