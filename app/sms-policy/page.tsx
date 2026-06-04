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
            Lifecycle Loop <strong>only sends transactional account notifications</strong> via SMS. We do not send marketing, promotional, or advertising messages of any kind.
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
            <strong>No mobile information will be shared with or sold to third parties for marketing or promotional purposes.</strong> Your phone number and SMS opt-in status are used solely to deliver transactional account notifications as described in this policy and our{' '}
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
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Lifecycle Loop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
