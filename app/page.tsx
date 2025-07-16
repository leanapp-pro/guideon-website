"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import {
  Zap,
  HeadphonesIcon,
  Target,
  MousePointer,
  Code,
  TrendingUp,
  ArrowRight,
  Building2,
  Workflow,
  Shield,
  Users,
} from "lucide-react"

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("product")

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <header className="bg-orange-50 border-b border-orange-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Guideon</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/product-managers" className="text-gray-600 hover:text-gray-900 font-medium">
                Product
              </Link>
              <Link href="/developers" className="text-gray-600 hover:text-gray-900 font-medium">
                Developers
              </Link>
              <Link href="/support" className="text-gray-600 hover:text-gray-900 font-medium">
                Support
              </Link>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                Pricing
              </a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6">Get started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-orange-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              How teams build <span className="text-orange-500">successful onboarding</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              The AI-powered platform that transforms static documentation into interactive step-by-step experiences.
              Built for product managers, development teams, and support teams who want better user outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg"
              >
                Get started - free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 text-gray-700 font-medium px-8 py-3 rounded-lg hover:border-gray-400 bg-transparent"
              >
                Talk to a human
              </Button>
            </div>
            <p className="text-orange-500 font-medium">
              Or <span className="underline cursor-pointer">install with AI in 90 seconds</span>
            </p>
          </div>
        </div>
      </section>

      {/* Team Tabs Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for every team</h2>
            <p className="text-xl text-gray-600">Different roles, shared success</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button
                onClick={() => setActiveTab("product")}
                className={`px-6 py-3 rounded-md font-medium transition-colors flex items-center space-x-2 ${
                  activeTab === "product" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <TrendingUp className="h-4 w-4" />
                <span>Product Managers</span>
              </button>
              <button
                onClick={() => setActiveTab("development")}
                className={`px-6 py-3 rounded-md font-medium transition-colors flex items-center space-x-2 ${
                  activeTab === "development" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Code className="h-4 w-4" />
                <span>Development Teams</span>
              </button>
              <button
                onClick={() => setActiveTab("support")}
                className={`px-6 py-3 rounded-md font-medium transition-colors flex items-center space-x-2 ${
                  activeTab === "support" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <HeadphonesIcon className="h-4 w-4" />
                <span>Support Teams</span>
              </button>
            </div>
          </div>

          {/* Tab Content Summaries */}
          <div className="max-w-4xl mx-auto">
            {activeTab === "product" && (
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <TrendingUp className="h-4 w-4" />
                  <span>For Product Managers</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Drive feature adoption and user success</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Turn feature launches into success stories. Get the data and insights you need to improve product
                  outcomes through better onboarding experiences.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                    <div className="text-sm text-gray-600">Feature adoption rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                    <div className="text-sm text-gray-600">Churn reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">3x</div>
                    <div className="text-sm text-gray-600">Faster time-to-value</div>
                  </div>
                </div>

                <Link href="/product-managers">
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg inline-flex items-center space-x-2">
                    <span>Learn more for Product Managers</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}

            {activeTab === "development" && (
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Code className="h-4 w-4" />
                  <span>For Development Teams</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Build features, not documentation</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Minimal integration effort, maximum long-term savings. Stop maintaining docs that break with every
                  release. Focus on what you do best - building great features.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">2 hrs</div>
                    <div className="text-sm text-gray-600">Initial integration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">80%</div>
                    <div className="text-sm text-gray-600">Less doc maintenance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">15 hrs</div>
                    <div className="text-sm text-gray-600">Saved per month</div>
                  </div>
                </div>

                <Link href="/developers">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg inline-flex items-center space-x-2">
                    <span>Learn more for Developers</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}

            {activeTab === "support" && (
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <HeadphonesIcon className="h-4 w-4" />
                  <span>For Support Teams</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Show, don't tell</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Transform support from endless back-and-forth to instant visual guidance. Agents describe steps once,
                  AI guides users through the exact process.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">90%</div>
                    <div className="text-sm text-gray-600">Faster resolution</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
                    <div className="text-sm text-gray-600">Fewer tickets</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">5x</div>
                    <div className="text-sm text-gray-600">User satisfaction</div>
                  </div>
                </div>

                <Link href="/support">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg inline-flex items-center space-x-2">
                    <span>Learn more for Support</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How Guideon <span className="text-orange-500">actually works</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From static documentation to interactive AI guidance in three simple steps. No complex setup, no
                maintenance headaches.
              </p>
            </div>

            {/* Step-by-step Process */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Step 1: Integration */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <Code className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Integration</h3>
                  <p className="text-gray-600 mb-6">
                    Add our lightweight SDK to your app in under 2 hours. Works with React, Vue, Angular, or vanilla
                    JavaScript.
                  </p>

                  {/* Code Example */}
                  <div className="bg-gray-900 rounded-lg p-4 mb-4">
                    <code className="text-green-400 text-sm">
                      npm install @guideon/sdk
                      <br />
                      guideon.init({"{"} apiKey: 'your-key' {"}"})
                    </code>
                  </div>

                  <div className="bg-blue-100 rounded-lg p-3">
                    <div className="text-sm text-blue-800">
                      <div className="font-medium">✓ Auto-detects your UI elements</div>
                      <div className="font-medium">✓ Zero configuration required</div>
                      <div className="font-medium">✓ Works on any device</div>
                    </div>
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                  <div className="w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-8 -mt-0.5"></div>
                </div>
              </div>

              {/* Step 2: Customer Integration */}
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <Target className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Define Your Elements</h3>
                  <p className="text-gray-600 mb-6">
                    You define which buttons, forms, and elements users should interact with through our SDK or web
                    interface. Simple tagging system.
                  </p>

                  {/* Integration Methods */}
                  <div className="space-y-3 mb-4">
                    <div className="bg-white rounded-lg p-3 border border-orange-200">
                      <div className="flex items-center space-x-2 mb-1">
                        <Code className="h-4 w-4 text-orange-600" />
                        <span className="text-sm font-medium text-gray-900">Via HTML Attributes</span>
                      </div>
                      <code className="text-xs text-gray-600">
                        data-guideon-id="signup-button"
                        <br />
                        data-guideon-label="Click to sign up"
                      </code>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-orange-200">
                      <div className="flex items-center space-x-2 mb-1">
                        <MousePointer className="h-4 w-4 text-orange-600" />
                        <span className="text-sm font-medium text-gray-900">Via Web UI</span>
                      </div>
                      <span className="text-xs text-gray-600">Point-and-click to add data attributes</span>
                    </div>
                  </div>

                  <div className="bg-orange-100 rounded-lg p-3">
                    <div className="text-sm text-orange-800">
                      <div className="font-medium">🏷️ Tag interactive elements</div>
                      <div className="font-medium">📝 Add context descriptions</div>
                      <div className="font-medium">🔄 Update as your UI evolves</div>
                    </div>
                  </div>
                </div>

                {/* Connector Arrow */}
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                  <div className="w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-8 -mt-0.5"></div>
                </div>
              </div>

              {/* Step 3: Interactive Guidance */}
              <div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <MousePointer className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Users Get Guided</h3>
                  <p className="text-gray-600 mb-6">
                    Users receive step-by-step visual guidance that highlights exactly where to click, what to fill, and
                    what happens next.
                  </p>

                  {/* User Experience Preview */}
                  <div className="bg-white rounded-lg border-2 border-dashed border-green-300 p-4 mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">Step 1 of 4</span>
                    </div>
                    <div className="bg-green-100 border border-green-200 rounded p-2 mb-2">
                      <span className="text-xs text-green-800">👆 Click the "Settings" button</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div className="bg-green-500 h-1 rounded-full" style={{ width: "25%" }}></div>
                    </div>
                  </div>

                  <div className="bg-green-100 rounded-lg p-3">
                    <div className="text-sm text-green-800">
                      <div className="font-medium">✨ Highlights interactive elements</div>
                      <div className="font-medium">📝 Provides contextual instructions</div>
                      <div className="font-medium">🎯 Tracks completion progress</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Magic Behind It */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The magic behind the scenes</h3>
                <p className="text-gray-600">
                  Advanced AI technology that transforms simple instructions into interactive guidance
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">🏷️ Smart Element Tagging</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Add data-guideon-* attributes to your HTML elements</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Simple attribute system for buttons, forms, and workflows</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Works with any HTML - no framework dependencies</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">🤖 LLM-Powered Guidance</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Converts plain English instructions into step-by-step guidance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Understands user intent and creates personalized flows</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Generates contextual help text and adaptive instructions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Real-World Example */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">See it in action</h3>
                <p className="opacity-90">How teams create and deploy interactive guidance</p>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Step 1: Developer Tags */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-blue-600 text-sm">1</span>
                      </span>
                      Developer Tags Elements
                    </h4>
                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                      <div className="text-sm text-gray-700 space-y-2">
                        <div className="bg-gray-900 rounded p-2">
                          <code className="text-green-400 text-xs">
                            {'<button data-guideon-id="settings"'}
                            <br />
                            {'  data-guideon-label="Settings">'}
                            <br />
                            {"  Settings"}
                            <br />
                            {"</button>"}
                          </code>
                        </div>
                        <div className="text-blue-700 text-xs">✅ Elements tagged with data attributes</div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Support Creates Guide */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-orange-600 text-sm">2</span>
                      </span>
                      Support Creates Guide
                    </h4>
                    <div className="bg-orange-50 rounded-lg p-4 mb-4">
                      <div className="text-sm text-gray-700 space-y-2">
                        <div>
                          <strong>Agent types:</strong> "To update profile: 1) Click Settings 2) Select Profile 3) Edit
                          info"
                        </div>
                        <div className="text-orange-700 text-xs">🤖 LLM creates interactive flow</div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: User Gets Guided */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-green-600 text-sm">3</span>
                      </span>
                      User Gets Guided
                    </h4>
                    <div className="bg-green-50 rounded-lg p-4 mb-4">
                      <div className="text-sm text-gray-700 space-y-2">
                        <div className="bg-white rounded border p-2">
                          <div className="text-xs text-green-700">👆 Click "Settings" button</div>
                          <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                            <div className="bg-green-500 h-1 rounded-full" style={{ width: "33%" }}></div>
                          </div>
                        </div>
                        <div className="text-green-700 text-xs">✨ Visual guidance appears</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Benefits Summary */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Why teams love how Guideon works</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Instant Setup</h4>
                  <p className="text-sm text-gray-600">
                    2-hour integration, immediate results. No complex configuration or training required.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Always Accurate</h4>
                  <p className="text-sm text-gray-600">
                    AI automatically updates guidance when your UI changes. Never outdated.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Universal</h4>
                  <p className="text-sm text-gray-600">
                    Works for any user, any device, any workflow. One solution for all guidance needs.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MousePointer className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Interactive</h4>
                  <p className="text-sm text-gray-600">
                    Users learn by doing, not reading. Visual guidance that actually works.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Team Benefits */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                One platform, <span className="text-blue-600">company-wide impact</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                When teams work together with Guideon, the whole organization benefits from better user experiences,
                reduced costs, and faster growth.
              </p>
            </div>

            {/* Cross-Team Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Workflow className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Seamless collaboration</h3>
                <p className="text-gray-600 mb-6">
                  Product managers define user journeys, developers integrate once, and support agents create instant
                  guidance. No handoffs, no miscommunication.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm text-blue-800">
                    <div className="font-medium mb-2">Unified workflow:</div>
                    <div className="space-y-1">
                      <div>• PM creates user journey maps</div>
                      <div>• Dev integrates SDK in 2 hours</div>
                      <div>• Support creates visual guides instantly</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Organizational efficiency</h3>
                <p className="text-gray-600 mb-6">
                  Reduce duplicate work across teams. One source of truth for user guidance that automatically stays
                  current as your product evolves.
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-sm text-green-800">
                    <div className="font-medium mb-2">Company-wide savings:</div>
                    <div className="space-y-1">
                      <div>• 60% less documentation work</div>
                      <div>• 40% fewer support escalations</div>
                      <div>• 25% faster feature adoption</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Consistent user experience</h3>
                <p className="text-gray-600 mb-6">
                  Ensure every user gets the same high-quality guidance, whether they're onboarding, learning features,
                  or getting support.
                </p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-sm text-purple-800">
                    <div className="font-medium mb-2">Unified experience:</div>
                    <div className="space-y-1">
                      <div>• Same guidance style everywhere</div>
                      <div>• Consistent brand voice</div>
                      <div>• Seamless user journey</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Company Impact Metrics */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Company-wide impact</h3>
                <p className="text-gray-600">Average results across all teams using Guideon</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Cost Reduction</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Documentation maintenance</span>
                      <span className="font-semibold text-green-600">-60%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Support ticket volume</span>
                      <span className="font-semibold text-green-600">-45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">User onboarding time</span>
                      <span className="font-semibold text-green-600">-65%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Training and enablement</span>
                      <span className="font-semibold text-green-600">-50%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Revenue Growth</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Feature adoption rate</span>
                      <span className="font-semibold text-blue-600">+85%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">User retention</span>
                      <span className="font-semibold text-blue-600">+40%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Time to value</span>
                      <span className="font-semibold text-blue-600">+200%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Customer satisfaction</span>
                      <span className="font-semibold text-blue-600">+150%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">$2.4M</div>
                <div className="text-gray-600">Average annual value created per 1000 users</div>
                <div className="text-sm text-gray-500 mt-2">Based on reduced costs + increased revenue</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Benefits Section */}
      <section className="bg-orange-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why product teams choose Guideon</h2>
            <p className="text-xl text-gray-600 mb-16">
              Transform static documentation into interactive experiences that actually help users succeed
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Goal-driven guidance</h3>
                <p className="text-gray-600">
                  AI learns what each user wants to achieve and creates personalized onboarding paths
                </p>
              </Card>

              <Card className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MousePointer className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual step-by-step</h3>
                <p className="text-gray-600">Highlights exactly where to click, what to fill, and what happens next</p>
              </Card>

              <Card className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Always up-to-date</h3>
                <p className="text-gray-600">
                  AI adapts to UI changes automatically - no more outdated documentation or broken workflows
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to transform your onboarding?</h2>
            <p className="text-xl text-gray-600 mb-10">
              Join 500+ product teams building better user experiences with AI-powered guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg"
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
      <footer className="bg-orange-50 border-t border-orange-200 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Guideon</span>
            </div>
            <div className="flex gap-8">
              <Link href="/product-managers" className="text-gray-600 hover:text-gray-900 font-medium">
                Product
              </Link>
              <Link href="/developers" className="text-gray-600 hover:text-gray-900 font-medium">
                Developers
              </Link>
              <Link href="/support" className="text-gray-600 hover:text-gray-900 font-medium">
                Support
              </Link>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
                Pricing
              </a>
            </div>
          </div>
          <div className="border-t border-orange-200 mt-8 pt-8 text-center">
            <p className="text-gray-500">© 2025 Guideon. Making user onboarding actually work.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
