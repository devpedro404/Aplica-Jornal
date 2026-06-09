import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="mt-20 bg-primary-container rounded-2xl overflow-hidden relative p-8 md:p-16 border border-white/10">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none"></div>
      <div className="relative z-10 max-w-2xl">
        {/* Título - COR BRANCA PARA VISIBILIDADE */}
        <h2 className="font-display-lg text-[32px] md:text-headline-lg text-white mb-6">
          Acompanhe a floresta, todos os dias.
        </h2>
        
        {/* Descrição - COR BRANCA COM OPACIDADE SUAVE */}
        <p className="font-body-lg text-white/80 mb-10">
          Assine nossa newsletter e receba as investigações mais profundas e
          as histórias mais impactantes da Amazônia diretamente no seu e-mail.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <input
            className="flex-grow bg-white/10 border-b-2 border-white/30 text-white p-4 focus:outline-none focus:bg-white/20 focus:border-white/50 transition-all font-body-md placeholder:text-white/60 rounded-t-lg"
            placeholder="Seu melhor e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-secondary text-white font-bold py-4 px-10 rounded-lg hover:bg-secondary-fixed hover:text-primary transition-all uppercase tracking-widest text-sm shadow-xl"
          >
            {submitted ? 'Inscrito!' : 'Inscrever-se'}
          </button>
        </form>
        
        {submitted && (
          <p className="text-green-400 text-sm mt-4 font-semibold">
            ✓ Inscrição realizada com sucesso!
          </p>
        )}
        
        {/* Aviso - COR BRANCA MAIS VISÍVEL */}
        <p className="text-white/50 text-xs mt-6 italic">
          Prometemos não enviar spam. Você pode cancelar a qualquer momento.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;