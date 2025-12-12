import { motion } from "framer-motion";
import { ArrowRight, Check, Star, Zap, Layout, Palette, Globe, Smartphone, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Navigation
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-slate-100 rounded-sm flex items-center justify-center text-slate-700 font-serif font-bold text-xl">
            S
          </div>
          <div className="leading-tight">
            <div className="text-xs uppercase tracking-widest text-slate-500 font-medium">Studio</div>
            <div className="font-serif font-bold text-lg text-slate-900">Branding Premium</div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#packages" className="hover:text-slate-900 transition-colors">Pacotes</a>
          <a href="#process" className="hover:text-slate-900 transition-colors">Processo</a>
          <a href="#portfolio" className="hover:text-slate-900 transition-colors">Portfólio</a>
          <Button asChild variant="default" className="ml-4">
            <a href="#contact">Contato</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-slate-50 text-slate-600 text-xs font-semibold tracking-wider uppercase mb-6 border border-slate-100">
              Identidade Visual & Estratégia
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-slate-900 leading-[1.1] mb-8">
              Branding Premium para negócios que <span className="italic text-slate-700">pensam grande.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
              Uma identidade visual impecável, clara e sofisticada — criada para elevar sua marca, aumentar autoridade e atrair clientes de maior valor.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-14 px-8 text-base rounded-md w-full sm:w-auto" asChild>
                <a href="#contact">
                  Quero elevar minha marca <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-md w-full sm:w-auto" asChild>
                <a href="#packages">
                  Ver pacotes
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-full w-full pointer-events-none" />
          <img 
            src="https://res.cloudinary.com/dfbsag282/image/upload/v1765043452/Pack_imob_xo0kc5.png" 
            alt="Branding Mockup" 
            className="w-full h-auto rounded-xl shadow-2xl border border-slate-100"
          />
        </motion.div>
      </div>
    </section>
  );
};

// Features / Philosophy
const Features = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-medium mb-6">Muito além de um logotipo.</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Branding Premium é a construção de um sistema visual completo — pensado para comunicar valor, confiança e identidade em cada ponto de contato. Não entregamos apenas "artes", entregamos posicionamento.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Percepção imediata de profissionalismo",
                "Posicionamento claro no mercado",
                "Comunicação visual consistente",
                "Atração de clientes qualificados"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-slate-100"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
              Benefícios Reais
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 text-slate-900">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Valor Percebido</h4>
                  <p className="text-sm text-slate-500 mt-1">Eleva instantaneamente o preço que seu cliente está disposto a pagar.</p>
                </div>
              </div>
              <Separator />
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 text-slate-900">
                  <Layout className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Consistência</h4>
                  <p className="text-sm text-slate-500 mt-1">Entrega clareza visual em todos os canais, do Instagram ao site.</p>
                </div>
              </div>
              <Separator />
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 text-slate-900">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Confiança</h4>
                  <p className="text-sm text-slate-500 mt-1">Design profissional gera credibilidade imediata para quem visita.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Packages
