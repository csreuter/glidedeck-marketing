import Link from "next/link";
import { GlidedeckLogo } from "@/components/glidedeck-logo";

const APP_URL = "https://app.glidedeck.ai";

export function NavBar() {
  return (
    <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <GlidedeckLogo size={28} />
          GlideDeck
        </Link>

        <div className="flex items-center gap-6">
          <a
            href={`${APP_URL}/login`}
            className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            Sign In
          </a>
          <a
            href={`${APP_URL}/signup`}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
