"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Data ───────────────────────────────────────────────────────────────────

const PACKAGES = [
  {
    id: "basics",
    tag: "01",
    label: "Headstand, Frogstand & Cartwheel Basics Workshop",
    price: "₹1,500",
    sessions: "2 sessions",
  },
  {
    id: "beginners",
    tag: "02",
    label: "Beginners Workshop (basic package)",
    price: "₹3,400",
    sessions: "4 sessions",
  },
  {
    id: "frontflip",
    tag: "03",
    label: "Front Flip/Handstand + Beginners Workshop",
    price: "₹4,400",
    sessions: "7 sessions",
  },
  {
    id: "backhandspring",
    tag: "04",
    label: "Back Handspring + Front Flip/Handstand + Beginners Workshop",
    price: "₹8,000",
    sessions: "7 sessions",
  },
  {
    id: "personal",
    tag: "05",
    label: "Personal Class (Includes Beginners + Backhandspring Workshop)",
    price: "₹15,000",
    sessions: "7 sessions",
  },
  {
    id: "home",
    tag: "06",
    label: "Personal class at your home",
    price: "Contact us",
    sessions: "+91 8891505435",
  },
];

const INDIAN_CITIES = [
  "Agra", "Ahmedabad", "Aizawl", "Ajmer", "Aligarh", "Allahabad", "Amravati",
  "Amritsar", "Aurangabad", "Bangalore", "Bareilly", "Bhopal", "Bhubaneswar",
  "Chandigarh", "Chennai", "Coimbatore", "Dehradun", "Delhi", "Dhanbad",
  "Durgapur", "Faridabad", "Ghaziabad", "Guwahati", "Gwalior", "Howrah",
  "Hubballi", "Hyderabad", "Imphal", "Indore", "Itanagar", "Jabalpur",
  "Jaipur", "Jalandhar", "Jammu", "Jamshedpur", "Jodhpur", "Kanpur",
  "Kochi", "Kohima", "Kolkata", "Kota", "Kozhikode", "Lucknow", "Ludhiana",
  "Madurai", "Mangaluru", "Meerut", "Mumbai", "Mysuru", "Nagpur", "Nashik",
  "Navi Mumbai", "Noida", "Panaji", "Patna", "Puducherry", "Pune", "Raipur",
  "Rajkot", "Ranchi", "Salem", "Shillong", "Shimla", "Siliguri", "Srinagar",
  "Surat", "Thane", "Thiruvananthapuram", "Tiruchirappalli", "Udaipur",
  "Vadodara", "Varanasi", "Vijayawada", "Visakhapatnam", "Warangal",
];

const STEPS = ["Info", "Package", "Payment", "Done"];

// ─── Types ───────────────────────────────────────────────────────────────────

type FormState = {
  name: string;
  gender: string;
  age: string;
  city: string;
  whatsapp: string;
  packageId: string;
  screenshot: string;
  declaration: boolean;
};

// ─── Shared UI helpers ───────────────────────────────────────────────────────

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="uppercase tracking-[0.3em] text-xs text-zinc-500 mb-4">
      {children}
    </p>
  );
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-2 text-xs text-red-400">{msg}</p>;
}

function StepHeader({ step, title, dim }: { step: string; title: string; dim: string }) {
  return (
    <div className="mb-12">
      <p className="uppercase tracking-[0.4em] text-xs text-zinc-500">{step}</p>
      <h2 className="mt-4 text-4xl md:text-5xl font-black leading-tight">
        {title}
        <br />
        <span className="text-white/30">{dim}</span>
      </h2>
    </div>
  );
}

// ─── City Dropdown ───────────────────────────────────────────────────────────

