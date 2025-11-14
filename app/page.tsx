"use client";

import { useState } from "react";

export default function LandingPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

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
              Lee Consultants partners with leaders to turn complex technology challenges into scalable systems, architectures, and measurable business outcomes. From large-scale migrations and PCI-compliant architectures to applied GenAI - we design, build, and operationalize.
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
                desc: 'On-prem to cloud or hybrid migrations. Full-stack inventory, dependency mapping, and zero-downtime cutovers.'
              },
              {
                title: 'Operational Stabilization',
                desc: 'Turnaround programs for large-scale systems - resilience engineering, observability, and performance tuning.'
              },
              {
                title: 'Project & Program Management',
                desc: 'PMO setup, governance models, and oversight for multi-stream initiatives. Proven methodologies for scope, schedule, and stakeholder alignment.'
              },
              {
                title: 'AI & GenAI Strategy',
                desc: 'Practical roadmaps for AI adoption: use-case selection, data readiness, model lifecycle management, and guardrails.'
              },
              {
                title: 'LLM / RAG Systems',
                desc: 'Retrieval-augmented generation pipelines, knowledge bases, and copilots integrated with enterprise data.'
              },
              {
                title: 'Advisory & Fractional Leadership',
                desc: 'Hands-on guidance for CTO/CIO/VP teams. Partner ecosystem design and capability growth acceleration.'
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
              <p className="mt-2 text-neutral-300 text-sm">Transparent communication and active co-creation. We bring clarity to complexity and momentum to execution.</p>
            </div>
            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="font-semibold">Systems {'>'} Slides</h3>
              <p className="mt-2 text-neutral-300 text-sm">We focus on real, operational deliverables - dashboards, scripts, playbooks, and reference architectures - not just PowerPoint.</p>
            </div>
            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="font-semibold">Small Teams, Big Leverage</h3>
              <p className="mt-2 text-neutral-300 text-sm">Experienced practitioners who ship. Minimal overhead, rapid iteration, measurable value.</p>
            </div>
            <div className="rounded-2xl border border-neutral-800 p-6">
              <h3 className="font-semibold">Outcome-Driven</h3>
              <p className="mt-2 text-neutral-300 text-sm">Every engagement ties back to clear metrics - stability, efficiency, compliance, or growth.</p>
            </div>
          </div>
        </div>
      </section>
            
      {/* AI FACTORY TRANSFORMATION TIMELINE */}
      <section id="ai-factory-timeline" className="relative border-b border-neutral-800 bg-neutral-950/30 overflow-hidden">
        {/* Gradient performance arrow background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-transparent via-emerald-500/10 to-emerald-400/20 opacity-90" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-center">
            The AI Factory Transformation Path
          </h2>
          <p className="mt-3 text-neutral-300 text-sm sm:text-base text-center max-w-3xl mx-auto">
            From siloed data to an adaptive intelligence fabric. Each stage compounds learning, efficiency, and impact.
          </p>

          {/* Axis labels */}
          <div className="relative mt-10">
            <div className="absolute left-0 top-1/2 -translate-y-[5%] -rotate-90 origin-left text-xs text-neutral-500 uppercase tracking-wide">
              Performance Impact →
            </div>
            <div className="absolute bottom-0 right-1/2 translate-x-1/2 text-xs text-neutral-500 uppercase tracking-wide">
              Transformation Stage →
            </div>
          </div>

          {/* Timeline core */}
          <div className="mt-12 relative">
            {/* Horizontal connector line */}
            <div className="absolute left-0 right-0 top-8 h-[2px] bg-gradient-to-r from-emerald-400/40 via-neutral-700 to-emerald-400/40" />

            {/* Stages */}
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                {
                  stage: "1",
                  title: "AI Discovery & Experimentation",
                  desc: "Identify and unify siloed data, establish visibility, and generate pilot opportunities.",
                },
                {
                  stage: "2",
                  title: "AI Operationalization",
                  desc: "Deploy pilots into production with data pipelines, governance, and feedback mechanisms.",
                },
                {
                  stage: "3",
                  title: "AI Optimization & Scaling",
                  desc: "Centralize data into hubs or fabrics, unify APIs, and scale AI capabilities enterprise-wide.",
                },
                {
                  stage: "4",
                  title: "AI Autonomy & Intelligence Fabric",
                  desc: "Evolve toward a self-learning enterprise where data, models, and decisions continuously adapt.",
                },
              ].map((item, index) => (
                <div key={item.stage} className="relative flex flex-col items-center text-center">
                  {/* Node */}
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 border-2 border-emerald-400/60 text-emerald-300 font-semibold shadow-lg shadow-emerald-500/10">
                    {item.stage}
                  </div>
                  {/* Stage title */}
                  <p className="mt-4 text-sm font-semibold text-neutral-100">{item.title}</p>
                  {/* Description */}
                  <p className="mt-2 text-xs text-neutral-400 max-w-[14rem]">{item.desc}</p>
                  {/* Vertical connectors (for stacked layout) */}
                  {index < 3 && (
                    <div className="lg:hidden mt-8 w-[2px] h-8 bg-neutral-700 rounded-full" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-neutral-400 uppercase tracking-wide">
              Improvement - Demonstration - Optimization - Transformation
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-6 py-3 font-semibold text-neutral-900 hover:bg-emerald-300 transition-colors"
            >
              Get Your AI Factory Roadmap
            </a>
          </div>
        </div>
      </section>



      {/* AI DISCOVERY & EXPERIMENTATION */}
      <section id="ai-discovery" className="border-b border-neutral-800 bg-neutral-900/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Stage 1 - AI Discovery & Experimentation
          </h2>
          <p className="mt-3 text-neutral-300 text-sm sm:text-base max-w-3xl">
            Before building AI, build <span className="text-emerald-400 font-medium">awareness. </span>
            Lee Consultants helps enterprises see their full data, cost, and capability landscape - 
            unifying it under a framework of <strong>autonomous data profiling</strong>,
            ethical intelligence, and continuous learning.  
            This is how raw data becomes a self-improving AI Factory.
          </p>

          <div className="mt-10 space-y-8">
            {[
              {
                step: "1",
                title: "Total Data Landscape Discovery",
                desc: "Identify every data-producing system - on-prem, cloud, SaaS, data lakes, APIs, IoT, collaboration, telemetry, and shadow IT. Map ownership, sensitivity, and connectivity."
              },
              {
                step: "2",
                title: "Financial Intelligence (CapEx / OpEx / P&L)",
                desc: "Tie each data system to its financial footprint: hardware, software, licensing, vendor contracts, cloud utilization, and labor - exposing hidden redundancies and under-used assets."
              },
              {
                step: "3",
                title: "Data Element & Dependency Inventory",
                desc: "Profile schemas, lineage, update cadence, retention rules, and inter-dependencies to understand how information flows."
              },
              {
                step: "4",
                title: "Autonomous Data Profiling",
                desc: "Use AI-driven profilers to autonomously interpret and score datasets for semantics, quality, anomalies, and business context - building a living metadata layer."
              },
              {
                step: "5",
                title: "Data Trust & Compliance Assessment",
                desc: "Evaluate governance, access controls, sensitivity (PII/PCI/PHI), and lineage auditability to ensure responsible AI readiness."
              },
              {
                step: "6",
                title: "Dataset Profiling & Utilization Reporting",
                desc: "Quantify value vs usage for each dataset and identify dark data (collected but unused)."
              },
              {
                step: "7",
                title: "Analytical Insight Extraction",
                desc: "Apply exploratory analytics and ML to surface correlations, trendlines, and operational signals."
              },
              {
                step: "8",
                title: "Use-Case Opportunity Mapping",
                desc: "Group insights into actionable AI/automation use cases aligned with strategic objectives - efficiency, CX, risk, growth."
              },
              {
                step: "9",
                title: "Inter-Dataset Commonality & Fusion Design",
                desc: "Identify redundant or complementary datasets and design unified ‘fusion’ views for cross-domain intelligence."
              },
              {
                step: "10",
                title: "Systemic Waste & Efficiency Diagnostics",
                desc: "Locate waste from reactive operations, duplicate storage, fragmented compute, or license inefficiencies."
              },
              {
                step: "11",
                title: "Pilot Opportunity Conversion",
                desc: "Translate top waste items or insights into measurable AI pilots with clear ROI hypotheses."
              },
              {
                step: "12",
                title: "Ethical & Sustainability Calibration",
                desc: "Evaluate ethical impact, carbon footprint, and workforce effects before scaling AI."
              },
              {
                step: "13",
                title: "Feedback Loop & Learning System",
                desc: "Implement automated feedback on accuracy, adoption, and ROI; feed learned signals back into governance."
              },
              {
                step: "14",
                title: "AI Factory Release 1.0 → Productionalization",
                desc: "Harden validated pilots with MLOps and versioned deployment playbooks."
              },
              {
                step: "15",
                title: "Iterate & Scale → Adaptive AI Factory",
                desc: "Institutionalize continuous learning so each cycle improves data quality, efficiency, and strategic foresight."
              },
            ].map((item) => (
              <div key={item.step} className="border border-neutral-800 rounded-2xl p-5 hover:border-neutral-700 bg-neutral-950/40">
                <h3 className="font-semibold text-emerald-300">
                  Step {item.step}. {item.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-400 text-sm">
              This is Stage 1 of our AI Factory model - where data, dollars, and decisions align to build a self-improving enterprise intelligence system.
            </p>
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
                text: 'Delivered multi-year migration programs across industries - on-prem to cloud and hybrid modernization.'
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
                <p className="mt-3 text-neutral-300 text-sm">
                  Reach out with a challenge, an idea, or a target outcome. We’ll reply within one business day.
                </p>
                <ul className="mt-6 text-sm text-neutral-300 space-y-2">
                  <li>📍 Based in Johns Creek, GA</li>
                  <li>🕘 Hours: Mon–Fri, 9am–6pm ET</li>
                  <li>✉️ Email: ahram.lee@lee-consultants.com</li>
                </ul>
              </div>

              <form
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setStatus("sending");

                  const form = e.currentTarget;
                  const name = form.querySelector<HTMLInputElement>('input[name="name"]')?.value;
                  const email = form.querySelector<HTMLInputElement>('input[name="email"]')?.value;
                  const phone = form.querySelector<HTMLInputElement>('input[name="phone"]')?.value; // ✅ added
                  const message = form.querySelector<HTMLTextAreaElement>('textarea[name="message"]')?.value;

                  try {
                    const res = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ name, email, phone, message }), // ✅ send phone
                    });

                    const data = await res.json();
                    if (data.success) {
                      setStatus("success");
                      form.reset();
                    } else {
                      setStatus("error");
                    }
                  } catch (err) {
                    console.error("Error submitting form:", err);
                    setStatus("error");
                  }
                }}
              >
                <div>
                  <label className="block text-sm mb-1" htmlFor="name">Name</label>
                  <input
                    name="name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400/60"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1" htmlFor="email">Email</label>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400/60"
                    placeholder="you@company.com"
                  />
                </div>

                {/* ✅ New phone number field */}
                <div>
                  <label className="block text-sm mb-1" htmlFor="phone">Phone</label>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    pattern="^[0-9+\-()\s]*$"
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400/60"
                    placeholder="Your phone number (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1" htmlFor="message">What do you want to achieve?</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400/60"
                    placeholder="A brief on goals, constraints, timeline…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-xl bg-emerald-400 px-4 py-2 font-semibold text-neutral-900 hover:bg-emerald-300 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                >
                  {status === "sending" ? "Sending…" : "Send"}
                </button>

                {status === "success" && (
                  <p className="text-sm text-emerald-400">✅ Message sent successfully! We'll reply soon.</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400">⚠️ Failed to send message. Please try again later.</p>
                )}
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
    </div>
  );
}

