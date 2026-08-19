import { PrimeiroComponente } from "../components/PrimeiroComponente";

export default function formularioPage() {
  return (
    <main>
      <h1>Galeria</h1>
      <PrimeiroComponente
        mensagem="esta é uma mensagem para o primeiro componente"
        mensagemBotao=""
      />
      <PrimeiroComponente
        mensagem=""
        mensagemBotao="voce clicou no botão"
      />
    </main>
  );
}