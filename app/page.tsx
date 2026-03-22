import { GlidedeckLogo } from "@/components/glidedeck-logo";

const APP_URL = "https://app.glidedeck.ai";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-24 text-center sm:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex justify-center">
            <GlidedeckLogo size={64} />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Create presentations{" "}
            <span className="text-blue-600">with AI</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-400">
            Describe what you want, and GlideDeck builds polished Google Slides
            presentations in seconds. No design skills required.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`${APP_URL}/signup`}
              className="rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
            >
              Get Started — It&apos;s Free
            </a>
            <a
              href={`${APP_URL}/login`}
              className="rounded-lg border border-slate-300 px-8 py-3.5 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Sign In
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-slate-200 bg-slate-50 px-6 py-20 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-2xl font-bold sm:text-3xl">
            How it works
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <FeatureCard
              step="1"
              title="Describe your idea"
              description="Type a prompt describing the presentation you need — topic, audience, style, and any specific content."
            />
            <FeatureCard
              step="2"
              title="AI builds your deck"
              description="GlideDeck's AI designs your slides with smart layouts, clear content, and professional styling."
            />
            <FeatureCard
              step="3"
              title="Edit & present"
              description="Fine-tune with AI-powered editing, then present directly from Google Slides or export as you like."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to build your next presentation?
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Sign up for free and create your first deck in under a minute.
          </p>
          <a
            href={`${APP_URL}/signup`}
            className="mt-8 inline-block rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800">
      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
        {step}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  );
}
