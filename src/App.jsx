import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2500,
        }}
      />
      <AppRoutes />
    </>
  );
}

export default App;
