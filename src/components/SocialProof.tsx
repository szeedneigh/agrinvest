import { Badge } from "@/components/ui/badge";

const stats = [
  {
    number: "1,000+",
    label: "Farmers Supported",
    description: "Active farmers receiving interest-free capital"
  },
  {
    number: "₱5M+",
    label: "Invested",
    description: "Total capital deployed to farming projects"
  },
  {
    number: "85%",
    label: "Success Rate",
    description: "Projects meeting or exceeding expectations"
  },
  {
    number: "2,500+",
    label: "Community Members",
    description: "Investors and farmers in our ecosystem"
  },
];

const testimonials = [
  {
    name: "Maria Santos",
    role: "Rice Farmer, Nueva Ecija",
    quote: "AGRiNVEST gave me the capital I needed without the crushing interest rates. Now I can focus on growing my harvest instead of worrying about debt.",
    type: "farmer"
  },
  {
    name: "Jose Cruz",
    role: "Young Investor, Manila",
    quote: "Starting with just ₱50, I've been able to support local farmers while learning about sustainable agriculture. The impact tracking keeps me motivated.",
    type: "investor"
  },
  {
    name: "Elena Rodriguez",
    role: "Vegetable Farmer, Benguet",
    quote: "The market data access helped me choose the right crops to plant. My income has increased by 40% since joining AGRiNVEST.",
    type: "farmer"
  },
  {
    name: "Miguel Tan",
    role: "Student Investor, Quezon City",
    quote: "As a student, I never thought I could make a real difference. AGRiNVEST made impact investing accessible and educational.",
    type: "investor"
  },
];

export function SocialProof() {
  return (
    <section id="impact" className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Real Impact, Real Numbers
          </h2>
          <p className="mt-4 text-lg text-gray-600 sm:text-xl">
            See the difference we&apos;re making in Philippine agriculture
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <span className="text-2xl font-bold text-green-600">
                  {stat.number.split('').map((char, i) => (
                    <span key={i} className="inline-block">
                      {char}
                    </span>
                  ))}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {stat.number}
              </h3>
              <p className="font-medium text-gray-700 mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Community Says
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Real stories from real people making a difference
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
                {/* Quote Mark */}
                <div className="mb-4">
                  <svg className="h-8 w-8 text-green-600" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2zM24 8v8a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z" />
                  </svg>
                </div>

                <blockquote className="text-gray-700 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  </div>
                  <Badge
                    variant={testimonial.type === 'farmer' ? 'default' : 'secondary'}
                    className={testimonial.type === 'farmer' ? 'bg-yellow-600' : 'bg-green-600'}
                  >
                    {testimonial.type === 'farmer' ? 'Farmer' : 'Investor'}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            Trusted & Secure
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Bank-Grade Security</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>SEC Registered</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span>ISO Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
