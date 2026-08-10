'use client'

export function PrimeiroComponente() {
  function clique() {
    //console.log('você clicou no botão!');
    alert("você clicou no botãoc")
  }
  return (
    <div>
      <h1>Primeiro Componente</h1>
      <button onClick={(clique)}>Clique aqui!</button>
    </div>
  );
}