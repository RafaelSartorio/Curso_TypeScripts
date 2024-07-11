import React from "react";
import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
   
      <Layout>
        <Card
          id={1}
          texto="Mais informação"
          detalhes="Não temos"
        />
        <Card
          id={2}
          texto="Informação de numero2"
          detalhes="Ainda não temos nenhuma"
        />
      </Layout>
   
  )

}

export default App;
