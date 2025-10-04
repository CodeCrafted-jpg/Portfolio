import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b698fcc59b7dc551703915e9b1a1f6a9@o4509609006071808.ingest.us.sentry.io/4509609010593792",
  tracesSampleRate: 1,
  debug: false,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
    Sentry.feedbackIntegration({
      colorScheme: "dark",
      showInClient: true,
    }),
  ],
});

// ✅ Add this line at the end of the file
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
