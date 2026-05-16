import type {
  ExpressiveCodeConfig,
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
  title: "Csafte",
  subtitle: "blog",
  lang: "ko", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
  themeColor: {
    hue: 140, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false, // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: "assets/images/Banner.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false, // Display the credit text of the banner image
      text: "", // Credit text to be displayed
      url: "", // (Optional) URL link to the original artwork or artist's page
    },
  },
  toc: {
    enable: true, // Display the table of contents on the right side of the post
    depth: 2, // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [
    // Leave this array empty to use the default favicon
    {
      src: "favicon/favicon.jpg", // Path of the favicon, relative to the /public directory
      
    },
  ],
  comment: {
    enable: true,
    type: "giscus",
    giscus: {
      repo: "csafte/csafte.github.io",
      repoId: "R_kgDOSfVJaQ",
      category: "Announcements",
      categoryId: "DIC_kwDOSfVJac4C9MiX",
      theme: "preferred_color_scheme",
      lang: "ko",
    },
  },
};

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: "GitHub",
      url: "https://github.com/csafte", // Internal links should not include the base path, as it is automatically added
      external: true, // Show an external link icon and will open in a new tab
    },
  ],
};

export const profileConfig: ProfileConfig = {
  avatar: "assets/images/avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: "Csafte",
  bio: "책과 게임, 게임 개발 중심 블로그 입니다",
  links: [
    {
      name: "Steam",
      icon: "fa6-brands:steam",
      url: "https://steamcommunity.com/profiles/76561199487993960/",
    },
    {
      name: "GitHub",
      icon: "fa6-brands:github",
      url: "https://github.com/csafte",
    },
  ],
};

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: "CC BY-NC-SA 4.0",
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
  // Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
  // Please select a dark theme, as this blog theme currently only supports dark background color
  theme: "github-dark",
};