const Packages = () => {
  const packages = [
    {
      name: "BRANDING ESSENTIAL",
      tag: "Essencial",
      desc: "Identidade visual refinada e bem estruturada — base perfeita para começar.",
      features: [
        "Identidade Visual completa",
        "Logo Principal + Variações",
        "Paleta de Cores e Tipografia",
        "Construção Conceitual",
        "1 Peça de Aplicação (ex: cartão)",
        "Mini Manual da Marca"
      ],
      cta: "Quero o Essential",
      featured: false,
    },
    {
      name: "BRANDING PRO",
      tag: "Profissional",
      desc: "Identidade + presença digital profissional para negócios que desejam ir além.",
      features: [
        "Tudo do pacote Essential",
        "Modernização de Instagram (Destaques + Feed)",
        "BIO Otimizada com CTA",
        "Mini Site Profissional (Linktree style)",
        "3 Artes Premium para Feed",
        "Manual de Marca Intermediário"
      ],
      cta: "Quero o Pro",
      featured: true,
    },
    {
      name: "BRANDING ULTRA",
      tag: "Transformação",
      desc: "Transformação completa com presença digital plena e performance.",
      features: [
        "Tudo do pacote Pro",
        "Site Institucional Premium (One Page)",
        "Cartão Digital Interativo/Imersivo",
        "Pack de 10 Artes Editáveis",
        "Brandbook Completo",
        "Consultoria de Implantação"
      ],
      cta: "Quero Transformação",
      featured: false,
    }
  ];

  return (
    <section id="packages" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Elements for Glassmorphism Context */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate-200/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-medium mb-4 text-slate-900">Escolha o nível ideal</h2>
          <p className="text-slate-600 text-lg">
            Pacotes pensados para diferentes momentos de negócio — todos com foco absoluto em resultado e estética premium.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 group
                ${pkg.featured 
                  ? 'bg-slate-900/90 backdrop-blur-xl border-slate-700 shadow-2xl shadow-slate-900/20 text-white ring-1 ring-white/10' 
                  : 'bg-white/60 backdrop-blur-xl border-white/50 shadow-xl shadow-slate-200/50 text-slate-900 hover:bg-white/80 hover:shadow-2xl hover:shadow-slate-200/80 hover:border-white/80'
                }
              `}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-blue-500/30">
                  Mais Popular
                </div>
              )}
              
              <div className={`text-sm font-medium mb-4 tracking-wide uppercase ${pkg.featured ? 'text-blue-300' : 'text-blue-600'}`}>
                {pkg.tag}
              </div>
              <h3 className="text-3xl font-bold mb-4 font-serif">{pkg.name}</h3>
              <p className={`text-sm mb-8 leading-relaxed ${pkg.featured ? 'text-slate-300' : 'text-slate-600'}`}>
                {pkg.desc}
              </p>
              
              <div className="flex-1 space-y-4 mb-10">
                {pkg.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <div className={`mt-0.5 rounded-full p-0.5 ${pkg.featured ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-600'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className={pkg.featured ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                asChild 
                className={`w-full h-14 text-base font-medium rounded-xl transition-all duration-300 shadow-lg
                  ${pkg.featured 
                    ? 'bg-white text-slate-900 hover:bg-blue-50 hover:scale-[1.02] shadow-white/10' 
                    : 'bg-slate-900 text-white hover:bg-slate-800 hover:scale-[1.02] shadow-slate-900/20'
                  }
                `}
                variant={pkg.featured ? "secondary" : "default"}
              >
                <a href={`https://wa.me/55999999999?text=Olá, tenho interesse no pacote ${pkg.name}`}>
                  {pkg.cta} <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Comparison Table
const ComparisonTable = () => {
  return (
    <section className="py-12 bg-white hidden md:block">
      <div className="container mx-auto px-6 max-w-5xl">
        <h3 className="text-xl font-serif font-medium text-center mb-10">Comparativo Rápido</h3>
        <div className="overflow-hidden border border-slate-200 rounded-xl">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-900 font-serif">
              <tr>
                <th className="p-5 font-medium">Itens Inclusos</th>
                <th className="p-5 font-medium text-center">Essential</th>
                <th className="p-5 font-medium text-center bg-slate-100">Pro</th>
                <th className="p-5 font-medium text-center">Ultra</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                ["Identidade Visual Completa", true, true, true],
                ["Paleta & Tipografia", true, true, true],
                ["Instagram Modernizado", false, true, true],
                ["Mini Site / Linktree", false, true, true],
                ["Pack de Artes", "0", "3 Artes", "10 Artes"],
                ["Cartão Digital Interativo", false, false, true],
                ["Brandbook / Manual", "Básico", "Intermediário", "Completo"],
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-5 font-medium text-slate-700">{row[0]}</td>
                  <td className="p-5 text-center text-slate-600">
                    {typeof row[1] === 'boolean' ? (row[1] ? <Check className="w-5 h-5 mx-auto text-slate-900" /> : "—") : row[1]}
                  </td>
                  <td className="p-5 text-center text-slate-600 bg-slate-50/50 font-medium">
                    {typeof row[2] === 'boolean' ? (row[2] ? <Check className="w-5 h-5 mx-auto text-slate-900" /> : "—") : row[2]}
                  </td>
                  <td className="p-5 text-center text-slate-600">
                    {typeof row[3] === 'boolean' ? (row[3] ? <Check className="w-5 h-5 mx-auto text-slate-900" /> : "—") : row[3]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// Process
const Process = () => {
  return (
    <section id="process" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Nosso Processo</h2>
          <p className="text-slate-400">Clareza, velocidade e direção criativa.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              step: "01",
              title: "Diagnóstico",
              desc: "Mergulhamos no seu negócio para entender público, objetivos e essência.",
              icon: <BookOpen className="w-6 h-6" />
            },
            {
              step: "02",
              title: "Direção Criativa",
              desc: "Desenvolvemos o conceito, o tom de voz e a personalidade visual da marca.",
              icon: <Palette className="w-6 h-6" />
            },
            {
              step: "03",
              title: "Entrega & Guia",
              desc: "Você recebe todos os arquivos prontos e um manual de como usá-los.",
              icon: <Layout className="w-6 h-6" />
            }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
              <div className="text-4xl font-serif font-bold text-slate-700 mb-6 opacity-30">{item.step}</div>
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 text-white">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Portfolio Placeholder
const Portfolio = () => {
  const portfolioItems = [
    { 
      id: 1, 
      title: "Natalia Marchan", 
      category: "Corretora de Imóveis", 
      image: "https://res.cloudinary.com/dfbsag282/image/upload/v1764882204/Loco_corretora_ueqric.png" 
    },
    { 
      id: 2, 
      title: "Lucas Guimarães", 
      category: "Negócios Imobiliários", 
      image: "https://res.cloudinary.com/dfbsag282/image/upload/v1764859212/Logo-imobili%C3%A1ria_jhphcg.png" 
    },
    { 
      id: 3, 
      title: "Paulucy", 
      category: "Negócios Imobiliários", 
      image: "https://res.cloudinary.com/dfbsag282/image/upload/v1764860009/Luxury_gjhgs2.png" 
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-medium text-center mb-16">Trabalhos Selecionados</h2>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative aspect-[3/4] bg-slate-50 rounded-lg overflow-hidden cursor-pointer border border-slate-100">
               <img 
                 src={item.image} 
                 alt={item.title}
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/60 transition-all duration-300 flex items-end p-6">
                 <div className="text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                   <div className="font-serif text-lg">{item.title}</div>
                   <div className="text-xs text-slate-300">{item.category}</div>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer id="contact" className="py-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-serif font-bold text-xl text-slate-900">Studio Premium</div>
          <div className="text-sm text-slate-500 mt-1">© 2025 Todos os direitos reservados.</div>
        </div>
        
        <div className="flex items-center gap-6">
           <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Instagram</a>
           <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Whatsapp</a>
           <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

// WhatsApp Floating Button
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5571991261474"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Fale conosco no WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 md:w-8 md:h-8"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      {/* Tooltip-like text on hover */}
      <span className="absolute right-full mr-4 bg-white text-slate-900 px-3 py-1.5 rounded-lg shadow-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block border border-slate-100">
        Fale Conosco
      </span>
    </a>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Packages />
      <ComparisonTable />
      <Process />
      <Portfolio />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
