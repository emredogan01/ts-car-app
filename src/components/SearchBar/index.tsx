import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ReactSelect from "react-select";
import { makes } from "../../constants";
import { OptionType } from "../../types";

type SearchProps = {
  styling: string;
};

const SearchButton = ({ styling }: SearchProps) => {
  return (
    <button className={`ml-3 z-10 ${styling}`}>
      <img src="magnifying-glass.svg" width={40} height={40} />
    </button>
  );
};

const index = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [params, setParams] = useSearchParams();

  const options: OptionType[] = useMemo(
    () =>
      makes.map((item) => ({
        label: item,
        value: item,
      })),
    [makes]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (make !== "" && model === "") {
      setParams({ make: make.toLowerCase() });
    } else if (make !== "" && model !== "") {
      setParams({ make: make.toLowerCase(), model: model.toLowerCase() });
    } else {
      alert("Lütfen marka model giriniz!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item text-black">
        <ReactSelect
          onChange={(e: OptionType | null) => e && setMake(e?.value)}
          options={options}
          className="w-full"
        ></ReactSelect>
        <SearchButton styling="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <img src="/model-icon.png" width={25} className="absolute ml-4" />
        <input
          type="text"
          className="searchbar__input text-black rounded"
          placeholder="Civic"
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton styling="sm:hidden" />
      </div>
      <SearchButton styling="max-sm:hidden" />
    </form>
  );
};

export default index;
