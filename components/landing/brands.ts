export type Brand = {
  name: string;
  sub: string;
  listTag: string;
  detailTag: string;
  desc: string;
  desc2: string;
  scope: string[];
  facts: string[];
  logo: string;
  logoHeight: number;
  logoPad: string;
};

export const BRANDS: Brand[] = [
  {
    name: "ETHMAR",
    sub: "30+ package designs & a complete integrated identity",
    listTag: "IDENTITY",
    detailTag: "CORPORATE IDENTITY",
    desc: "Ethmar is a leading company with a variety of food products focused on fine quality and food-safety standards. We helped them develop a distinct brand with over thirty package designs and a complete integrated identity.",
    desc2: "Every pack in the range shares one system — logo, color coding and layout rules that hold from shelf to carton — so each new product slots in without a redesign.",
    scope: ["LOGO", "30+ PACKAGE DESIGNS", "INTEGRATED IDENTITY"],
    facts: [
      "Food producer focused on fine quality & food-safety standards",
      "Thirty-plus package designs across the product range",
      "Complete integrated identity system",
    ],
    logo: "/logos/ethmar.png",
    logoHeight: 72,
    logoPad: "16px 24px",
  },
  {
    name: "JAROUDI MEDIA",
    sub: "Dynamic scripted logotype & corporate identity",
    listTag: "IDENTITY",
    detailTag: "CORPORATE IDENTITY",
    desc: "Jaroudi Media started as a young production house and became a creative regional production company. The dynamic scripted logo and corporate identity were created to project a daring, innovative personality — just what this competitive media industry demands.",
    desc2: "The scripted mark flexes from title cards to slates and stationery, giving a young studio the presence of an established production house on every deliverable.",
    scope: ["SCRIPTED LOGOTYPE", "CORPORATE IDENTITY"],
    facts: [
      "Young production house grown into a regional creative company",
      "Dynamic scripted logotype at the heart of the identity",
      "Built to project a daring, innovative personality",
    ],
    logo: "/logos/jaroudi.png",
    logoHeight: 72,
    logoPad: "16px 24px",
  },
  {
    name: "MACEEN CAPITAL",
    sub: "Identity, annual reports, sales kits & office branding",
    listTag: "IDENTITY + PRINT",
    detailTag: "IDENTITY + PRINT",
    desc: "Maceen Capital is a closed joint-stock investment company regulated by the CMA, spanning real-estate investment and investment banking. We developed their identity through dynamic shapes with integrated intersections reflecting transparency — carried through office branding, sales kits, annual reports and fund-launch projects.",
    desc2: "One geometric language runs from the business card to the exhibition booth, so investors meet the same brand at the office, in the annual report and on the expo floor.",
    scope: ["IDENTITY", "OFFICE BRANDING", "SALES KITS", "ANNUAL REPORT", "EXHIBITION BOOTH"],
    facts: [
      "Closed joint-stock investment company regulated by the CMA",
      "Real-estate investment & investment banking group",
      "Dynamic intersecting shapes reflecting transparency",
      "Carried through office, sales kits, reports & fund launches",
    ],
    logo: "/logos/maceen.png",
    logoHeight: 72,
    logoPad: "16px 24px",
  },
  {
    name: "VILLATE",
    sub: "Five villa style brands, campaign & 3D visualization",
    listTag: "IDENTITY + 3D",
    detailTag: "IDENTITY + 3D MODELING",
    desc: "Villate is a real-estate fund of unique villas in five styles — Mexican, Spanish, Classic, Modern and Contemporary. From the logo and slogan we created a distinct graphic element representing dreams, reflecting each style with its own concept color branding to bring the emotional aspect to life for prospect buyers.",
    desc2: "Each of the five styles carries its own concept color while sharing the same mark — campaigns can speak to a Mexican-villa buyer and a contemporary-villa buyer without splitting the brand.",
    scope: ["LOGO & SLOGAN", "CAMPAIGN", "5 STYLE BRANDS", "3D MODELING"],
    facts: [
      "Real-estate fund of unique villas in five styles",
      "Mexican, Spanish, Classic, Modern & Contemporary concepts",
      "A graphic element representing dreams, carried into 3D",
    ],
    logo: "/logos/villate.png",
    logoHeight: 72,
    logoPad: "16px 24px",
  },
  {
    name: "RETAIL PROJECTS",
    sub: "Premium retail identity & branch rollouts across KSA",
    listTag: "IDENTITY",
    detailTag: "CORPORATE IDENTITY",
    desc: "RP is a B2B lifestyle organization bringing selective products to flagship stores in the best malls in KSA. With each premium retail brand we start by developing a logo and corporate identity that stands out and reflects their values — then carry on through multiple projects across their new branches.",
    desc2: "The RP monogram anchors every rollout: as new branches and brands come online, signage and collateral extend the same system instead of starting over.",
    scope: ["LOGO", "CORPORATE IDENTITY", "BRANCH ROLLOUTS"],
    facts: [
      "B2B lifestyle organization for premium retail brands",
      "Flagship stores in the best malls in KSA",
      "Identity carried through multiple branch projects",
    ],
    logo: "/logos/rp.png",
    logoHeight: 72,
    logoPad: "16px 24px",
  },
  {
    name: "EADS DEFENCE & SECURITY",
    sub: "Delta-wing stand — Best Exhibition Award winner",
    listTag: "EXHIBITIONS",
    detailTag: "EVENTS & EXHIBITIONS",
    desc: "Winner of the Best Exhibition Award — a delta-wing stand concept for EADS Defence & Security with integrated demo stations, meeting areas and hospitality zones. Designed and rendered to approval, then built on site.",
    desc2: "The wing works as both architecture and signage — visible across the hall, while demo stations, meeting areas and hospitality zones sit organized beneath it.",
    scope: ["STAND CONCEPT", "3D RENDERS", "ON-SITE BUILD", "BEST EXHIBITION AWARD"],
    facts: [
      "Delta-wing stand with integrated demo stations",
      "Meeting areas & hospitality zones worked into the wing",
      "Winner of the Best Exhibition Award",
    ],
    logo: "/logos/eads.png",
    logoHeight: 116,
    logoPad: "0px",
  },
  {
    name: "AMESYS BULL",
    sub: "Curved booth with live demo stations & vehicle display",
    listTag: "EXHIBITIONS",
    detailTag: "EVENTS & EXHIBITIONS",
    desc: "A curved, demo-driven booth for Amesys, a Bull Group technology company — live Road Runner interception demos, integrated screens and a full vehicle display worked into the sweeping shell.",
    desc2: "The sweep of the shell guides visitors from the live interception demos past the integrated screens to the vehicle — one continuous route through the story.",
    scope: ["STAND DESIGN", "DEMO STATIONS", "VEHICLE DISPLAY"],
    facts: [
      "Curved shell hosting live Road Runner interception demos",
      "Integrated screens & a full vehicle display",
      "Built for Amesys, a Bull Group technology company",
    ],
    logo: "/logos/amesys.png",
    logoHeight: 116,
    logoPad: "0px",
  },
  {
    name: "HBL POWER SYSTEMS",
    sub: "11×8 m twin-tower stand, planned & built on site",
    listTag: "EXHIBITIONS",
    detailTag: "EVENTS & EXHIBITIONS",
    desc: "An 11 × 8 metre twin-tower trade-show stand for HBL Power Systems — meeting zones, podium displays and a central mast, planned to the metre on the floor plan, rendered to approval and built on site.",
    desc2: "The twin towers give the brand height on a crowded floor, while the plan keeps meeting zones and podium displays working inside the 11 × 8 footprint.",
    scope: ["11×8 M STAND", "FLOOR PLANNING", "ON-SITE BUILD"],
    facts: [
      "11 × 8 metre twin-tower trade-show stand",
      "Meeting zones, podium displays & central mast",
      "Rendered to approval, then built on site",
    ],
    logo: "/logos/hbl.png",
    logoHeight: 116,
    logoPad: "0px",
  },
  {
    name: "LEIL NHAR",
    sub: "Complete branding production & restaurant collateral",
    listTag: "PRINT",
    detailTag: "PRINT & PRODUCTION",
    desc: "Leil Nhar is a casual eatery serving fast bites around the clock, with branches across the region. We delivered the complete branding production and restaurant collateral for their Riyadh branch, built around an illustrated brand world.",
    desc2: "The illustrated world — pots, cups and the day-and-night mark — carries from menus to placemats to signage, keeping the around-the-clock story on every touchpoint.",
    scope: ["BRANDING PRODUCTION", "RESTAURANT COLLATERAL", "ILLUSTRATION"],
    facts: [
      "Casual eatery serving fast bites around the clock",
      "Complete branding production for the Riyadh branch",
      "An illustrated brand world across the collateral",
    ],
    logo: "/logos/leilnhar.png",
    logoHeight: 72,
    logoPad: "16px 24px",
  },
];
