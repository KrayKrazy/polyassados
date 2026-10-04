"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart, MapPin, Clock, Phone, Flame, Utensils, Star, Info } from 'lucide-react';
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
    // Encode the filling choice into utm_content so it appears on Cakto dashboard
    const url = `${comRecheioBaseLink}?utm_content=${encodeURIComponent(recheioSelecionado)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fffdfa] font-sans text-stone-800">
      {/* HEADER */}
      <header className="bg-[#d9381e] text-white py-4 px-6 sticky top-0 z-50 shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Flame className="text-yellow-400" size={28} />
            <h1 className="text-2xl font-black tracking-tight">POLY ASSADOS</h1>
          </div>
          <a href="#cardapio" className="bg-yellow-400 text-red-900 px-5 py-2 rounded-full font-bold text-sm hover:bg-yellow-300 transition-colors shadow-sm">
            Fazer Pedido
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-stone-900 text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/flyer.jpeg" 
            alt="Frango Assado" 
            fill 
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-yellow-500/20 text-yellow-400 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block border border-yellow-500/30">
              O Melhor de Santo Antônio do Descoberto
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              O Frango Mais <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Suculento</span><br />da Cidade.
            </h2>
            <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Assado no ponto perfeito, com tempero especial da casa. Peça agora e receba quentinho no conforto do seu lar!
            </p>
            <a href="#cardapio" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#d9381e] to-[#b32712] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(217,56,30,0.4)] transition-all hover:-translate-y-1">
              <Utensils size={20} />
              Ver Cardápio
            </a>
          </motion.div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="py-12 bg-white border-b border-stone-100">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-2xl border border-stone-100 shadow-sm">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Localização</h3>
            <p className="text-stone-500 text-sm">Parque Estrela Dalva XI, Quadra 14 lote 02 - Santo Antônio do Descoberto - GO</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-2xl border border-stone-100 shadow-sm">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
              <Clock size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Horário</h3>
            <p className="text-stone-500 text-sm">Aberto todos os dias<br />Até as 15:00</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-2xl border border-stone-100 shadow-sm">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
              <Phone size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2">Contato</h3>
            <p className="text-stone-500 text-sm">(61) 99556-0069<br />Lanchonete & Delivery</p>
          </div>
        </div>
      </section>

      {/* MENU PRODUCTS */}
      <section id="cardapio" className="py-20 bg-[#fffdfa]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-[#d9381e]">Nosso Cardápio</h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              Escolha a sua opção preferida e finalize a compra com segurança. O seu endereço será solicitado na página de pagamento para a entrega!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            
            {/* Produto 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-100 flex flex-col"
            >
              <div className="h-56 bg-stone-200 relative">
                <Image src="/flyer.jpeg" alt="Frango Assado Sem Recheio" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-stone-800 flex items-center gap-1 shadow-sm">
                  <Star size={12} className="text-yellow-500 fill-yellow-500" /> Mais Pedido
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black text-stone-800 leading-tight">Frango Assado<br/><span className="text-stone-400 font-medium text-lg">Sem Recheio</span></h3>
                  <span className="text-2xl font-black text-[#d9381e]">R$ 48</span>
                </div>
                <p className="text-stone-500 mb-8 flex-grow leading-relaxed">
                  Frango inteiro assado na máquina, super suculento e com a pele douradinha e crocante. Tempero especial da casa.
                </p>
                <a 
                  href={semRecheioLink}
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 bg-stone-900 text-white py-4 rounded-xl font-bold hover:bg-stone-800 transition-colors"
                >
                  <ShoppingCart size={20} />
                  Comprar Agora
                </a>
              </div>
            </motion.div>

            {/* Produto 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-yellow-400 flex flex-col relative"
            >
              <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-950 text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm">
                Premium
              </div>
              <div className="h-56 bg-stone-200 relative">
                <Image src="/flyer.jpeg" alt="Frango Assado Com Recheio" fill className="object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-black text-stone-800 leading-tight">Frango Assado<br/><span className="text-stone-400 font-medium text-lg">Com Recheio</span></h3>
                  <span className="text-2xl font-black text-[#d9381e]">R$ 58</span>
                </div>
                <p className="text-stone-500 mb-6 leading-relaxed">
                  O nosso frango clássico, mas recheado generosamente com a sua opção favorita!
                </p>
                
                <div className="mb-8 bg-stone-50 p-4 rounded-xl border border-stone-200">
                  <label className="block text-sm font-bold text-stone-700 mb-3 flex items-center gap-2">
                    <Utensils size={16} className="text-orange-500" />
                    Escolha o Recheio:
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input 
                          type="radio" 
                          name="recheio" 
                          value="Farofa de Bacon, calabresa e linguiça"
                          onChange={(e) => setRecheioSelecionado(e.target.value)}
                          className="peer sr-only"
                        />
                        <div className="w-5 h-5 rounded-full border-2 border-stone-300 peer-checked:border-[#d9381e] peer-checked:bg-[#d9381e] transition-all"></div>
                        <div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="text-stone-700 group-hover:text-black font-medium text-sm">Farofa de Bacon, calabresa e linguiça</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input 
                          type="radio" 
                          name="recheio" 
                          value="Batata, presunto e queijo"
                          onChange={(e) => setRecheioSelecionado(e.target.value)}
                          className="peer sr-only"
                        />
                        <div className="w-5 h-5 rounded-full border-2 border-stone-300 peer-checked:border-[#d9381e] peer-checked:bg-[#d9381e] transition-all"></div>
                        <div className="absolute w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="text-stone-700 group-hover:text-black font-medium text-sm">Batata, presunto e queijo</span>
                    </label>
                  </div>
                </div>

                <button 
                  onClick={handleComprarComRecheio}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-950 py-4 rounded-xl font-bold hover:from-yellow-300 hover:to-yellow-400 transition-colors shadow-lg shadow-yellow-500/20"
                >
                  <ShoppingCart size={20} />
                  Comprar Agora
                </button>
              </div>
            </motion.div>

          </div>

          <div className="mt-12 bg-orange-50 border border-orange-100 rounded-2xl p-6 flex items-start gap-4 max-w-4xl mx-auto">
            <Info className="text-orange-500 shrink-0 mt-1" size={24} />
            <p className="text-stone-600 text-sm leading-relaxed">
              <strong>Como funciona a entrega?</strong> Ao clicar em comprar, você será redirecionado para o nosso ambiente de pagamento seguro (Cakto). 
              Lá você preencherá o seu <strong>Endereço Completo</strong> e o seu <strong>WhatsApp</strong>. 
              Assim que o pagamento (Pix ou Cartão) for aprovado, nós receberemos o seu endereço e o seu pedido será despachado imediatamente!
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-400 py-12 text-center border-t border-stone-800">
        <div className="max-w-5xl mx-auto px-6">
          <Flame className="text-stone-700 mx-auto mb-6" size={32} />
          <h2 className="text-white font-bold text-xl mb-2">Assados da Poly Beer</h2>
          <p className="text-sm mb-6">Conveniência, Lanchonete e Delivery.</p>
          <p className="text-xs text-stone-600">
            &copy; {new Date().getFullYear()} Poly Assados. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
