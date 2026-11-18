import corporateProjects from './corproate-design.json';
import brandingProjects from './branding.json';
import socialMediaProjects from './social-media.json';
import webDesignProjects from './webdesign.json';

export type IndustryKey =
  | 'healthcare'
  | 'banks-financial-institutions'
  | 'hospitality-food-beverage'
  | 'agriculture-fmcg'
  | 'real-estate'
  | 'travel-leisure-destination'
  | 'industrial-engineering'
  | 'health-fitness'
  | 'conglomerates-holding-groups';

interface IndustrySourceProject {
  img: string;
  title: string;
  subTitle: string;
  link: string;
  projectTitle?: string;
  images?: string[];
}

interface ClientMapping {
  displayName: string;
  aliases: string[];
}

const clientMappings: Record<IndustryKey, ClientMapping[]> = {
  healthcare: [
    { displayName: 'ADSCC', aliases: ['ADSCC'] },
    { displayName: 'Al Dhafra Hospital', aliases: ['Al Dhafra Hospital'] },
    { displayName: 'Al Rahba Hospital', aliases: ['Al Rahba Hospital'] },
    { displayName: 'American Vet', aliases: ['American Vet'] },
    { displayName: 'Global Care', aliases: ['Global Care'] },
    { displayName: 'Petcure', aliases: ['Petcure'] },
  ],
  'banks-financial-institutions': [
    { displayName: 'RAKBANK', aliases: ['RAKBANK'] },
  ],
  'hospitality-food-beverage': [
    { displayName: 'ADNH', aliases: ['ADNH'] },
    { displayName: 'Compass Group', aliases: ['Compass Group'] },
    { displayName: 'Compass Singapore', aliases: ['Compass Singapore'] },
    { displayName: 'The Fountain', aliases: ['The Fountain'] },
  ],
  'agriculture-fmcg': [
    { displayName: 'Silal', aliases: ['Silal'] },
    { displayName: 'Agthia', aliases: ['Agthia'] },
    {
      displayName: 'ReHarvest Festival',
      aliases: ['ReHarvest Festival', 'Reharvestfestival', 'ReHarvest Festival 2026'],
    },
  ],
  'real-estate': [
    { displayName: 'Manazel Group', aliases: ['Manazel Group', 'Manazel'] },
  ],
  'travel-leisure-destination': [
    { displayName: 'Guggenheim', aliases: ['Guggenheim'] },
  ],
  'industrial-engineering': [
    { displayName: 'Altrad Adyard', aliases: ['Altrad Adyard', 'Altrad'] },
    { displayName: 'Vanguard Vantage', aliases: ['Vanguard Vantage', 'Vanguardvantage'] },
  ],
  'health-fitness': [],
  'conglomerates-holding-groups': [
    { displayName: 'Al Rashed Group', aliases: ['Al Rashed Group', 'Alrashed'] },
  ],
};

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '');
const normalizeImage = (image: string) => decodeURIComponent(image).toLowerCase();
const webDesignDescriptions = new Map(
  webDesignProjects.map((project) => [normalizeImage(project.img), project.subTitle]),
);
const industryThumbnailOverrides: Record<string, string> = {
  [normalizeImage('/dark/assets/imgs/works/projects/brochure/adscc/family-medicine/Thumbnail.jpg')]:
    '/dark/assets/imgs/works/projects/brochure/adscc/family-medicine/Industry-Thumbnail.jpg',
  [normalizeImage('/dark/assets/imgs/works/projects/brochure/adscc/urgent-care/Thumbnail.jpg')]:
    '/dark/assets/imgs/works/projects/brochure/adscc/urgent-care/industry-Thumbnail.jpg',
  [normalizeImage('/dark/assets/imgs/works/projects/brochure/adscc/women-health/Thumbnail.jpg')]:
    '/dark/assets/imgs/works/projects/brochure/adscc/women-health/Industry-Thumbnail.jpg',
  [normalizeImage('/dark/assets/imgs/works/projects/campaigns/adnh/world-cup-26/Thumbnail.jpg')]:
    '/dark/assets/imgs/works/projects/campaigns/adnh/world-cup-26/Industry-Thumbnail.jpg',
  [normalizeImage('/dark/assets/imgs/works/projects/campaigns/silal/Thumbnail.jpg')]:
    '/dark/assets/imgs/works/projects/campaigns/silal/Industry-Thumbnail.jpg',
  [normalizeImage('/dark/assets/imgs/works/projects/emailer/adnh/Thumbnail.jpg')]:
    '/dark/assets/imgs/works/projects/emailer/adnh/Industry-Thumbnail.jpg',
  [normalizeImage('/dark/assets/imgs/works/projects/emailer/adscc/Thumbnail.jpg')]:
    '/dark/assets/imgs/works/projects/emailer/adscc/Industry-Thumbnail.jpg',
  [normalizeImage('/dark/assets/imgs/works/projects/emailer/silal/Thumbnail.jpg')]:
    '/dark/assets/imgs/works/projects/emailer/silal/Industry-Thumbnail.jpg',
  [normalizeImage('/dark/assets/imgs/works/projects/signage/the-fountain/Thumbnail.jpg')]:
    '/dark/assets/imgs/works/projects/signage/the-fountain/Industry-Thumbnail.jpg',
  [normalizeImage('/dark/assets/imgs/works/projects/social-media/ADSCC/Doctors-Profile/Thumbnail.jpg')]:
    '/dark/assets/imgs/works/projects/social-media/ADSCC/Doctors-Profile/Industry-Thumbnail.jpg',
  [normalizeImage('/dark/assets/imgs/works/projects/social-media/Al%20Dhafra%20Hospital/Thumbnail.jpg')]:
    '/dark/assets/imgs/works/projects/social-media/Al%20Dhafra%20Hospital/Industry-Thumbnail.jpg',
  [normalizeImage('/dark/assets/imgs/works/projects/social-media/Al%20Rahba%20Hospital/Thumbnail.jpg')]:
    '/dark/assets/imgs/works/projects/social-media/Al%20Rahba%20Hospital/Industry-Thumbnail.jpg',
  [normalizeImage('/dark/assets/imgs/works/projects/social-media/American%20Vet/Thumbnail.jpg')]:
    '/dark/assets/imgs/works/projects/social-media/American%20Vet/Industry-Thumbnail.jpg',
  [normalizeImage('/dark/assets/imgs/works/projects/social-media/Global%20Care/Thumbnail.jpg')]:
    '/dark/assets/imgs/works/projects/social-media/Global%20Care/Industry-Thumbnail.jpg',
};

