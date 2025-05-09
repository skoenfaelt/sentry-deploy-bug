import * as Sentry from "@sentry/nuxt";
 
Sentry.init({
  dsn: "http://58988162a302bfb9f39f1a79331b7a76@efqsdocker01:9000/14",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
