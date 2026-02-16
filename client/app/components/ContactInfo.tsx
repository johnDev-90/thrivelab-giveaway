"use client";

import { useState } from "react";
import { IMaskInput } from "react-imask";
import { z } from "zod";

import { stepOneSchema } from "../lib/validations";
import { useData } from "../contexts/GiveawayContext";
import ContinueButton from "./ContinueButton";
import StepIndicator from "./StepIndicator";

type StepOneFields = z.infer<typeof stepOneSchema>;

function ContactInfo() {
  const { dataForm, setDataForm } = useData();

  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
  }>({});

  const isValid = stepOneSchema.safeParse(dataForm).success;

  function validateField(field: keyof StepOneFields, value?: string) {
    const fieldSchema = stepOneSchema.shape[field];

    const result = fieldSchema.safeParse(value ?? dataForm[field]);

    setErrors((prev) => ({
      ...prev,
      [field]: result.success ? undefined : result.error.issues[0].message,
    }));
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
          Exclusive Giveaway
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-serif text-gray-900 leading-tight px-4">
          Win a $10,000 in-home stem cell treatment
        </h1>
      </div>

      <div className="space-y-4">
        <div className="   md:flex  gap-1 justify-between">
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              First Name
            </label>
            <input
              value={dataForm.firstName}
              onChange={(e) => {
                const value = e.target.value;
                setDataForm((prev) => ({ ...prev, firstName: value }));

                if (errors.firstName) {
                  validateField("firstName");
                }
              }}
              onBlur={() => validateField("firstName")}
              type="text"
              placeholder="First Name"
              className={`w-full px-4 py-3.5 border rounded-xl transition-all ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Last Name
            </label>
            <input
              value={dataForm.lastName}
              onChange={(e) => {
                const value = e.target.value;
                setDataForm((prev) => ({ ...prev, lastName: value }));

                if (errors.lastName) {
                  validateField("lastName");
                }
              }}
              onBlur={() => validateField("lastName")}
              type="text"
              placeholder="Last Name"
              className={`w-full px-4 py-3.5 border rounded-xl transition-all ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Your Instagram Handle
          </label>
          <input
            value={dataForm.instagramHandle}
            onChange={(e) =>
              setDataForm((prev) => ({
                ...prev,
                instagramHandle: e.target.value,
              }))
            }
            type="text"
            placeholder="e.g. @thrivelab"
            className="w-full px-4 py-3.5 border border-gray-300 rounded-xl"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">Phone</label>
          <IMaskInput
            mask="(000) 000-0000"
            value={dataForm.phone}
            onAccept={(value: string) => {
              setDataForm((prev) => ({ ...prev, phone: value }));

              if (errors.phone) {
                validateField("phone", value); //
              }
            }}
            onBlur={() => validateField("phone")}
            placeholder="(123) 456-7890"
            className={`w-full px-4 py-3.5 border rounded-xl transition-all ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">Email</label>
          <input
            value={dataForm.email}
            onChange={(e) => {
              const value = e.target.value;
              setDataForm((prev) => ({ ...prev, email: value }));

              if (errors.email) {
                validateField("email");
              }
            }}
            onBlur={() => validateField("email")}
            type="email"
            placeholder="Your email address"
            className={`w-full px-4 py-3.5 border rounded-xl transition-all ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      <ContinueButton isValid={isValid} />

      <p className="text-sm text-gray-500 text-center mt-6 px-4 leading-relaxed">
        This is an in-home treatment. If you are not located in one of our
        service areas, travel will be required.
      </p>

      <StepIndicator />
    </div>
  );
}

export default ContactInfo;
