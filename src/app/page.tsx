"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, MapPin, Clock, Phone, Flame, Utensils, Star, Info, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [recheioSelecionado, setRecheioSelecionado] = useState('');
  
  const semRecheioLink = "https://pay.cakto.com.br/5yAku29";
  const comRecheioBaseLink = "https://pay.cakto.com.br/4vA9JZw";

  const handleComprarComRecheio = () => {
    if (!recheioSelecionado) {
      alert("Por favor, selecione um recheio antes de comprar.");
      return;
    }
    const url = `${comRecheioBaseLink}?utm_content=${encodeURIComponent(recheioSelecionado)}`;
    window.open(url, '_blank');
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-[#110e0d] font-sans text-stone-200 selection:bg-[#d9381e] selection:text-white">
      
      {/* HEADER */}
      <header className="fixed w-full top-0 z-50 bg-[#110e0d]/80 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              <Flame className="text-[#110e0d]" size={22} strokeWidth={2.5} />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white">POLY<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">ASSADOS</span></h1>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            href="#cardapio" 
            className="hidden md:flex bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all border border-white/10 backdrop-blur-sm"
          >
            Fazer Pedido
          </motion.a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/fundo_brasa.jpg" 
            alt="Fundo Brasa" 
            fill 
            className="object-cover opacity-60 mix-blend-screen scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#110e0d] via-transparent to-[#110e0d] opacity-90"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,#110e0d_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center mt-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.span variants={fadeUp} className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-stone-200 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-white/10">
              <Star size={14} className="text-yellow-500 fill-yellow-500" /> 
              O Melhor de Santo Antônio
            </motion.span>
            
            <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] text-white">
              O Frango Mais <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600">
                  Suculento
                </span>
                <div className="absolute -inset-2 bg-orange-500/20 blur-2xl z-0"></div>
              </span> da Cidade.
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Assado no ponto perfeito, com tempero especial da casa. Peça agora e receba quentinho no conforto do seu lar!
            </motion.p>
            
            <motion.a 
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#cardapio" 
              className="group relative inline-flex items-center justify-center gap-3 bg-[#d9381e] text-white px-10 py-5 rounded-full font-bold text-lg overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2">
                Ver Cardápio <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="py-16 relative z-20 -mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: MapPin, title: "Localização", desc: "Parque Estrela Dalva XI, Qd 14 Lt 02 - S.A.D." },
              { icon: Clock, title: "Horário", desc: "Aberto todos os dias até as 15:00" },
              { icon: Phone, title: "Contato", desc: "(61) 99556-0069 - Lanchonete & Delivery" }
            ].map((info, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                className="flex flex-col items-center text-center p-8 bg-[#1a1514]/80 backdrop-blur-xl rounded-3xl border border-white/5 hover:border-white/10 transition-colors shadow-2xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-stone-800 to-stone-900 text-yellow-500 rounded-full flex items-center justify-center mb-5 shadow-inner border border-white/5">
                  <info.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">{info.title}</h3>
                <p className="text-stone-400 text-sm font-medium">{info.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MENU PRODUCTS */}
      <section id="cardapio" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Nosso Cardápio</h2>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto font-light">
              Escolha a sua opção preferida. O seu endereço para entrega será solicitado na página de pagamento seguro.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Produto 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#1a1514] rounded-[2.5rem] overflow-hidden border border-white/5 flex flex-col group hover:border-white/10 transition-colors"
            >
              <div className="h-72 relative overflow-hidden">
                <Image src="/frango_premium.jpg" alt="Frango Sem Recheio" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1514] to-transparent"></div>
                <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-white flex items-center gap-2 border border-white/10">
                  <Star size={14} className="text-yellow-500 fill-yellow-500" /> Mais Pedido
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow -mt-10 relative z-10">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="text-3xl font-black text-white leading-tight mb-1">Frango Assado</h3>
                    <p className="text-orange-500 font-bold uppercase tracking-wider text-sm">Sem Recheio</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-stone-400 block mb-1">Por apenas</span>
                    <span className="text-4xl font-black text-white">R$ 48</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-10 text-stone-400 text-sm">
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Frango inteiro assado na máquina</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Pele dourada e extremamente crocante</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-orange-500" /> Tempero secreto da família Poly</li>
                </ul>

                <div className="mt-auto">
                  <a 
                    href={semRecheioLink}
                    target="_blank"
                    className="w-full flex items-center justify-center gap-2 bg-white text-black py-4 rounded-2xl font-black text-lg hover:bg-stone-200 transition-colors"
                  >
                    <ShoppingCart size={20} />
                    Comprar Agora
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Produto 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-b from-[#2a1a10] to-[#1a1514] rounded-[2.5rem] overflow-hidden border border-orange-500/30 flex flex-col relative group"
            >
              <div className="absolute top-6 right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-black px-4 py-2 rounded-full z-20 shadow-lg uppercase tracking-wider">
                Premium
              </div>
              <div className="h-72 relative overflow-hidden">
                <Image src="/frango_premium.jpg" alt="Frango Com Recheio" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1a10] to-transparent"></div>
              </div>
              <div className="p-10 flex flex-col flex-grow -mt-10 relative z-10">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="text-3xl font-black text-white leading-tight mb-1">Frango Assado</h3>
                    <p className="text-yellow-500 font-bold uppercase tracking-wider text-sm">Com Recheio</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-stone-400 block mb-1">Por apenas</span>
                    <span className="text-4xl font-black text-white">R$ 58</span>
                  </div>
                </div>
                
                <div className="mb-8 bg-black/40 backdrop-blur-sm p-5 rounded-2xl border border-white/5">
                  <label className="block text-sm font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider">
                    <Utensils size={16} className="text-yellow-500" />
                    Selecione o Recheio:
                  </label>
                  <div className="space-y-4">
                    <label className="flex items-center gap-4 cursor-pointer group/radio">
                      <div className="relative flex items-center justify-center">
                        <input 
                          type="radio" 
                          name="recheio" 
                          value="Farofa de Bacon, calabresa e linguiça"
                          onChange={(e) => setRecheioSelecionado(e.target.value)}
                          className="peer sr-only"
                        />
                        <div className="w-6 h-6 rounded-full border-2 border-stone-600 peer-checked:border-yellow-500 peer-checked:bg-yellow-500 transition-all"></div>
                        <div className="absolute w-2.5 h-2.5 rounded-full bg-black opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="text-stone-300 group-hover/radio:text-white font-medium">Farofa de Bacon, calabresa e linguiça</span>
                    </label>
                    <label className="flex items-center gap-4 cursor-pointer group/radio">
                      <div className="relative flex items-center justify-center">
                        <input 
                          type="radio" 
                          name="recheio" 
                          value="Batata, presunto e queijo"
                          onChange={(e) => setRecheioSelecionado(e.target.value)}
                          className="peer sr-only"
                        />
                        <div className="w-6 h-6 rounded-full border-2 border-stone-600 peer-checked:border-yellow-500 peer-checked:bg-yellow-500 transition-all"></div>
                        <div className="absolute w-2.5 h-2.5 rounded-full bg-black opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="text-stone-300 group-hover/radio:text-white font-medium">Batata, presunto e queijo</span>
                    </label>
                  </div>
                </div>

                <div className="mt-auto">
                  <button 
                    onClick={handleComprarComRecheio}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-4 rounded-2xl font-black text-lg hover:from-yellow-400 hover:to-orange-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                  >
                    <ShoppingCart size={20} />
                    Comprar Premium
                  </button>
                </div>
              </div>
            </motion.div>

          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-[#1a1514] border border-white/5 rounded-3xl p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 max-w-4xl mx-auto shadow-2xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
              <Info className="text-orange-500" size={32} />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-white font-bold text-lg mb-2">Como funciona a entrega?</h4>
              <p className="text-stone-400 text-sm leading-relaxed">
                Ao clicar em comprar, você irá para o nosso <strong>Checkout Seguro</strong>. 
                Lá você preencherá o seu endereço completo e telefone. 
                Assim que o pagamento for aprovado (Pix ou Cartão), o seu pedido será despachado imediatamente para o seu endereço!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-stone-500 py-16 text-center border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <Flame className="text-stone-700 mx-auto mb-6" size={36} />
          <h2 className="text-white font-black text-2xl mb-3 tracking-tight">POLY<span className="text-orange-500">ASSADOS</span></h2>
          <p className="text-sm mb-8">Conveniência, Lanchonete e Delivery.</p>
          <p className="text-xs text-stone-600 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} Poly Assados. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
