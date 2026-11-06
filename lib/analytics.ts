export function trackEvent(
  name: string,
  params: Record<string, string | number> = {}
) {
  if (typeof window === "undefined") return;

  const dataLayer = (window.dataLayer = window.dataLayer || []);

  // Google's tag expects the gtag-style "arguments" object, not a plain array
  function gtag(..._args: unknown[]) {
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments);
  }

  gtag("event", name, params);
}