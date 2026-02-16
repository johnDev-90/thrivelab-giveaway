"use client";

import { FormData } from "../types/giveAwayTypes";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type DataContextType = {
  dataForm: FormData;
  step: number;
  setDataForm: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
  prevStep: () => void;
  initialDataForm: FormData;
};

const initialDataForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  instagramHandle: "",
  painArea: [],
  painAreaOther: "",
  whyNotYet: [],
  interestLevel: "",
};

export const DataContext = createContext<DataContextType | undefined>(
  undefined,
);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [dataForm, setDataForm] = useState<FormData>(initialDataForm);
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  console.log(dataForm);

  useEffect(() => {
    const storedDataForm = localStorage.getItem("dataForm");

    if (storedDataForm) {
      setDataForm(JSON.parse(storedDataForm));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dataForm", JSON.stringify(dataForm));
  }, [dataForm]);

  return (
    <DataContext.Provider
      value={{
        dataForm,
        setDataForm,
        step,
        nextStep,
        prevStep,
        initialDataForm,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within DataProvider");
  }
  return context;
};
