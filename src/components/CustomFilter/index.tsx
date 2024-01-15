import { OptionType } from "../../types";
import Select from "react-select";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type FilterType = {
  title: string;
  options: OptionType[];
};

const index = ({ title, options }: FilterType) => {
  const [selected, setSelected] = useState<OptionType | null>();
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    // url'e eklenecek parametre ismi
    const key = title === "Yakıt Tipi" ? "fuel" : "year";

    if (selected?.value) {
      params.set(key, selected.value);
    } else {
      params.delete(key);
    }

    // url'i güncelle
    setParams(params);
  }, [selected]);

  return (
    <div className="w-fit">
      <Select
        onChange={(e: OptionType | null) => setSelected(e)}
        options={options}
        placeholder={title}
        className="text-black min-w-[100px]"
      />
    </div>
  );
};

export default index;
