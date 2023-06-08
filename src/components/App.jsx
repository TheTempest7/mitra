import Navbarbody from "./Navbarbody";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Navbarbody/>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
