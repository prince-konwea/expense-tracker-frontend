import styled from "styled-components"
import './App.css';
import { MainLayout } from "./styles/layout";
import bg from "./image/bg.png"

function App() {
  return (
    <AppStyled bg={bg} className="App">
    <MainLayout>
      <h1>Gluxx</h1>
    </MainLayout>

    </AppStyled>
  );
}



const AppStyled = styled.div`
 height: 100vh;
 background-image: url({props => prop.bg})
 position: relative;

`;

export default App;
