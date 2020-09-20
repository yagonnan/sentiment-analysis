export function buildHtmlInjector(__html) {
  return { __html };
}

export default function buildScript(scriptString, isNoScript) {
  if (!scriptString) return null;

  if (isNoScript) {
    return (
      // eslint-disable-next-line react/no-danger
      <noscript dangerouslySetInnerHTML={buildHtmlInjector(scriptString)} />
    );
  }

  return (
    // eslint-disable-next-line react/no-danger
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={buildHtmlInjector(scriptString)}
    />
  );
}
