import { Button, Card } from '../components';

export default function Index() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to Party Flow
          </h1>
          <p className="text-xl text-gray-600">
            A modern full-stack application with Next.js and NestJS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card title="Tailwind CSS v4">
            <p className="mb-4">
              Styled with the latest Tailwind CSS v4 for modern, utility-first styling.
            </p>
            <Button variant="primary" size="sm">
              Learn More
            </Button>
          </Card>

          <Card title="Next.js 16">
            <p className="mb-4">
              Built with Next.js for server-side rendering and optimal performance.
            </p>
            <Button variant="secondary" size="sm">
              Explore
            </Button>
          </Card>

          <Card title="NestJS Backend">
            <p className="mb-4">
              Powered by NestJS for a robust and scalable backend API.
            </p>
            <Button variant="outline" size="sm">
              View API
            </Button>
          </Card>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Fast Development
                </h3>
                <p className="text-gray-600">
                  Hot reload for both frontend and backend with Nx monorepo.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Modern Design
                </h3>
                <p className="text-gray-600">
                  Beautiful UI components built with Tailwind CSS v4.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Type Safe
                </h3>
                <p className="text-gray-600">
                  Full TypeScript support for type safety across the stack.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="shrink-0 w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Scalable Architecture
                </h3>
                <p className="text-gray-600">
                  Built with Nx for optimal code organization and scalability.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-6 text-primary-50">
            Run the development servers and start building your application
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white text-primary-600 hover:bg-primary-50 border-white">
              View Documentation
            </Button>
            <Button variant="primary" size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
              Start Coding
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
