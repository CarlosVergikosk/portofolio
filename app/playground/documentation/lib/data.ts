export interface DocCategory {
  id: string;
  name: string;
  urls?: string[];
  children?: DocCategory[];
}

export const docCategories: DocCategory[] = [
  {
    id: "projects",
    name: "Projects",
    urls: [
      "https://e18e.dev/learn/cleanup.html",
      "https://21st.dev/community/components",
      "https://lingo.dev/en",
    ],
  },
  {
    id: "libraries",
    name: "Libraries",
    urls: [
      "https://ui.shadcn.com",
      "https://www.radix-ui.com",
      "https://mantine.dev",
      "https://nextui.org",
      "https://chakra-ui.com",
      "https://mui.com",
      "https://ark-ui.com",
      "https://www.tremor.so",
      "https://reui.io/",
      "https://reui.io/docs/components/base/data-grid",
      "https://smoothui.dev/docs/components/siri-orb",
      "https://motion-primitives.com/docs",
      "https://ui.booleanfields.com/",
      "https://ark-ui.com/docs/utilities/presence",
      "https://basecn.dev/?utm_source=ui.shadcn.com&utm_medium=referral&utm_campaign=directory",
      "https://www.eldoraui.site/",
      "https://spell.sh/",
      "https://ui.aceternity.com/",
      "https://efferd.com/",
      "https://heroui.com/",
      "https://evilcharts.com/docs/components",
      "https://blocks.mvp-subha.me/",
      "https://www.lndevui.com/",
      "https://github.com/vercel-labs/visual-json",
      "https://github.com/vercel-labs/json-render",
    ],
  },
  {
    id: "icons",
    name: "Icons",
    urls: ["https://svgl.app/directory/microsoft"],
  },
  {
    id: "animations",
    name: "Animations",
    children: [
      {
        id: "animations/content",
        name: "Content",
        urls: [
          "https://www.framer.com/motion/",
          "https://gsap.com",
          "https://motion.dev",
          "https://www.react-spring.dev",
          "https://animejs.com",
          "https://auto-animate.formkit.com",
          "https://www.userinterface.wiki/mastering-animate-presence",
          "https://github.com/shuding/next-view-transitions",
          "https://medium.com/@aviadtend/motion-design-system-practical-guide-8c15599262fe",
          "https://www.amelieschlueter.com/interactions",
          "https://ibelick.com/blog",
          "https://transitions.dev/skill",
        ],
      },
      {
        id: "animations/components",
        name: "Components",
        urls: [
          "https://21st.dev/community/components/kokonutd/ai-voice-input/default",
          "https://www.amelieschlueter.com/interactions/dynamic-island",
          "https://smoothui.dev/docs/components/siri-orb",
          "https://micro.bossadizenith.me/components",
          "https://spell.sh/docs/perspective-book",
          "https://buildui.com/recipes",
          "https://codepen.io/necatikcl/pen/gOQNKwj",
        ],
      },
      {
        id: "animations/border",
        name: "Border",
        urls: ["https://motion-primitives.com/docs/glow-effect"],
      },
      {
        id: "animations/illustrations",
        name: "Illustrations",
        urls: [
          "https://lottiefiles.com",
          "https://rive.app",
          "https://www.svgator.com",
          "https://undraw.co",
          "https://blush.design",
          "https://pqoqubbw.dev/crafts/mintlify-landing-page",
          "https://pqoqubbw.dev/crafts/lingo-landing-page-redesign",
          "https://pqoqubbw.dev/crafts/firecrawl-bento-v2",
          "https://pqoqubbw.dev/crafts/calcom-animated-bento",
          "https://ui.aceternity.com/blocks/feature-sections",
        ],
      },
    ],
  },
  {
    id: "inspiration",
    name: "Inspiration",
    children: [
      {
        id: "inspiration/landing-pages",
        name: "Landing pages",
        urls: [
          "https://landingfolio.com",
          "https://www.lapa.ninja",
          "https://godly.website",
          "https://saaslandingpage.com",
          "https://www.firecrawl.dev/",
          "https://beam.ai/",
          "https://www.v7labs.com/old-home",
          "https://www.legend.org/",
          "https://wisprflow.ai/",
          "https://blog.maximeheckel.com/",
        ],
      },
      {
        id: "inspiration/carousel",
        name: "Carousel",
        urls: ["https://spell.sh/docs/logos-carousel"],
      },
      {
        id: "inspiration/tables",
        name: "Tables",
        urls: [
          "https://tanstack.com/table",
          "https://ui.shadcn.com/docs/components/data-table",
          "https://www.ag-grid.com",
          "https://reui.io/docs/components/base/data-grid",
        ],
      },
      {
        id: "inspiration/graphs",
        name: "Graphs",
        urls: ["https://evilcharts.com/docs/ui/legend"],
      },
      {
        id: "inspiration/tree",
        name: "Tree",
        urls: ["https://trees.software/"],
      },
      {
        id: "inspiration/spinners",
        name: "Spinners",
        urls: [
          "https://uiverse.io/loaders",
          "https://loading.io",
          "https://cssloaders.github.io",
          "https://tobiasahlin.com/spinkit/",
          "https://heroui.com/en/docs/react/components/spinner",
          "https://loading-ui.com/",
          "https://dotmatrix.zzzzshawn.cloud/",
          "https://icons.icantcode.fyi/",
        ],
      },
      {
        id: "inspiration/buttons",
        name: "Buttons",
        urls: [
          "https://uiverse.io/buttons",
          "https://getcssscan.com/css-buttons-examples",
          "https://hover.dev",
        ],
      },
      {
        id: "inspiration/borders",
        name: "Borders",
        urls: [
          "https://animista.net",
          "https://css.glass",
          "https://neumorphism.io",
        ],
      },
      {
        id: "inspiration/backgrounds",
        name: "Backgrounds",
        urls: [
          "https://www.svgbackgrounds.com",
          "https://heropatterns.com",
          "https://bgjar.com",
          "https://www.magicpattern.design",
        ],
      },
      {
        id: "inspiration/gradients",
        name: "Gradients",
        urls: [
          "https://uigradients.com",
          "https://cssgradient.io",
          "https://www.grabient.com",
          "https://gradientmagic.com",
          "https://grainient.supply/collections",
          "https://shaders.com/",
          "https://photogradient.com/",
          "https://bg.ibelick.com/",
        ],
      },
      {
        id: "inspiration/mockups",
        name: "Mockups",
        urls: [
          "https://shotsnapp.com",
          "https://www.mockuuups.studio",
          "https://mockuphone.com",
          "https://shots.so/",
          "https://www.ultramock.io/",
        ],
      },
      {
        id: "inspiration/effects",
        name: "Effects",
        urls: ["https://magic.0xbalance.xyz/"],
      },
      {
        id: "inspiration/apple-events",
        name: "Apple Events",
        urls: [
          "https://www.figma.com/design/cD5VMLqxFN1fe9p1oFrv04/All-Apple-Event-Summary-Slides-2019-2025--Community-?node-id=0-1&p=f&t=9Pf7MiNZPfoDQ2tI-0",
        ],
      },
    ],
  },
  {
    id: "gestures",
    name: "Gestures",
    urls: ["https://use-gesture.netlify.app/docs/"],
  },
  {
    id: "tools",
    name: "Tools",
    urls: ["https://getremoverized.yoss.pro/removerized"],
  },
  {
    id: "css-articles",
    name: "CSS Articles",
    urls: ["https://ishadeed.com/articles/"],
  },
  {
    id: "portfolios",
    name: "Portfolios",
    urls: [
      "https://chanhdai.com/",
      "https://gist.github.com/pqoqubbw",
      "https://pqoqubbw.dev/",
      "https://jakub.kr/",
      "https://www.userinterface.wiki/",
      "https://ibelick.com/",
      "https://shud.in/",
      "https://emilkowal.ski/",
      "https://alexwidua.com/",
    ],
  },
];

export function collectUrls(category: DocCategory): string[] {
  if (category.urls) return category.urls;
  return category.children?.flatMap(collectUrls) ?? [];
}

export function findCategoryByPath(
  categories: DocCategory[],
  path: string[]
): DocCategory | null {
  if (path.length === 0) return null;
  let current: DocCategory | undefined = categories.find(
    (c) => c.id === path[0]
  );
  for (let i = 1; i < path.length && current; i++) {
    current = current.children?.find((c) => c.id === path[i]);
  }
  return current ?? null;
}
