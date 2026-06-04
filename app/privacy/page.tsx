import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPage() {
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
                <Link href="/privacy" className="text-[#1A1A1A] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/contact" className="text-[#555555] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
                <Link href="/signup" className="bg-[#EFE810] text-[#1A1A1A] hover:bg-[#d4cd00] px-4 py-2 rounded-md text-sm font-semibold">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-[#F9F9F9] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last Updated: March 27, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-6">
            Lifecycle Loop ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our loyalty tracking platform and website at trylifecycleloop.com.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Information You Provide</h3>
          <p className="text-gray-600 mb-4">When you sign up for our service, we may collect:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Name and contact information (email, phone number)</li>
            <li>Company name and business information</li>
            <li>Account credentials</li>
            <li>Payment information (processed by third-party payment processors)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Customer Loyalty Data</h3>
          <p className="text-gray-600 mb-4">When you use our loyalty tracking platform, we collect data to power your loyalty program, including:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Customer purchase history and transaction data</li>
            <li>Points balances and redemption history</li>
            <li>Engagement metrics (visits, referrals, reviews)</li>
            <li>Customer tier and segment information</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.3 Information Collected Automatically</h3>
          <p className="text-gray-600 mb-4">When you use our platform, we automatically collect:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Device information (browser type, operating system)</li>
            <li>IP address and location data</li>
            <li>Usage data (pages visited, time spent, click patterns)</li>
            <li>Platform performance and analytics data</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.4 Mobile Information Sharing</h3>
          <p className="text-gray-600 mb-6">
            <strong>No mobile information will be shared or sold to third parties for marketing purposes.</strong> We are committed to protecting your mobile information and will only use it for the purposes outlined in this Privacy Policy, such as providing our loyalty platform and communicating with you about your account.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Provide and maintain our loyalty tracking platform</li>
            <li>Power your loyalty programs, points tracking, and rewards</li>
            <li>Process your transactions and manage your account</li>
            <li>Send you service-related communications and program updates</li>
            <li>Generate analytics and insights to improve your loyalty program performance</li>
            <li>Detect and prevent fraud or abuse</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Information Sharing and Disclosure</h2>
          <p className="text-gray-600 mb-4">We may share your information with:</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.1 Service Providers</h3>
          <p className="text-gray-600 mb-6">
            Third-party vendors who perform services on our behalf, such as hosting, analytics, payment processing, and customer support. These providers are contractually obligated to protect your information.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.2 Business Transfers</h3>
          <p className="text-gray-600 mb-6">
            In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.3 Legal Requirements</h3>
          <p className="text-gray-600 mb-6">
            When required by law, court order, or government regulation, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.4 With Your Consent</h3>
          <p className="text-gray-600 mb-6">
            We may share your information for any other purpose with your explicit consent.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Security</h2>
          <p className="text-gray-600 mb-6">
            We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Encryption of data in transit (HTTPS/TLS)</li>
            <li>Secure hosting infrastructure with regular security audits</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Regular security assessments and updates</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Data Retention</h2>
          <p className="text-gray-600 mb-6">
            We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Account information is retained while your account is active and for a reasonable period thereafter for legal and business purposes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Your Rights and Choices</h2>
          <p className="text-gray-600 mb-4">Depending on your location, you may have the following rights:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
            <li><strong>Objection:</strong> Object to certain processing of your information</li>
            <li><strong>Opt-out:</strong> Opt out of marketing communications</li>
          </ul>
          <p className="text-gray-600 mb-6">
            To exercise these rights, please contact us at <a href="mailto:privacy@trylifecycleloop.com" className="text-[#1A1A1A] hover:text-[#555555]">privacy@trylifecycleloop.com</a>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Cookies and Tracking Technologies</h2>
          <p className="text-gray-600 mb-6">
            We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Third-Party Links</h2>
          <p className="text-gray-600 mb-6">
            Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Children&apos;s Privacy</h2>
          <p className="text-gray-600 mb-6">
            Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. California Privacy Rights</h2>
          <p className="text-gray-600 mb-6">
            If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your information, and the right to opt-out of the sale of your personal information. We do not sell personal information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Changes to This Privacy Policy</h2>
          <p className="text-gray-600 mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. SMS Communications</h2>
          <p className="text-gray-600 mb-4">
            Lifecycle Loop may send SMS (text message) communications to users who have opted in. Our SMS program is limited exclusively to <strong>transactional account notifications</strong>, which may include:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Account access and onboarding confirmations</li>
            <li>Recognition and reward activity alerts</li>
            <li>Account security notifications</li>
            <li>Program status updates directly related to your account</li>
          </ul>
          <p className="text-gray-600 mb-4">
            <strong>We do not send marketing or promotional SMS messages.</strong> No mobile information will be shared with or sold to third parties for marketing or promotional purposes.
          </p>
          <p className="text-gray-600 mb-4">
            Message and data rates may apply. Message frequency varies based on account activity. To opt out of SMS notifications at any time, reply <strong>STOP</strong> to any message. For help, reply <strong>HELP</strong> or contact us at <a href="mailto:support@trylifecycleloop.com" className="text-[#1A1A1A] hover:text-[#555555]">support@trylifecycleloop.com</a>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-gray-600 mb-2"><strong>Email:</strong> <a href="mailto:privacy@trylifecycleloop.com" className="text-[#1A1A1A] hover:text-[#555555]">privacy@trylifecycleloop.com</a></p>
            <p className="text-gray-600 mb-2"><strong>Support:</strong> <a href="mailto:support@trylifecycleloop.com" className="text-[#1A1A1A] hover:text-[#555555]">support@trylifecycleloop.com</a></p>
            <p className="text-gray-600"><strong>Website:</strong> <a href="/" className="text-[#1A1A1A] hover:text-[#555555]">https://trylifecycleloop.com</a></p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-2xl font-extrabold text-white tracking-tight">Lifecycle Loop</span>
              <p className="text-gray-400 mt-3">
                Lifecycle Loop — loyalty tracking software that drives real engagement.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-gray-400 hover:text-white">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/sms-policy" className="text-gray-400 hover:text-white">
                    SMS Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                support@trylifecycleloop.com
              </p>
              <p className="text-gray-400 mt-1">
                (302) 208-0355
              </p>
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
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
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
