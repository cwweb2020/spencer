// DataProvider.js
import React, { createContext, useContext, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Crear el cliente de Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutos
      cacheTime: 1000 * 60 * 15, // 15 minutos
    },
  },
});

// Crear el contexto
export const DataContext = createContext();

// Crear el proveedor del contexto
export const DataProvider = ({ children }) => {
  const [allGastos, setaAllGastos] = useState([]);

  return (
    <QueryClientProvider client={queryClient}>
      <DataContext.Provider value={{}}>{children}</DataContext.Provider>
    </QueryClientProvider>
  );
};

export const useDataContext = () => useContext(DataContext);
