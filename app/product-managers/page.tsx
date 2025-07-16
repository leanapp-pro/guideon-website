"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { TrendingUp, BarChart3, Clock, Users, Target, ArrowLeft } from "lucide-react"

export default function ProductManagersPage() {
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

      {/* Back Navigation */}
      <div className="bg-green-50 py-4">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center space-x-2 text-green-700 hover:text-green-800">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to overview</span>
          </Link>
        </div>
      </div>

      {/* PM Header */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <TrendingUp className="h-4 w-4" />
                <span>For Product Managers</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Turn feature launches into <span className="text-green-600">success stories</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stop guessing why users don't adopt features. Get the data and tools you need to drive product success
                through better onboarding experiences.
              </p>
            </div>

            {/* Key Metrics Row */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <Card className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-sm text-gray-600 mb-2">Feature Adoption Rate</div>
                <div className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded">↑ 23% increase</div>
              </Card>
              <Card className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">2.3 days</div>
                <div className="text-sm text-gray-600 mb-2">Time to Value</div>
                <div className="text-xs text-blue-700 bg-blue-50 px-2 py-1 rounded">↓ 65% faster</div>
              </Card>
              <Card className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                <div className="text-sm text-gray-600 mb-2">Churn Reduction</div>
                <div className="text-xs text-purple-700 bg-purple-50 px-2 py-1 rounded">Better retention</div>
              </Card>
              <Card className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">25%</div>
                <div className="text-sm text-gray-600 mb-2">Revenue Growth</div>
                <div className="text-xs text-orange-700 bg-orange-50 px-2 py-1 rounded">From better adoption</div>
              </Card>
            </div>

            {/* Product Analytics Dashboard Preview */}
            <div className="mb-16">
              <Card className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Product Analytics Dashboard</h3>
                      <p className="text-gray-600">Real-time insights into user onboarding and feature adoption</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">Live data</span>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {/* Feature Adoption Chart */}
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-green-900">Feature Adoption</h4>
                        <TrendingUp className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="text-2xl font-bold text-green-900 mb-2">85%</div>
                      <div className="text-sm text-green-700 mb-3">↑ 23% from last month</div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-green-700">Team Setup</span>
                          <span className="text-green-800 font-medium">94%</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-green-700">Integrations</span>
                          <span className="text-green-800 font-medium">87%</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-green-700">Advanced Features</span>
                          <span className="text-green-800 font-medium">76%</span>
                        </div>
                      </div>
                    </div>

                    {/* User Journey Funnel */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-blue-900">User Journey</h4>
                        <BarChart3 className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-blue-900 mb-2">92%</div>
                      <div className="text-sm text-blue-700 mb-3">Completion rate</div>
                      <div className="space-y-2">
                        <div className="bg-blue-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                        <div className="bg-blue-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: "94%" }}></div>
                        </div>
                        <div className="bg-blue-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Time to Value */}
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-purple-900">Time to Value</h4>
                        <Clock className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="text-2xl font-bold text-purple-900 mb-2">2.3 days</div>
                      <div className="text-sm text-purple-700 mb-3">↓ 65% improvement</div>
                      <div className="text-xs text-purple-700">
                        <div className="mb-1">Avg. before: 6.8 days</div>
                        <div>Target: &lt; 2 days</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Insights */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Insights</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <span className="font-medium text-gray-900">Team Setup flow</span>
                          <span className="text-gray-600"> has the highest completion rate at 94%</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <span className="font-medium text-gray-900">Integration step</span>
                          <span className="text-gray-600"> shows 13% drop-off - needs optimization</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                        <div>
                          <span className="font-medium text-gray-900">Users reaching value</span>
                          <span className="text-gray-600"> in under 2 days have 95% retention</span>
                        </div>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                        <div>
                          <span className="font-medium text-gray-900">Mobile users</span>
                          <span className="text-gray-600"> complete onboarding 18% faster</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* PM Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Challenges */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-red-600 text-sm">!</span>
                  </div>
                  Common PM Challenges
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-red-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Low feature adoption rates</h4>
                    <p className="text-gray-600 text-sm">
                      You ship amazing features but users don't discover or use them. Adoption metrics are
                      disappointing.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-red-100">
                    <h4 className="font-semibold text-gray-900 mb-2">High user churn</h4>
                    <p className="text-gray-600 text-sm">
                      Users sign up but leave before experiencing your product's core value. Retention is a constant
                      struggle.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-red-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Unclear user journey insights</h4>
                    <p className="text-gray-600 text-sm">
                      You know users are dropping off but can't pinpoint exactly where or why it's happening.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-red-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Slow time-to-value</h4>
                    <p className="text-gray-600 text-sm">
                      Users take too long to reach their "aha moment" and see the value in your product.
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
                  How Guideon Helps
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-green-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Drive 85% feature adoption</h4>
                    <p className="text-gray-600 text-sm">
                      Interactive guidance ensures users discover and successfully use new features from day one.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Reduce churn by 40%</h4>
                    <p className="text-gray-600 text-sm">
                      Better onboarding experiences help users reach value faster, leading to higher retention rates.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Get detailed user analytics</h4>
                    <p className="text-gray-600 text-sm">
                      See exactly where users struggle, which steps they skip, and what drives successful outcomes.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-100">
                    <h4 className="font-semibold text-gray-900 mb-2">3x faster time-to-value</h4>
                    <p className="text-gray-600 text-sm">
                      Guided experiences help users reach their goals and "aha moments" much faster.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PM-Specific Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">A/B test onboarding flows</h3>
                <p className="text-gray-600 mb-4">
                  Test different onboarding approaches and see which drives better adoption and retention.
                </p>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-sm text-green-800">
                    <div className="font-medium mb-1">Current test: Welcome flow A vs B</div>
                    <div>Flow B: +12% completion rate</div>
                  </div>
                </div>
              </Card>

              <Card className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cohort analysis</h3>
                <p className="text-gray-600 mb-4">
                  Track user cohorts over time to understand long-term retention and feature adoption patterns.
                </p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-sm text-blue-800">
                    <div className="font-medium mb-1">Week 1 cohort retention</div>
                    <div>Day 7: 78% | Day 30: 65%</div>
                  </div>
                </div>
              </Card>

              <Card className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Goal-based segmentation</h3>
                <p className="text-gray-600 mb-4">
                  Segment users by their goals and create personalized onboarding experiences for each segment.
                </p>
                <div className="bg-purple-50 rounded-lg p-3">
                  <div className="text-sm text-purple-800">
                    <div className="font-medium mb-1">Top segments</div>
                    <div>Team leads: 89% | Individual: 76%</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Success Story */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm mb-16">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-lg">"</span>
                </div>
                <div>
                  <blockquote className="text-lg text-gray-900 mb-4">
                    "Guideon transformed how we think about feature launches. Instead of hoping users discover new
                    features, we now guide them through interactive experiences. Our feature adoption went from 45% to
                    85% in just two months."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Sarah Chen</div>
                      <div className="text-gray-600 text-sm">Senior Product Manager, TechFlow</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product ROI Card */}
            <div className="bg-green-50 rounded-xl border border-green-200 p-8 shadow-sm">
              <div className="text-center mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-2">ROI for Product Teams</h4>
                <p className="text-gray-600">Based on SaaS products with 1000+ monthly active users</p>
              </div>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                  <div className="text-sm text-gray-600">Feature adoption rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                  <div className="text-sm text-gray-600">Churn reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">3x</div>
                  <div className="text-sm text-gray-600">Faster time-to-value</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">25%</div>
                  <div className="text-sm text-gray-600">Revenue increase</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to drive feature adoption?</h2>
            <p className="text-xl text-gray-600 mb-10">
              Join product managers who've increased feature adoption by 85% with Guideon
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-lg">
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
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-500">© 2025 Guideon. Making user onboarding actually work.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
