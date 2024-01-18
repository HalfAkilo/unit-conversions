import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface ConverterProps {
  conversionRates: Record<string, number>;
}

const Converter: React.FC<ConverterProps> = ({ conversionRates }) => {
  const { t } = useTranslation();
  const [inputValues, setInputValues] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateInputValues = (changedUnit: string, changedValue: string) => {
      const inputValueFloat = parseFloat(changedValue);
      if (!isNaN(inputValueFloat)) {
        const updatedValues = {} as Record<string, string>;
        Object.keys(conversionRates).forEach((unit) => {
          updatedValues[unit] = (
            (inputValueFloat / conversionRates[changedUnit]) *
            conversionRates[unit]
          ).toFixed(2);
        });
        setInputValues(updatedValues);
      }
    };

    updateInputValues(Object.keys(conversionRates)[0], "0"); // Initialize with a default unit and value
  }, [conversionRates]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    unit: string
  ) => {
    const { value } = e.target;
    setInputValues({
      ...inputValues,
      [unit]: value,
    });
    updateInputValues(unit, value);
  };

  const updateInputValues = (changedUnit: string, changedValue: string) => {
    const inputValueFloat = parseFloat(changedValue);
    if (!isNaN(inputValueFloat)) {
      const updatedValues = {} as Record<string, string>;
      Object.keys(conversionRates).forEach((unit) => {
        updatedValues[unit] = (
          (inputValueFloat / conversionRates[changedUnit]) *
          conversionRates[unit]
        ).toFixed(2);
      });
      setInputValues(updatedValues);
    }
  };

  return (
    <div className="flex flex-wrap justify-center mb-4">
      {Object.keys(conversionRates).map((unit) => (
        <div key={unit} className="flex flex-col items-center mr-4 mb-4">
          <input
            type="number"
            value={inputValues[unit] || ""}
            onChange={(e) => handleInputChange(e, unit)}
            className="border p-2 mb-2 text-blue-600"
            placeholder={t(`enterUnit`, { unit: t(`${unit}`) })}
          />
          <p>{t(`${unit}`)}</p>
        </div>
      ))}
    </div>
  );
};

export default Converter;
