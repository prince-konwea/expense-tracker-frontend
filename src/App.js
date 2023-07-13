import styled from "styled-components"
import './App.css';
import { MainLayout } from "./styles/layout";
import bg from "./image/bg.png"
import Orb from "./components/orb/orb";






function App() {

  


  return (
    <AppStyled bg={bg} className="App">
      <Orb />
      
    <MainLayout>
    
    </MainLayout>

    </AppStyled>
  );
}


const AppStyled = styled.div`
  height: 100vh;
  background-image: url({props => props.bg})
  position: relative;
 
 `;


export default App;
