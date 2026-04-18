import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: { monthly: 9, yearly: 7 },
    description: "Perfect for indie makers and side projects",
    color: "from-teal-400 via-emerald-500 to-cyan-600",
    shadow: "shadow-emerald-500/40",
    features: [
      "5 projects",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "API access",
    ],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Pro",
    price: { monthly: 29, yearly: 23 },
    description: "For teams shipping fast and scaling up",
    color: "from-orange-400 via-pink-500 to-purple-600",
    shadow: "shadow-pink-500/50",
    features: [
      "Unlimited projects",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom domains",
      "Team collaboration",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: { monthly: 99, yearly: 79 },
    description: "For orgs that need control and compliance",
    color: "from-indigo-400 via-violet-500 to-fuchsia-600",
    shadow: "shadow-violet-500/40",
    features: [
      "Unlimited everything",
      "1TB storage",
      "Custom analytics",
      "24/7 dedicated support",
      "SLA guarantee",
      "SSO & SAML",
      "Audit logs",
      "Custom contracts",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

const CheckIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="8" className="fill-current opacity-20" />
    <path d="M4.5 8l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function App() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-4 py-16">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-600 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-600 rounded-full opacity-10 blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative text-center mb-12">
        <p className="text-xs font-bold tracking-widest text-pink-400 uppercase mb-3">Pricing</p>
        <h1 className="text-5xl font-black text-white tracking-tight mb-4">
          Simple,{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400">
            honest pricing
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-md mx-auto">
          No hidden fees. No surprises. Cancel anytime.
        </p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <span className={`text-sm font-medium ${!yearly ? "text-white" : "text-gray-500"}`}>Monthly</span>
          <button
            onClick={() => setYearly(!yearly)}
            className={`relative w-12 h-6 rounded-full transition-all duration-300 ${yearly ? "bg-gradient-to-r from-orange-400 to-pink-500" : "bg-gray-700"}`}
          >
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-300 ${yearly ? "left-7" : "left-1"}`} />
          </button>
          <span className={`text-sm font-medium ${yearly ? "text-white" : "text-gray-500"}`}>
            Yearly
            <span className="ml-2 text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">-20%</span>
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="relative flex flex-col lg:flex-row gap-6 items-center lg:items-stretch w-full max-w-5xl">
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            className={`relative flex-1 rounded-2xl p-px transition-all duration-300 ${plan.popular ? "scale-105 lg:scale-110" : "hover:scale-[1.02]"}`}
            style={{ background: plan.popular ? `linear-gradient(135deg, #f97316, #ec4899, #a855f7)` : "transparent" }}
          >
            <div className={`h-full rounded-2xl bg-gray-900 p-8 flex flex-col ${!plan.popular ? "border border-gray-800" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-white text-xs font-black tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg shadow-pink-500/40">
                    Most popular
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <div className={`inline-flex w-10 h-10 rounded-xl bg-gradient-to-br ${plan.color} items-center justify-center mb-4 shadow-lg ${plan.shadow}`}>
                  <div className="w-4 h-4 bg-white rounded-sm opacity-90" />
                </div>
                <h2 className="text-white font-black text-xl mb-1">{plan.name}</h2>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-end gap-1">
                  <span className="text-gray-500 text-lg font-medium">$</span>
                  <span className={`text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br ${plan.color}`}>
                    {yearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-gray-500 text-sm mb-2">/mo</span>
                </div>
                {yearly && (
                  <p className="text-xs text-gray-600 mt-1">
                    Billed ${plan.price.yearly * 12}/year
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2.5 text-sm ${plan.popular ? "text-gray-300" : "text-gray-400"}`}>
                    <span className={`bg-clip-text text-transparent bg-gradient-to-br ${plan.color} flex-shrink-0`}>
                      <CheckIcon />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  plan.popular
                    ? `bg-gradient-to-r ${plan.color} text-white shadow-lg ${plan.shadow} hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]`
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {plan.cta} →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="relative text-gray-600 text-sm mt-10">
        All plans include a 14-day free trial. No credit card required.
      </p>
    </div>
  );
}
