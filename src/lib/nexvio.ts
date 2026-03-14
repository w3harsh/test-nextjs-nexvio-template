/**
 * Nexvio chat widget — single place for integration.
 *
 * 1. Copy .env.example to .env.local and set NEXT_PUBLIC_NEXVIO_ID to your widget public key (from Nexvio dashboard).
 * 2. Widget is mounted in app/layout.tsx via <NexvioWidget />. To change position or options, edit NEXVIO_OPTIONS below.
 * 3. To remove the widget, delete <NexvioWidget /> from layout and this file.
 */

export const NEXVIO_WIDGET_SCRIPT_URL = "https://app.nexvio.ai/api/widget.js";

export function getNexvioEnv() {
  return {
    publicKey: process.env.NEXT_PUBLIC_NEXVIO_ID ?? "",
    frameBaseUrl: process.env.NEXT_PUBLIC_NEXVIO_WIDGET_FRAME_URL ?? "https://chatwidget.app/frame",
  };
}
