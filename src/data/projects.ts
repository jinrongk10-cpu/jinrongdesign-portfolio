export interface ProjectSection {
  id: string;
  layout: 'text-left-image-right' | 'image-center-text-sides' | 'full-image' | 'hero' | 'overview';
  image?: string;
  imageZh?: string; // Optional image for Chinese version
  videoUrl?: string; // Optional video URL to show below the image
  title?: string;
  textLeft?: string;
  textRight?: string;
  textCenter?: string;
  list?: { title: string; desc: string }[];
}

export interface ProjectDetailData {
  id: string | number;
  year: string;
  theme?: 'light' | 'dark';
  snapScroll?: boolean;
  images: string[];
  heroImage?: string;
  gallery?: string[];
  en: {
    title: string;
    role: string;
    scope: string;
    award?: string;
    client: string;
    description: string;
    challenge?: string;
    solution?: string;
    process?: string[];
    sections?: ProjectSection[];
  };
  zh: {
    title: string;
    role: string;
    scope: string;
    award?: string;
    client: string;
    description: string;
    challenge?: string;
    solution?: string;
    process?: string[];
    sections?: ProjectSection[];
  };
}

export const projectsData: ProjectDetailData[] = [
  {
    id: 1,
    year: '2026',
    theme: 'dark',
    snapScroll: true,
    images: ['/project1.jpg'],
    heroImage: '/project1-hero.jpg',
    gallery: [
      '/artisk-1.jpg', 
      '/artisk-2.jpg', 
      '/artisk-3.jpg',
      '/artisk-4.jpg',
      '/artisk-5.jpg'
    ],
    en: {
      title: 'ARTISK',
      role: 'Visual Designer',
      scope: 'Motion / UI / AIGC',
      award: 'Site of the Day',
      client: 'AI BRAND SYSTEM',
      description: 'This project addresses the challenge of making complex and abstract AI products more accessible to users. Through a system-driven approach to branding and interface design, I restructured how product information is communicated transforming technical logic into clear and intuitive visual expressions of commercial value. The result is a scalable and coherent brand experience that improves user understanding, strengthens clarity, and builds trust.',
      sections: [
        {
          id: 'section-1',
          layout: 'full-image',
          image: '/artisk-en-1.jpg',
          imageZh: '/artisk-zh-1.jpg'
        },
        {
          id: 'section-2',
          layout: 'full-image',
          image: '/artisk-en-2.jpg',
          imageZh: '/artisk-zh-2.jpg',
          videoUrl: 'https://jinrongvideo0.cargo.site'
        },
        {
          id: 'section-3',
          layout: 'full-image',
          image: '/artisk-en-3.jpg',
          imageZh: '/artisk-zh-3.jpg'
        },
        {
          id: 'section-4',
          layout: 'full-image',
          image: '/artisk-en-4.jpg',
          imageZh: '/artisk-zh-4.jpg'
        },
        {
          id: 'section-5',
          layout: 'full-image',
          image: '/artisk-en-5.jpg',
          imageZh: '/artisk-zh-5.jpg'
        },
        {
          id: 'section-6',
          layout: 'full-image',
          image: '/artisk-en-6.jpg',
          imageZh: '/artisk-zh-6.jpg'
        },
        {
          id: 'section-7',
          layout: 'full-image',
          image: '/artisk-en-7.jpg',
          imageZh: '/artisk-zh-7.jpg'
        },
        {
          id: 'section-8',
          layout: 'full-image',
          image: '/artisk-en-8.jpg',
          imageZh: '/artisk-zh-8.jpg',
          videoUrl: 'https://jinrongvideo.cargo.site'
        }
      ]
    },
    zh: {
      title: 'ARTISK',
      role: '视觉设计师',
      scope: '动效 / UI / AIGC',
      award: '今日最佳网站',
      client: 'AI 品牌系统',
      description: '本项目致力于解决复杂的抽象AI产品难以被用户理解的问题。通过系统化的品牌塑造与界面设计方法，我重构了产品信息的传达方式，将技术逻辑转化为清晰、直观的商业价值视觉表达。最终打造出可扩展、连贯的品牌体验，提升了用户的理解度，强化了清晰度并建立了信任。',
      sections: [
        {
          id: 'section-1',
          layout: 'full-image',
          image: '/artisk-en-1.jpg',
          imageZh: '/artisk-zh-1.jpg'
        },
        {
          id: 'section-2',
          layout: 'full-image',
          image: '/artisk-en-2.jpg',
          imageZh: '/artisk-zh-2.jpg',
          videoUrl: 'https://jinrongvideo0.cargo.site'
        },
        {
          id: 'section-3',
          layout: 'full-image',
          image: '/artisk-en-3.jpg',
          imageZh: '/artisk-zh-3.jpg'
        },
        {
          id: 'section-4',
          layout: 'full-image',
          image: '/artisk-en-4.jpg',
          imageZh: '/artisk-zh-4.jpg'
        },
        {
          id: 'section-5',
          layout: 'full-image',
          image: '/artisk-en-5.jpg',
          imageZh: '/artisk-zh-5.jpg'
        },
        {
          id: 'section-6',
          layout: 'full-image',
          image: '/artisk-en-6.jpg',
          imageZh: '/artisk-zh-6.jpg'
        },
        {
          id: 'section-7',
          layout: 'full-image',
          image: '/artisk-en-7.jpg',
          imageZh: '/artisk-zh-7.jpg'
        },
        {
          id: 'section-8',
          layout: 'full-image',
          image: '/artisk-en-8.jpg',
          imageZh: '/artisk-zh-8.jpg',
          videoUrl: 'https://jinrongvideo.cargo.site'
        }
      ]
    }
  },
  {
    id: 2,
    year: '2023',
    theme: 'light',
    snapScroll: true,
    images: ['/project2.jpg'],
    heroImage: '/project2-hero.jpg',
    gallery: ['/project2-1.jpg', '/project2-2.jpg'],
    en: {
      title: 'LOOP COFFEE',
      role: 'Visual Designer',
      scope: 'Branding / Packaging / Spatial Visual',
      client: 'BRAND SYSTEM DESIGN',
      description: 'This project is a brand system proposal for a community-based café located in Elephant & Castle, London. The area sits at the intersection of a park, university, and residential neighbourhood, resulting in a diverse and high-frequency consumer base. \n The client requested the inclusion of dog-related elements to reflect the strong local pet-owning community, not as decoration, but as a contextual and meaningful part of the brand identity.',
      challenge: 'Creating a distinctive local coffee brand that stands out in a saturated market, appealing to both daily commuters and weekend café hoppers.',
      solution: 'A dachshund-inspired mascot and modular graphic system provided a playful, recognizable foundation. This was applied flexibly across cups, merch, and spatial elements.',
      sections: [
        {
          id: 'section-1',
          layout: 'full-image',
          image: '/project2-en-1.jpg',
          imageZh: '/project2-zh-1.jpg'
        },
        {
          id: 'section-2',
          layout: 'full-image',
          image: '/project2-en-2.jpg',
          imageZh: '/project2-zh-2.jpg'
        },
        {
          id: 'section-3',
          layout: 'full-image',
          image: '/project2-en-3.jpg',
          imageZh: '/project2-zh-3.jpg'
        },
        {
          id: 'section-4',
          layout: 'full-image',
          image: '/project2-en-4.jpg',
          imageZh: '/project2-zh-4.jpg'
        },
        {
          id: 'section-5',
          layout: 'full-image',
          image: '/project2-en-5.jpg',
          imageZh: '/project2-zh-5.jpg'
        },
        {
          id: 'section-6',
          layout: 'full-image',
          image: '/project2-en-6.jpg',
          imageZh: '/project2-zh-6.jpg'
        }
      ]
    },
    zh: {
      title: 'LOOP COFFEE',
      role: '视觉设计师',
      scope: '品牌设计 / 包装设计 / 空间视觉',
      client: '品牌系统设计',
      description: '本项目是为位于伦敦大象堡(Elephant & Castle)的一家社区咖啡馆提供的品牌系统提案。该地区位于公园、大学和住宅区的交汇处，拥有多元化和高频次的消费群体。\n客户要求融入与狗相关的元素，以反映当地浓厚的宠物饲养社区氛围。这不仅是为了装饰，更是将其作为品牌形象中有背景意义的重要组成部分。',
      challenge: '在一个饱和的市场中创建一个独特的本土咖啡品牌，既能吸引日常通勤者，又能吸引周末的咖啡爱好者。',
      solution: '以腊肠犬为灵感的吉祥物和模块化图形系统提供了一个有趣且极具辨识度的基础。该系统灵活地应用于咖啡杯、周边商品和空间元素中。',
      sections: [
        {
          id: 'section-1',
          layout: 'full-image',
          image: '/project2-en-1.jpg',
          imageZh: '/project2-zh-1.jpg'
        },
        {
          id: 'section-2',
          layout: 'full-image',
          image: '/project2-en-2.jpg',
          imageZh: '/project2-zh-2.jpg'
        },
        {
          id: 'section-3',
          layout: 'full-image',
          image: '/project2-en-3.jpg',
          imageZh: '/project2-zh-3.jpg'
        },
        {
          id: 'section-4',
          layout: 'full-image',
          image: '/project2-en-4.jpg',
          imageZh: '/project2-zh-4.jpg'
        },
        {
          id: 'section-5',
          layout: 'full-image',
          image: '/project2-en-5.jpg',
          imageZh: '/project2-zh-5.jpg'
        },
        {
          id: 'section-6',
          layout: 'full-image',
          image: '/project2-en-6.jpg',
          imageZh: '/project2-zh-6.jpg'
        }
      ]
    }
  },
  {
    id: 3,
    year: '2023',
    theme: 'light',
    snapScroll: true,
    images: ['/project3.jpg'],
    heroImage: '/project3-hero.jpg',
    gallery: ['/project3-1.jpg', '/project3-2.jpg', '/project3-3.jpg'],
    en: {
      title: 'PARCO / NANZUKA',
      role: 'Visual Designer',
      scope: 'Exhibition / Merchandise / IP Design',
      client: 'IP VISUAL APPLICATION',
      description: 'This project focuses on applying established IP systems (PARCO / NANZUKA) across exhibition, product, and communication contexts. \n Working within strict visual guidelines, the goal is to translate artistic assets into commercially viable design outputs while maintaining consistency and recognisability.',
      challenge: 'Translating complex fine art pieces into scalable commercial products and exhibition graphics without losing the original artistic intent.',
      solution: 'Careful extraction of key visual motifs and color palettes from the artworks, creating a secondary design system that bridges the gap between gallery and retail.',
      sections: [
        {
          id: 'section-1',
          layout: 'full-image',
          image: '/project3-en-1.jpg',
          imageZh: '/project3-zh-1.jpg'
        },
        {
          id: 'section-2',
          layout: 'full-image',
          image: '/project3-en-2.jpg',
          imageZh: '/project3-zh-2.jpg'
        }
      ]
    },
    zh: {
      title: 'PARCO / NANZUKA',
      role: '视觉设计师',
      scope: '展览 / 周边 / IP 设计',
      client: 'IP 视觉应用',
      description: '本项目侧重于将成熟的 IP 系统（PARCO / NANZUKA）应用于展览、产品和传播环境中。\n在严格的视觉指南下工作，目标是将艺术资产转化为具有商业可行性的设计输出，同时保持其一致性和可识别度。',
      challenge: '将复杂的纯艺术作品转化为可扩展的商业产品和展览图形，同时不失其原有的艺术意图。',
      solution: '从艺术品中精心提取关键的视觉图案和调色板，创建一个连接画廊和零售之间差距的辅助设计系统。',
      sections: [
        {
          id: 'section-1',
          layout: 'full-image',
          image: '/project3-en-1.jpg',
          imageZh: '/project3-zh-1.jpg'
        },
        {
          id: 'section-2',
          layout: 'full-image',
          image: '/project3-en-2.jpg',
          imageZh: '/project3-zh-2.jpg'
        }
      ]
    }
  },
  {
    id: 4,
    year: '2022',
    theme: 'light',
    snapScroll: true,
    images: ['/project4.jpg'],
    heroImage: '/project4-hero.jpg',
    gallery: ['/project4-1.jpg', '/project4-2.jpg'],
    en: {
      title: 'JOYBUY',
      role: 'Visual Designer',
      scope: 'Branding / Packaging / Social / UI',
      client: 'BRAND SYSTEM DESIGN',
      description: 'This project showcases Joybuy\'s brand repositioning in the British market. \n With a friendly and trustworthy brand image, my aim is to establish a closer connection with local consumers and convey everyday happiness through fast, reliable and people-oriented services.',
      challenge: 'Localizing a major Asian e-commerce brand for the UK market, ensuring it feels trustworthy, modern, and culturally relevant.',
      solution: 'A complete visual overhaul introducing a warmer color palette, localized typography, and a cohesive design system that spans from social media campaigns to app UI.',
      sections: [
        {
          id: 'section-1',
          layout: 'full-image',
          image: '/project4-1.jpg'
        },
        {
          id: 'section-2',
          layout: 'full-image',
          image: '/project4-2.jpg'
        },
        {
          id: 'section-3',
          layout: 'full-image',
          image: '/project4-3.jpg'
        },
        {
          id: 'section-4',
          layout: 'full-image',
          image: '/project4-4.jpg'
        }
      ]
    },
    zh: {
      title: 'JOYBUY',
      role: '视觉设计师',
      scope: '品牌设计 / 包装设计 / 社交媒体 / UI',
      client: '品牌系统设计',
      description: '本项目展示了 Joybuy 在英国市场的品牌重新定位。\n通过友好、值得信赖的品牌形象，我的目标是与当地消费者建立更紧密的联系，并通过快速、可靠和以人为本的服务传递日常的幸福感。',
      challenge: '将一个亚洲主要电商品牌本地化到英国市场，确保其给人以值得信赖、现代且符合当地文化的印象。',
      solution: '进行全面的视觉改革，引入更温暖的调色板、本地化的排版，以及一个从社交媒体宣发延伸到应用 UI 的内聚设计系统。',
      sections: [
        {
          id: 'section-1',
          layout: 'full-image',
          image: '/project4-1.jpg'
        },
        {
          id: 'section-2',
          layout: 'full-image',
          image: '/project4-2.jpg'
        },
        {
          id: 'section-3',
          layout: 'full-image',
          image: '/project4-3.jpg'
        },
        {
          id: 'section-4',
          layout: 'full-image',
          image: '/project4-4.jpg'
        }
      ]
    }
  },
  {
    id: 5,
    year: '2022',
    theme: 'light',
    snapScroll: true,
    images: ['/project5.jpg'],
    heroImage: '/project5-hero.jpg',
    gallery: ['/project5-1.jpg', '/project5-2.jpg'],
    en: {
      title: 'OSSIS',
      role: 'Visual Designer',
      scope: '3D / AIGC / Concept Design',
      client: '3D VISUAL SYSTEM',
      description: 'OSSIS is a concept-driven project exploring the relationship between body, material, and form through 3D visual design, using jewellery as a medium. \n The project combines AI-assisted exploration with controlled 3D modelling, resulting in a cohesive visual system built around a speculative, future-oriented aesthetic.',
      challenge: 'Bridging the unpredictability of early AIGC tools with the precision required for high-end 3D visual outputs.',
      solution: 'Developing a hybrid workflow where AI serves as a rapid conceptualization tool, followed by rigorous manual 3D sculpting, texturing, and rendering in Blender and TouchDesigner.',
      sections: [
        {
          id: 'section-1',
          layout: 'full-image',
          image: '/project5-en-1.jpg',
          imageZh: '/project5-zh-1.jpg'
        },
        {
          id: 'section-2',
          layout: 'full-image',
          image: '/project5-en-2.jpg',
          imageZh: '/project5-zh-2.jpg'
        },
        {
          id: 'section-3',
          layout: 'full-image',
          image: '/project5-en-3.jpg',
          imageZh: '/project5-zh-3.jpg'
        },
        {
          id: 'section-4',
          layout: 'full-image',
          image: '/project5-en-4.jpg',
          imageZh: '/project5-zh-4.jpg'
        }
      ]
    },
    zh: {
      title: 'OSSIS',
      role: '视觉设计师',
      scope: '3D / AIGC / 概念设计',
      client: '3D 视觉系统',
      description: 'OSSIS 是一个概念驱动的项目，通过 3D 视觉设计，以珠宝为媒介，探索身体、材料与形态之间的关系。\n该项目将 AI 辅助探索与可控的 3D 建模相结合，最终构建了一个围绕推测性、面向未来美学的连贯视觉系统。',
      challenge: '将早期 AIGC 工具的不可预测性与高端 3D 视觉输出所需的精确性相结合。',
      solution: '开发一种混合工作流：AI 作为快速概念化工具，随后在 Blender 和 TouchDesigner 中进行严格的手动 3D 雕刻、纹理处理和渲染。',
      sections: [
        {
          id: 'section-1',
          layout: 'full-image',
          image: '/project5-en-1.jpg',
          imageZh: '/project5-zh-1.jpg'
        },
        {
          id: 'section-2',
          layout: 'full-image',
          image: '/project5-en-2.jpg',
          imageZh: '/project5-zh-2.jpg'
        },
        {
          id: 'section-3',
          layout: 'full-image',
          image: '/project5-en-3.jpg',
          imageZh: '/project5-zh-3.jpg'
        },
        {
          id: 'section-4',
          layout: 'full-image',
          image: '/project5-en-4.jpg',
          imageZh: '/project5-zh-4.jpg'
        }
      ]
    }
  },
  {
    id: 6,
    year: '2021',
    theme: 'light',
    snapScroll: true,
    images: ['/project6.jpg'],
    heroImage: '/project6-hero.jpg',
    gallery: ['/project6-1.jpg', '/project6-2.jpg', '/project6-3.jpg'],
    en: {
      title: 'MUTE',
      role: 'Visual Designer',
      scope: '3D / Campaign / Web Design',
      client: '3D PRODUCT CONCEPT',
      description: 'A concept-driven product design project translating the idea of silence into a unified visual system across 3D form, campaign imagery and web experience.',
      challenge: 'Visualizing an abstract concept like "silence" into a tangible product design and digital experience.',
      solution: 'Using stark minimalism, soft diffused lighting in 3D renders, and an airy, breathable web layout to evoke a sense of calm and quiet focus.',
      sections: [
        {
          id: 'section-1',
          layout: 'full-image',
          image: '/project6-en-1.jpg',
          imageZh: '/project6-zh-1.jpg'
        },
        {
          id: 'section-2',
          layout: 'full-image',
          image: '/project6-en-2.jpg',
          imageZh: '/project6-zh-2.jpg'
        },
        {
          id: 'section-3',
          layout: 'full-image',
          image: '/project6-en-3.jpg',
          imageZh: '/project6-zh-3.jpg'
        }
      ]
    },
    zh: {
      title: 'MUTE',
      role: '视觉设计师',
      scope: '3D / 宣发 / 网页设计',
      client: '3D 产品概念',
      description: '一个概念驱动的产品设计项目，将“静谧”的理念转化为跨越 3D 形态、宣发图像和网页体验的统一视觉系统。',
      challenge: '将“静谧”等抽象概念可视化为有形的产品设计和数字体验。',
      solution: '在 3D 渲染中使用极简主义、柔和的漫反射光照，以及在网页布局中采用空灵、透气的设计，唤起一种平静和专注的感觉。',
      sections: [
        {
          id: 'section-1',
          layout: 'full-image',
          image: '/project6-en-1.jpg',
          imageZh: '/project6-zh-1.jpg'
        },
        {
          id: 'section-2',
          layout: 'full-image',
          image: '/project6-en-2.jpg',
          imageZh: '/project6-zh-2.jpg'
        },
        {
          id: 'section-3',
          layout: 'full-image',
          image: '/project6-en-3.jpg',
          imageZh: '/project6-zh-3.jpg'
        }
      ]
    }
  }
];
