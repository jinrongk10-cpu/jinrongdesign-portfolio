import React from 'react';
import { ArrowUpRight, Globe } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Environment, Bounds } from '@react-three/drei';
import { Link } from 'react-router-dom';
import Model from '../components/Model';
import { useAppStore } from '../store/useAppStore';
import { projectsData } from '../data/projects';

const t = {
  en: {
    nav: { design: 'DESIGN', art: 'ART', about: 'ABOUT' },
    hero: {
      title: 'A MULTIDISCIPLINARY DESIGNER WORKING ACROSS BRANDING, DIGITAL MEDIA AND VISUAL STORYTELLING, TURNING IDEAS INTO DISTINCTIVE VISUAL EXPERIENCES.',
      tags: ['[BRAND DESIGN]', '[DIGITAL MEDIA]', '[VISUAL STORYTELLING]', '[EXHIBITION / CAMPAIGN]'],
      watch: '[EXHIBITION]',
      videoSubtitle: 'INTERNATIONAL ART BIENNALE',
      scroll: 'SCROLL ↓'
    },
    design: {
      title: '[COMMERCIAL PROJECTS]',
      conceptTitle: '[CONCEPTUAL PROJECTS]',
      viewDetails: 'VIEW DETAILS ↗',
      role: 'ROLE',
      scope: 'SCOPE',
      award: 'AWARD',
      viewCaseStudy: 'VIEW DETAILS'
    },
    art: {
      title: '[ART EXPLORATION]',
      comingSoon: 'Artworks coming soon...'
    },
    services: {
      title: 'TOOLS',
      tools: [
        { category: 'DESIGN & UI', items: 'FIGMA / PHOTOSHOP / ILLUSTRATOR / INDESIGN' },
        { category: 'MOTION & VIDEO', items: 'AFTER EFFECTS / PREMIERE PRO' },
        { category: 'WEB', items: 'CARGO SITE' },
        { category: '3D & REAL-TIME', items: 'BLENDER / TOUCHDESIGNER / NOMAD SCULPT / SKETCHUP' },
        { category: 'AIGC WORKFLOW', items: 'MIDJOURNEY / GEMINI / TRIPO AI / SEEDANCE / LOVART / CLAUDE' }
      ],
      awardsTitle: 'EXPERIENCE',
      project: 'COMPANY',
      role: 'ROLE',
      award: 'PERIOD',
      experiences: [
        { company: 'ARTISK AI', type: 'AI BRAND PLATFORM', role: 'VISUAL DESIGNER', period: '2025–26' },
        { company: 'FREELANCE', type: 'COMMERCIAL / IP PROJECTS', role: 'VISUAL DESIGNER', period: '2024–25' },
        { company: 'GIMC', type: 'ADVERTISING GROUP', role: 'DESIGN INTERN', period: '2019' }
      ]
    },
    about: {
      title: 'ABOUT',
      bio: 'BIO',
      exp: 'VISUAL DESIGNER',
      p1: 'I am a visual designer focused on building structured visual systems for brand communication, digital products and cross-media experiences.',
      p2: 'My work starts from user scenarios, business goals and information hierarchy, translating complex ideas into clear, consistent and commercially adaptable visual outputs.',
      p3: 'With a background in both art and design, I work across branding, UI visuals, motion, 3D and AIGC workflows to create design systems that remain coherent across different platforms and touchpoints.'
    },
    cta: 'DOWNLOAD CV'
  },
  zh: {
    nav: { design: '设计', art: '艺术', about: '关于' },
    hero: {
      title: '一位跨越品牌、数字媒体和视觉叙事的多学科技能设计师，致力于将创意转化为独特的视觉体验。',
      tags: ['[品牌设计]', '[数字媒体]', '[视觉叙事]', '[展览 / 宣发活动]'],
      watch: '[展览]',
      videoSubtitle: '国际艺术双年展',
      scroll: '向下滚动 ↓'
    },
    design: {
      title: '[商业项目]',
      conceptTitle: '[概念项目]',
      viewDetails: '查看详情 ↗',
      role: '角色',
      scope: '项目范围',
      award: '奖项',
      viewCaseStudy: '查看详情'
    },
    art: {
      title: '[艺术探索]',
      comingSoon: '艺术作品即将推出...'
    },
    services: {
      title: '使用工具',
      tools: [
        { category: '设计与 UI', items: 'FIGMA / PHOTOSHOP / ILLUSTRATOR / INDESIGN' },
        { category: '动效与视频', items: 'AFTER EFFECTS / PREMIERE PRO' },
        { category: '网页开发', items: 'CARGO SITE' },
        { category: '3D 与实时渲染', items: 'BLENDER / TOUCHDESIGNER / NOMAD SCULPT / SKETCHUP' },
        { category: 'AIGC 工作流', items: 'MIDJOURNEY / GEMINI / TRIPO AI / SEEDANCE / LOVART / CLAUDE' }
      ],
      awardsTitle: '工作经历',
      project: '公司',
      role: '角色',
      award: '时期',
      experiences: [
        { company: 'ARTISK AI', type: 'AI 品牌平台', role: '视觉设计师', period: '2025–26' },
        { company: '自由职业', type: '商业 / IP 项目', role: '视觉设计师', period: '2024–25' },
        { company: '省广集团 (GIMC)', type: '广告集团', role: '设计实习生', period: '2019' }
      ]
    },
    about: {
      title: '关于我',
      bio: '个人简介',
      exp: '视觉设计师',
      p1: '我是一名视觉设计师，专注于为品牌传播、数字产品和跨媒体体验构建结构化的视觉系统。',
      p2: '我的工作从用户场景、商业目标和信息层级出发，将复杂的想法转化为清晰、一致且适应商业需求的视觉输出。',
      p3: '拥有艺术与设计双重背景，我的工作跨越品牌、UI视觉、动效、3D 和 AIGC 工作流，致力于创建在不同平台和接触点上保持连贯的设计系统。'
    },
    cta: '下载简历'
  }
};

