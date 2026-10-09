// Componente = pedaço reutilizado da tela. Este desenha um Card.
// Ele recebe 3 "props" (dados vindos do componente pai): 
//  Tool -> Objetivo da ferramenta (nome, categoria, descrição)
//  Favorito -> true/false, indica se está favoritada
//  onToggle -> Função que o pai fornece para favoritar/desfavoritar a ferramenta.

export default function ToolCard({ tool, favorito, onToggle}) {
    return (
        <article className="card">
            {/* Os dados do objeto são exibidos com chaves {} (JSX) */}
            <span className="tag">{tool.cat}</span>
            <h3>{tool.name}</h3>
            <p>{tool.desc}</p>

            {/* ClassName muda conforme o estado: "ativo" pinta o botão roxo */}
            {/* onClick chama a função do pai passando o id desta ferramenta */}

            <button type="button" className={favorito ? "fav ativo" : "fav"} onClick={() => onToggle(tool.id)}>
                {favorito ? "★ Favorito" : "☆ Favoritar"}
            </button>
        </article>
    );
}