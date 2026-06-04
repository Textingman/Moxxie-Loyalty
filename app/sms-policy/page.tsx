import Link from 'next/link';
import Image from 'next/image';

export default function SmsPolicyPage() {
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
                <Link href="/" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/contact" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
                <Link href="/signup" className="bg-[#EFE810] text-[#1A1A1A] hover:bg-[#d4cd00] px-4 py-2 rounded-md text-sm font-semibold">
                  Request Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-[#F9F9F9] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">SMS Policy</h1>
          <p className="text-lg text-gray-600">
            Last Updated: June 3, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Overview</h2>
          <p className="text-gray-600 mb-6">
            Lifecycle Loop is committed to responsible and transparent SMS communications. This page describes how and when we use SMS (text messaging) to communicate with our users.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Send</h2>
          <p className="text-gray-600 mb-6">
            Lifecycle Loop <strong>only sends alert related text messages</strong> via SMS. We do not send marketing, promotional, or advertising messages of any kind.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Opt-In</h2>
          <p className="text-gray-600 mb-6">
            SMS notifications are optional. You may opt in to receive transactional SMS messages during the account registration process by checking the SMS opt-in box. Opting in is not required to use the Lifecycle Loop platform.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Opt-Out</h2>
          <p className="text-gray-600 mb-6">
            You may opt out of SMS notifications at any time by replying <strong>STOP</strong> to any message you receive from us. After opting out, you will no longer receive SMS messages from Lifecycle Loop. To re-enable SMS notifications, contact us at <a href="mailto:support@trylifecycleloop.com" className="text-[#1A1A1A] hover:text-[#555555]">support@trylifecycleloop.com</a>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Help</h2>
          <p className="text-gray-600 mb-6">
            For help with SMS messages, reply <strong>HELP</strong> to any message or contact us at:
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="text-gray-600 mb-2"><strong>Email:</strong> <a href="mailto:support@trylifecycleloop.com" className="text-[#1A1A1A] hover:text-[#555555]">support@trylifecycleloop.com</a></p>
            <p className="text-gray-600"><strong>Phone:</strong> <a href="tel:+13022080355" className="text-[#1A1A1A] hover:text-[#555555]">(302) 208-0355</a></p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Message & Data Rates</h2>
          <p className="text-gray-600 mb-6">
            Message and data rates may apply depending on your mobile carrier and plan. Message frequency varies based on your account activity. Lifecycle Loop is not responsible for any charges incurred from your mobile carrier.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Privacy</h2>
          <p className="text-gray-600 mb-6">
            <strong>No mobile information will be shared with or sold to third parties for marketing or promotional purposes.</strong> Your phone number and SMS opt-in status are used solely to deliver alert related text messages as described in this policy and our{' '}
            <Link href="/privacy" className="text-[#1A1A1A] hover:text-[#555555] underline">Privacy Policy</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Carrier Disclaimer</h2>
          <p className="text-gray-600 mb-6">
            Carriers are not liable for delayed or undelivered messages. Delivery of SMS messages is subject to your mobile carrier&apos;s network availability and coverage.
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12 mt-20">
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
