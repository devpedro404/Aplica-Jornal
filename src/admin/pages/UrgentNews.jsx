import React, { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';

const UrgentNews = () => {
  const [noticias, setNoticias] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [textoEditando, setTextoEditando] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  // Dados padrão
  const noticiasPadrao = [
    { id: 1, texto: "Acordo histórico garante preservação de 10 milhões de hectares na Bacia do Tapajós" },
    { id: 2, texto: "Tecnologia 5G chega às comunidades ribeirinhas mais isoladas do Amazonas" },
    { id: 3, texto: "Novos sítios arqueológicos revelam segredos de civilização pré-colombiana" }
  ];

  // Carregar notícias salvas
  useEffect(() => {
    const carregarNoticias = () => {
      const salvas = localStorage.getItem('noticiasUrgentes');
      if (salvas) {
        setNoticias(JSON.parse(salvas));
      } else {
        setNoticias(noticiasPadrao);
        localStorage.setItem('noticiasUrgentes', JSON.stringify(noticiasPadrao));
      }
    };
    carregarNoticias();
  }, []);

  const handleEditar = (id, texto) => {
    setEditandoId(id);
    setTextoEditando(texto);
  };

  const handleSalvar = (id) => {
    if (!textoEditando.trim()) {
      exibirMensagem('O texto não pode estar vazio!', 'error');
      return;
    }
    
    const novasNoticias = noticias.map(noticia => 
      noticia.id === id ? { ...noticia, texto: textoEditando } : noticia
    );
    setNoticias(novasNoticias);
    // Salvar no localStorage
    localStorage.setItem('noticiasUrgentes', JSON.stringify(novasNoticias));
    setEditandoId(null);
    setTextoEditando('');
    exibirMensagem('Mensagem atualizada com sucesso! O site já está atualizado.', 'success');
  };

  const handleCancelar = () => {
    setEditandoId(null);
    setTextoEditando('');
  };

  const handleResetar = () => {
    if (window.confirm('Restaurar mensagens originais?')) {
      setNoticias(noticiasPadrao);
      localStorage.setItem('noticiasUrgentes', JSON.stringify(noticiasPadrao));
      exibirMensagem('Mensagens restauradas! O site já está atualizado.', 'success');
    }
  };

  const exibirMensagem = (msg, tipo = 'success') => {
    setMensagem(msg);
    setMostrarMensagem(true);
    setTimeout(() => setMostrarMensagem(false), 3000);
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-6">
          <h2 className="font-headline-lg text-headline-lg text-primary text-2xl">Notícias Urgentes</h2>
          <p className="text-sm text-on-surface-variant mt-1">
            Gerencie as mensagens que aparecem no topo do site (área "Urgente")
          </p>
        </div>

        {/* Card principal */}
        <div className="bg-white rounded-lg shadow-sm border border-outline-variant/20 overflow-hidden">
          {/* Header do card */}
          <div className="px-5 py-4 bg-surface-container-low border-b border-outline-variant/20 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-primary text-base">Mensagens em Destaque</h3>
              <p className="text-xs text-on-surface-variant mt-1">
                Estas 3 mensagens rodam em loop no topo do site
              </p>
            </div>
            <button
              onClick={handleResetar}
              className="px-3 py-1.5 text-xs bg-gray-100 text-gray-600 rounded-lg hover:bg-red-100 hover:text-red-600 transition-colors"
            >
              Restaurar Padrão
            </button>
          </div>

          {/* Lista de notícias */}
          <div className="divide-y divide-outline-variant/10">
            {noticias.map((noticia, index) => (
              <div key={noticia.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex gap-3">
                  {/* Número */}
                  <div className="flex-shrink-0 w-8">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                      {index + 1}
                    </span>
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="flex-1">
                    {editandoId === noticia.id ? (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={textoEditando}
                          onChange={(e) => setTextoEditando(e.target.value)}
                          className="flex-1 border border-green-500 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                          autoFocus
                          onKeyPress={(e) => e.key === 'Enter' && handleSalvar(noticia.id)}
                        />
                        <button
                          onClick={() => handleSalvar(noticia.id)}
                          className="px-3 py-2 bg-green-600 text-white text-xs font-semibold rounded-lg hover:bg-green-700 transition-colors"
                        >
                          Salvar
                        </button>
                        <button
                          onClick={handleCancelar}
                          className="px-3 py-2 bg-gray-200 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-300 transition-colors"
                        >
                          Cancelar
                        </button>
                      </div>
                    ) : (
                      <div 
                        onClick={() => handleEditar(noticia.id, noticia.texto)} 
                        className="cursor-pointer group"
                      >
                        <p className="text-sm text-gray-800 group-hover:text-green-600 transition-colors">
                          {noticia.texto}
                        </p>
                        <p className="text-[10px] text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          Clique para editar
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Botão editar */}
                  {editandoId !== noticia.id && (
                    <button
                      onClick={() => handleEditar(noticia.id, noticia.texto)}
                      className="text-gray-400 hover:text-green-600 transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer com dica */}
          <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-green-600 text-sm">sync</span>
              <p className="text-xs text-gray-500">
                ⚡ As alterações são salvas automaticamente e aparecem no site em tempo real!
              </p>
            </div>
          </div>
        </div>

        {/* Snackbar de mensagem */}
        {mostrarMensagem && (
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-full shadow-lg text-sm z-50">
            {mensagem}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default UrgentNews;