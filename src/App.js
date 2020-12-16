import './App.css';
//esqueleto
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Escola Amorinha</h1>
        <span className="App-logo" alt="logo">🍇</span>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </header>
      <form action="URL" method="post">
        <label>Nome da Criança
          <input type="text" name="" id="nomeAluno" /></label>
        <label>Data de Nascimento
          <input type="date" name="" id="nascimentoAluno" /></label>
        <label>Nome da Pessoa Responsável pela criança
          <input type="text" name="" id="nomeResponsavel" /></label>
        <label>Telefone de Contato
          <input type="tel" name="" id="telefone" /></label>{/*  ver react-input-mask */}
        <label>Em caso de emergência avisar: (Pais, Tios, Avós, Padrinhos)
          <input type="text" name="" id="" /></label>
        <label>Telefone para Emergências
          <input type="tel" name="" id="" /></label>{/*  ver react-input-mask */}
        <label>Possui Restrição Alimentar
          <input type="text" name="" id="" /></label>
        <label>Descrição das Restrições Alimentares
          <input type="text" name="" id="" /></label>
        <label>Autorização de fotos e vídeos da criança para uso escolar
          <input type="checkbox" name="" id="" /></label>
        <label>Lista de autorizados a buscar a criança. Ex. Pedro – Padrinho, Maria – Tia
          <input type="checkbox" name="" id="" /></label>
        <label>Turma
          <input type="text" name="" id="" /></label>
        <label>Observações Adicionais
          <input type="text" name="" id="" /></label>
      {/*
            1. Um formulário para o cadastro dos Alunos contendo os seguintes campos
        4. Telefone de Contato do Responsável pela criança ||
        5. Em caso de emergência avisar: (Pais, Tios, Avós, Padrinhos)
        6. Telefone para Emergências
        7. Possui Restrição Alimentar
        8. Descrição das Restrições Alimentares
        9. Autorização de fotos e vídeos da criança para uso escolar
        10. Lista de autorizados a buscar a criança. Ex. Pedro – Padrinho, Maria – Tia
        11. Turma
        12. Observações adicionais
           
    2. Uma listagem de Alunos que permita editar e excluir alunos e apresente para o usuário os principais campos:
        1. Nome
        2. Data de Nascimento
        3. Turma
        4. Telefone para Emergências
        5. Em caso de emergência avisar

    3. Um campo de texto acima da listagem que será utilizado para filtrar os alunos pelo nome.

      
       */}
       </form>
      <table>
        <tr>
          <th>Month</th>
          <th>Savings</th>
        </tr>
        <tr>
          <td>January</td>
          <td>$100</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
