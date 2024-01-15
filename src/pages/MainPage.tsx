import Hero from "../components/Hero";
import { useEffect, useState } from "react";
import { fetchCars } from "../utils/index";
import { carsType } from "../types";
import Card from "../components/Card";
import ShowMore from "../components/ShowMore";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import CustomFilter from "../components/CustomFilter";
import { fuels, years } from "../constants";

const MainPage = () => {
  const [params, setParams] = useSearchParams();
  // url'den limit parametresini al yoksa 5'e eşitle
  const limit = Number(params.get("limit")) || 5;

  // state ile tuttuğumuz verinin type'ı generic ile belirlenir
  const [cars, setCars] = useState<carsType[]>([]);

  useEffect(() => {
    // urldeki pütün parametrelerden obje oluşturma
    const paramsObj = Object.fromEntries(params.entries());
    console.log(paramsObj);
    fetchCars(paramsObj)
      .then((data: carsType[]) => setCars(data))
      .catch((err) => console.log(err));
  }, [params]);

  const isDataEmpty = cars.length < 1 || !cars;

  return (
    <div>
      <Hero />
      <div id="catalogue" className="mt-12 padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p className="">Beğenebileceğin arabaları keşfet!</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Üretim Yılı" options={years} />
            <CustomFilter title="Yakıt Tipi" options={fuels} />
          </div>
        </div>
        {/* listeleme alanı */}
        {isDataEmpty ? (
          <div className="home__error-container">
            <h2>Lütfen Araba Marka veya Model Seçin!</h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {cars?.map((data, index) => (
                <Card key={index} data={data} />
              ))}
            </div>
            <ShowMore limit={limit} isNext={limit < 30} />
          </section>
        )}
      </div>
    </div>
  );
};

export default MainPage;
