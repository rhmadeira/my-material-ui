import { AppRoutes } from "./routes/AppRoutes";
import Login from "./shared/components/Login";
import { SideBar } from "./shared/components/SideBar";
import "./shared/form/TranslationYup";

function App() {
  return (
    <>
      {/* <Login> */}
      <SideBar>
        <AppRoutes />
      </SideBar>
      {/* </Login> */}
    </>
  );
}

export default App;
