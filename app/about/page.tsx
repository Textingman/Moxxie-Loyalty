import Link from 'next/link';
import Image from 'next/image';
import { Shield, Target, Users, TrendingUp, Award, BarChart3 } from 'lucide-react';

export default function AboutPage() {
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
                <Link href="/about" className="text-[#1A1A1A] hover:text-[#1A1A1A] px-3 py-2 rounded-md text-sm font-medium">
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

      {/* Hero Section */}
      <section className="bg-[#F9F9F9] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-[#1A1A1A] mb-6">
              About Lifecycle Loop
            </h1>
            <p className="text-xl text-[#555555] max-w-3xl mx-auto">
              We&apos;re building the future of employee engagement — helping companies of all sizes create recognition programs that actually work, drive retention, and turn employees into advocates.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">Our Mission</h2>
            <p className="text-lg text-[#555555] mb-4">
              Lifecycle Loop was built to solve a fundamental workplace problem: companies spend enormous resources acquiring talent, yet invest almost nothing in keeping employees engaged, recognized, and motivated to stay.
            </p>
            <p className="text-lg text-[#555555] mb-4">
              We provide a simple, powerful employee engagement platform that makes it easy to recognize effort, reward performance, and build a culture people genuinely love — from day one through every milestone.
            </p>
            <p className="text-lg text-[#555555]">
              Our goal is to make enterprise-grade engagement programs accessible to every workplace — from small teams to large enterprises.
            </p>
          </div>
          <div className="bg-[#F9F9F9] rounded-2xl p-8 border border-[#E5E7EB]">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#EFE810] rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Results-Driven</h3>
                  <p className="text-[#555555]">
                    Every feature is built to drive measurable outcomes — higher engagement, lower turnover, and stronger team culture.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#EFE810] rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Privacy First</h3>
                  <p className="text-[#555555]">
                    Employee data is protected with enterprise-grade security. We never sell employee data to third parties.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-[#EFE810] rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Built to Scale</h3>
                  <p className="text-[#555555]">
                    Start with a simple recognition program and grow into advanced tiers, segmentation, and team-wide automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#F9F9F9] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Why Companies Choose Lifecycle Loop</h2>
            <p className="text-xl text-[#555555]">
              Trusted by teams that understand the value of keeping employees engaged and recognized
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#EFE810] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#1A1A1A]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Flexible Recognition</h3>
              <p className="text-[#555555]">
                Points, badges, peer shoutouts, milestone rewards — build the program that fits your culture.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#EFE810] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-[#1A1A1A]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Engagement Analytics</h3>
              <p className="text-[#555555]">
                Understand exactly which programs drive the most participation, morale, and retention.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#EFE810] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#1A1A1A]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Multi-Team Support</h3>
              <p className="text-[#555555]">
                Run engagement programs across multiple departments, locations, or remote teams from one dashboard.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#EFE810] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#1A1A1A]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2">Easy Onboarding</h3>
              <p className="text-[#555555]">
                Employees join with a simple Company ID — no complex setup, no IT required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build a Culture People Love?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join companies using Lifecycle Loop to recognize, reward, and retain their best people. Request access today.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-[#EFE810] text-[#1A1A1A] text-lg font-semibold rounded-lg hover:bg-[#d4cd00] transition-colors shadow-lg"
          >
            Request Access
          </Link>
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
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-gray-400 hover:text-white">
                    Request Access
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
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Lifecycle Loop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