function CityDropdown({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = INDIAN_CITIES.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative">
      {/* trigger */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full rounded-2xl border ${
          error ? "border-red-500/50" : open ? "border-white/30" : "border-white/10"
        } bg-white/[0.04] px-6 py-4 text-left flex items-center justify-between transition text-sm`}
      >
        <span className={value ? "text-white" : "text-zinc-600"}>
          {value || "Select your city"}
        </span>
        <span className={`text-zinc-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {/* dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-2 w-full rounded-2xl border border-white/10 bg-[#0e0e0e] backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            {/* search */}
            <div className="p-3 border-b border-white/10">
              <input
                autoFocus
                type="text"
                placeholder="Search city..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/[0.05] rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-600 focus:outline-none border border-white/10 focus:border-white/25 transition"
              />
            </div>

            {/* list */}
            <ul className="max-h-52 overflow-y-auto py-2 scrollbar-thin">
              {filtered.length === 0 ? (
                <li className="px-5 py-3 text-sm text-zinc-600">No cities found</li>
              ) : (
                filtered.map((city) => (
                  <li key={city}>
                    <button
                      type="button"
                      onClick={() => {
                        onChange(city);
                        setOpen(false);
                        setSearch("");
                      }}
                      className={`w-full text-left px-5 py-3 text-sm transition-all duration-150 ${
                        value === city
                          ? "bg-white/10 text-white font-semibold"
                          : "text-zinc-400 hover:bg-white/[0.05] hover:text-white"
                      }`}
                    >
                      {city}
                    </button>
                  </li>
                ))
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <FieldError msg={error} />
    </div>
  );
}

// ─── Step 1 — Personal Info ──────────────────────────────────────────────────

function StepInfo({
  form,
  errors,
  set,
  onNext,
}: {
  form: FormState;
  errors: Record<string, string>;
  set: (k: keyof FormState, v: unknown) => void;
  onNext: () => void;
}) {
  return (
    <div className="rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 md:p-14">
      <StepHeader step="Step 01" title="YOUR" dim="DETAILS." />

      <div className="space-y-8">
        {/* Name */}
        <div>
          <FieldLabel>Name *</FieldLabel>
          <input
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            className={`w-full rounded-2xl border ${
              errors.name ? "border-red-500/50" : "border-white/10"
            } bg-white/[0.04] px-6 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition text-sm`}
          />
          <FieldError msg={errors.name} />
        </div>

        {/* Gender */}
        <div>
          <FieldLabel>Gender *</FieldLabel>
          <div className="flex flex-wrap gap-3">
            {["Male", "Female", "Prefer not to say"].map((g) => (
              <button
                key={g}
                onClick={() => set("gender", g)}
                className={`px-6 py-3 rounded-full border text-sm uppercase tracking-[0.2em] transition-all duration-300 ${
                  form.gender === g
                    ? "bg-white text-black border-white font-bold"
                    : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/30"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
          <FieldError msg={errors.gender} />
        </div>

        {/* Age + City */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <FieldLabel>Age *</FieldLabel>
            <input
              type="number"
              placeholder="Your age"
              value={form.age}
              onChange={(e) => set("age", e.target.value)}
              className={`w-full rounded-2xl border ${
                errors.age ? "border-red-500/50" : "border-white/10"
              } bg-white/[0.04] px-6 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition text-sm`}
            />
            <FieldError msg={errors.age} />
          </div>
          <div>
            <FieldLabel>City *</FieldLabel>
            <CityDropdown
              value={form.city}
              onChange={(v) => set("city", v)}
              error={errors.city}
            />
          </div>
        </div>

        {/* WhatsApp */}
        <div>
          <FieldLabel>WhatsApp Number *</FieldLabel>
          <input
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            value={form.whatsapp}
            onChange={(e) => set("whatsapp", e.target.value)}
            className={`w-full rounded-2xl border ${
              errors.whatsapp ? "border-red-500/50" : "border-white/10"
            } bg-white/[0.04] px-6 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-white/30 transition text-sm`}
          />
          <FieldError msg={errors.whatsapp} />
        </div>
      </div>

      <div className="mt-12 flex justify-end">
        <button
          onClick={onNext}
          className="px-10 py-4 rounded-full bg-white text-black font-bold uppercase tracking-[0.25em] text-sm hover:scale-105 transition duration-300"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

// ─── Step 2 — Package ────────────────────────────────────────────────────────

function StepPackage({
  form,
  errors,
  set,
  onNext,
  onBack,
}: {
  form: FormState;
  errors: Record<string, string>;
  set: (k: keyof FormState, v: unknown) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className="rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 md:p-14">
      <StepHeader step="Step 02" title="CHOOSE YOUR" dim="PACKAGE." />
      <FieldError msg={errors.packageId} />

      <div className="mt-2 space-y-4">
        {PACKAGES.map((pkg) => {
          const selected = form.packageId === pkg.id;
          return (
            <button
              key={pkg.id}
              onClick={() => set("packageId", pkg.id)}
              className={`w-full text-left rounded-[28px] border p-7 transition-all duration-300 ${
                selected
                  ? "border-white/40 bg-white/[0.08]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-start gap-5">
                  <div
                    className={`mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition ${
                      selected ? "border-white" : "border-zinc-600"
                    }`}
                  >
                    {selected && <div className="w-2.5 h-2.5 rounded-full bg-white" />}
                  </div>
                  <div>
                    <p className="uppercase tracking-[0.3em] text-[10px] text-zinc-500 mb-1">{pkg.tag}</p>
                    <h3 className="text-sm font-semibold text-white leading-snug">{pkg.label}</h3>
                    <p className="mt-1 text-xs text-zinc-500 uppercase tracking-wider">{pkg.sessions}</p>
                  </div>
                </div>
                <span className={`flex-shrink-0 text-xl font-black transition ${selected ? "text-white" : "text-zinc-500"}`}>
                  {pkg.price}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-12 flex justify-between">
        <button
          onClick={onBack}
          className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] uppercase tracking-[0.2em] text-sm hover:bg-white/[0.08] transition"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          className="px-10 py-4 rounded-full bg-white text-black font-bold uppercase tracking-[0.25em] text-sm hover:scale-105 transition duration-300"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

// ─── Step 3 — Payment ────────────────────────────────────────────────────────

function StepPayment({
  form,
  errors,
  set,
  uploadToCloudinary,
  onNext,
  onBack,
  submitting,
  submitError,
}: {
  form: FormState;
  errors: Record<string, string>;
  set: (k: keyof FormState, v: unknown) => void;
  uploadToCloudinary: (file: File) => Promise<boolean>;
  onNext: () => void;
  onBack: () => void;
  submitting: boolean;
  submitError: string;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const selectedPkg = PACKAGES.find((p) => p.id === form.packageId);

  return (
    <div className="space-y-6">
      {/* order summary */}
      {selectedPkg && (
        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 flex items-center justify-between gap-6">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-zinc-500 mb-2">Selected Package</p>
            <h3 className="text-base font-semibold leading-snug">{selectedPkg.label}</h3>
            <p className="mt-1 text-xs text-zinc-500 uppercase tracking-wider">{selectedPkg.sessions}</p>
          </div>
          <span className="text-3xl font-black flex-shrink-0">{selectedPkg.price}</span>
        </div>
      )}

      <div className="rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 md:p-14">
        <StepHeader step="Step 03" title="COMPLETE" dim="PAYMENT." />

        {/* UPI details */}
        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-zinc-500 mb-3">
            Pay via GPay · PhonePe · Paytm
          </p>
          <div className="flex flex-col items-center gap-2 text-sm">
            <p className="text-zinc-400">UPI Number: <span className="text-white font-mono">8157047607</span></p>
            <p className="text-zinc-400">UPI ID: <span className="text-white font-mono">teamrikz@ybl</span></p>
          </div>

          {/* QR — replace div with <img src="/images/qr.png" ... /> once you have the file */}
<div className="mt-8 mx-auto w-full max-w-[280px] rounded-2xl overflow-hidden">
  <img src="/images/qr.png" alt="PhonePe QR" className="w-full h-full object-cover scale-[1.8]" />
</div>
          <p className="mt-4 text-xs text-zinc-600 uppercase tracking-widest">Team Rikz</p>
        </div>

        {/* Upload screenshot */}
        <div className="mt-10">
          <FieldLabel>Upload Payment Screenshot *</FieldLabel>
          <button
            onClick={() => fileRef.current?.click()}
            className={`w-full rounded-[24px] border-2 border-dashed ${
              errors.screenshot ? "border-red-500/40" : "border-white/10"
            } bg-white/[0.02] p-10 text-center hover:border-white/25 hover:bg-white/[0.04] transition-all duration-300`}
          >
            {form.screenshot ? (
              <>
                <p className="text-white font-semibold">
  Screenshot uploaded successfully ✓
</p>
                <p className="mt-2 text-xs text-zinc-500 uppercase tracking-wider">Tap to change</p>
              </>
            ) : (
              <>
                <p className="text-zinc-400 text-sm">Tap to upload screenshot</p>
                <p className="mt-2 text-xs text-zinc-600 uppercase tracking-wider">Max 1 GB · JPG / PNG / PDF</p>
              </>
            )}
          </button>
<input
  ref={fileRef}
  type="file"
  accept="image/*"
  className="hidden"
  onChange={async (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const success = await uploadToCloudinary(file);

    if (!success) {
      alert("Upload failed. Please try again.");
    }
  }}
/>
          <FieldError msg={errors.screenshot} />
        </div>

        {/* Declaration */}
        <div className="mt-10">
          <FieldLabel>Declaration *</FieldLabel>
          <button
            onClick={() => set("declaration", !form.declaration)}
            className={`w-full text-left rounded-[24px] border p-7 transition-all duration-300 flex items-start gap-5 ${
              form.declaration
                ? "border-white/30 bg-white/[0.06]"
                : "border-white/10 bg-white/[0.02] hover:border-white/20"
            }`}
          >
            <div
              className={`mt-0.5 w-5 h-5 flex-shrink-0 rounded border-2 flex items-center justify-center transition ${
                form.declaration ? "border-white bg-white" : "border-zinc-600"
              }`}
            >
              {form.declaration && <span className="text-black text-xs font-black">✓</span>}
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              I declare that the details provided are true and correct. I understand the nature of
              the physical activities involved in this workshop. I confirm that I am ready to
              participate and will inform of any medical conditions or injuries before the session
              starts. I agree to abide by all instructions and terms and conditions.
            </p>
          </button>
          <FieldError msg={errors.declaration} />
        </div>

        <div className="mt-12 flex justify-between items-center flex-wrap gap-4">
          <button
            onClick={onBack}
            disabled={submitting}
            className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] uppercase tracking-[0.2em] text-sm hover:bg-white/[0.08] transition disabled:opacity-40"
          >
            ← Back
          </button>
          <div className="flex flex-col items-end gap-2">
            {submitError && <p className="text-xs text-red-400">{submitError}</p>}
            <button
              onClick={onNext}
              disabled={submitting}
              className="px-10 py-4 rounded-full bg-white text-black font-bold uppercase tracking-[0.25em] text-sm hover:scale-105 transition duration-300 disabled:opacity-60 disabled:scale-100 flex items-center gap-3"
            >
              {submitting ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit →"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Step 4 — Success ────────────────────────────────────────────────────────

function StepDone({ form }: { form: FormState }) {
  const selectedPkg = PACKAGES.find((p) => p.id === form.packageId);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="rounded-[50px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-16 md:p-24 text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="w-20 h-20 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-3xl mx-auto"
      >
        ✓
      </motion.div>

      <h2 className="mt-10 text-5xl md:text-7xl font-black leading-[0.9]">
        YOU'RE
        <br />
        <span className="text-white/30">IN.</span>
      </h2>

      <p className="mt-8 text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed">
        Application received. You'll be added to the WhatsApp group once your payment is confirmed.
      </p>

      <div className="mt-10 rounded-[32px] border border-white/10 bg-white/[0.04] p-8 text-left max-w-sm mx-auto">
        <p className="uppercase tracking-[0.3em] text-xs text-zinc-500 mb-5">Summary</p>
        <div className="space-y-3 text-sm">
          {[
            ["Name", form.name],
            ["City", form.city],
            ["WhatsApp", form.whatsapp],
            ["Package", selectedPkg?.price ?? "—"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between gap-4">
              <span className="text-zinc-500">{label}</span>
              <span className="text-zinc-200 text-right">{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <a
          href="/"
          className="px-10 py-4 rounded-full bg-white text-black font-bold uppercase tracking-[0.25em] text-sm hover:scale-105 transition"
        >
          Back to Home
        </a>
        <a
          href="https://instagram.com/rikzyy__"
          target="_blank"
          className="px-10 py-4 rounded-full border border-white/10 bg-white/[0.03] uppercase tracking-[0.2em] text-sm hover:bg-white/[0.08] transition"
        >
          Follow @rikzyy__
        </a>
      </div>
    </motion.div>
  );
}

	// ─── Main ApplyForm ──────────────────────────────────────────────────────────

const WEB3FORMS_KEY = "83b438cd-5d76-4494-aa2e-e681c00e4ece";

export default function ApplyForm() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setFormState] = useState<FormState>({
    name: "",
    gender: "",
    age: "",
    city: "",
    whatsapp: "",
    packageId: "",
    screenshot: "",
    declaration: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function set(key: keyof FormState, value: unknown) {
    setFormState((f) => ({ ...f, [key]: value }));
    setErrors((e) => {
      const next = { ...e };
      delete next[key];
      return next;
    });
  }

async function uploadToCloudinary(file: File) {
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", "teamrikz-payments");

  try {
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dcjvzrhzw/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.secure_url) {
      set("screenshot", data.secure_url);
      return true;
    }

    return false;
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    return false;
  }
}

  function validate(s: number): boolean {
    const errs: Record<string, string> = {};
    if (s === 0) {
      if (!form.name.trim()) errs.name = "Name is required";
      if (!form.gender) errs.gender = "Please select a gender";
      if (!form.age.trim()) errs.age = "Age is required";
      if (!form.city) errs.city = "Please select your city";
      if (!form.whatsapp.trim()) errs.whatsapp = "WhatsApp number is required";
    }
    if (s === 1) {
      if (!form.packageId) errs.packageId = "Please select a package";
    }
    if (s === 2) {
      if (!form.screenshot) errs.screenshot = "Please upload your payment screenshot";
      if (!form.declaration) errs.declaration = "Please accept the declaration";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function submitToWeb3Forms() {
    const selectedPkg = PACKAGES.find((p) => p.id === form.packageId);
    setSubmitting(true);
    setSubmitError("");
    try {
      const data = new FormData();
      data.append("access_key", WEB3FORMS_KEY);
      data.append("subject", `New Workshop Application — ${form.name}`);
      data.append("name", form.name);
      data.append("gender", form.gender);
      data.append("age", form.age);
      data.append("city", form.city);
      data.append("whatsapp", form.whatsapp);
      data.append("package", `${selectedPkg?.label ?? ""} (${selectedPkg?.price ?? ""})`);
      data.append("sessions", selectedPkg?.sessions ?? "");
      data.append("batch", "Morning Batch · 8am to 8am");
      data.append("declaration_accepted", "Yes");
      if (form.screenshot) data.append("payment_screenshot", form.screenshot);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStep(3);
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function next() {
    if (step === 2) {
      if (validate(step)) submitToWeb3Forms();
    } else {
      if (validate(step)) setStep((s) => s + 1);
    }
  }
  function back() { setStep((s) => s - 1); }

  return (
    <section className="border-t border-white/5 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_45%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* Step indicator */}
        {step < 3 && (
          <div className="mb-16 flex items-center">
            {STEPS.slice(0, 3).map((label, i) => (
              <div key={i} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border text-xs font-bold uppercase tracking-wider transition-all duration-500 ${
                      i < step
                        ? "bg-white text-black border-white"
                        : i === step
                        ? "border-white/50 text-white bg-white/10"
                        : "border-white/10 text-zinc-600"
                    }`}
                  >
                    {i < step ? "✓" : `0${i + 1}`}
                  </div>
                  <span className={`text-[10px] uppercase tracking-[0.25em] ${i === step ? "text-white" : "text-zinc-600"}`}>
                    {label}
                  </span>
                </div>
                {i < 2 && (
                  <div className={`flex-1 h-px mx-4 mb-5 transition-all duration-500 ${i < step ? "bg-white/30" : "bg-white/10"}`} />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Step panels */}
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="info" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
              <StepInfo form={form} errors={errors} set={set} onNext={next} />
            </motion.div>
          )}
          {step === 1 && (
            <motion.div key="package" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
              <StepPackage form={form} errors={errors} set={set} onNext={next} onBack={back} />
            </motion.div>
          )}
          {step === 2 && (
            <motion.div key="payment" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
              <StepPayment form={form} errors={errors} set={set} uploadToCloudinary={uploadToCloudinary} onNext={next} onBack={back} submitting={submitting} submitError={submitError} />
            </motion.div>
          )}
          {step === 3 && (
            <motion.div key="done" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.35 }}>
              <StepDone form={form} />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
