import React from 'react';
import { CHARACTER_DATA } from './constants';
import RainEffect from './components/RainEffect';
import Section from './components/Section';
import RedactedBlock from './components/RedactedBlock';

// Simple icon components
const QuoteIcon = () => (
  <svg className="w-10 h-10 text-gold-dim opacity-40 mb-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21L14.017 18C14.017 16.896 14.389 15.954 15.133 15.175C15.877 14.396 16.924 14.006 18.274 14.006V8C18.274 8.012 18.293 8.018 18.331 8.018C18.736 8.018 19.122 8.163 19.49 8.453C19.858 8.743 20.042 9.245 20.042 9.96V12.982C20.042 14.618 19.664 16.035 18.908 17.234C18.152 18.433 17.153 19.539 15.912 20.552L14.017 21ZM5 21L5 18C5 16.896 5.372 15.954 6.116 15.175C6.86 14.396 7.907 14.006 9.257 14.006V8C9.257 8.012 9.276 8.018 9.314 8.018C9.719 8.018 10.105 8.163 10.473 8.453C10.841 8.743 11.025 9.245 11.025 9.96V12.982C11.025 14.618 10.647 16.035 9.891 17.234C9.135 18.433 8.136 19.539 6.895 20.552L5 21Z" />
  </svg>
);

