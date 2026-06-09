export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Cost Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Block Expensive AI Prompts<br />
          <span className="text-[#58a6ff]">Before They Drain Your Budget</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          A smart proxy that intercepts your AI API calls, estimates token costs in real time, and automatically blocks requests that exceed your daily or monthly budget limits.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-lg transition-colors duration-200"
        >
          Start Blocking Leaks — $49/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-4">No credit card surprises. Cancel anytime.</p>
        <div className="grid grid-cols-3 gap-6 mt-14 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">Real-Time</div>
            <div className="text-sm text-[#8b949e]">Token cost estimation per request</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">Auto-Block</div>
            <div className="text-sm text-[#8b949e]">Stops requests over budget limits</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">Dashboard</div>
            <div className="text-sm text-[#8b949e]">Usage analytics & alert config</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-md mx-auto text-center">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$49<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] mb-6">Everything you need to stop AI cost overruns</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Proxy for OpenAI, Anthropic, Gemini",
              "Per-request token cost estimation",
              "Daily & monthly budget enforcement",
              "Real-time dashboard & analytics",
              "Slack & email budget alerts",
              "Team access controls"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the proxy work?</h3>
            <p className="text-[#8b949e] text-sm">You route your AI API calls through our proxy endpoint. Before forwarding each request, we estimate the token count and cost using provider-specific pricing models. If the request would exceed your configured budget, it is blocked and you receive a clear error response.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which AI providers are supported?</h3>
            <p className="text-[#8b949e] text-sm">We support OpenAI (GPT-4, GPT-3.5), Anthropic (Claude 3 family), and Google Gemini. More providers are added regularly based on customer demand.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Does the proxy add latency to my requests?</h3>
            <p className="text-[#8b949e] text-sm">Our proxy adds under 10ms of overhead per request. Cost estimation runs synchronously but is highly optimized, so your users will not notice any difference in response times.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} AI Prompt Cost Leak Blocker. All rights reserved.
      </footer>
    </main>
  );
}
