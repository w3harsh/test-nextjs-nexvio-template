"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { BsLightningCharge, BsShieldCheck } from "react-icons/bs";
import { FiArrowRight, FiMessageSquare, FiSun, FiMoon, FiCopy } from "react-icons/fi";
import Image from "next/image";

const LINKS = {
  website: "https://nexvio.ai/",
  contact: "https://nexvio.ai/contact",
  integrations: "https://nexvio.ai/integrations",
  terms: "https://nexvio.ai/terms",
  privacy: "https://nexvio.ai/privacy-policy",
};

const NEXVIO_SNIPPET = `<nexvio-chat-bot id="nexvio-chatbot"></nexvio-chat-bot>
<script type="module">
  import 'https://app.nexvio.ai/api/widget.js';
  const el = document.getElementById('nexvio-chatbot');
  if (el?.setOptions) el.setOptions({
    publicKey: 'pk_your_key',
    host: { baseUrl: 'https://chatwidget.app/frame' },
    position: 'bottom-right',
    defaultOpen: false
  });
</script>`;

const HLJS_SCRIPT = "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/highlight.min.js";
const HLJS_STYLE = "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/styles/github-dark.min.css";

export default function LandingPage() {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const onCopy = () => {
    navigator.clipboard.writeText(NEXVIO_SNIPPET).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = HLJS_STYLE;
    document.head.appendChild(link);
    const script = document.createElement("script");
    script.src = HLJS_SCRIPT;
    script.async = true;
    script.onload = () => {
      const hljs = (window as unknown as { hljs?: { highlightElement: (el: HTMLElement) => void } }).hljs;
      if (codeRef.current && hljs) hljs.highlightElement(codeRef.current);
    };
    document.body.appendChild(script);
    return () => {
      link.remove();
      script.remove();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href={LINKS.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <div className="flex items-center justify-center">
                <Image src="/nexvio-icon.png" alt="Nexvio Logo" width={32} height={32} />
              </div>
              <span className="font-bold text-xl tracking-tight">Nexvio</span>
            </a>
            <span className="text-muted-foreground/40 font-light text-2xl">+</span>
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <Image src="/vercel.svg" alt="Vercel Logo" width={20} height={20} className="invert dark:invert-0" />
              <span className="font-semibold text-lg tracking-tight">Vercel</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#integrate" className="hover:text-foreground transition-colors">Add AI</a>
            <a href={LINKS.integrations} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Integrations</a>
            <a href={LINKS.terms} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Terms</a>
            <a href={LINKS.privacy} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Privacy</a>
            <a href={LINKS.contact} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Contact</a>
            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg border border-border bg-muted/50 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground cursor-pointer"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>
            )}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-r from-foreground/5 to-foreground/[0.02] blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="container relative z-10 mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
            <motion.div
              className="flex flex-col items-center gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
                hidden: {},
              }}
            >
              <motion.div
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                AI Agent for Your App
              </motion.div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <motion.span
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="block text-foreground"
                >
                  Give Your Website
                </motion.span>
                <motion.span
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground"
                >
                  an AI Assistant
                </motion.span>
              </h1>

              <p className="max-w-xl text-base text-muted-foreground md:text-lg">
                <motion.span
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="block"
                >
                  Integrate Nexvio with a simple widget and give your users an intelligent AI assistant in seconds.
                </motion.span>
              </p>

              <motion.div
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, delay: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col items-center gap-3 sm:flex-row"
              >
                <motion.a
                  href={LINKS.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-foreground/90"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Building with Nexvio <FiArrowRight className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href={LINKS.integrations}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted/50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiMessageSquare className="h-4 w-4" /> Integrations
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="integrate" className="py-24 px-6 border-b border-border/40">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Add Nexvio AI to Your Next.js App</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nexvio works with a simple widget integration. Add the script, set your public key, and your AI agent instantly appears on your website ready to help users.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-card overflow-hidden shadow-xl"
            >
              <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-border bg-muted/50">
                <div className="flex items-center gap-2">
                  <span className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </span>
                  <span className="text-muted-foreground text-sm font-medium">src/lib/nexvio.ts</span>
                </div>
                <button
                  type="button"
                  onClick={onCopy}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>Copied!</>
                  ) : (
                    <>
                      <FiCopy size={14} /> Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="!m-0 !rounded-none !bg-transparent !p-0 text-sm overflow-x-auto">
                <code ref={codeRef} className="language-html block p-6">
                  {NEXVIO_SNIPPET}
                </code>
              </pre>
              <p className="px-4 py-3 text-sm text-muted-foreground border-t border-border bg-muted/50">
                Copy .env.example to .env.local and set <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">NEXT_PUBLIC_NEXVIO_ID</code> to your widget key from the Nexvio dashboard.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="features" className="py-24 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Run an AI Chat Agent</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Powerful AI chat features built for modern websites.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BsLightningCharge size={24} />,
                  title: "Instant Setup",
                  desc: "Add the Nexvio widget and launch your AI assistant in seconds. No complex setup or training required.",
                },
                {
                  icon: <Image src="/nexvio-icon.png" alt="Smart context" width={24} height={24} />,
                  title: "Smart Context Awareness",
                  desc: "Nexvio automatically understands your website content and answers user questions accurately.",
                },
                {
                  icon: <BsShieldCheck size={24} />,
                  title: "Secure & Reliable",
                  desc: "Enterprise-grade infrastructure ensures safe conversations and secure data handling.",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="p-8 rounded-xl bg-card border border-border"
                >
                  <div className="w-12 h-12 rounded-lg bg-muted text-foreground flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-6 relative overflow-hidden">
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 md:p-16 rounded-3xl bg-foreground text-background relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-transparent pointer-events-none" />
              <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to Add AI to Your Website?</h2>
              <p className="text-background/80 text-lg mb-8 max-w-2xl mx-auto relative z-10">
                Integrate Nexvio in seconds and give your users an intelligent AI assistant that works 24/7.
              </p>
              <motion.a
                href={LINKS.website}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative z-10 px-8 py-4 w-fit rounded-full bg-background text-foreground font-semibold flex items-center gap-2 mx-auto hover:bg-background/90 transition-colors"
              >
                Start Building with Nexvio
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 py-12 px-6 bg-background">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <a href={LINKS.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground font-bold text-xl">
              <div className="flex items-center justify-center">
                <Image src="/nexvio-icon.png" alt="Nexvio Logo" width={32} height={32} />
              </div>
              Nexvio
            </a>
            <span className="text-muted-foreground/40 font-light text-2xl">+</span>
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity text-foreground font-semibold text-lg">
              <Image src="/vercel.svg" alt="Vercel Logo" width={20} height={20} className="invert dark:invert-0" />
              Vercel
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href={LINKS.integrations} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Integrations</a>
            <a href={LINKS.privacy} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href={LINKS.terms} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href={LINKS.contact} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nexvio AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
