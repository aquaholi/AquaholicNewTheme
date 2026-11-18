import { d as data$2 } from './corproate-design-Ds2MCMAN.mjs';
import { d as data$1 } from './branding-BpMEEeFf.mjs';
import { p as projectsData } from './social-media-C1e6XRmU.mjs';
import { d as data } from './webdesign-Bi897ykc.mjs';

const clientMappings = {
  healthcare: [
    { displayName: "ADSCC", aliases: ["ADSCC"] },
    { displayName: "Al Dhafra Hospital", aliases: ["Al Dhafra Hospital"] },
    { displayName: "Al Rahba Hospital", aliases: ["Al Rahba Hospital"] },
    { displayName: "American Vet", aliases: ["American Vet"] },
    { displayName: "Global Care", aliases: ["Global Care"] },
    { displayName: "Petcure", aliases: ["Petcure"] }
  ],
  "banks-financial-institutions": [
    { displayName: "RAKBANK", aliases: ["RAKBANK"] }
  ],
  "hospitality-food-beverage": [
    { displayName: "ADNH", aliases: ["ADNH"] },
    { displayName: "Compass Group", aliases: ["Compass Group"] },
    { displayName: "Compass Singapore", aliases: ["Compass Singapore"] },
    { displayName: "The Fountain", aliases: ["The Fountain"] }
  ],
  "agriculture-fmcg": [
    { displayName: "Silal", aliases: ["Silal"] },
    { displayName: "Agthia", aliases: ["Agthia"] },
    {
      displayName: "ReHarvest Festival",
      aliases: ["ReHarvest Festival", "Reharvestfestival", "ReHarvest Festival 2026"]
    }
  ],
  "real-estate": [
    { displayName: "Manazel Group", aliases: ["Manazel Group", "Manazel"] }
  ],
  "travel-leisure-destination": [
    { displayName: "Guggenheim", aliases: ["Guggenheim"] }
  ],
  "industrial-engineering": [
    { displayName: "Altrad Adyard", aliases: ["Altrad Adyard", "Altrad"] },
    { displayName: "Vanguard Vantage", aliases: ["Vanguard Vantage", "Vanguardvantage"] }
  ],
  "health-fitness": [],
  "conglomerates-holding-groups": [
    { displayName: "Al Rashed Group", aliases: ["Al Rashed Group", "Alrashed"] }
  ]
};
const normalize = (value) => value.toLowerCase().replace(/[^a-z0-9]/g, "");
const normalizeImage = (image) => decodeURIComponent(image).toLowerCase();
const webDesignDescriptions = new Map(
  data.map((project) => [normalizeImage(project.img), project.subTitle])
);
const industryThumbnailOverrides = {
  [normalizeImage("/dark/assets/imgs/works/projects/brochure/adscc/family-medicine/Thumbnail.jpg")]: "/dark/assets/imgs/works/projects/brochure/adscc/family-medicine/Industry-Thumbnail.jpg",
  [normalizeImage("/dark/assets/imgs/works/projects/brochure/adscc/urgent-care/Thumbnail.jpg")]: "/dark/assets/imgs/works/projects/brochure/adscc/urgent-care/industry-Thumbnail.jpg",
  [normalizeImage("/dark/assets/imgs/works/projects/brochure/adscc/women-health/Thumbnail.jpg")]: "/dark/assets/imgs/works/projects/brochure/adscc/women-health/Industry-Thumbnail.jpg",
  [normalizeImage("/dark/assets/imgs/works/projects/campaigns/adnh/world-cup-26/Thumbnail.jpg")]: "/dark/assets/imgs/works/projects/campaigns/adnh/world-cup-26/Industry-Thumbnail.jpg",
  [normalizeImage("/dark/assets/imgs/works/projects/campaigns/silal/Thumbnail.jpg")]: "/dark/assets/imgs/works/projects/campaigns/silal/Industry-Thumbnail.jpg",
  [normalizeImage("/dark/assets/imgs/works/projects/emailer/adnh/Thumbnail.jpg")]: "/dark/assets/imgs/works/projects/emailer/adnh/Industry-Thumbnail.jpg",
  [normalizeImage("/dark/assets/imgs/works/projects/emailer/adscc/Thumbnail.jpg")]: "/dark/assets/imgs/works/projects/emailer/adscc/Industry-Thumbnail.jpg",
  [normalizeImage("/dark/assets/imgs/works/projects/emailer/silal/Thumbnail.jpg")]: "/dark/assets/imgs/works/projects/emailer/silal/Industry-Thumbnail.jpg",
  [normalizeImage("/dark/assets/imgs/works/projects/signage/the-fountain/Thumbnail.jpg")]: "/dark/assets/imgs/works/projects/signage/the-fountain/Industry-Thumbnail.jpg",
  [normalizeImage("/dark/assets/imgs/works/projects/social-media/ADSCC/Doctors-Profile/Thumbnail.jpg")]: "/dark/assets/imgs/works/projects/social-media/ADSCC/Doctors-Profile/Industry-Thumbnail.jpg",
  [normalizeImage("/dark/assets/imgs/works/projects/social-media/Al%20Dhafra%20Hospital/Thumbnail.jpg")]: "/dark/assets/imgs/works/projects/social-media/Al%20Dhafra%20Hospital/Industry-Thumbnail.jpg",
  [normalizeImage("/dark/assets/imgs/works/projects/social-media/Al%20Rahba%20Hospital/Thumbnail.jpg")]: "/dark/assets/imgs/works/projects/social-media/Al%20Rahba%20Hospital/Industry-Thumbnail.jpg",
  [normalizeImage("/dark/assets/imgs/works/projects/social-media/American%20Vet/Thumbnail.jpg")]: "/dark/assets/imgs/works/projects/social-media/American%20Vet/Industry-Thumbnail.jpg",
  [normalizeImage("/dark/assets/imgs/works/projects/social-media/Global%20Care/Thumbnail.jpg")]: "/dark/assets/imgs/works/projects/social-media/Global%20Care/Industry-Thumbnail.jpg"
};
const projectData = [
  ...data$1,
  ...data$2,
  ...projectsData,
  ...data
];
const getIndustryProjects = (industry) => {
  const mappings = clientMappings[industry];
  const seenProjects = /* @__PURE__ */ new Set();
  return projectData.flatMap((project) => {
    var _a2, _b, _c;
    var _a;
    const normalizedTitle = normalize(project.title);
    const client = mappings.find(
      (mapping) => mapping.aliases.some((alias) => normalize(alias) === normalizedTitle)
    );
    if (!client)
      return [];
    const isGuggenheimBrandingProject = normalize(client.displayName) === "guggenheim" && normalize((_a2 = project.projectTitle) != null ? _a2 : "") === "guggenheim";
    const imageKey = normalizeImage(project.img);
    const projectIdentity = isGuggenheimBrandingProject ? "guggenheim-brand-collaterals" : imageKey;
    const projectKey = `${normalize(client.displayName)}:${projectIdentity}`;
    if (seenProjects.has(projectKey))
      return [];
    seenProjects.add(projectKey);
    const projectTitle = (_a = project.projectTitle) == null ? void 0 : _a.trim();
    const subtitle = (_b = webDesignDescriptions.get(imageKey)) != null ? _b : projectTitle && normalize(projectTitle) !== normalizedTitle ? projectTitle : project.subTitle;
    return [{
      ...project,
      img: (_c = industryThumbnailOverrides[imageKey]) != null ? _c : project.img,
      title: client.displayName,
      subTitle: subtitle
    }];
  });
};

export { getIndustryProjects as g };
//# sourceMappingURL=industry-projects-DvVfGcKt.mjs.map
