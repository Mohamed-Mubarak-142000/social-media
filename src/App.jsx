import { useSelector } from "react-redux";
import MainRoute from "./utils/MainRoute";
import { Toaster } from "sonner"; // Assuming Toaster is exported as named export

function App() {
  const { theme } = useSelector((state) => state.theme);
  console.log(theme);
  return (
    <div data-theme={theme} className="bg-bgColor w-full min-h-[100vh]">
      <MainRoute />
      <Toaster
        richColors
        toastOptions={{
          style: {
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
          },
          className: "class",
        }}
      />
    </div>
  );
}

export default App;
