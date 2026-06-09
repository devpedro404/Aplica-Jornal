// Dados iniciais
const noticiasPadrao = [
  {
    id: 1,
    texto: "Acordo histórico garante preservação de 10 milhões de hectares na Bacia do Tapajós"
  },
  {
    id: 2,
    texto: "Tecnologia 5G chega às comunidades ribeirinhas mais isoladas do Amazonas"
  },
  {
    id: 3,
    texto: "Novos sítios arqueológicos revelam segredos de civilização pré-colombiana"
  }
];

// Variável global
let noticiasUrgentes = [...noticiasPadrao];

export function getActiveUrgentNews() {
  return noticiasUrgentes;
}

export function getAllUrgentNews() {
  return noticiasUrgentes;
}

export function updateUrgentNews(id, newText) {
  const index = noticiasUrgentes.findIndex(n => n.id === id);
  if (index !== -1) {
    noticiasUrgentes[index].texto = newText;
    return true;
  }
  return false;
}

export function resetUrgentNews() {
  noticiasUrgentes = JSON.parse(JSON.stringify(noticiasPadrao));
  return noticiasUrgentes;
}