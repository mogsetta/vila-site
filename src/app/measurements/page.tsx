"use client";

import { useState } from "react";

export default function MeasurementsPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());

    await fetch("/api/measurements", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#0F1115] text-[#F3F4F6] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Form Submitted</h1>
          <p className="text-[#9CA3AF]">
            Thank you. Vila Cleaners has received your measurements.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0F1115] text-[#F3F4F6] px-6 py-20">
      <div className="max-w-3xl mx-auto bg-[#151922] p-8 rounded-2xl">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Alteration Measurement Authorization
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <input name="name" required placeholder="Full Name" className="input" />
          <input name="phone" required placeholder="Phone Number" className="input" />
          <input name="email" placeholder="Email" className="input" />

          <h2 className="mt-6 font-semibold">Measurements (in inches)</h2>

          {[
            "Bust",
            "Bust Point",
            "Under Bust",
            "Shoulder",
            "High Waist",
            "Low Waist",
            "Front Half Length",
            "Back Half Length",
            "Hip",
            "Seat",
            "Waist to Hip",
            "Waist to Seat",
            "Full Length",
            "Desired Length",
            "Bicep",
            "Sleeve Length",
          ].map((field) => (
            <input
              key={field}
              name={field}
              placeholder={field}
              className="input"
            />
          ))}

          <div className="mt-6">
            <label className="flex items-center gap-2">
              <input type="checkbox" required />
              <span className="text-sm text-[#9CA3AF]">
                I confirm these measurements are accurate and authorize Vila Cleaners to proceed.
              </span>
            </label>
          </div>

          <input
            name="signature"
            required
            placeholder="Type Full Name as Digital Signature"
            className="input mt-4"
          />

          <button
            type="submit"
            className="mt-6 bg-[#C6A84A] text-black py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Submit Measurements
          </button>
        </form>
      </div>
    </main>
  );
}