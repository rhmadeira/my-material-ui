import { AppRoutes } from "./routes/AppRoutes";
import { SideBar } from "./shared/components/SideBar";

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
