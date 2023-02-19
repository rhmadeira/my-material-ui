import { AppRoutes } from "./routes/AppRoutes";
import { SideBar } from "./shared/components/SideBar";
import "./shared/form/TranslationYup";

function App() {
  return (
    <>
      <SideBar>
        <AppRoutes />
      </SideBar>
    </>
  );
}

export default App;
