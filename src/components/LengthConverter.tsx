import React from "react";
import { useTranslation } from "react-i18next";
import Converter from "./Converter";

export const LengthConverter: React.FC = () => {
  const { t } = useTranslation();

  const lengthUnits = {
    meters: 1,
    kilometers: 0.001,
    centimeters: 100,
    millimeters: 1000,
    inches: 39.3701,
    feet: 3.28084,
    yards: 1.09361,
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="font-bold m-20">{t("Length Converter")}</h1>
      <Converter conversionRates={lengthUnits} />
    </div>
  );
};

export default LengthConverter;
