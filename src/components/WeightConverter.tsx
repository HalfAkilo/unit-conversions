import React from "react";
import { useTranslation } from "react-i18next";
import Converter from "./Converter";

const WeightConverter: React.FC = () => {
  const { t } = useTranslation();

  const weightUnits = {
    kilograms: 1,
    grams: 1000,
    milligrams: 1000000,
    pounds: 2.20462,
    ounces: 35.274,
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-3xl font-bold mb-4">{t("Weight Converter")}</h1>
      <Converter conversionRates={weightUnits} />
    </div>
  );
};

export default WeightConverter;
