// Este arquivo funciona como o "banco de dados" do site.

// Exportamos uma lista (Array) de objetos para outros arquivos importarem.

export const tools = [
    // id: identificador único (usado como "Key" no react e para favoritar).
    //name: nome da ferramenta | cat: categoria usado no filtro | desc: descrição.

    {id: 1, name: "Claude", cat: "Texto", desc: "Assistente de IA para escrita, análise e código."},
    {id: 2, name: "MidJourney", cat: "Imagem", desc: "Gera imagens artísticas a partir de texto."},
    {id: 3, name: "GitHub Copilot", cat: "Código", desc: "Sugere códigos direto no seu editor."},
    {id: 4, name: "ElevenLabs", cat: "Áudio", desc: "Voz sintética realista."},
    {id: 5, name: "Notion AI", cat: "Produtividade", desc: "Resumos e rascunhos dentro das suas notas."},
    {id: 6, name: "Runway", cat: "Vídeo", desc: "Criação e edição de vídeos com IA."},
];