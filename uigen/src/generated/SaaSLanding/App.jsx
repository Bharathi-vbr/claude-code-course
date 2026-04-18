import { useState } from "react";

const navLinks = ["Features", "Pricing", "Docs", "Blog"];

const stats = [
  { value: "50K+", label: "Active users" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "2.4M", label: "Tasks automated" },
  { value: "<50ms", label: "Avg response" },
];

const features = [
  {
    icon: "⚡",
    title: "Blazing fast",
    desc: "Sub-50ms response times globally. Your users never wait.",
    gradient: "from-orange-400 to-amber-500",
    shadow: "shadow-orange-500/30",
  },
  {
    icon: "🔒",
    title: "Enterprise security",
    desc: "SOC2 Type II, end-to-end encryption, SSO, and audit logs built in.",
    gradient: "from-teal-400 to-emerald-500",
    shadow: "shadow-emerald-500/30",
  },
  {
    icon: "📈",
    title: "Scale without limits",
    desc: "From 1 user to 1 million. Infrastructure that grows with you.",
    gradient: "from-violet-400 to-purple-600",
    shadow: "shadow-violet-500/30",
  },
  {
    icon: "🔗",
    title: "150+ integrations",
    desc: "Slack, GitHub, Notion, Stripe, and more. Connect your entire stack.",
    gradient: "from-pink-400 to-rose-500",
    shadow: "shadow-pink-500/30",
  },
  {
    icon: "🤖",
    title: "AI-powered automation",
    desc: "Let AI handle the repetitive work so your team ships faster.",
    gradient: "from-cyan-400 to-blue-500",
    shadow: "shadow-cyan-500/30",
  },
  {
    icon: "📊",
    title: "Real-time analytics",
    desc: "Live dashboards, custom reports, and actionable insights.",
    gradient: "from-lime-400 to-green-500",
    shadow: "shadow-lime-500/30",
  },
];

const testimonials = [
  {
    quote: "We cut our deployment time by 80% in the first week. Absolutely transformative.",
    name: "Sarah Chen",
    role: "CTO at Vercel",
    avatar: "SC",
    color: "from-orange-400 to-pink-500",
  },
  {
    quote: "Finally a tool that doesn't get in the way. Our team adopted it overnight.",
    name: "Marcus Rivera",
    role: "Engineering Lead at Linear",
    avatar: "MR",
    color: "from-teal-400 to-cyan-500",
  },
  {
    quote: "The analytics alone are worth 10x the price. We discovered issues we didn't know existed.",
    name: "Priya Patel",
    role: "Head of Product at Loom",
    avatar: "PP",
    color: "from-violet-400 to-purple-500",
  },
];

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-4 border-b border-white/5 backdrop-blur-md bg-gray-950/80">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-400 to-pink-500 shadow-lg shadow-pink-500/40" />
          <span className="font-black text-lg tracking-tight">Flowly</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l} href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm text-gray-400 hover:text-white transition-colors">Log in</button>
          <button className="text-sm bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold px-4 py-2 rounded-lg shadow-lg shadow-pink-500/30 hover:scale-105 hover:shadow-pink-500/50 transition-all duration-200">
            Get started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24 pb-16">
        {/* blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600 rounded-full opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600 rounded-full opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-700 rounded-full opacity-5 blur-3xl pointer-events-none" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-medium text-gray-400 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Now in public beta — free for 14 days
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 leading-none">
            Ship faster.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-pink-400 to-violet-400">
              Break nothing.
            </span>
          </h1>

          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Flowly automates your entire deployment pipeline — from code review
            to production — so your team spends time building, not babysitting.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <div className="flex bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent px-5 py-3 text-sm text-white placeholder-gray-600 outline-none w-64"
              />
              <button
                onClick={() => setSubmitted(true)}
                className="bg-gradient-to-r from-orange-400 to-pink-500 text-white text-sm font-bold px-5 py-3 hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                {submitted ? "✓ You're in!" : "Start for free →"}
              </button>
            </div>
          </div>
          <p className="text-gray-600 text-xs mt-3">No credit card required · Cancel anytime</p>
        </div>

        {/* Hero image placeholder */}
        <div className="relative mt-20 w-full max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10 pointer-events-none" />
          <div className="bg-gray-900 border border-white/10 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="flex-1 mx-4 bg-white/5 rounded-md h-5" />
            </div>
            <div className="grid grid-cols-4 gap-4 p-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4">
                  <div className={`h-2 rounded-full bg-gradient-to-r ${features[i].gradient} mb-3 opacity-60`} style={{ width: `${60 + i * 10}%` }} />
                  <div className="h-8 bg-white/5 rounded-lg mb-2" />
                  <div className="h-2 bg-white/5 rounded-full w-3/4" />
                </div>
              ))}
              <div className="col-span-4 bg-white/5 rounded-xl p-4 h-32" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-br from-orange-400 to-pink-500 mb-1">{s.value}</div>
              <div className="text-gray-500 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest text-pink-400 uppercase mb-3">Features</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Everything your team needs
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">Built for engineers who care about quality, speed, and reliability.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="group relative bg-gray-900 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 hover:-translate-y-1">
                <div className={`inline-flex w-11 h-11 rounded-xl bg-gradient-to-br ${f.gradient} items-center justify-center text-xl mb-5 shadow-lg ${f.shadow} group-hover:scale-110 transition-transform duration-300`}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-3">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">Loved by engineers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-900 border border-white/5 rounded-2xl p-6">
                <p className="text-gray-300 text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-black`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-violet-500/10 rounded-3xl blur-2xl pointer-events-none" />
          <div className="relative bg-gray-900 border border-white/10 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
              Ready to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-400">
                ship faster?
              </span>
            </h2>
            <p className="text-gray-400 mb-8">Join 50,000+ engineers already using Flowly.</p>
            <button className="bg-gradient-to-r from-orange-400 via-pink-500 to-violet-500 text-white font-black px-10 py-4 rounded-xl text-lg shadow-2xl shadow-pink-500/40 hover:scale-105 hover:shadow-pink-500/60 transition-all duration-300">
              Start free trial →
            </button>
            <p className="text-gray-600 text-xs mt-4">14-day free trial · No credit card · Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-gradient-to-br from-orange-400 to-pink-500" />
            <span className="font-black text-sm">Flowly</span>
          </div>
          <p className="text-gray-600 text-xs">© 2026 Flowly Inc. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Status"].map((l) => (
              <a key={l} href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
