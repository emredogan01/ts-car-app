import { MouseEventHandler } from "react";

export interface IButtonTypes {
  title: string;
  designs?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  btnType?: "submit" | "button";
  rIcons?: string;
}

export type carsType = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: "fwd" | "awd" | "4wd" | "rwd";
  fuel_type: "gas" | "diesel" | "electricity";
  highway_mpg: number;
  make: string;
  model: string;
  transmission: "a" | "m";
  year: number;
};

export type OptionType = {
  label: string;
  value: string;
};
