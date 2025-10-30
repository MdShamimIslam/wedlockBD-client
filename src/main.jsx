import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./Provider/AuthProvider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}/>
        <Toaster />
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
);
