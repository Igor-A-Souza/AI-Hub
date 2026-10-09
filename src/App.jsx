// useState guarda dados que mudam e fazem a tela se atualiazar.
// useEffect executa um código quando algo muda (aqui, para salvar favoritos).

import { useState, useEffect } from "react";
import { tools } from "./data";  // Importa a lista de ferramentas do "Banco de Dados" (data.js).
import ToolCard from "./components/ToolCard";  // Importa o componente do card (ToolCard.jsx).
import "./index.css";  // Importa o estilo principal do site.

// Cria a lista de categorias automaticamente a parti dos dados.
// Set remove repetidas; "Todas" é adicionada no começo.
const categorias = ["Todas", ...new Set(tools.map((t) => t.cat))];

export default function App() {
  // ESTADOS (quando mudam, o React redesenha a tela).
  const [busca, setBusca] = useState("");  // Texto digitado no compo de busca.
  const [cat, setCat] = useState("Todas");  // Categoria selecionada no filtro.

  // Favoritos: lê no localStorage ao abrir o site (se não houver, começa vazio).
  // Passar uma função ao useState faz a leitura acontecer só uma vez.
  const [favoritos, setFavs] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favs") || "[]");
    } catch {
      return [];
    }
  });

  // Toda vez que o "favoritos" mudar, salva no navegador.
  // Assim os favoritos continuem mesmo depois de fechar a página.
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favoritos));
  }, [favoritos]);

  // Adicionar o id se ainda não estiver na lista; remover se já estiver.
  const alternar = (id) =>
    setFavs((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));

  // Filtar as ferramentas: precisa bater com a categoria e com o texto da busca.
  const lista = tools.filter(
    (t) =>
      (cat === "Todas" || t.cat === cat) &&
      t.name.toLowerCase().includes(busca.toLowerCase())
  );

  // O que é exibido na tela (JSX).
  return (
    <main className="app">
      <header>
        <h1>
          AI <span>Hub</span>
        </h1>
        <p>Descubra ferramentas de AI para cada tarefa • {favoritos.length} favoritas</p>

        {/* Input controlado: o valor vem do estado e cada tecla o atualiza */}
        <input
          placeholder="Buscar ferramenta..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />

        {/* Um botão para cada categoria; o selecionado recebe a classe "ativo" */}
        <div className="filtros">
          {categorias.map((c) => (
            <button
              type="button"
              key={c}
              className={c === cat ? "ativo" : ""}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </header>

      {/* Para cada ferramenta filtrada, desenha um ToolCard.
          "key" ajuda o React a identificar cada item da lista. */}
      <section className="grid">
        {lista.map((t) => (
          <ToolCard key={t.id} tool={t} favorito={favoritos.includes(t.id)} onToggle={alternar} />
        ))}
        {/* Mensagem exibida só se a lista estiver vazia */}
        {lista.length === 0 && <p className="empty-state">Nenhuma ferramenta encontrada.</p>}
      </section>
    </main>
  );
}