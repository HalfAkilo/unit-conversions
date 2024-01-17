import React, { useState, ChangeEvent } from "react";

interface InputValues {
  meters: string;
  kilometers: string;
  centimeters: string;
  millimeters: string;
  inches: string;
  feet: string;
  yards: string;
}

type InputValuesKeys = keyof InputValues;

export const LengthConverter: React.FC = () => {
  const [inputValues, setInputValues] = useState<InputValues>({
    meters: "",
    kilometers: "",
    centimeters: "",
    millimeters: "",
    inches: "",
    feet: "",
    yards: "",
  });

  const units = {
    meters: 1,
    kilometers: 0.001,
    centimeters: 100,
    millimeters: 1000,
    inches: 39.3701,
    feet: 3.28084,
    yards: 1.09361,
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
    convertLength(name as InputValuesKeys, value);
  };

  const convertLength = (
    changedUnit: InputValuesKeys,
    changedValue: string
  ) => {
    const inputValueFloat = parseFloat(changedValue);
    if (!isNaN(inputValueFloat)) {
      const converted = {} as InputValues;
      (Object.keys(units) as InputValuesKeys[]).forEach((unit) => {
        converted[unit] = (
          (inputValueFloat / units[changedUnit]) *
          units[unit]
        ).toFixed(2);
      });
      setInputValues({
        ...inputValues,
        ...converted,
      });
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-3xl font-bold mb-4">Length Converter</h1>
      <div className="flex flex-wrap justify-center mb-4">
        {(Object.keys(inputValues) as InputValuesKeys[]).map((unit) => (
          <div key={unit} className="flex flex-col items-center mr-4 mb-4">
            <input
              type="number"
              name={unit}
              value={inputValues[unit]}
              onChange={handleInputChange}
              className="border p-2 mb-2 text-blue-600"
              placeholder={`Enter ${unit}`}
            />
            <p>{unit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LengthConverter;
