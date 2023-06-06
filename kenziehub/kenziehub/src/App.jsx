import { AuthProvider } from "./contexts/AuthContext";
import { RoutesMain as Routes } from "./routes";
import { StyledApp } from "./styles";
import Global from "./styles/global";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <StyledApp className="App">
      <>
        <Global/>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
      </>
      <ToastContainer />
    </StyledApp>
  );
}

export default App;
