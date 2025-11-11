"use client";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-emerald-300/60 selection:text-neutral-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-800">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10 ring-1 ring-emerald-400/30">🌐</span>
            <span className="text-lg font-semibold tracking-tight">Lee Consultants</span>
          </div>
          <ul className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#approach" className="hover:text-white">Approach</a></li>
            <li><a href="#work" className="hover:text-white">Work</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
          <a href="#contact" className="inline-flex items-center rounded-xl border border-emerald-400/40 px-3 py-1.5 text-sm font-medium text-emerald-300 hover:bg-emerald-400/10">Let’s talk</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-neutral-800 px-2.5 py-1 text-xs text-neutral-300">Strategy-first • AI-native • Execution-obsessed</p>
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
              We build technology strategies that deliver measurable results
            </h1>
            <p className="mt-6 text-lg text-neutral-300">
              Lee Consultants partners with leaders to turn complex technology challenges into scalable systems, architectures, and measurable business outcomes. From large-scale migrations and PCI-compliant architectures to applied GenAI—we design, build, and operationalize.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-neutral-900 hover:bg-emerald-300">Start a conversation</a>
              <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-neutral-800 px-5 py-3 font-semibold hover:bg-neutral-900/60">See services</a>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What we do</h2>
          <p className="mt-2 text-neutral-300">Focused, high-leverage engagements. Built to compound.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Enterprise & PCI Architecture',
                desc: 'Design and remediation of enterprise-scale systems aligned to PCI DSS, cloud governance, and audit-readiness.'
              },
              {
                title: 'Data Discovery & Migrations',
                desc: 'On‑prem to cloud or hybrid migrations. Full-stack inventory, dependency mapping, and zero-downtime cutovers.'
              },
              {
                title: 'Operational Stabilization',
                desc: 'Turnaround programs for large-scale systems—resilience engineering, observability, and performance tuning.'
              },
              {
                title: 'Project & Program Management',
                desc: 'PMO setup, governance models, and oversight for multi‑stream initiatives. Proven methodologies for scope, schedule, and stakeholder alignment.'
              },
              {
                title: 'AI & GenAI Strategy',
                desc: 'Practical roadmaps for AI adoption: use‑case selection, data readiness, model lifecycle management, and guardrails.'
              },
              {
                title: 'LLM / RAG Systems',
                desc: 'Retrieval‑augmented generation pipelines, knowledge bases, and copilots integrated with enterprise data.'
              },
              {
                title: 'Advisory & Fractional Leadership',
                desc: 'Hands‑on guidance for CTO/CIO/VP teams. Partner ecosystem design and capability growth acceleration.'
              }
            ].map((card, i) => (
              <div key={i} className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 hover:border-neutral-700">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How we work</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="font-semibold">Collaborative by Design</h3>
              <p className="mt-2 text-neutral-300 text-sm">Transparent communication and active co‑creation. We bring clarity to complexity and momentum to execution.</p>
            </div>
            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="font-semibold">Systems {'>'} Slides</h3>
              <p className="mt-2 text-neutral-300 text-sm">We focus on real, operational deliverables—dashboards, scripts, playbooks, and reference architectures—not just PowerPoint.</p>
            </div>
            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="font-semibold">Small Teams, Big Leverage</h3>
              <p className="mt-2 text-neutral-300 text-sm">Experienced practitioners who ship. Minimal overhead, rapid iteration, measurable value.</p>
            </div>
            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="font-semibold">Outcome‑Driven</h3>
              <p className="mt-2 text-neutral-300 text-sm">Every engagement ties back to clear metrics—stability, efficiency, compliance, or growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Selected work</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              {
                label: 'Healthcare.gov Stabilization',
                text: 'Led large-scale recovery initiative improving uptime, scaling infrastructure, and establishing operational playbooks.'
              },
              {
                label: 'Datacenter & Cloud Migrations',
                text: 'Delivered multi‑year migration programs across industries—on‑prem to cloud and hybrid modernization.'
              },
              {
                label: 'PCI-Compliant Architecture',
                text: 'Built secure, auditable enterprise architectures for Fortune 500 payment systems, aligned to PCI DSS v4.0.'
              },
              {
                label: 'AI Lab & RAG Enablement',
                text: 'Developed local AI environments and retrieval pipelines to operationalize GenAI capabilities safely and efficiently.'
              }
            ].map((w, i) => (
              <article key={i} className="rounded-2xl border border-neutral-800 p-6">
                <h3 className="font-semibold">{w.label}</h3>
                <p className="mt-2 text-sm text-neutral-300">{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-2xl border border-neutral-800 p-6 lg:p-8 bg-neutral-900/30">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Tell us what you’re building</h2>
                <p className="mt-3 text-neutral-300 text-sm">Reach out with a challenge, an idea, or a target outcome. We’ll reply within one business day.</p>
                <ul className="mt-6 text-sm text-neutral-300 space-y-2">
                  <li>📍 Based in Johns Creek, GA</li>
                  <li>🕘 Hours: Mon–Fri, 9am–6pm ET</li>
                  <li>✉️ Email: ahram.lee@lee-consultants.com</li>
                </ul>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input className="w-full rounded-xl border border-neutral-800 bg-neutral-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400/60" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input type="email" className="w-full rounded-xl border border-neutral-800 bg-neutral-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400/60" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm mb-1">What do you want to achieve?</label>
                  <textarea rows={4} className="w-full rounded-xl border border-neutral-800 bg-neutral-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400/60" placeholder="A brief on goals, constraints, timeline…" />
                </div>
                <button className="w-full rounded-xl bg-emerald-400 px-4 py-2 font-semibold text-neutral-900 hover:bg-emerald-300">Send</button>
                <p className="text-xs text-neutral-400">This demo form doesn’t submit yet. We’ll wire it to your email or CRM API next.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} Lee Consultants LLC. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-200">Privacy</a>
            <a href="#" className="hover:text-neutral-200">Terms</a>
          </div>
        </div>
      </footer>

      {/* ROADMAP NOTES (dev‑only, can be removed) */}
      <div className="sr-only">
        {`
Future scaffolding plan:
- Host on Vercel/Netlify/Cloudflare Pages; connect repo for CI.
- Add /api/contact (Next.js or serverless) → send mail via SendGrid/Resend → ahram.lee@lee-consultants.com.
- Optionally integrate with Notion, Airtable, or lightweight CRM for intake logging.
- Add /blog with MDX; /case-studies; /lab (AI projects, SOPs).
- Add analytics (Plausible/Umami). Add sitemap and OG images.
- Add dark/light toggle and basic accessibility audit.
- Add CMS option (Contentlayer, Tina, Sanity) if needed.
        `}
      </div>
    </div>
  );
}
