"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Code, GitBranch, Settings, Smartphone, ArrowLeft } from "lucide-react"

export default function DevelopersPage() {
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
      <div className="bg-blue-50 py-4">
        <div className="container mx-auto px-6">
          <Link href="/" className="inline-flex items-center space-x-2 text-blue-700 hover:text-blue-800">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to overview</span>
          </Link>
        </div>
      </div>

      {/* Dev Header */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Code className="h-4 w-4" />
                <span>For Development Teams</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Build features, not <span className="text-blue-600">documentation</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Minimal integration effort, maximum long-term savings. Stop maintaining docs that break with every
                release. Focus on what you do best - building great features.
              </p>
            </div>

            {/* Dev Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <Card className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">2 hrs</div>
                <div className="text-sm text-gray-600 mb-2">Initial Integration</div>
                <div className="text-xs text-blue-700 bg-blue-50 px-2 py-1 rounded">One-time setup</div>
              </Card>
              <Card className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">80%</div>
                <div className="text-sm text-gray-600 mb-2">Less Doc Maintenance</div>
                <div className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded">Time saved</div>
              </Card>
              <Card className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">15 hrs</div>
                <div className="text-sm text-gray-600 mb-2">Saved Per Month</div>
                <div className="text-xs text-purple-700 bg-purple-50 px-2 py-1 rounded">Per developer</div>
              </Card>
              <Card className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">7.5x</div>
                <div className="text-sm text-gray-600 mb-2">ROI First Month</div>
                <div className="text-xs text-orange-700 bg-orange-50 px-2 py-1 rounded">Immediate payback</div>
              </Card>
            </div>

            {/* Developer Workflow Demo */}
            <div className="mb-16">
              <Card className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Developer Integration Workflow</h3>
                      <p className="text-gray-600">From setup to deployment in minutes, not days</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-600">Live demo</span>
                    </div>
                  </div>

                  {/* Integration Steps */}
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {/* Step 1: Install */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-blue-900">1. Install SDK</h4>
                        <Code className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="bg-gray-900 rounded p-3 mb-3">
                        <code className="text-green-400 text-sm">npm install @guideon/sdk</code>
                      </div>
                      <div className="text-xs text-blue-700">Works with React, Vue, Angular, Vanilla JS</div>
                    </div>

                    {/* Step 2: Initialize */}
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-green-900">2. Initialize</h4>
                        <Settings className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="bg-gray-900 rounded p-3 mb-3">
                        <code className="text-green-400 text-sm text-xs">
                          guideon.init({"{"}
                          <br />
                          &nbsp;&nbsp;apiKey: 'your-key'
                          <br />
                          {"}"})
                        </code>
                      </div>
                      <div className="text-xs text-green-700">5 lines of code, automatic UI detection</div>
                    </div>

                    {/* Step 3: Deploy */}
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-purple-900">3. Deploy</h4>
                        <GitBranch className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="bg-gray-900 rounded p-3 mb-3">
                        <code className="text-green-400 text-sm">git push origin main</code>
                      </div>
                      <div className="text-xs text-purple-700">AI starts learning your UI automatically</div>
                    </div>
                  </div>

                  {/* Framework Support */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Framework Support</h4>
                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">React 16+</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">Vue 2/3</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">Angular 10+</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-gray-700">Vanilla JS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Developer Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Challenges */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-red-600 text-sm">!</span>
                  </div>
                  Developer Pain Points
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-red-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Documentation maintenance hell</h4>
                    <p className="text-gray-600 text-sm">
                      Every feature change breaks documentation. Screenshots become outdated. Instructions don't match
                      the current UI.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-red-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Time drain on non-core work</h4>
                    <p className="text-gray-600 text-sm">
                      30% of development time spent updating docs instead of building features. Context switching kills
                      productivity.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-red-100">
                    <h4 className="font-semibold text-gray-900 mb-2">User support burden</h4>
                    <p className="text-gray-600 text-sm">
                      Developers get pulled into support tickets because documentation is unclear or outdated.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-red-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Fast-moving teams can't keep up</h4>
                    <p className="text-gray-600 text-sm">
                      High-velocity teams ship features faster than docs can be updated. Documentation debt grows.
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
                  How Guideon Solves This
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-green-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Auto-updating guidance</h4>
                    <p className="text-gray-600 text-sm">
                      AI automatically adapts to UI changes. No more broken screenshots or outdated instructions. Always
                      current.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-100">
                    <h4 className="font-semibold text-gray-900 mb-2">80% less maintenance work</h4>
                    <p className="text-gray-600 text-sm">
                      One-time integration saves 15+ hours per month per developer. Focus on features, not docs.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Reduced support interruptions</h4>
                    <p className="text-gray-600 text-sm">
                      Clear visual guidance reduces user confusion and support tickets. Developers stay focused.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Scales with velocity</h4>
                    <p className="text-gray-600 text-sm">
                      The faster you ship, the more time you save. Perfect for high-velocity development teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Developer-Specific Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">TypeScript support</h3>
                <p className="text-gray-600 mb-4">
                  Full TypeScript definitions included. IntelliSense support for better developer experience.
                </p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-sm text-blue-800">
                    <div className="font-medium mb-1">Type-safe API</div>
                    <div>Auto-completion & error checking</div>
                  </div>
                </div>
              </Card>

              <Card className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <GitBranch className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">CI/CD integration</h3>
                <p className="text-gray-600 mb-4">
                  Seamlessly integrates with your deployment pipeline. Automatic updates on every release.
                </p>
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-sm text-green-800">
                    <div className="font-medium mb-1">GitHub Actions ready</div>
                    <div>Vercel, Netlify, AWS compatible</div>
                  </div>
                </div>
              </Card>

              <Card className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile responsive</h3>
                <p className="text-gray-600 mb-4">
                  Works perfectly on mobile devices. Responsive guidance that adapts to any screen size.
                </p>
                <div className="bg-purple-50 rounded-lg p-3">
                  <div className="text-sm text-purple-800">
                    <div className="font-medium mb-1">Cross-platform</div>
                    <div>iOS, Android, Desktop</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Developer Success Story */}
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm mb-16">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-lg">"</span>
                </div>
                <div>
                  <blockquote className="text-lg text-gray-900 mb-4">
                    "We were spending 2 days every sprint updating documentation. With Guideon, we integrated once and
                    never looked back. Our team now ships 40% more features because we're not constantly fixing broken
                    docs."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-gray-900">Alex Rodriguez</div>
                      <div className="text-gray-600 text-sm">Lead Developer, StartupCo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Developer ROI Card */}
            <div className="bg-blue-50 rounded-xl border border-blue-200 p-8 shadow-sm">
              <div className="text-center mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-2">ROI for Development Teams</h4>
                <p className="text-gray-600">Based on teams shipping 2+ features per month</p>
              </div>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">2 hrs</div>
                  <div className="text-sm text-gray-600">Initial integration</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">80%</div>
                  <div className="text-sm text-gray-600">Less doc maintenance</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">15 hrs</div>
                  <div className="text-sm text-gray-600">Saved per month</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">7.5x</div>
                  <div className="text-sm text-gray-600">ROI in first month</div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to focus on features?</h2>
            <p className="text-xl text-gray-600 mb-10">
              Join development teams who've saved 15+ hours per month with Guideon
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg">
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
