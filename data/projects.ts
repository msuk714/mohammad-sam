export type Metric = {
  value: string;
  label: string;
  detail?: string;
};

export type ProjectGroup = "Featured" | "Recent" | "Previous";

export type Project = {
  slug: string;
  name: string;
  industry: string;
  market?: string;
  website: string;
  duration: string;
  image?: string;
  imageLabel?: string;
  group: ProjectGroup;
  summary: string;
  metrics: Metric[];
  services: string[];
  role?: string;
  challenge?: string;
  owned?: string[];
  strategy?: { title: string; body: string }[];
  decisions?: string[];
  analysis?: string[];
  businessImpact?: string;
  keywords?: { keyword: string; position: number }[];
};

export const projects: Project[] = [
  {
    slug: "roman-electric",
    name: "Roman Electric Co. Inc.",
    industry: "Electrical & Home Services",
    market: "USA",
    website: "https://romanelectric.com/",
    duration: "Dec 2025 – Apr 2026",
    image: "/projects/roman-electric-gsc.png",
    imageLabel: "Google Search Console",
    group: "Featured",
    summary:
      "Expanded search visibility for an established home-services brand through content silos, technical optimization and local-intent targeting.",
    metrics: [
      { value: "+105.3%", label: "Organic impressions", detail: "83.3K → 171K" },
      { value: "+10%", label: "Organic clicks", detail: "1.69K → 1.86K" },
      { value: "171K", label: "Current-period impressions" },
    ],
    services: ["Content Silos", "Technical SEO", "Local SEO", "On-Page SEO"],
    role: "Senior SEO Strategist",
    challenge:
      "Roman Electric was already established, but its organic search footprint was underperforming relative to the available market opportunity.",
    owned: [
      "SEO strategy and prioritization",
      "Content silo planning across Electrical, Plumbing and HVAC",
      "Technical performance and mobile-usability improvements",
      "Local-intent on-page optimization and LocalBusiness schema",
    ],
    strategy: [
      {
        title: "Content silo implementation",
        body: "Reorganized Electrical, Plumbing and HVAC service pages into clearer topical silos to strengthen relevance and site structure.",
      },
      {
        title: "Technical performance",
        body: "Addressed Core Web Vitals and mobile usability issues to support the larger volume of search traffic reaching the site.",
      },
      {
        title: "Advanced on-page SEO",
        body: "Implemented local-business schema and aligned pages with near-me and high-intent local service searches.",
      },
    ],
    decisions: [
      "Expanded topical coverage even though newly ranking queries could temporarily pull the average-position metric downward.",
      "Prioritized discovery visibility beyond branded demand to widen the addressable search footprint.",
    ],
    analysis: [
      "Impressions increased from 83.3K to 171K while total organic clicks increased from 1.69K to 1.86K.",
      "Average position shifted from 15.8 to 20.4 and CTR from 2% to 1.1% as the site began appearing across a broader search footprint.",
    ],
  },
  {
    slug: "milwaukee-signarama",
    name: "Milwaukee Signarama",
    industry: "Signs / Local Business",
    market: "USA",
    website: "https://milwaukee-signs.com/",
    duration: "Dec 2025 – Apr 2026",
    image: "/projects/milwaukee-signarama-gsc.png",
    imageLabel: "Google Search Console",
    group: "Featured",
    summary:
      "A localized content and architecture strategy that nearly doubled search visibility and materially increased organic clicks.",
    metrics: [
      { value: "+95.8%", label: "Organic impressions", detail: "62.3K → 122K" },
      { value: "+83.8%", label: "Organic clicks", detail: "223 → 410" },
      { value: "122K", label: "Current-period impressions" },
    ],
    services: ["Local SEO", "Content Expansion", "Internal Linking", "On-Page SEO"],
    role: "Senior SEO Strategist",
    challenge:
      "The goal was to expand market reach beyond core branded searches and capture broader local commercial-intent queries.",
    owned: [
      "Localized SEO strategy",
      "Geo-targeted landing-page and service-content expansion",
      "Internal-linking improvements",
      "Metadata and commercial-intent alignment",
    ],
    strategy: [
      {
        title: "Localized content expansion",
        body: "Developed geo-targeted landing pages and service-specific content to reach a wider set of local searches.",
      },
      {
        title: "Technical authority",
        body: "Streamlined internal linking so authority flowed more effectively toward high-value service pages.",
      },
      {
        title: "On-page alignment",
        body: "Reworked metadata to better match local user intent and commercial search terms.",
      },
    ],
    decisions: [
      "Broadened local topical coverage rather than optimizing only for branded demand.",
      "Accepted a small CTR dilution while search visibility and total clicks expanded materially.",
    ],
    analysis: [
      "Organic impressions increased from 62.3K to 122K and clicks increased from 223 to 410.",
      "Average position moved from 29.2 to 30.2 while CTR moved from 0.4% to 0.3% as overall discovery visibility expanded.",
    ],
  },
  {
    slug: "p2ezpay",
    name: "P2EzPay",
    industry: "FinTech / Payment Solutions",
    website: "https://p2ezpay.com",
    duration: "Dec 2025 – Apr 2026",
    image: "/projects/p2ezpay-gsc.png",
    imageLabel: "Google Search Console",
    group: "Featured",
    summary:
      "A technical and content-led SEO recovery that moved a low-traction payment platform into a substantially larger organic search footprint within 120 days.",
    metrics: [
      { value: "+954%", label: "Organic impressions", detail: "1.09K → 11.5K" },
      { value: "+800%", label: "Organic clicks", detail: "11 → 99" },
      { value: "+12.1", label: "Average-position improvement", detail: "41.6 → 29.5" },
    ],
    services: ["Technical SEO", "On-Page SEO", "Content Authority", "Search Intent"],
    role: "Senior SEO Strategist",
    challenge:
      "The site had negligible organic traction in a crowded payment-processing category. The priority was to strengthen technical foundations and high-intent content coverage.",
    owned: [
      "Technical SEO audit and recovery priorities",
      "On-page structure and metadata optimization",
      "High-intent keyword strategy",
      "Content-cluster direction around payment security and global transactions",
    ],
    decisions: [
      "Focused first on crawlability and interpretation issues so content improvements had a stronger technical foundation.",
      "Targeted overlooked high-intent queries instead of relying only on headline search-volume estimates.",
    ],
    strategy: [
      {
        title: "Technical SEO recovery",
        body: "Audited crawl and schema issues so search engines could interpret the financial-service offering more accurately.",
      },
      {
        title: "On-page optimization",
        body: "Revitalized core landing pages through heading, metadata and high-intent keyword improvements.",
      },
      {
        title: "Content authority",
        body: "Developed a cluster-led content approach around payment security and global transaction topics.",
      },
    ],
  },
  {
    slug: "rosa-clothing",
    name: "Rosa Clothing & Apparel Store",
    industry: "Fashion / E-commerce",
    website: "https://rosastores.com/",
    duration: "Mar 2025 – Aug 2025",
    image: "/projects/rosa-stores-gsc.png",
    imageLabel: "Google Search Console",
    group: "Recent",
    summary: "Search visibility growth across branded and commercial fashion queries for an e-commerce store.",
    metrics: [
      { value: "2.69K", label: "Organic clicks" },
      { value: "37.5K", label: "Organic impressions" },
      { value: "8.6", label: "Average position" },
    ],
    services: ["E-commerce SEO", "Keyword Strategy", "On-Page SEO"],
    keywords: [
      { keyword: "Rosa boutique", position: 1 },
      { keyword: "Rosa clothing", position: 1 },
      { keyword: "Rosa stores", position: 1 },
      { keyword: "Rosa clothes", position: 1 },
      { keyword: "Rosa clothing store", position: 1 },
      { keyword: "Rosa clothing wholesale", position: 1 },
      { keyword: "Rosa fashion store", position: 1 },
      { keyword: "Rosa collection", position: 2 },
      { keyword: "Rosa wear", position: 1 },
      { keyword: "Rosa clothing dress", position: 1 },
      { keyword: "Rosa outfits", position: 1 },
    ],
  },
  {
    slug: "pinky-furniture-uae",
    name: "Pinky Furniture UAE",
    industry: "Furniture / E-commerce",
    market: "UAE",
    website: "https://pinkyfurnitureuae.com/",
    duration: "Mar 2025 – Jul 2025",
    image: "/projects/pinky-furniture-gsc.png",
    imageLabel: "Google Search Console",
    group: "Recent",
    summary: "Search visibility across high-intent furniture, category and local-commercial queries in the UAE market.",
    metrics: [
      { value: "2.07K", label: "Organic clicks" },
      { value: "194K", label: "Organic impressions" },
      { value: "#1", label: "Multiple commercial terms" },
    ],
    services: ["E-commerce SEO", "Commercial Keywords", "On-Page SEO"],
    keywords: [
      { keyword: "pinky furniture", position: 1 },
      { keyword: "pinky furniture dubai", position: 1 },
      { keyword: "rattan furniture dubai", position: 5 },
      { keyword: "solid wood furniture dubai", position: 1 },
      { keyword: "indian furniture dubai", position: 1 },
      { keyword: "solid wood dining table", position: 4 },
      { keyword: "antique cabinet", position: 1 },
      { keyword: "chest of drawers", position: 12 },
      { keyword: "dining table dubai", position: 1 },
      { keyword: "wood table", position: 1 },
      { keyword: "Furniture store in Sharjah", position: 5 },
    ],
  },
  {
    slug: "mr-fashion",
    name: "MR Fashions",
    industry: "Fashion / E-commerce",
    market: "Pakistan",
    website: "https://www.mrfashion.com.pk/",
    duration: "Mar 2025 – Jul 2025",
    image: "/projects/mr-fashion-gsc.png",
    imageLabel: "Google Search Console",
    group: "Recent",
    summary: "Organic visibility across branded, product-led and trend-led fashion search terms.",
    metrics: [
      { value: "1.02K", label: "Organic clicks" },
      { value: "14K", label: "Organic impressions" },
      { value: "7.3%", label: "Average CTR" },
    ],
    services: ["E-commerce SEO", "Content SEO", "Product SEO"],
    keywords: [
      { keyword: "mr fashion bags", position: 1 },
      { keyword: "Mr bags", position: 3 },
      { keyword: "fashion bag", position: 7 },
      { keyword: "MR Handbags", position: 2 },
      { keyword: "d shape bag", position: 2 },
      { keyword: "box clutch black", position: 3 },
      { keyword: "oversized shoulder bags", position: 1 },
      { keyword: "tassel bags", position: 2 },
      { keyword: "jute tote bag", position: 7 },
      { keyword: "stylish bags 2025", position: 4 },
    ],
  },
  {
    slug: "khanabadosh-glamps",
    name: "Khanabadosh Glamps",
    industry: "Hospitality",
    market: "Pakistan",
    website: "https://khanabadosh.pk/",
    duration: "Mar 2025 – Jun 2025",
    image: "/projects/khanabadosh-gsc.png",
    imageLabel: "Google Search Console",
    group: "Recent",
    summary: "Destination and branded search visibility for a glamping and resort business across Murree and Kumrat queries.",
    metrics: [
      { value: "3.11K", label: "Organic clicks" },
      { value: "34.4K", label: "Organic impressions" },
      { value: "4", label: "Average position" },
    ],
    services: ["Hospitality SEO", "Local SEO", "Keyword Strategy"],
    keywords: [
      { keyword: "khanabadosh glamps", position: 5 },
      { keyword: "khanabadosh glamps murree", position: 5 },
      { keyword: "khanabadosh glamps Kumrat", position: 5 },
      { keyword: "glamps in murree", position: 6 },
      { keyword: "Kumrat glamps", position: 6 },
      { keyword: "murree glamps", position: 16 },
      { keyword: "khanabadosh resort Kumrat", position: 5 },
      { keyword: "khanabadosh huts murree", position: 5 },
      { keyword: "khanabadosh pods", position: 4 },
      { keyword: "khanabadosh hotel Kumrat", position: 6 },
    ],
  },
  {
    slug: "latitude-resort",
    name: "Latitude Resort",
    industry: "Hospitality & Travel",
    market: "Kumrat Valley, Pakistan",
    website: "https://latituderesorts.pk/",
    duration: "Dec 2024 – Jun 2025",
    image: "/projects/latitude-resort-gsc.png",
    imageLabel: "Google Search Console",
    group: "Recent",
    summary: "Strong destination-search visibility in Kumrat Valley, including multiple #1 rankings across branded and resort-intent queries.",
    metrics: [
      { value: "5.54K", label: "Organic clicks" },
      { value: "115K", label: "Organic impressions" },
      { value: "#1", label: "Multiple destination terms" },
    ],
    services: ["Hospitality SEO", "Local SEO", "Content Strategy"],
    keywords: [
      { keyword: "Latitude Resort", position: 1 },
      { keyword: "Latitude Resort Kumrat", position: 1 },
      { keyword: "Latitude Kumrat", position: 1 },
      { keyword: "Latitude Resort Kumrat Valley", position: 1 },
      { keyword: "Latitude Hotel Kumrat", position: 1 },
      { keyword: "Latitude Resort Prices per Night", position: 3 },
      { keyword: "Kumrat Valley Latitude Resort", position: 1 },
      { keyword: "Kumrat Valley Resort", position: 1 },
      { keyword: "Latitude Resort Kumrat Valley Price", position: 1 },
      { keyword: "Kumrat Resorts", position: 1 },
      { keyword: "Latitude Kumrat Valley", position: 1 },
      { keyword: "Resorts in Kumrat Valley", position: 1 },
    ],
  },
  {
    slug: "two-guys-home-furnishing",
    name: "Two Guys Home Furnishing",
    industry: "Home Furnishing",
    market: "Dubai, UAE",
    website: "https://www.twoguys.ae/",
    duration: "Jun 2024 – Apr 2025",
    image: "/projects/two-guys-gsc.png",
    imageLabel: "Google Search Console",
    group: "Recent",
    summary:
      "A major expansion in Google Search visibility, with impressions rising from 76.9K to 218K and clicks increasing from 993 to 1.91K across the comparison periods shown in Search Console.",
    metrics: [
      { value: "+183.5%", label: "Organic impressions", detail: "76.9K → 218K" },
      { value: "+92.3%", label: "Organic clicks", detail: "993 → 1.91K" },
      { value: "+1", label: "Average-position improvement", detail: "45 → 44" },
    ],
    services: ["SEO Growth", "Content Visibility", "Commercial Keywords"],
    challenge:
      "The project focused on expanding discoverability for home-furnishing searches in the UAE. The Search Console comparison documents a substantially larger organic search footprint over time.",
    owned: [
      "Organic search visibility growth across commercial home-furnishing queries",
      "Keyword and content optimization across furnishing, flooring, curtains and blinds topics",
      "Performance monitoring using Google Search Console evidence",
    ],
    decisions: [
      "Prioritized expansion of the site’s overall search footprint while tracking whether additional visibility translated into more clicks.",
      "Reported CTR and average-position changes alongside growth metrics instead of hiding less favorable movements.",
    ],
    analysis: [
      "Total impressions increased from 76.9K to 218K, a gain of approximately 183.5%.",
      "Total clicks increased from 993 to 1.91K, a gain of approximately 92.3%.",
      "Average position improved slightly from 45 to 44. CTR moved from 1.3% to 0.9% as overall search exposure increased.",
    ],
    keywords: [
      { keyword: "sintered stone flooring", position: 1 },
      { keyword: "linen curtains dubai", position: 9 },
      { keyword: "Home Furnishing", position: 11 },
      { keyword: "shutters in Dubai", position: 15 },
      { keyword: "LVT flooring UAE", position: 28 },
      { keyword: "blackout curtains dubai", position: 29 },
      { keyword: "Window Curtains Dubai", position: 30 },
      { keyword: "blinds in dubai", position: 33 },
      { keyword: "SPC flooring UAE", position: 35 },
      { keyword: "wall decor dubai", position: 42 },
      { keyword: "bedroom furniture dubai", position: 55 },
    ],
  },
  {
    slug: "blinds-and-curtains-dubai",
    name: "Blinds & Curtains Dubai",
    industry: "Interiors / E-commerce",
    market: "Dubai, UAE",
    website: "https://blindsandcurtains.ae/",
    duration: "Jun 2024 – Apr 2025",
    image: "/projects/blinds-curtains-gsc.png",
    imageLabel: "Google Search Console",
    group: "Recent",
    summary:
      "Managed a WordPress-to-custom-platform migration while preserving a large existing search footprint and stabilizing post-launch performance.",
    metrics: [
      { value: "1.09M", label: "Organic impressions" },
      { value: "11.7K", label: "Organic clicks" },
      { value: "22.8", label: "Average position" },
    ],
    services: ["SEO Migration", "Technical SEO", "Core Web Vitals", "Site Architecture"],
    role: "SEO Migration Strategy & Oversight",
    challenge:
      "The primary challenge was migrating an established, high-visibility website from WordPress to a custom platform without sacrificing existing search equity.",
    owned: [
      "Migration SEO planning",
      "301 redirect mapping and URL continuity",
      "Structural content integrity for high-intent categories",
      "Post-launch indexing and ranking monitoring",
    ],
    strategy: [
      {
        title: "Platform migration management",
        body: "Planned 301 redirect mapping and URL continuity so important high-ranking pages retained their search equity through the platform change.",
      },
      {
        title: "Core Web Vitals & UX",
        body: "Used the custom build to improve load performance for product and category experiences in a visual-heavy interior-design market.",
      },
      {
        title: "Structural content integrity",
        body: "Maintained and reorganized high-intent product hierarchy so commercial categories retained relevance for users and crawlers.",
      },
      {
        title: "Post-launch stabilization",
        body: "Monitored ranking and indexing changes after launch and addressed migration-related fluctuations.",
      },
    ],
    decisions: [
      "Preserved high-value URLs and redirect paths before optimizing the new custom experience.",
      "Monitored post-launch fluctuation as a migration risk rather than treating every short-term ranking movement as a content problem.",
    ],
    businessImpact: "The supplied portfolio verifies search visibility and migration stability, but it does not provide verified lead or revenue attribution for this project.",
    keywords: [
      { keyword: "dubai curtains and blinds", position: 2 },
      { keyword: "motorised curtains", position: 2 },
      { keyword: "dubai blinds", position: 2 },
      { keyword: "conservatory blinds", position: 2 },
      { keyword: "full height shutters", position: 3 },
      { keyword: "office curtains", position: 3 },
      { keyword: "duplex blinds dubai", position: 3 },
      { keyword: "outdoor blinds dubai", position: 4 },
      { keyword: "blackout roller blinds", position: 6 },
    ],
  },
  {
    slug: "interior-film-dubai",
    name: "Interior Films Dubai",
    industry: "Interiors / E-commerce",
    market: "Dubai, UAE",
    website: "https://interiorfilm.ae/",
    duration: "Jun 2024 – Apr 2025",
    image: "/projects/interior-film-gsc.png",
    imageLabel: "Google Search Console",
    group: "Recent",
    summary: "Search visibility across interior vinyl, wraps and product-led commercial queries in the UAE market.",
    metrics: [
      { value: "357", label: "Organic clicks" },
      { value: "34.6K", label: "Organic impressions" },
      { value: "#1", label: "Multiple product terms" },
    ],
    services: ["E-commerce SEO", "Product SEO", "Content Optimization"],
    keywords: [
      { keyword: "Interior Vinyl Film", position: 1 },
      { keyword: "Pure Gold Vinyl", position: 1 },
      { keyword: "Cement Grey Vinyl", position: 1 },
      { keyword: "Offwhite Fabric Vinyl", position: 1 },
      { keyword: "White Vinyl Film", position: 1 },
      { keyword: "Interior Film Accessories", position: 1 },
      { keyword: "wood vinyl wrap", position: 2 },
      { keyword: "Grey Wood Vinyl", position: 2 },
      { keyword: "Metallic Vinyl", position: 3 },
      { keyword: "Marble Wrap", position: 3 },
      { keyword: "Grey Vinyl Wrap", position: 4 },
      { keyword: "interior vinyl wrapping", position: 4 },
      { keyword: "Vinyl Film", position: 5 },
      { keyword: "White Vinyl Wrap", position: 6 },
      { keyword: "interior wrapping", position: 8 },
    ],
  },
  {
    slug: "natural-motion-myopractics",
    name: "Natural Motion Myopractics",
    industry: "Healthcare / Wellness",
    market: "USA",
    website: "https://getnaturalmotion.com/",
    duration: "Feb 2024 – Jun 2024",
    image: "/projects/natural-motion-traffic.png",
    imageLabel: "Traffic Analysis",
    group: "Previous",
    summary: "Organic search work across myopractic, body-alignment and pain-relief queries.",
    metrics: [
      { value: "#1", label: "Myopractic vs chiropractic" },
      { value: "#1", label: "Natural Motion Myopractics" },
      { value: "#8", label: "What is body alignment" },
    ],
    services: ["Content SEO", "Keyword Strategy", "Local Search"],
    keywords: [
      { keyword: "Myopractic vs chiropractic", position: 1 },
      { keyword: "what is myopractic therapy", position: 1 },
      { keyword: "what is a myopractor", position: 3 },
      { keyword: "Tension releasing exercises", position: 22 },
      { keyword: "natural motion myopractics", position: 1 },
      { keyword: "natural pain relief near me", position: 17 },
      { keyword: "motion pain relief", position: 29 },
      { keyword: "what is body alignment", position: 8 },
      { keyword: "proper body alignment", position: 16 },
      { keyword: "body alignment center", position: 38 },
    ],
  },
  {
    slug: "fiore-rosalba",
    name: "Formazione Online e Università Telematica",
    industry: "Education",
    market: "Italy",
    website: "https://www.fiorerosalba.com/",
    duration: "May 2023 – Jan 2024",
    image: "/projects/fiore-rosalba-traffic.png",
    imageLabel: "Traffic Analysis",
    group: "Previous",
    summary: "International SEO work across Italian education, course and vocational-training search queries.",
    metrics: [
      { value: "#1", label: "rosalba fiore" },
      { value: "#1", label: "corsi elettricista per adulti" },
      { value: "#1", label: "corso di tappezzeria" },
    ],
    services: ["International SEO", "Content SEO", "Keyword Strategy"],
    keywords: [
      { keyword: "rosalba fiore", position: 1 },
      { keyword: "corsi elettricista per adulti", position: 1 },
      { keyword: "corsi per mastri birrai", position: 1 },
      { keyword: "corso segretaria studio medico", position: 6 },
      { keyword: "corso per segretaria studio medico", position: 7 },
      { keyword: "corso di tappezzeria", position: 1 },
      { keyword: "segreteria direzionale", position: 1 },
      { keyword: "corso segretaria amministrativa", position: 3 },
      { keyword: "corso segretaria online riconosciuto", position: 4 },
      { keyword: "corso da mastro birraio", position: 2 },
    ],
  },
  {
    slug: "rogu-group",
    name: "Rogu Group | Welding Machines & Work Boots",
    industry: "Industrial / E-commerce",
    market: "Mexico",
    website: "https://gruporogu.com.mx/",
    duration: "Aug 2023 – Feb 2024",
    image: "/projects/rogu-group-traffic.png",
    imageLabel: "Traffic Analysis",
    group: "Previous",
    summary: "Spanish-language organic search work across welding equipment and work-boot commercial queries.",
    metrics: [
      { value: "#5", label: "botas para soldador" },
      { value: "#6", label: "botas de soldador" },
      { value: "#29", label: "botas de trabajo" },
    ],
    services: ["International SEO", "E-commerce SEO", "Spanish Search"],
    keywords: [
      { keyword: "botas para soldador", position: 5 },
      { keyword: "botas de soldador", position: 6 },
      { keyword: "botas de trabajo", position: 29 },
      { keyword: "botas soldador", position: 5 },
      { keyword: "soldadoras miller microalambre", position: 40 },
      { keyword: "mig lincoln", position: 31 },
      { keyword: "las mejores botas de trabajo", position: 43 },
    ],
  },
  {
    slug: "paws-and-relax",
    name: "Paws & Relax | Online Pet Store",
    industry: "Pet E-commerce",
    market: "UAE",
    website: "https://www.pawsandrelax.ae/",
    duration: "Jan 2021 – Jun 2022",
    image: "/projects/paws-relax-traffic.png",
    imageLabel: "Traffic Analysis",
    group: "Previous",
    summary: "Organic search visibility across local pet-store, pet-food, category and product queries in the UAE.",
    metrics: [
      { value: "#4", label: "Cat Tree Dubai" },
      { value: "#5", label: "pet store near me" },
      { value: "#7", label: "pet store" },
    ],
    services: ["E-commerce SEO", "Local SEO", "Product SEO"],
    keywords: [
      { keyword: "pet shop", position: 8 },
      { keyword: "pet store", position: 7 },
      { keyword: "pet store near me", position: 5 },
      { keyword: "pet shop near me", position: 6 },
      { keyword: "dog shop near me", position: 7 },
      { keyword: "cat trees", position: 9 },
      { keyword: "royal canin dog food", position: 8 },
      { keyword: "royal canin cat wet food", position: 15 },
      { keyword: "cat lion cut", position: 13 },
      { keyword: "Cat Litter Trays", position: 13 },
      { keyword: "Cat Tree Dubai", position: 4 },
      { keyword: "Cats Accessories", position: 15 },
    ],
  },
];


export const projectGroups: ProjectGroup[] = ["Featured", "Recent", "Previous"];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