const projectData: IndustrySourceProject[] = [
  ...brandingProjects,
  ...corporateProjects,
  ...socialMediaProjects,
  ...webDesignProjects,
];

export const getIndustryProjects = (industry: IndustryKey): IndustrySourceProject[] => {
  const mappings = clientMappings[industry];
  const seenProjects = new Set<string>();

  return projectData.flatMap((project) => {
    const normalizedTitle = normalize(project.title);
    const client = mappings.find((mapping) =>
      mapping.aliases.some((alias) => normalize(alias) === normalizedTitle),
    );

    if (!client) return [];

    const isGuggenheimBrandingProject =
      normalize(client.displayName) === 'guggenheim'
      && normalize(project.projectTitle ?? '') === 'guggenheim';
    const imageKey = normalizeImage(project.img);
    const projectIdentity = isGuggenheimBrandingProject
      ? 'guggenheim-brand-collaterals'
      : imageKey;
    const projectKey = `${normalize(client.displayName)}:${projectIdentity}`;

    if (seenProjects.has(projectKey)) return [];
    seenProjects.add(projectKey);

    const projectTitle = project.projectTitle?.trim();
    const subtitle = webDesignDescriptions.get(imageKey)
      ?? (projectTitle && normalize(projectTitle) !== normalizedTitle
        ? projectTitle
        : project.subTitle);

    return [{
      ...project,
      img: industryThumbnailOverrides[imageKey] ?? project.img,
      title: client.displayName,
      subTitle: subtitle,
    }];
  });
};
