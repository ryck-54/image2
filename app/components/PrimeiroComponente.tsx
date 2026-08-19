'use client'

interface PrimeiroComponenteProps {
mensagem: string;
mensagemBotao?: string;

}

export const PrimeiroComponente = ({ mensagem, mensagemBotao }): PrimeiroComponenteProps => {
  //function clique() {
    //console.log('você clicou no botão!');
   // alert("você clicou no botãoc")
  //}
  const clique = () => {
    console.log('você clicou no botão');
    alert(mensagemBotao);
  }
  return (
    <div>
      <h1>Primeiro Componente</h1>
      <p>{mensagem}</p>
      <button onClick={(clique)}>Clique aqui!</button>
    </div>
  );
}