export default function Home() {
  const { lang, toggleLang } = useAppStore();
  const modelUrl = "/773973a7162c4c6cd6801cffcc071ee9.glb";
  const dict = t[lang];

  return (
    <div className="min-h-screen bg-white font-mono text-dark selection:bg-neon selection:text-dark">
      {/* Background Dots */}
      <div className="fixed inset-0 pointer-events-none bg-dots bg-dots-size opacity-50 z-0"></div>

      {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 mix-blend-difference bg-white/80 backdrop-blur-sm border-b border-dark/10">
          <div className="font-bold tracking-tight uppercase text-sm">
            [JINRONG KUANG]
          </div>
          <div className="hidden md:flex space-x-12 text-xs font-bold tracking-widest uppercase">
            <a href="#design" className="hover:text-dark/70 transition-colors">{dict.nav.design}</a>
            <a href="https://jinrongkuang.com" target="_blank" rel="noopener noreferrer" className="hover:text-dark/70 transition-colors">{dict.nav.art}</a>
            <a href="#about" className="hover:text-dark/70 transition-colors">{dict.nav.about}</a>
          </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleLang}
            className="bg-white px-3 py-1 rounded-full text-xs font-bold border border-dark flex items-center shadow-[2px_2px_0px_0px_rgba(11,11,11,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0px_0px_rgba(11,11,11,1)] transition-all cursor-pointer text-dark"
          >
            <Globe size={14} className="mr-1.5" />
            {lang === 'en' ? '中 / EN' : 'EN / 中'}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col justify-between px-6 py-8 relative">
          <div className="flex justify-between items-start absolute -top-8 left-6 right-6 z-30 pointer-events-auto">
            <h1 className="text-xs md:text-sm font-bold uppercase max-w-sm leading-relaxed text-dark">
              {dict.hero.title}
            </h1>
            <div className="text-right text-[10px] md:text-xs font-bold uppercase flex flex-col items-end space-y-1 text-dark">
              {dict.hero.tags.map((tag, i) => <span key={i}>{tag}</span>)}
            </div>
          </div>

          {/* Placeholder for 3D Object */}
          <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[600px] z-20 cursor-grab active:cursor-grabbing">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }} gl={{ antialias: true, alpha: true }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <Environment preset="city" />
              <React.Suspense fallback={null}>
                <Bounds fit clip observe margin={1.0}>
                  <Model url={modelUrl} />
                </Bounds>
              </React.Suspense>
            </Canvas>
          </div>

          <div className="flex justify-between items-end mt-auto w-full">
            {/* Video Card */}
            <a href="https://jinrongkuang.com/gildrift" target="_blank" rel="noopener noreferrer" className="block w-48 bg-white border border-dark p-1 shadow-[4px_4px_0px_0px_rgba(11,11,11,1)] z-10 hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all cursor-pointer group">
              <div className="flex justify-between text-[10px] mb-1 uppercase font-bold">
                <span>ORTUNG 14</span>
                <span>[2025]</span>
              </div>
              <div className="text-[9px] leading-none mb-1 font-bold uppercase text-dark/70">
                {dict.hero.videoSubtitle}
              </div>
              <div className="aspect-video bg-dark/10 relative overflow-hidden">
                <img 
                  src="/gildrift.jpg" 
                  alt="Video Thumbnail" 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
                  onError={(e) => { 
                    const fallbackSrc = "https://images.unsplash.com/photo-1510804364448-8984928236d8?auto=format&fit=crop&w=400&q=80";
                    if (e.currentTarget.src !== fallbackSrc) {
                      e.currentTarget.src = fallbackSrc;
                    }
                  }} 
                />
              </div>
              <div className="flex justify-between items-center mt-1 text-[10px] font-bold group-hover:text-neon transition-colors">
                <span>{dict.hero.watch}</span>
                <ArrowUpRight size={12} className="group-hover:rotate-45 transition-transform" />
              </div>
            </a>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-bold tracking-widest animate-bounce uppercase">
              {dict.hero.scroll}
            </div>
          </div>
        </section>

        {/* DESIGN Section */}
        <section id="design" className="py-24 px-6 bg-white">
          <h2 className="text-xs font-bold uppercase mb-12">{dict.design.title}</h2>
          
          <div className="space-y-32">
            {projectsData.map((project, index) => {
              const pData = project[lang];
              return (
                <React.Fragment key={project.id}>
                  {index === 3 && (
                    <div className="pt-16 pb-8">
                      <h2 className="text-xs font-bold uppercase">{dict.design.conceptTitle}</h2>
                    </div>
                  )}
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                  {/* Images */}
                  <div className={`grid grid-cols-2 gap-2 ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                    <Link to={`/project/${project.id}`} className="col-span-2 aspect-[4/3] bg-dark/5 overflow-hidden border border-dark shadow-[4px_4px_0px_0px_rgba(11,11,11,1)] group cursor-pointer relative block">
                      <img 
                        src={project.images[0]} 
                        alt={pData.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        onError={(e) => { 
                          const fallbackSrc = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=600";
                          if (e.currentTarget.src !== fallbackSrc) {
                            e.currentTarget.src = fallbackSrc;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="bg-white text-dark px-4 py-2 text-xs font-bold uppercase border border-dark shadow-[2px_2px_0px_0px_rgba(11,11,11,1)]">
                          {dict.design.viewDetails}
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 !== 0 ? 'md:col-start-1' : ''} space-y-8`}>
                    <div className="border border-dark p-6 shadow-[8px_8px_0px_0px_rgba(11,11,11,1)] bg-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-neon px-3 py-1 text-xs font-bold border-l border-b border-dark text-dark">
                        {project.year}
                      </div>
                      <h3 className="text-4xl font-bold uppercase tracking-tight mb-2 text-dark">{pData.title}</h3>
                      <p className="text-sm font-bold uppercase text-dark/60 mb-6">{pData.client}</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-xs mb-8">
                        <div>
                          <span className="block font-bold uppercase mb-1 text-dark/50">{dict.design.role}</span>
                          <span className="text-dark">{pData.role}</span>
                        </div>
                        <div>
                          <span className="block font-bold uppercase mb-1 text-dark/50">{dict.design.scope}</span>
                          <span className="text-dark">{pData.scope || pData.award}</span>
                        </div>
                      </div>

                      <div className="text-sm leading-relaxed mb-8 text-dark">
                        {pData.description}
                      </div>

                      <Link to={`/project/${project.id}`} className="inline-flex bg-neon text-dark px-6 py-3 rounded-full text-xs font-bold border border-dark items-center shadow-[2px_2px_0px_0px_rgba(11,11,11,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all uppercase">
                        {dict.design.viewCaseStudy} <ArrowUpRight size={14} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
                </React.Fragment>
              );
            })}
          </div>
        </section>

        {/* ART Section */}
        <section id="art" className="py-24 px-6 bg-white border-t border-dark">
          <h2 className="text-xs font-bold uppercase mb-12">{dict.art.title}</h2>
          <div className="text-sm">
            <span className="text-dark/50 mr-2">{lang === 'en' ? 'Personal Art Website:' : '个人艺术作品网站：'}</span>
            <a href="https://jinrongkuang.com" target="_blank" rel="noopener noreferrer" className="hover:text-neon transition-colors font-bold underline underline-offset-4">
              https://jinrongkuang.com
            </a>
          </div>
        </section>

        {/* ABOUT Section */}
        <section id="about" className="bg-neon border-t border-dark py-40 px-6 text-dark flex flex-col items-center justify-center min-h-[70vh]">
          <div className="text-center mb-40 w-full pt-12">
            <h2 className="text-[12vw] font-bold uppercase leading-none tracking-tighter m-0 inline-block text-dark">
              {lang === 'en' ? 'ABOUT' : '关于'}
            </h2>
          </div>
          
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-dark pt-32 pb-20">
            <div className="md:col-span-3 text-xs font-bold uppercase tracking-widest text-dark/60">
              {dict.about.bio}
            </div>
            <div className="md:col-span-3 text-xs font-bold uppercase tracking-widest">
              {dict.about.exp}
            </div>
            <div className="md:col-span-6 text-sm md:text-base leading-relaxed space-y-6 ">
              <p>{dict.about.p1}</p>
              <p>{dict.about.p2}</p>
              <p>{dict.about.p3}</p>
            </div>
          </div>
        </section>

        {/* Services & Awards Section */}
        <section className="bg-neon pb-40 px-6 text-dark">
          <div className="w-full max-w-7xl mx-auto">
            {/* Tools Section */}
            <div className="border-t border-dark py-20 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-xs font-bold uppercase tracking-widest text-dark/60">{dict.services.title}</div>
              <div className="md:col-span-3 text-sm space-y-10 uppercase tracking-wide">
                {dict.services.tools.map((tool, i) => (
                  <div key={i} className="group">
                    <div className="font-bold text-dark/40 mb-2 text-xs">{tool.category}</div>
                    <div className="font-bold text-dark transition-colors duration-300 group-hover:text-white group-hover:drop-shadow-[2px_2px_0px_rgba(11,11,11,1)]">{tool.items}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="border-t border-dark py-20 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-xs font-bold uppercase tracking-widest text-dark/60">{dict.services.awardsTitle}</div>
              <div className="md:col-span-3">
                <div className="hidden md:grid grid-cols-12 gap-4 text-xs font-bold uppercase mb-6 text-dark/40 tracking-wider">
                  <div className="col-span-3">{dict.services.project}</div>
                  <div className="col-span-4"></div>
                  <div className="col-span-3">{dict.services.role}</div>
                  <div className="col-span-2 text-right pr-4">{dict.services.award}</div>
                </div>
                <div className="border-t border-dark/10">
                  {dict.services.experiences.map((exp, i) => (
                    <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 text-sm py-5 border-b border-dark/10 last:border-0 hover:bg-dark hover:text-neon transition-all duration-300 uppercase px-4 -mx-4 rounded-lg cursor-default">
                      <div className="md:col-span-3 font-bold tracking-wide">{exp.company}</div>
                      <div className="md:col-span-4 opacity-60 md:opacity-100">{exp.type}</div>
                      <div className="md:col-span-3 font-bold md:font-normal">{exp.role}</div>
                      <div className="md:col-span-2 flex md:justify-end items-center md:pr-4 font-bold opacity-60 md:opacity-100 mt-2 md:mt-0">
                        {exp.period}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <a href="/CV.pdf" download className="bg-dark text-white px-5 py-3 rounded-full text-xs font-bold flex items-center hover:bg-dark/90 transition-colors shadow-xl uppercase">
          {dict.cta}
        </a>
      </div>

    </div>
  );
}