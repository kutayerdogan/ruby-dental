"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Sun,
  HeartPulse,
  ArrowRight,
  CheckCircle2,
  User,
  Phone,
  ChevronLeft,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const ContactForm = () => {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: "",
    timeline: "",
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const goals = [
    {
      id: "makeover",
      icon: Sparkles,
      title: t("contactForm.goals.smileMakeover"),
      desc: "Veneers & Design",
    },
    {
      id: "implants",
      icon: ShieldCheck,
      title: t("contactForm.goals.missingTeeth"),
      desc: "Implants & Restoration",
    },
    {
      id: "whitening",
      icon: Sun,
      title: t("contactForm.goals.whiterTeeth"),
      desc: "Professional Bleaching",
    },
    {
      id: "health",
      icon: HeartPulse,
      title: t("contactForm.goals.dentalHealth"),
      desc: "Checkup & Cleaning",
    },
  ];

  const timelines = [
    {
      id: "asap",
      title: t("contactForm.timelines.asap"),
      desc: "I'm ready to start now",
    },
    {
      id: "month",
      title: t("contactForm.timelines.nextMonth"),
      desc: "Planning my schedule",
    },
    {
      id: "threeMonths",
      title: t("contactForm.timelines.threeMonths"),
      desc: "Looking for information",
    },
    {
      id: "planning",
      title: t("contactForm.timelines.planning"),
      desc: "Just Researching",
    },
  ];

  const nextStep = (data?: any) => {
    if (data) setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Construct WhatsApp message
    const message = `New Lead from Website:
    Name: ${formData.name}
    Goal: ${formData.goal}
    Timeline: ${formData.timeline}
    Phone: ${formData.phone}`;

    // In a real app, you'd send this to a backend or use WhatsApp API link
    // window.open(`https://wa.me/905416107725?text=${encodeURIComponent(message)}`, '_blank');

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <section
        id="contact"
        className="py-24 relative overflow-hidden bg-black min-h-[600px] flex items-center justify-center"
      >
        <div className="text-center p-8 max-w-lg mx-auto glass-panel rounded-3xl border border-white/10 bg-black/40">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("contactForm.success.title")}
          </h2>
          <p className="text-gray-400 mb-8">
            {t("contactForm.success.message")}
          </p>
          <button
            onClick={() => {
              setIsSuccess(false);
              setStep(1);
              setFormData({ goal: "", timeline: "", name: "", phone: "" });
            }}
            className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-xl transition-colors"
          >
            {t("contactForm.success.button")}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-ruby-primary/5 z-0 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ruby-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-ruby-primary font-bold tracking-wider text-sm uppercase mb-2 block">
              Start Your Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Get Your Personalized Plan
            </h2>
            <p className="text-gray-400 text-lg">
              Answer 3 simple questions to get a free quote and treatment
              options.
            </p>
          </div>

          {/* Form Card */}
          <div className="glass-panel p-6 md:p-10 rounded-3xl border border-white/10 bg-black/40 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
              <motion.div
                className="h-full bg-ruby-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Steps Counter */}
            <div className="flex justify-between items-center mb-8 text-sm font-medium text-gray-400">
              <div className="flex items-center gap-2">
                {step > 1 && (
                  <button
                    onClick={prevStep}
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" /> Back
                  </button>
                )}
              </div>
              <span>Step {step} of 3</span>
            </div>

            <div className="flex-1 relative">
              <AnimatePresence mode="wait">
                {/* STEP 1: GOALS */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col"
                  >
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                      {t("contactForm.step1Title")}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {goals.map((goal) => (
                        <button
                          key={goal.id}
                          onClick={() => nextStep({ goal: goal.id })}
                          className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-ruby-primary/50 hover:bg-ruby-primary/10 transition-all text-left flex items-start gap-4"
                        >
                          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-ruby-primary group-hover:text-white transition-colors shrink-0">
                            <goal.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white mb-1">
                              {goal.title}
                            </h4>
                            <p className="text-sm text-gray-400 group-hover:text-gray-300">
                              {goal.desc}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: TIMELINE */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col"
                  >
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                      {t("contactForm.step2Title")}
                    </h3>
                    <div className="space-y-4 max-w-lg mx-auto w-full">
                      {timelines.map((time) => (
                        <button
                          key={time.id}
                          onClick={() => nextStep({ timeline: time.id })}
                          className="w-full group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-ruby-primary/50 hover:bg-ruby-primary/10 transition-all text-left flex items-center justify-between"
                        >
                          <div>
                            <h4 className="text-lg font-bold text-white">
                              {time.title}
                            </h4>
                            <p className="text-sm text-gray-400">{time.desc}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-ruby-primary transition-colors" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: CONTACT DETAILS */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col"
                  >
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {t("contactForm.step3Title")}
                      </h3>
                      <p className="text-gray-400">
                        Where should we send your custom treatment plan?
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4 max-w-lg mx-auto w-full"
                    >
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder={t("contactForm.labels.fullName")}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-ruby-primary focus:bg-white/10 transition-all"
                        />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder={t("contactForm.labels.phoneNumber")}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-ruby-primary focus:bg-white/10 transition-all"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-ruby-primary hover:bg-ruby-dark text-white font-bold py-5 rounded-xl shadow-lg ring-1 ring-white/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-lg mt-4 group disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting
                          ? t("contactForm.labels.submitting")
                          : t("contactForm.labels.submit")}
                        {!isSubmitting && (
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        )}
                      </button>

                      <p className="text-center text-xs text-gray-500 mt-4">
                        Trusted by 5,000+ happy patients. Your data is secure.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
