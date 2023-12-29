import React, { createContext, useContext } from "react";
import { Toaster } from "react-hot-toast";

// Create a context to manage the state of the toast notifications
const ToastContext = createContext();

// Provide the ToastContext to the component tree
export const ToastProvider = ({ children }) => {
  return (
    <ToastContext.Provider>
      {/* Toaster component from react-hot-toast for displaying notifications */}
      <Toaster
        position="top-right"
        toastOptions={{ success: { theme: { primary: "#4aed88" } } }}
      ></Toaster>
      {/* Render the child components */}
      {children}
    </ToastContext.Provider>
  );
};

// Custom hook to access the ToastContext
export const useToast = () => {
  return useContext(ToastContext);
};
