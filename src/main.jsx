import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ClerkProvider } from "@clerk/react";
import "react-calendar/dist/Calendar.css";
import App from "./App.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider signUpUrl="/sign-up" signInUrl="/sign-in" signInFallbackRedirectUrl="/dashboard" signUpFallbackRedirectUrl="/dashboard">
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>,
);
