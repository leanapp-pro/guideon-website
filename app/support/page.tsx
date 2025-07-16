"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { HeadphonesIcon, BarChart3, BookOpen, Users, MousePointer, Zap, ArrowLeft } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Guideon</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/product-managers" className="text-gray-600 hover:text-gray-900 font-medium">
                Product
              </Link>
              <Link href="/developers" className="text-gray-600 hover:text-gray-900 font-medium">
                Developers
              </Link>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                Pricing
              </a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6">Get started</Button>
          </div>
        </div>
      </header>

      {/* Back Navigation */}
      <div className="bg-purple-50 py-4">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center space-x-2 text-purple-700 hover:text-purple-800">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to overview</span>
          </Link>
        </div>
      </div>

      {/* Support Header */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <HeadphonesIcon className="h-4 w-4" />
                <span>For Support Teams</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Show, don't <span className="text-purple-600">tell</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform support from endless back-and-forth to instant visual guidance. Agents describe steps once, AI
                guides users through the exact process. 90% faster resolution times.
              </p>
            </div>

            {/* Support Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <Card className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
                <div className="text-sm text-gray-600 mb-2">Faster Resolution</div>
                <div className="text-xs text-purple-700 bg-purple-50 px-2 py-1 rounded">Minutes vs hours</div>
              </Card>
              <Card className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
                <div className="text-sm text-gray-600 mb-2">Fewer Tickets</div>
                <div className="text-xs text-blue-700 bg-blue-50 px-2 py-1 rounded">Self-service success</div>
              </Card>
              <Card className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">5x</div>
                <div className="text-sm text-gray-600 mb-2">User Satisfaction</div>
                <div className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded">CSAT improvement</div>
              </Card>
              <Card className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">60%</div>
                <div className="text-sm text-gray-600 mb-2">Less Back-and-forth</div>
                <div className="text-xs text-orange-700 bg-orange-50 px-2 py-1 rounded">One-shot resolution</div>
              </Card>
            </div>

            {/* Support Workflow Demo */}
            <div className="mb-16">
              <Card className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Live Support Workflow</h3>
                      <p className="text-gray-600">From ticket to resolution in real-time</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">Live session</span>
                    </div>
                  </div>

                  {/* Workflow Steps */}
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {/* Step 1: Agent Input */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-blue-900">1. Agent Describes</h4>
                        <HeadphonesIcon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="bg-white rounded p-3 mb-3">
                        <p className="text-sm text-gray-700 italic">
                          "To set up team permissions: 1) Go to Settings, 2) Click Team Management, 3) Add new member,
                          4) Set their role to Admin"
                        </p>
                      </div>
                      <div className="text-xs text-blue-700">Plain language, no technical knowledge needed</div>
                    </div>

                    {/* Step 2: AI Processing */}
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-orange-900">2. AI Creates Guide</h4>
                        <Zap className="h-5 w-5 text-orange-600" />
                      </div>
                      <div className="bg-white rounded p-3 mb-3 space-y-2">
                        <div className="flex items-center space-x-2">
                          <MousePointer className="h-3 w-3 text-orange-600" />
                          <span className="text-xs text-gray-700">Highlight "Settings" button</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MousePointer className="h-3 w-3 text-orange-600" />
                          <span className="text-xs text-gray-700">Show "Team Management" path</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MousePointer className="h-3 w-3 text-orange-600" />
                          <span className="text-xs text-gray-700">Guide through role selection</span>
                        </div>
                      </div>
                      <div className="text-xs text-orange-700">Visual guidance created in 30 seconds</div>
                    </div>

                    {/* Step 3: User Experience */}
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-green-900">3. User Follows</h4>
                        <Users className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="bg-white rounded p-3 mb-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-gray-700">Step 1 of 4 completed</span>
                        </div>
                        <div className="bg-green-100 border border-green-200 rounded p-2">
                          <span className="text-xs text-green-800">✓ Settings accessed successfully</span>
                        </div>
                      </div>
                      <div className="text-xs text-green-700">Problem solved independently</div>
                    </div>
                  </div>

                  {/* Live Metrics */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Session Metrics</h4>
                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">2:34</div>
                        <div className="text-gray-600">Total resolution time</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">0</div>
                        <div className="text-gray-600">Follow-up questions</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">100%</div>
                        <div className="text-gray-600">Task completion</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-orange-600">5/5</div>
                        <div className="text-gray-600">User satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Support Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Challenges */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-red-600 text-sm">!</span>
                  </div>
                  Support Team Struggles
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-red-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Endless back-and-forth</h4>
                    <p className="text-gray-600 text-sm">
                      "Click here", "No, the other button", "Can you send a screenshot?" - conversations that go
                      nowhere.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-red-100">
                    <h4 className="font-semibold text-gray-900 mb-2">User confusion and frustration</h4>
                    <p className="text-gray-600 text-sm">
                      Text instructions are hard to follow. Users get lost, frustrated, and blame your product.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-red-100">
                    <h4 className="font-semibold text-gray-900 mb-2">High ticket volume</h4>
                    <p className="text-gray-600 text-sm">
                      Same questions asked repeatedly. Support team overwhelmed with basic "how-to" requests.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-red-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Screen sharing overhead</h4>
                    <p className="text-gray-600 text-sm">
                      Scheduling calls, technical issues, time zone problems. Simple fixes become complex operations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  Guideon Transforms Support
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-green-100">
                    <h4 className="font-semibold text-gray-900 mb-2">One-time explanation</h4>
                    <p className="text-gray-600 text-sm">
                      Agent describes steps once, AI guides user visually. No more repetitive explanations.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Crystal clear visual guidance</h4>
                    <p className="text-gray-600 text-sm">
                      Users see exactly where to click, what to fill, what happens next. No confusion possible.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-100">
                    <h4 className="font-semibold text-gray-900 mb-2">70% reduction in tickets</h4>
                    <p className="text-gray-600 text-sm">
                      Users solve problems independently with visual guidance. Support team focuses on complex issues.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-100">
                    <h4 className="font-semibold text-gray-900 mb-2">No screen sharing needed</h4>
                    <p className="text-gray-600 text-sm">
                      Instant visual guidance works across all devices. No scheduling, no technical setup required.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support-Specific Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <HeadphonesIcon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-channel support</h3>
                <p className="text-gray-600 mb-4">
                  Works with Zendesk, Intercom, Freshdesk, and more. Integrate with your existing support workflow.
                </p>
                <div className="bg-purple-50 rounded-lg p-3">
                  <div className="text-sm text-purple-800">
                    <div className="font-medium mb-1">Supported platforms</div>
                    <div>Chat, email, phone, in-app</div>
                  </div>
                </div>
              </Card>

              <Card className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Support analytics</h3>
                <p className="text-gray-600 mb-4">
                  Track resolution times, user satisfaction, and common issues. Optimize your support process.
                </p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-sm text-blue-800">
                    <div className="font-medium mb-1">Key metrics</div>
                    <div>CSAT, resolution time, deflection</div>
                  </div>
                </div>
              </Card>

              <Card className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Knowledge base integration</h3>
                <p className="text-gray-600 mb-4">
                  Turn static help articles into interactive guides. Users learn by doing, not reading.
                </p>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-sm text-green-800">
                    <div className="font-medium mb-1">Auto-generated guides</div>
                    <div>From existing documentation</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Support Success Story */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm mb-16">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-lg">"</span>
                </div>
                <div>
                  <blockquote className="text-lg text-gray-900 mb-4">
                    "Guideon completely changed how we handle support. We went from spending 20 minutes per ticket to
                    under 2 minutes. Our customers are happier, and our support team can focus on complex issues."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Maria Rodriguez</div>
                      <div className="text-gray-600 text-sm">Head of Customer Support, HelpDesk Inc.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support ROI Card */}
            <div className="bg-purple-50 rounded-xl border border-purple-200 p-8 shadow-sm">
              <div className="text-center mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-2">ROI for Support Teams</h4>
                <p className="text-gray-600">Based on teams handling 500+ tickets per month</p>
              </div>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
                  <div className="text-sm text-gray-600">Faster resolution</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
                  <div className="text-sm text-gray-600">Fewer tickets</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">5x</div>
                  <div className="text-sm text-gray-600">User satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">60%</div>
                  <div className="text-sm text-gray-600">Less back-and-forth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to transform support?</h2>
            <p className="text-xl text-gray-600 mb-10">
              Join support teams who've reduced resolution time by 90% with Guideon
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-lg"
              >
                Start free trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 text-gray-700 font-medium px-8 py-3 rounded-lg hover:border-gray-400 bg-transparent"
              >
                Book a demo
              </Button>
            </div>
            <p className="text-gray-500">No credit card required • 14-day free trial • Setup in 5 minutes</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Guideon</span>
            </Link>
            <div className="flex gap-8">
              <Link href="/product-managers" className="text-gray-600 hover:text-gray-900 font-medium">
                Product
              </Link>
              <Link href="/developers" className="text-gray-600 hover:text-gray-900 font-medium">
                Developers
              </Link>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                Pricing
              </a>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-500">© 2025 Guideon. Making user onboarding actually work.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
