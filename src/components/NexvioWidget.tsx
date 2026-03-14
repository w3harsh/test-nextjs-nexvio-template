"use client";

import { useEffect } from "react";
import { NEXVIO_WIDGET_SCRIPT_URL } from "@/lib/nexvio";

/**
 * Renders the Nexvio chat bubble (bottom-right) and loads the widget script.
 * Configure env in .env.local; options are passed from layout (see src/lib/nexvio.ts).
 */
export function NexvioWidget({
  publicKey,
  frameBaseUrl,
}: {
  publicKey: string;
  frameBaseUrl: string;
}) {
  useEffect(() => {
    if (!publicKey) return;
    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
import('${NEXVIO_WIDGET_SCRIPT_URL}').then(function () {
  var el = document.getElementById('nexvio-chatbot');
  if (!el) return;
  var setOpts = function () {
    if (el.setOptions) el.setOptions({
      publicKey: ${JSON.stringify(publicKey)},
      host: { baseUrl: ${JSON.stringify(frameBaseUrl)} },
      position: 'bottom-right',
      defaultOpen: false
    });
  };
  if (customElements.get('nexvio-chat-bot')) setOpts();
  else customElements.whenDefined('nexvio-chat-bot').then(setOpts);
});
`;
    document.body.appendChild(script);
    return () => {
      script.parentNode?.removeChild(script);
    };
  }, [publicKey, frameBaseUrl]);

  if (!publicKey) return null;
  return <nexvio-chat-bot id="nexvio-chatbot" />;
}
