import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Mail, Globe, CheckCircle2, ArrowRight, Loader2, Linkedin, Twitter, Instagram } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  businessStage: z.string().min(1, 'Please select your current stage'),
  message: z.string().min(10, 'Please tell us briefly about your goals (at least 10 characters)'),
});

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      businessStage: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Mock API delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log('Contact form submitted:', data);
    /* 
      NOTE TO BUILDER: Wire up backend API or email service here 
      (e.g., fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) }))
    */
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-macrow-dark relative border-b border-macrow-borderDark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-western tracking-widest text-macrow-brass uppercase flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 text-macrow-brass" />
            // Start a Conversation
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-bold text-macrow-cream mt-2">
            Let's Create Together
          </h2>
          <p className="mt-4 text-base sm:text-lg text-macrow-textMain/80 font-sans">
            Tell us where you are and what you're trying to reach. We'll tell you what we'd do first.
          </p>
        </div>

        {/* Split Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Form */}
          <div className="lg:col-span-7 bg-macrow-surface p-8 sm:p-10 rounded-xl border border-macrow-borderDark shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-macrow-brass/5 rounded-bl-full pointer-events-none" />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-macrow-brass/20 text-macrow-brass flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-macrow-cream">
                    Message Received
                  </h3>
                  <p className="mt-3 text-sm text-macrow-textMain max-w-md">
                    Thank you for reaching out to MACROW. Our strategy team in Ahmedabad will review your business details and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      reset();
                    }}
                    className="mt-8 px-6 py-2.5 rounded bg-macrow-brass text-macrow-darker font-bold text-sm hover:bg-macrow-brassLight transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-macrow-cream mb-2 uppercase tracking-wide">
                        Your Name <span className="text-macrow-brass">*</span>
                      </label>
                      <input
                        type="text"
                        {...register('name')}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded bg-macrow-dark border border-macrow-borderDark text-macrow-cream placeholder-macrow-textMuted focus:outline-none focus:border-macrow-brass focus:ring-1 focus:ring-macrow-brass transition-colors text-sm"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-macrow-cream mb-2 uppercase tracking-wide">
                        Email Address <span className="text-macrow-brass">*</span>
                      </label>
                      <input
                        type="email"
                        {...register('email')}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded bg-macrow-dark border border-macrow-borderDark text-macrow-cream placeholder-macrow-textMuted focus:outline-none focus:border-macrow-brass focus:ring-1 focus:ring-macrow-brass transition-colors text-sm"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Company & Business Stage Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-macrow-cream mb-2 uppercase tracking-wide">
                        Company Name <span className="text-macrow-textMuted text-[10px]">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        {...register('company')}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded bg-macrow-dark border border-macrow-borderDark text-macrow-cream placeholder-macrow-textMuted focus:outline-none focus:border-macrow-brass focus:ring-1 focus:ring-macrow-brass transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-macrow-cream mb-2 uppercase tracking-wide">
                        Business Stage <span className="text-macrow-brass">*</span>
                      </label>
                      <select
                        {...register('businessStage')}
                        className="w-full px-4 py-3 rounded bg-macrow-dark border border-macrow-borderDark text-macrow-cream focus:outline-none focus:border-macrow-brass focus:ring-1 focus:ring-macrow-brass transition-colors text-sm"
                      >
                        <option value="">Select current stage...</option>
                        <option value="zero">Starting from zero</option>
                        <option value="startup">Building a startup</option>
                        <option value="growing">Growing my business</option>
                        <option value="scaling">Scaling internationally</option>
                        <option value="enterprise">Established enterprise</option>
                      </select>
                      {errors.businessStage && (
                        <p className="mt-1 text-xs text-red-400">{errors.businessStage.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-xs font-semibold text-macrow-cream mb-2 uppercase tracking-wide">
                      What are you trying to achieve? <span className="text-macrow-brass">*</span>
                    </label>
                    <textarea
                      rows={5}
                      {...register('message')}
                      placeholder="Describe your current bottlenecks, target audience, or growth ambitions..."
                      className="w-full px-4 py-3 rounded bg-macrow-dark border border-macrow-borderDark text-macrow-cream placeholder-macrow-textMuted focus:outline-none focus:border-macrow-brass focus:ring-1 focus:ring-macrow-brass transition-colors text-sm resize-none"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded bg-macrow-brass hover:bg-macrow-brassLight text-macrow-darker font-bold text-base transition-all duration-200 shadow-lg hover:shadow-gold-glow flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Processing Brief...</span>
                      </>
                    ) : (
                      <>
                        <span>Start a Conversation</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Side: Info Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-macrow-surface p-8 rounded-xl border border-macrow-borderDark shadow-xl space-y-6">
              <h3 className="font-western text-2xl text-macrow-cream border-b border-macrow-borderDark pb-3">
                Global Operations HQ
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-macrow-dark border border-macrow-brass/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-macrow-brass" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-macrow-cream">Ahmedabad, Gujarat, India</h4>
                  <p className="text-xs text-macrow-textMuted mt-0.5">
                    Strategic, Creative & Engineering Hub. Partnering with growth businesses across global markets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-macrow-dark border border-macrow-brass/30 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-macrow-brass" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-macrow-cream">Global Client Reach</h4>
                  <p className="text-xs text-macrow-textMuted mt-0.5">
                    Operating seamlessly across North America, EMEA, and Asia-Pacific timezones.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-macrow-dark border border-macrow-brass/30 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-macrow-brass" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-macrow-cream">Direct Inquiries</h4>
                  <a href="mailto:hello@macrow.agency" className="text-xs text-macrow-brass hover:underline mt-0.5 block">
                    hello@macrow.agency
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links Panel */}
            <div className="bg-macrow-surface p-6 rounded-xl border border-macrow-borderDark flex items-center justify-between">
              <span className="text-xs font-mono text-macrow-textMuted uppercase">Connect with MACROW:</span>
              <div className="flex items-center gap-3">
                <a href="#" className="p-2 rounded bg-macrow-dark text-macrow-cream hover:text-macrow-brass hover:border-macrow-brass border border-macrow-borderDark transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 rounded bg-macrow-dark text-macrow-cream hover:text-macrow-brass hover:border-macrow-brass border border-macrow-borderDark transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 rounded bg-macrow-dark text-macrow-cream hover:text-macrow-brass hover:border-macrow-brass border border-macrow-borderDark transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
