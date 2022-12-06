import { RoutesMain as Routes } from "./routes";
import { StyledApp } from "./styles";
import Global from "./styles/global";


function App() {
  return (
    <StyledApp className="App">
      <>
        <Global/>
        <Routes/>

      </>
    </StyledApp>
  );
}

export default App;
