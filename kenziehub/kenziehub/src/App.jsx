import { AuthProvider } from "./contexts/AuthContext";
import { ModalContext } from "./contexts/ModalContext";
import { RoutesMain as Routes } from "./routes";
import { StyledApp } from "./styles";
import Global from "./styles/global";


function App() {
  return (
    <StyledApp className="App">
      <>
        <Global/>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
      </>
    </StyledApp>
  );
}

export default App;
