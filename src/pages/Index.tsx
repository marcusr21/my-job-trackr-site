
import { ArrowRight, Calendar, DollarSign, Search, CheckCircle, Download, Smartphone, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/d02a44c8-c224-45a4-9d12-ca191441bd69.png" 
                alt="Job Trackr Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-slate-900 dark:text-white">Job Trackr</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                Features
              </Button>
              <Button variant="ghost" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                Pricing
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Sign Up Free
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
              🎯 Perfect for Recent Grads & Career Switchers
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Track Your Job Search
              <span className="text-blue-600"> Like a Pro</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Never lose track of job applications again. Job Trackr helps you organize your entire job search journey, 
              from application to offer, with powerful tracking and salary insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Start Tracking Jobs Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-slate-300 dark:border-slate-600">
                <Download className="mr-2 h-5 w-5" />
                Download App
              </Button>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
              ✅ Free forever plan • ✅ No credit card required • ✅ Mobile app coming soon
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Everything You Need to Land Your Dream Job
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              From tracking applications to managing interviews and comparing offers, 
              Job Trackr gives you the tools to stay organized and make informed decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-slate-900 dark:text-white">Job Lifecycle Tracking</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  Track every application from submission to final decision with integrated calendar for interviews and follow-ups.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-slate-900 dark:text-white">Salary Intelligence</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  Compare advertised salaries with actual offers to negotiate better and understand market rates.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="h-12 w-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                </div>
                <CardTitle className="text-slate-900 dark:text-white">Job Search Integration</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  Seamlessly import jobs from popular job boards and maintain all your applications in one place.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Perfect for Your Career Stage
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Recent Graduates</h3>
                    <p className="text-slate-600 dark:text-slate-300">Navigate your first job search with confidence and organization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Active Job Seekers</h3>
                    <p className="text-slate-600 dark:text-slate-300">Manage multiple applications without missing opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Career Switchers</h3>
                    <p className="text-slate-600 dark:text-slate-300">Compare offers across industries to make informed decisions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-700">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <span className="font-medium text-slate-900 dark:text-white">Software Engineer - Google</span>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Interview Scheduled</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <span className="font-medium text-slate-900 dark:text-white">Product Manager - Meta</span>
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">Application Sent</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="font-medium text-slate-900 dark:text-white">UX Designer - Airbnb</span>
                  <Badge className="bg-green-500 text-white">Offer Received</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Access Anywhere, Anytime
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
            Start with our web app today, and get ready for our mobile app launching soon.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-slate-200 dark:border-slate-700">
              <CardHeader className="text-center">
                <Monitor className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-slate-900 dark:text-white">Web Application</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  Full-featured web app available now. Start tracking your job search today.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Launch Web App
                </Button>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-700">
              <CardHeader className="text-center">
                <Smartphone className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-slate-900 dark:text-white">Mobile App</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-300">
                  Native mobile app in development. Get notified when it's ready.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-slate-300 dark:border-slate-600">
                  <Download className="mr-2 h-4 w-4" />
                  Notify Me
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Take Control of Your Job Search?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of job seekers who are already using Job Trackr to land their dream jobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/lovable-uploads/d02a44c8-c224-45a4-9d12-ca191441bd69.png" 
                  alt="Job Trackr Logo" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold">Job Trackr</span>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                The ultimate job search companion for recent graduates, job seekers, and career switchers.
              </p>
              <p className="text-slate-500 text-sm">
                © 2024 Job Trackr. All rights reserved.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Updates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
