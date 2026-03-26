import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — GlideDeck",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: March 26, 2026</p>

      <div className="mt-8 space-y-6 text-slate-700 dark:text-slate-300 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900 dark:[&_h2]:text-white">
        <h2>1. Information We Collect</h2>
        <p>
          When you sign up for GlideDeck, we collect your name and email address
          through Google OAuth. We also receive Google API tokens that allow us
          to access and edit Google Slides presentations on your behalf.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Authenticate you and maintain your session</li>
          <li>List your existing Google Slides presentations so you can select one to edit</li>
          <li>Create, edit, and manage Google Slides presentations via the Google Slides API</li>
          <li>Track usage to enforce account limits</li>
          <li>Improve and maintain the service</li>
        </ul>

        <h2>3. Google API Scopes &amp; Data Usage</h2>
        <p>
          GlideDeck lets users edit existing Google Slides presentations using
          natural language and AI. To provide this functionality, we request the
          following Google API scopes:
        </p>

        <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
          Google Slides API (<code className="text-sm">auth/presentations</code>)
        </h3>
        <p>
          We use the Google Slides API to create and edit presentations on your
          behalf. When you provide natural-language instructions, GlideDeck
          generates the corresponding API requests and sends them to the Slides
          API via the <code className="text-sm">/presentations</code> route. This
          scope is required for GlideDeck to read, create, and modify slides
          within your presentations.
        </p>

        <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
          Google Drive API — read-only (<code className="text-sm">auth/drive.readonly</code>)
        </h3>
        <p>
          We use the Drive API in read-only mode solely to call{" "}
          <code className="text-sm">drive.files.list</code> filtered to{" "}
          <code className="text-sm">mimeType=&apos;application/vnd.google-apps.presentation&apos;</code>{" "}
          so we can display a list of your existing slide decks for you to
          select and edit. The Google Slides API cannot list or discover
          presentations on its own — it requires a known presentation ID — so
          the Drive API is the only way to let you browse your existing decks.
        </p>
        <p>
          Through this scope we only read file metadata (name, ID, modified
          date, and edit capability). We never download, read, or access the
          contents of any files through the Drive API. We do not access files
          of any type other than Google Slides presentations.
        </p>

        <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
          Data handling commitments
        </h3>
        <ul className="list-disc space-y-1 pl-6">
          <li>We do not store the content of your presentations on our servers.</li>
          <li>Presentations remain in your own Google Drive account at all times.</li>
          <li>Google API tokens are stored securely and are used only to perform actions you initiate.</li>
          <li>We do not use Google user data for advertising, profiling, or any purpose unrelated to providing GlideDeck&apos;s core functionality.</li>
          <li>We do not share Google user data with third parties except as required to operate the service (see Section 5).</li>
        </ul>

        <h2>4. Data Storage</h2>
        <p>
          Account data and usage metrics are stored securely in our database
          hosted on Supabase. Uploaded images (brand assets and prompt images)
          are stored in secure cloud storage and are only accessible to your
          account.
        </p>

        <h2>5. Third-Party Services</h2>
        <p>We use the following third-party services:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li><strong>Google APIs</strong> — for authentication and Slides/Drive access</li>
          <li><strong>Supabase</strong> — for database and file storage</li>
          <li><strong>Anthropic (Claude)</strong> — for AI-powered content generation</li>
          <li><strong>Vercel</strong> — for hosting and analytics</li>
        </ul>

        <h2>6. Data Sharing</h2>
        <p>
          We do not sell your personal information. We share data only with the
          third-party services listed above as necessary to operate the service.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          We retain your account data for as long as your account is active. You
          can request deletion of your account and associated data at any time by
          contacting us.
        </p>

        <h2>8. Your Rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal
          data. You can revoke GlideDeck&apos;s access to your Google account at any
          time through your Google Account settings.
        </p>

        <h2>9. Contact</h2>
        <p>
          For privacy-related questions, contact us at{" "}
          <a
            href="mailto:privacy@glidedeck.ai"
            className="text-blue-600 underline hover:text-blue-700"
          >
            privacy@glidedeck.ai
          </a>
          .
        </p>
      </div>
    </article>
  );
}
