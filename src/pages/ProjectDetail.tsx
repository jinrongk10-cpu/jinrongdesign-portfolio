import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Globe, PlayCircle } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { projectsData } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { lang, toggleLang } = useAppStore();

  const project = projectsData.find((p) => String(p.id) === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white font-mono text-dark">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="mb-8 uppercase">Project not found</p>
          <Link to="/" className="inline-flex bg-neon text-dark px-6 py-3 rounded-full text-xs font-bold border border-dark items-center shadow-[2px_2px_0px_0px_rgba(11,11,11,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all uppercase">
            <ArrowLeft size={14} className="mr-2" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const pData = project[lang];
  const isDark = project.theme === 'dark';

  // ========== Snap Scroll Mode ==========
  if (project.snapScroll && pData.sections) {
    return (
      <div className={`h-screen w-full overflow-y-auto snap-y snap-mandatory font-mono ${isDark ? 'bg-[#0a0a0a] text-white selection:bg-neon selection:text-black' : 'bg-white text-dark selection:bg-neon selection:text-dark'}`}>
        
        {/* Navigation */}
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 mix-blend-difference text-white`}>
          <Link to="/" className="font-bold tracking-tight uppercase text-sm hover:opacity-70 transition-opacity flex items-center">
            <ArrowLeft size={16} className="mr-2" /> [BACK]
          </Link>
          <div className="font-bold tracking-tight uppercase text-sm">
            [JINRONG KUANG]
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleLang}
              className="px-3 py-1 rounded-full text-xs font-bold border border-white/20 flex items-center hover:bg-white hover:text-black transition-all cursor-pointer"
            >
              <Globe size={14} className="mr-1.5" />
              {lang === 'en' ? '中 / EN' : 'EN / 中'}
            </button>
          </div>
        </nav>

        {/* Snap Sections */}
        <main className="w-full">
          {/* Section 0: Header/Hero */}
          <section className="h-screen w-full snap-start flex flex-col justify-center px-6 md:px-24 relative">
            <div className="max-w-6xl w-full mx-auto z-10">
              <div className="flex items-center gap-4 mb-6">
                <span className={`bg-neon px-3 py-1 text-xs font-bold text-dark`}>
                  {project.year}
                </span>
                <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-white/60' : 'text-dark/60'}`}>
                  {pData.client}
                </span>
              </div>
              <h1 className="text-6xl md:text-[8vw] font-bold uppercase tracking-tighter mb-8 leading-none">
                {pData.title}
              </h1>
              <div className="w-full md:w-2/3 text-lg md:text-xl leading-relaxed opacity-80 mb-12 whitespace-pre-line">
                {pData.description}
              </div>
              <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 border-t pt-8 ${isDark ? 'border-white/20' : 'border-dark'}`}>
                <div>
                  <span className={`block text-xs font-bold uppercase mb-2 ${isDark ? 'text-white/50' : 'text-dark/50'}`}>{lang === 'en' ? 'ROLE' : '角色'}</span>
                  <span className="text-sm font-bold uppercase">{pData.role}</span>
                </div>
                <div>
                  <span className={`block text-xs font-bold uppercase mb-2 ${isDark ? 'text-white/50' : 'text-dark/50'}`}>{lang === 'en' ? 'SCOPE' : '项目范围'}</span>
                  <span className="text-sm font-bold uppercase">{pData.scope}</span>
                </div>
              </div>
            </div>
            {/* Optional Background Image for Hero */}
            {project.heroImage && (
              <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none" style={{ background: `url(${project.heroImage}) center/cover no-repeat` }}></div>
            )}
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-bold tracking-widest animate-bounce uppercase opacity-50">
              SCROLL ↓
            </div>
          </section>

          {/* Dynamic Sections */}
          {pData.sections.map((sec, idx) => {
            // Determine which image to use based on language and availability
            const currentImage = (lang === 'zh' && sec.imageZh) ? sec.imageZh : sec.image;

            return (
            <section key={sec.id} className="h-screen w-full snap-start flex items-center justify-center px-6 md:px-12 relative overflow-hidden">
              <div className="max-w-7xl w-full mx-auto h-full flex flex-col justify-center py-20">
                
                {sec.layout === 'full-image' && (
                  <div className="w-full h-full flex flex-col items-center justify-center relative">
                    {currentImage && (
                      <div className="w-full h-full flex items-center justify-center relative">
                        <img src={currentImage} alt={sec.title || 'Project Detail'} className="max-w-full max-h-full object-contain shadow-2xl" />
                        
                        {/* Video Link Overlay */}
                        {sec.videoUrl && (
                          <a 
                            href={sec.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm uppercase transition-all shadow-xl hover:scale-105 ${isDark ? 'bg-white text-dark hover:bg-neon' : 'bg-dark text-white hover:bg-neon hover:text-dark'}`}
                          >
                            <PlayCircle size={18} />
                            {lang === 'en' ? 'Watch Video' : '观看视频'}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {sec.layout === 'text-left-image-right' && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center h-full max-h-screen py-24">
                    <div className="md:col-span-4 flex flex-col justify-center max-h-full overflow-y-auto pr-4 scrollbar-hide">
                      {sec.title && <h2 className="text-xl md:text-3xl font-bold mb-4 uppercase">{sec.title}</h2>}
                      {sec.textLeft && (
                        <div className="text-sm md:text-base leading-relaxed opacity-80 whitespace-pre-line mb-6">
                          {sec.textLeft}
                        </div>
                      )}
                      {sec.list && sec.list.length > 0 && (
                        <div className="space-y-4">
                          {sec.list.map((item, i) => (
                            <div key={i}>
                              <h3 className="font-bold text-xs uppercase mb-1">{item.title}</h3>
                              <p className="text-xs opacity-70 leading-relaxed">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="md:col-span-8 h-[50vh] md:h-[80vh] flex items-center justify-center">
                      {currentImage && (
                        <img src={currentImage} alt={sec.title || 'Project Detail'} className="max-w-full max-h-full object-contain shadow-2xl" />
                      )}
                    </div>
                  </div>
                )}

                {sec.layout === 'image-center-text-sides' && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
                    <div className="hidden md:flex md:col-span-3 flex-col justify-center text-right pr-4">
                      {sec.textLeft && <p className="text-sm md:text-base leading-relaxed opacity-80">{sec.textLeft}</p>}
                    </div>
                    <div className="md:col-span-6 h-[50vh] md:h-[70vh] flex flex-col items-center justify-center text-center">
                      {sec.title && <h2 className="text-2xl md:text-4xl font-bold mb-8 uppercase">{sec.title}</h2>}
                      {currentImage && (
                        <img src={currentImage} alt={sec.title || 'Project Detail'} className="max-w-full max-h-full object-contain shadow-2xl" />
                      )}
                      {/* Mobile text fallback */}
                      <div className="md:hidden mt-6 text-sm opacity-80">
                        {sec.textLeft} {sec.textRight}
                      </div>
                    </div>
                    <div className="hidden md:flex md:col-span-3 flex-col justify-center pl-4">
                      {sec.textRight && <p className="text-sm md:text-base leading-relaxed opacity-80">{sec.textRight}</p>}
                    </div>
                  </div>
                )}

              </div>
            </section>
          )})}

          {/* Footer Section */}
          <section className="h-screen w-full snap-start flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold uppercase mb-12">NEXT PROJECT</h2>
              <Link to="/" className={`inline-flex bg-neon text-dark px-8 py-4 rounded-full text-sm font-bold items-center transition-all uppercase hover:scale-105`}>
                <ArrowLeft size={16} className="mr-2" /> {lang === 'en' ? 'BACK TO ALL PROJECTS' : '返回所有项目'}
              </Link>
            </div>
          </section>
        </main>
      </div>
    );
  }
  // ========== End Snap Scroll Mode ==========

  return (
    <div className={`min-h-screen font-mono selection:bg-neon ${isDark ? 'bg-[#0a0a0a] text-white selection:text-black' : 'bg-white text-dark selection:text-dark'}`}>
      {/* Background Dots */}
      <div className="fixed inset-0 pointer-events-none bg-dots bg-dots-size opacity-50 z-0"></div>

      {/* Navigation */}
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 mix-blend-difference text-white`}>
          <Link to="/" className="font-bold tracking-tight uppercase text-sm hover:opacity-70 transition-opacity flex items-center">
            <ArrowLeft size={16} className="mr-2" /> [BACK]
          </Link>
          <div className="font-bold tracking-tight uppercase text-sm">
            [JINRONG KUANG]
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleLang}
              className="px-3 py-1 rounded-full text-xs font-bold border border-white/20 flex items-center hover:bg-white hover:text-black transition-all cursor-pointer"
            >
              <Globe size={14} className="mr-1.5" />
              {lang === 'en' ? '中 / EN' : 'EN / 中'}
            </button>
          </div>
        </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-24 px-6 max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className={`bg-neon px-3 py-1 text-xs font-bold ${isDark ? 'text-dark' : 'border border-dark text-dark'}`}>
              {project.year}
            </span>
            <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-white/60' : 'text-dark/60'}`}>
              {pData.client}
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-12 leading-none">
            {pData.title}
          </h1>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 border-t pt-8 ${isDark ? 'border-white/20' : 'border-dark'}`}>
            <div>
              <span className={`block text-xs font-bold uppercase mb-2 ${isDark ? 'text-white/50' : 'text-dark/50'}`}>{lang === 'en' ? 'ROLE' : '角色'}</span>
              <span className="text-sm font-bold uppercase">{pData.role}</span>
            </div>
            <div>
              <span className={`block text-xs font-bold uppercase mb-2 ${isDark ? 'text-white/50' : 'text-dark/50'}`}>{lang === 'en' ? 'SCOPE' : '项目范围'}</span>
              <span className="text-sm font-bold uppercase">{pData.scope}</span>
            </div>
            {pData.award && (
              <div>
                <span className={`block text-xs font-bold uppercase mb-2 ${isDark ? 'text-white/50' : 'text-dark/50'}`}>{lang === 'en' ? 'AWARD' : '奖项'}</span>
                <span className="text-sm font-bold uppercase">{pData.award}</span>
              </div>
            )}
          </div>
        </header>

        {/* Hero Image */}
        <div className={`w-full aspect-video bg-dark/5 mb-16 md:mb-24 border ${isDark ? 'border-white/20' : 'border-dark shadow-[8px_8px_0px_0px_rgba(11,11,11,1)]'} overflow-hidden`}>
          <img 
            src={project.heroImage || project.images[0]} 
            alt={pData.title} 
            className="w-full h-full object-cover"
            onError={(e) => { 
              const fallbackSrc = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200";
              if (e.currentTarget.src !== fallbackSrc) {
                e.currentTarget.src = fallbackSrc;
              }
            }}
          />
        </div>

        {/* Description Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-4">
            <h2 className="text-xl font-bold uppercase mb-4">{lang === 'en' ? 'OVERVIEW' : '项目概述'}</h2>
          </div>
          <div className="md:col-span-8 text-base md:text-lg leading-relaxed opacity-80">
            <p className="mb-8">{pData.description}</p>
          </div>
        </section>

        {/* Challenge & Solution */}
        {(pData.challenge || pData.solution) && (
          <section className={`grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 border-t pt-16 ${isDark ? 'border-white/20' : 'border-dark'}`}>
            {pData.challenge && (
              <div>
                <h3 className={`text-sm font-bold uppercase mb-6 ${isDark ? 'text-white/50' : 'text-dark/50'}`}>{lang === 'en' ? 'THE CHALLENGE' : '挑战'}</h3>
                <p className="text-base leading-relaxed opacity-80">{pData.challenge}</p>
              </div>
            )}
            {pData.solution && (
              <div>
                <h3 className={`text-sm font-bold uppercase mb-6 ${isDark ? 'text-white/50' : 'text-dark/50'}`}>{lang === 'en' ? 'THE SOLUTION' : '解决方案'}</h3>
                <p className="text-base leading-relaxed opacity-80">{pData.solution}</p>
              </div>
            )}
          </section>
        )}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="space-y-8 md:space-y-16">
            {project.gallery.map((img, idx) => {
              // 预先生成一个确定的备用图片 URL，防止 onError 中不断触发状态更新
              const fallbackSrc = `https://images.unsplash.com/photo-${1500000000000 + idx}?auto=format&fit=crop&q=80&w=1200`;
              
              return (
                <div key={idx} className={`w-full bg-dark/5 border ${isDark ? 'border-white/20' : 'border-dark shadow-[8px_8px_0px_0px_rgba(11,11,11,1)]'} overflow-hidden`}>
                  <img 
                    src={img} 
                    alt={`${pData.title} detail ${idx + 1}`} 
                    className="w-full h-auto"
                    onError={(e) => { 
                      // 只有当当前 src 不是备用 URL 时才替换，防止无限循环
                      if (e.currentTarget.src !== fallbackSrc) {
                        e.currentTarget.src = fallbackSrc;
                      }
                    }}
                  />
                </div>
              );
            })}
          </section>
        )}

        {/* Footer Navigation */}
        <div className={`mt-32 pt-12 border-t flex justify-center ${isDark ? 'border-white/20' : 'border-dark'}`}>
          <Link to="/" className={`inline-flex bg-neon text-dark px-8 py-4 rounded-full text-sm font-bold border border-transparent items-center hover:scale-105 transition-all uppercase`}>
            <ArrowLeft size={16} className="mr-2" /> {lang === 'en' ? 'BACK TO ALL PROJECTS' : '返回所有项目'}
          </Link>
        </div>
      </main>
    </div>
  );
}
