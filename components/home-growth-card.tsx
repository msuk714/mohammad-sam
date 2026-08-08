export function HomeGrowthCard() {
  return (
    <div className="growth-card" aria-label="Organic growth visualization">
      <div className="growth-card-head">
        <div><span>Organic visibility</span><strong>Growth trajectory</strong></div>
        <span className="growth-pill">GSC</span>
      </div>
      <div className="growth-main">
        <strong>+954%</strong>
        <span>Peak case-study impression growth</span>
      </div>
      <svg className="growth-chart" viewBox="0 0 620 210" role="img" aria-label="Upward organic growth line">
        <defs>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.28" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path className="chart-grid" d="M10 45H610M10 105H610M10 165H610" />
        <path className="chart-area" d="M10 173 C80 168,100 150,150 153 C210 158,218 113,275 122 C325 130,345 81,403 91 C460 101,478 54,530 61 C568 66,587 31,610 20 L610 200 L10 200Z" fill="url(#chartFill)" />
        <path className="chart-line" d="M10 173 C80 168,100 150,150 153 C210 158,218 113,275 122 C325 130,345 81,403 91 C460 101,478 54,530 61 C568 66,587 31,610 20" />
        <circle className="chart-dot" cx="610" cy="20" r="6" />
      </svg>
      <div className="growth-card-foot"><span>Technical SEO</span><span>Content systems</span><span>Local growth</span></div>
    </div>
  );
}
