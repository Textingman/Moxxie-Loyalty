'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Mail, Building, Phone, User, Briefcase, ChevronRight, CheckCircle, Hash } from 'lucide-react';

type Step = 1 | 2 | 3;

export default function SignupPage() {
  const [step, setStep] = useState<Step>(1);
  const [companyIdError, setCompanyIdError] = useState('');
  const [formData, setFormData] = useState({
    // Step 1 — Company ID
    companyId: '',
    // Step 2 — Personal Info + Contact + Consent
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    department: '',
    smsOptIn: false,
    termsAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3) as Step);
  const prevStep = () => setStep((s) => Math.max(s - 1, 1) as Step);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  const steps = [
    { num: 1, label: 'Company ID' },
    { num: 2, label: 'Your Details' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image src="/logo-nav.png" alt="Lifecycle Loop" width={180} height={48} className="h-12 w-auto object-contain" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/about" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link href="/privacy" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">Privacy</Link>
                <Link href="/terms" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">Terms</Link>
                <Link href="/contact" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                <Link href="/signup" className="bg-[#EFE810] text-[#1A1A1A] hover:bg-[#d4cd00] px-4 py-2 rounded-md text-sm font-semibold">Request Access</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#F9F9F9] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-[#1A1A1A] mb-3">Request Access to Lifecycle Loop</h1>
          <p className="text-xl text-[#555555] max-w-2xl mx-auto">
            Join your team on the employee engagement platform that makes recognition meaningful.
          </p>
        </div>
      </section>

      {/* Progress Stepper */}
      {step < 3 && (
        <div className="max-w-2xl mx-auto px-4 pt-10">
          <div className="flex items-center justify-between">
            {steps.map((s, i) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${
                    step > s.num
                      ? 'bg-[#EFE810] border-[#EFE810] text-[#1A1A1A]'
                      : step === s.num
                      ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white'
                      : 'bg-white border-gray-300 text-gray-400'
                  }`}>
                    {step > s.num ? <CheckCircle className="w-5 h-5" /> : s.num}
                  </div>
                  <span className={`mt-2 text-xs font-medium ${step === s.num ? 'text-[#1A1A1A]' : 'text-gray-400'}`}>{s.label}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 mb-5 ${step > s.num ? 'bg-[#EFE810]' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Form Area */}
      <section className="max-w-2xl mx-auto px-4 py-10 pb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-[#E5E7EB] p-8 md:p-12">

          {/* ── STEP 1: Company ID ── */}
          {step === 1 && (
            <form onSubmit={(e) => {
              e.preventDefault();
              const VALID_IDS = ['1234'];
              if (!VALID_IDS.includes(formData.companyId.trim())) {
                setCompanyIdError('Company ID not found. Please check with your employer or HR team.');
                return;
              }
              setCompanyIdError('');
              nextStep();
            }} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-1">Enter your Company ID</h2>
                <p className="text-[#555555] text-sm">Step 1 of 2 — Your employer provides this ID to get you started</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">Company ID *</label>
                <div className="relative">
                  <Hash className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="companyId"
                    required
                    value={formData.companyId}
                    onChange={(e) => {
                      handleChange(e);
                      setCompanyIdError('');
                    }}
                    className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-[#EFE810] focus:border-transparent text-lg ${
                      companyIdError ? 'border-red-400 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="e.g. 1234"
                  />
                </div>
                {companyIdError && (
                  <p className="text-red-500 text-sm mt-2 font-medium">{companyIdError}</p>
                )}
                <p className="text-xs text-gray-400 mt-2">
                  Your Company ID was provided by your employer or HR team. Contact your manager if you don&apos;t have one.
                </p>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#EFE810] hover:bg-[#d4cd00] text-[#1A1A1A] text-lg font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-colors"
              >
                Continue <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          )}

          {/* ── STEP 2: Personal Info + Contact + Consent ── */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h2 className="text-2xl font-bold text-[#1A1A1A] mb-1">Your details</h2>
                <p className="text-[#555555] text-sm">Step 2 of 2 — Tell us about yourself and confirm your preferences</p>
              </div>

              {/* Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">First Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                    <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange}
                      className="block w-full pl-9 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EFE810] focus:border-transparent"
                      placeholder="Jane" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A1A1A] mb-2">Last Name *</label>
                  <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange}
                    className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EFE810] focus:border-transparent"
                    placeholder="Smith" />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">Work Email *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                  <input type="email" name="email" required value={formData.email} onChange={handleChange}
                    className="block w-full pl-9 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EFE810] focus:border-transparent"
                    placeholder="jane@company.com" />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">Phone Number (Optional)</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className="block w-full pl-9 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EFE810] focus:border-transparent"
                    placeholder="(555) 123-4567" />
                </div>
              </div>

              {/* Job Title */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">Job Title *</label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                  <input type="text" name="jobTitle" required value={formData.jobTitle} onChange={handleChange}
                    className="block w-full pl-9 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EFE810] focus:border-transparent"
                    placeholder="e.g. Marketing Manager" />
                </div>
              </div>

              {/* Department */}
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2">Department *</label>
                <div className="relative">
                  <Building className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                  <select name="department" required value={formData.department} onChange={handleChange}
                    className="block w-full pl-9 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EFE810] focus:border-transparent bg-white">
                    <option value="">Select your department...</option>
                    <option value="sales">Sales</option>
                    <option value="marketing">Marketing</option>
                    <option value="engineering">Engineering</option>
                    <option value="operations">Operations</option>
                    <option value="hr">Human Resources</option>
                    <option value="finance">Finance</option>
                    <option value="customer_success">Customer Success</option>
                    <option value="product">Product</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* SMS Opt-in */}
              <div className="bg-gray-50 border border-gray-300 rounded-lg p-5">
                <div className="flex items-start">
                  <input type="checkbox" id="smsOptIn" name="smsOptIn" checked={formData.smsOptIn}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-[#EFE810] focus:ring-[#EFE810] border-gray-300 rounded flex-shrink-0" />
                  <label htmlFor="smsOptIn" className="ml-3 text-sm leading-relaxed text-[#555555]">
                    By checking this box and submitting this form, you agree to receive alert related text messages from Lifecycle Loop. I understand I may opt out of SMS communication by replying <strong>STOP</strong>. Reply <strong>HELP</strong> or email <a href="mailto:support@trylifecycleloop.com" className="text-[#1A1A1A] underline">support@trylifecycleloop.com</a> for help. Message and Data rates may apply. Message frequency varies. Carriers are not liable for delayed or undelivered messages. Opting in to SMS is optional and not required to submit this form or to use our services. All messages will be handled by Lifecycle Loop.
                  </label>
                </div>
              </div>

              {/* Terms */}
              <div className="bg-gray-50 border border-gray-300 rounded-lg p-5">
                <div className="flex items-start">
                  <input type="checkbox" id="termsAccepted" name="termsAccepted" required checked={formData.termsAccepted}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-[#EFE810] focus:ring-[#EFE810] border-gray-300 rounded flex-shrink-0" />
                  <label htmlFor="termsAccepted" className="ml-3 text-sm leading-relaxed text-[#555555]">
                    I agree to the{' '}
                    <Link href="/terms" className="text-[#1A1A1A] font-medium underline hover:text-[#555555]">Terms of Service</Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-[#1A1A1A] font-medium underline hover:text-[#555555]">Privacy Policy</Link>. *
                  </label>
                </div>
              </div>

              <div className="flex gap-3">
                <button type="button" onClick={prevStep}
                  className="flex-1 py-4 border-2 border-[#1A1A1A] text-[#1A1A1A] text-lg font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                  Back
                </button>
                <button type="submit"
                  className="flex-1 py-4 bg-[#EFE810] hover:bg-[#d4cd00] text-[#1A1A1A] text-lg font-semibold rounded-lg shadow-lg transition-colors">
                  Submit Request
                </button>
              </div>
            </form>
          )}

          {/* ── STEP 3: Confirmation ── */}
          {step === 3 && (
            <div className="text-center py-8">
              <div className="w-24 h-24 bg-[#EFE810] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-[#1A1A1A]" />
              </div>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-3">Request Submitted!</h2>
              <p className="text-lg text-[#555555] mb-4 max-w-md mx-auto">
                Thanks, <strong>{formData.firstName}</strong>! Your access request has been received.
              </p>
              <div className="bg-[#F9F9F9] border border-[#E5E7EB] rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
                <p className="text-[#555555] text-sm leading-relaxed">
                  📧 <strong>We&apos;ve notified your employer</strong> (Company ID: <strong>{formData.companyId}</strong>) that you&apos;ve requested access to Lifecycle Loop. Once they approve your request, you&apos;ll receive an email at <strong>{formData.email}</strong> with instructions to activate your account.
                </p>
                <p className="text-[#555555] text-sm leading-relaxed mt-3">
                  ⏱ Approval typically takes <strong>1–2 business days</strong>. If you have questions, contact us at{' '}
                  <a href="mailto:support@trylifecycleloop.com" className="text-[#1A1A1A] underline">support@trylifecycleloop.com</a>{' '}
                  or call <a href="tel:+13022080355" className="text-[#1A1A1A] underline">(302) 208-0355</a>.
                </p>
              </div>
              <Link href="/"
                className="inline-block px-8 py-4 bg-[#EFE810] text-[#1A1A1A] text-lg font-semibold rounded-lg hover:bg-[#d4cd00] transition-colors shadow-md">
                Back to Home
              </Link>
            </div>
          )}

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-extrabold text-white tracking-tight">Lifecycle Loop</span>
              <p className="text-gray-400 mt-3">
                Employee engagement software that drives real culture.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/signup" className="text-gray-400 hover:text-white">Request Access</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                <li><Link href="/sms-policy" className="text-gray-400 hover:text-white">SMS Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">support@trylifecycleloop.com</p>
              <p className="text-gray-400 mt-1">(302) 208-0355</p>
              <p className="text-gray-400 mt-2 text-sm">
                3 Germay Dr, Unit 4 #3226<br />
                Wilmington, DE 19804<br />
                United States
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">
            <p>&copy; 2026 Lifecycle Loop. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/lifecycleloop/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Google */}
              <a href="https://share.google/Nl9xEk7kfvDH5ZuOs" target="_blank" rel="noopener noreferrer" aria-label="Google" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
