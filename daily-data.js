window.SIGNAL_DATA = {
  date: "Tuesday · April 21, 2026",
  alert: { type: "positive", icon: "😊", title: "Market Sentiment Improves", body: "Global markets are showing signs of optimism today, driven by hopes of renewed US-Iran peace talks and a softening of oil prices. Technology and AI-related stocks are leading gains in several key indices." },
  ticker: [
    { label: "S&P 500", value: "7,123", dir: "up", arrow: "▲ 0.19%" },
    { label: "NASDAQ", value: "24,468.48", dir: "up", arrow: "▲ 1.52%" },
    { label: "Dow Jones", value: "49,443", dir: "flat", arrow: "→ 0.00%" },
    { label: "DAX", value: "24,532", dir: "up", arrow: "▲ 0.47%" },
    { label: "Euro Stoxx 50", value: "5,999", dir: "down", arrow: "▼ 1.28%" },
    { label: "Nikkei 225", value: "59,349", dir: "up", arrow: "▲ 0.89%" }
  ],
  market: [
    { label: "S&P 500", value: "7,123", change: "▲ 0.19%", dir: "up" },
    { label: "NASDAQ Composite", value: "24,468.48", change: "▲ 1.52%", dir: "up" },
    { label: "Dow Jones Industrial Average", value: "49,443", change: "→ 0.00%", dir: "flat" },
    { label: "DAX", value: "24,532", change: "▲ 0.47%", dir: "up" },
    { label: "Euro Stoxx 50", value: "5,999", change: "▼ 1.28%", dir: "down" },
    { label: "Nikkei 225", value: "59,349", change: "▲ 0.89%", dir: "up" }
  ],
  marketSummary: "Global markets are experiencing a mixed but generally positive trading day. US stock futures edged higher on hopes of a second round of peace talks between the US and Iran, which also contributed to softer oil prices. Technology and AI-related stocks are performing strongly, particularly in Asian markets like the Nikkei 225. However, European indices like the DAX and Euro Stoxx 50 saw some declines yesterday due to lingering geopolitical tensions, though the DAX is up today.",
  stocks: [
    {
      ticker: "RHM.DE",
      name: "Rheinmetall AG · XETRA",
      price: "€1,498.20",
      change: "▼ 0.45%",
      dir: "down",
      news: "<strong>🔑 Today:</strong> Rheinmetall's stock saw a slight decrease today, trading at €1,498.20. The broader European defense sector has seen some cooling as investors reassess war winners amidst growing uncertainty over the future of warfare.",
      outlook: "Rheinmetall continues to be a significant player in the defense industry, with strong growth in 2025 revenue. The company's focus on security technology and mobility solutions positions it well within a global environment of increasing defense spending.",
      badge: "🛡️ Hold",
      badgeClass: "badge-hold"
    },
    {
      ticker: "NVDA",
      name: "NVIDIA Corp · NASDAQ",
      price: "—", 
      change: "—", 
      dir: "flat", 
      news: "<strong>🔑 Today:</strong> While specific news for NVIDIA today is not available, the broader semiconductor sector, including AI infrastructure plays, remains a key investment theme for 2026. Strong demand for AI accelerators is a significant driver for chip manufacturers.",
      outlook: "NVIDIA is expected to continue benefiting from the strong demand in AI and high-performance computing. The company's GPUs are critical infrastructure for the ongoing AI revolution, suggesting a robust long-term outlook.",
      badge: "💡 Buy",
      badgeClass: "badge-buy"
    },
    {
      ticker: "AMD",
      name: "Advanced Micro Devices Inc · NASDAQ",
      price: "$274.95",
      change: "▼ 1.24%",
      dir: "down",
      news: "<strong>🔑 Today:</strong> AMD's stock is down slightly today, trading at $274.95. However, analysts recently raised price targets for AMD, citing multi-gigawatt strategic commitments from major players like Meta and OpenAI, and strong AI accelerator demand. The company also announced a collaboration with the French government to advance AI infrastructure.",
      outlook: "AMD is at the start of a multi-year GPU and CPU supercycle, with significant AI chip deals and increasing CPU demand. The upcoming MI450 Helios rack launch in H2 2026 is anticipated to establish AMD as a credible alternative in the rack-scale AI market.",
      badge: "🚀 Buy",
      badgeClass: "badge-buy"
    },
    {
      ticker: "MSFT",
      name: "Microsoft Corp · NASDAQ",
      price: "$417.92",
      change: "▼ 1.15%",
      dir: "down",
      news: "<strong>🔑 Today:</strong> Microsoft's stock fell by 1.15% to $417.92 on Monday, following a recent rally. Despite some concerns about aggressive capital spending on AI infrastructure, analysts view the current price as an attractive buying opportunity, maintaining a 'Moderate Buy' consensus rating.",
      outlook: "Microsoft is strategically positioned in the AI and cloud computing markets, with its Copilot AI assistant and Azure cloud services driving revenue growth. The company's substantial investments in AI infrastructure are expected to yield significant returns in the long term.",
      badge: "☁️ Buy",
      badgeClass: "badge-buy"
    }
  ],
  etfs: [
    {
      ticker: "EUNL.DE",
      name: "iShares Core MSCI World UCITS ETF · XETRA",
      stats: "Price: —\nChange: —\nTER: 0.20%\nExchange: XETRA",
      badge: "Hold",
      badgeClass: "badge-hold",
      desc: "The iShares Core MSCI World UCITS ETF offers broad exposure to global developed markets. With current market sentiment influenced by geopolitical developments and central bank policies, this ETF provides diversified access to a wide range of international equities.",
      verdict: "A solid long-term holding for diversified global equity exposure, especially in a fluctuating macroeconomic environment. Its low TER makes it an attractive core portfolio component."
    },
    {
      ticker: "4MMR.DE",
      name: "Global X Defense Tech UCITS ETF · XETRA",
      stats: "Price: —\nChange: —\nTER: 0.50%\nExchange: XETRA",
      badge: "Watch",
      badgeClass: "badge-watch",
      desc: "The Global X Defense Tech UCITS ETF focuses on companies involved in the defense technology sector. Geopolitical tensions, such as those in the Middle East, continue to highlight the importance of defense spending and technological advancements in this area.",
      verdict: "This ETF presents a thematic investment opportunity driven by increased global defense budgets and technological innovation. Investors should monitor geopolitical developments closely for potential impacts."
    },
    {
      ticker: "ITA",
      name: "iShares U.S. Aerospace & Defense ETF · NYSE Arca",
      stats: "Price: —\nChange: —\nTER: 0.42%\nExchange: NYSE Arca",
      badge: "Buy",
      badgeClass: "badge-buy",
      desc: "The iShares U.S. Aerospace & Defense ETF provides targeted exposure to US companies in the aerospace and defense industry. With rising defense spending and strategic competition in technology, this sector continues to see strong tailwinds.",
      verdict: "Given the ongoing global focus on security and defense, this ETF offers a compelling investment in a sector poised for continued growth, particularly with the emphasis on strategic competition and regional security commitments."
    }
  ],
  macro: [
    {
      theme: "🌍 Geopolitical Tensions",
      what: "Ongoing US-Iran tensions, including the closure of the Strait of Hormuz and subsequent peace talks, are a major global focus. The US Navy's seizure of an Iranian vessel escalated hostilities, though hopes for renewed negotiations are emerging.",
      impact: "These tensions have led to volatility in oil prices and influenced market sentiment, with some initial risk-off behavior. However, hopes for de-escalation are now providing some market support."
    },
    {
      theme: "🤖 AI and Industrial Policy",
      what: "Artificial intelligence continues to be a dominant theme, with significant investments in AI infrastructure and a shift from experimentation to deployment. Industrial policies are also playing a role in shaping market leadership.",
      impact: "AI-related stocks are leading market gains, and the sector is attracting substantial capital flows. This theme is expected to drive economic benefits, though unevenly distributed."
    },
    {
      theme: "💰 Fiscal Deficits and Policy",
      what: "Elevated fiscal deficits and ongoing debates over tax policy and tariffs in the United States are key considerations for investors. Government borrowing remains high, with implications for bond and equity markets.",
      impact: "These factors are influencing investor sentiment regarding growth, inflation, and sector leadership, requiring investors to pay close attention to policy decisions."
    },
    {
      theme: "🛢️ Oil Prices",
      what: "Oil prices initially climbed due to US-Iran tensions and the closure of the Strait of Hormuz, but have since slipped on hopes of renewed peace talks.",
      impact: "Softer oil prices are generally seen as positive for global economies, particularly for industrial nations like Germany, which are heavily reliant on energy imports."
    },
    {
      theme: "💵 US Dollar Weakness",
      what: "Despite geopolitical escalations, the US dollar has struggled for upward momentum and has edged lower against several currencies.",
      impact: "A weakening US dollar could benefit currencies most affected by the crisis, such as the Euro and Sterling, and nations poised to gain from improving global growth opportunities, like China."
    }
  ],
  calendar: [
    { date: "Tue Apr 21", event: "German ZEW Economic Sentiment", why: "Key indicator for economic mood in Germany and the Eurozone." },
    { date: "Tue Apr 21", event: "US Retail Sales MoM", why: "Important data reflecting consumer spending and economic health in the US." },
    { date: "Tue Apr 21", event: "US ADP Employment Change", why: "Provides insight into private sector employment trends ahead of official jobs data." },
    { date: "Wed Apr 22", event: "US EIA Petroleum Status Report", why: "Crucial for understanding oil supply and demand dynamics." },
    { date: "Thu Apr 23", event: "US Jobless Claims", why: "Weekly data on unemployment, indicating labor market health." },
    { date: "Thu Apr 23", event: "Eurozone Flash Manufacturing PMI", why: "Early indicator of manufacturing sector health in the Eurozone." }
  ],
  quote: { text: "Earnings aren't the only driver for US equities this year. Fiscal choices, regulation and the political calendar are also steering where capital flows.", source: "Mint, Policy, Deficits and Midterms: How 2026 US Politics Could Reshape Market Leadership · April 21, 2026" }
};