function App() {
  const { name, quote, basicInfo, appearance, personality, background, relationships, dialogue, others } = CHARACTER_DATA;

  return (
    <div className="relative min-h-screen bg-noir-black text-zinc-300 font-sans selection:bg-red-900 selection:text-white">
      {/* Visual Rain Effect preserved */}
      <RainEffect />
      
      {/* Content Container */}
      <main className="relative z-10 max-w-2xl mx-auto px-6 py-24 md:py-40 flex flex-col gap-32">
        
        {/* HERO SECTION */}
        <Section className="flex flex-col items-center text-center space-y-12">
          <div className="relative w-72 h-[450px] md:w-96 md:h-[600px] overflow-hidden rounded-sm shadow-2xl shadow-black border border-zinc-800 group">
             {/* External Image URL */}
             <img 
              src="https://raw.githubusercontent.com/moon06010/1/refs/heads/main/4.png" 
              alt={name.ko} 
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-noir-black via-transparent to-transparent opacity-60" />
             {/* Hanja Name - fainter opacity as requested (30) */}
             <div className="absolute bottom-6 right-6 writing-vertical-rl text-5xl md:text-7xl font-serif text-white/30 tracking-widest drop-shadow-md">
                {name.hanja}
             </div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-zinc-100 tracking-widest">
              {name.ko}
            </h1>
            <div className="h-px w-32 bg-red-900 mx-auto opacity-60" />
            <p className="text-base tracking-[0.3em] text-gold-dim uppercase">
              {basicInfo.job}
            </p>
          </div>

          <div className="max-w-lg mx-auto relative pt-10 pb-6">
             <div className="absolute top-0 left-1/2 -translate-x-1/2">
               <QuoteIcon />
             </div>
             {/* respects newline in quote text */}
             <p className="font-serif text-2xl md:text-3xl text-zinc-400 leading-relaxed italic whitespace-pre-line">
               {quote.text}
             </p>
             <p className="text-sm text-zinc-600 mt-6 text-right">
               ― {quote.source}
             </p>
          </div>
        </Section>

        {/* BASIC INFO GRID */}
        <Section>
           <h2 className="text-sm font-bold text-red-900/70 tracking-widest uppercase mb-8 border-b border-zinc-900 pb-3">
             Profile Data
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 text-base">
             {[
               ['Code Name', name.hanja],
               ['Age', basicInfo.age],
               ['Birth', basicInfo.birth],
               ['Nationality', basicInfo.nationality],
               ['Physique', basicInfo.physique],
               ['Scent', appearance.perfume]
             ].map(([label, value]) => (
               <div key={label} className="flex flex-col gap-2">
                 <span className="text-zinc-600 uppercase text-xs tracking-wider">{label}</span>
                 <span className="text-zinc-300 font-light border-l border-zinc-800 pl-4">{value}</span>
               </div>
             ))}
           </div>
        </Section>

        {/* APPEARANCE & ATTIRE */}
        <Section>
           <h2 className="text-sm font-bold text-red-900/70 tracking-widest uppercase mb-8 border-b border-zinc-900 pb-3">
             Visual Identification
           </h2>
           <div className="space-y-10">
              <div>
                <h3 className="text-gold-dim/70 font-serif mb-3 text-lg">Appearance</h3>
                {/* dot list style as requested */}
                <ul className="text-base text-zinc-400 font-light space-y-2 list-none">
                  {appearance.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-zinc-700 mt-2 w-1 h-1 bg-zinc-700 rounded-full shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                   <h3 className="text-gold-dim/70 font-serif mb-3 text-lg">Attire</h3>
                   {/* dot list style */}
                   <ul className="text-base text-zinc-500 font-light space-y-2 list-none">
                     {appearance.attire.map((item, idx) => (
                       <li key={idx} className="flex items-start gap-2">
                         <span className="text-zinc-700 mt-2 w-1 h-1 bg-zinc-700 rounded-full shrink-0"></span>
                         {item}
                       </li>
                     ))}
                   </ul>
                </div>
                <div>
                   <h3 className="text-gold-dim/70 font-serif mb-3 text-lg">Inventory</h3>
                   {/* dot list style */}
                   <ul className="text-base text-zinc-500 font-light space-y-2 list-none">
                     {appearance.items.map((item, idx) => (
                       <li key={idx} className="flex items-start gap-2">
                         <span className="text-zinc-700 mt-2 w-1 h-1 bg-zinc-700 rounded-full shrink-0"></span>
                         {item}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
           </div>
        </Section>

        {/* BACKGROUND - NOIR STYLE */}
        <Section className="bg-zinc-900/20 p-8 md:p-10 border-l-2 border-zinc-800">
           <h2 className="text-2xl font-serif text-zinc-200 mb-6">Background Record</h2>
           <p className="text-zinc-500 text-sm mb-8 uppercase tracking-wider">
             {background.world}
           </p>
           
           <div className="space-y-8 relative">
              <div className="absolute left-0 top-3 bottom-3 w-px bg-zinc-800" />
              {background.history.map((hist, i) => (
                <div key={i} className="relative pl-8">
                   <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-700 border-2 border-noir-black" />
                   <p className="text-base text-zinc-400 leading-relaxed font-light">
                     {hist}
                   </p>
                </div>
              ))}
           </div>
        </Section>

        {/* PERSONALITY TRAITS */}
        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold text-red-900/70 tracking-widest uppercase mb-6">Psychological Profile</h2>
              <div className="flex flex-wrap gap-3 mb-8">
                {personality.keywords.map(k => (
                  <span key={k} className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-sm text-zinc-500">
                    {k}
                  </span>
                ))}
              </div>
              <div className="text-base space-y-6 text-zinc-400">
                 <p><strong className="text-zinc-600">MBTI:</strong> {personality.mbti}</p>
                 <p><strong className="text-zinc-600">Enneagram:</strong> {personality.enneagram}</p>
                 <div className="pt-4">
                    <strong className="text-zinc-600 block mb-2">Habits</strong>
                    <ul className="list-disc list-inside text-zinc-500 font-light text-sm space-y-2">
                      {personality.habits.map(h => <li key={h}>{h}</li>)}
                    </ul>
                 </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xs text-zinc-500 uppercase tracking-widest mb-3">Preferences</h3>
                <div className="text-base font-light space-y-5">
                  <div>
                    <span className="text-green-900/60 mr-3 text-xs font-bold">LIKES</span>
                    <span className="text-zinc-400 block mt-1">{personality.likes.join(', ')}</span>
                  </div>
                  <div>
                    <span className="text-red-900/60 mr-3 text-xs font-bold">DISLIKES</span>
                    <span className="text-zinc-400 block mt-1">{personality.dislikes.join(', ')}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xs text-zinc-500 uppercase tracking-widest mb-3">Misc. Traits</h3>
                 <ul className="text-sm text-zinc-400 font-light space-y-2 list-none">
                    {others.map((trait, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-zinc-700 mt-1.5 w-1 h-1 bg-zinc-700 rounded-full shrink-0"></span>
                        {trait}
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* RELATIONSHIPS */}
        <Section>
           <h2 className="text-sm font-bold text-red-900/70 tracking-widest uppercase mb-8 border-b border-zinc-900 pb-3">
             Known Associates
           </h2>
           <div className="grid grid-cols-1 gap-6">
              {relationships.npcs.map(npc => (
                <div key={npc.name} className="flex flex-col md:flex-row md:items-start gap-3 p-6 bg-zinc-900/30 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                  <span className="text-gold-dim font-serif text-base w-48 shrink-0">{npc.name}</span>
                  <span className="text-zinc-500 text-sm font-light leading-relaxed">{npc.desc}</span>
                </div>
              ))}
           </div>
        </Section>

        {/* DIALOGUE */}
        <Section>
           <h2 className="text-sm font-bold text-red-900/70 tracking-widest uppercase mb-8 border-b border-zinc-900 pb-3">
             Audio Logs
           </h2>
           <div className="mb-8 text-sm text-zinc-500 space-y-2">
             <p><span className="text-zinc-600 uppercase text-xs tracking-wider mr-2">Voice Analysis:</span> {dialogue.voice}</p>
             <p><span className="text-zinc-600 uppercase text-xs tracking-wider mr-2">Tone:</span> {dialogue.tone}</p>
           </div>
           <div className="space-y-10">
             {dialogue.examples.map((d, i) => (
               <div key={i} className="group">
                 <p className="text-xs text-zinc-600 uppercase mb-2 tracking-wider group-hover:text-red-900 transition-colors">
                   To: {d.situation}
                 </p>
                 <blockquote className="border-l-2 border-zinc-800 pl-6 py-2 text-xl text-zinc-300 font-serif italic opacity-80 group-hover:opacity-100 group-hover:border-zinc-600 transition-all">
                   {d.line}
                 </blockquote>
               </div>
             ))}
           </div>
        </Section>

        {/* SECRET SECTION - REDACTED */}
        <Section className="py-16 border-t border-red-900/20 mt-16 relative overflow-hidden">
           <div className="absolute inset-0 bg-red-950/5 pointer-events-none" />
           <div className="relative z-10">
             <div className="flex items-center gap-4 mb-10">
               <div className="w-2.5 h-2.5 bg-red-700 rounded-full animate-pulse" />
               <h2 className="text-base font-bold text-red-800 tracking-[0.3em] uppercase">
                 Classified Information
               </h2>
             </div>
             
             <div className="grid grid-cols-1 gap-4">
                <RedactedBlock label="Family Origin" />
                <RedactedBlock label="Incident Report #1980" />
                <RedactedBlock label="Psych Evaluation: Hidden Desire" />
                <RedactedBlock label="Case File: Beon Soo-ah" />
             </div>

             <p className="text-center text-xs text-zinc-700 mt-12 font-mono">
               SECURITY LEVEL 5 REQUIRED. UNAUTHORIZED ACCESS ATTEMPT LOGGED.
             </p>
           </div>
        </Section>
        
        <footer className="text-center pb-12 pt-32 opacity-30">
          <p className="text-xs uppercase tracking-widest text-zinc-500">
            End of File
          </p>
        </footer>

      </main>
    </div>
  );
}

export default App;