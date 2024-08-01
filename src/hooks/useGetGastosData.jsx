// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const getAllGastos = async () => {
//   const URL = "http://localhost:8000/gastos";
//   const res = await axios.get(URL);
//   return res.data;
// };

// export const useGetGastosData = () => {
//   return useQuery({
//     queryKey: ["expense"],
//     queryFn: getAllGastos,
//   });
// };

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getGastosByMonth = async ({ queryKey }) => {
  const [, year, month] = queryKey;
  const URL = `http://localhost:8000/gastos/${year}/${month}`;
  const res = await axios.get(URL);
  return res.data;
};

export const useGetGastosData = (year = "2024", month = "07") => {
  return useQuery({
    queryKey: ["expense", year, month],
    queryFn: getGastosByMonth,
    enabled: !!year && !!month, // Solo ejecuta la query si year y month están definidos
  });
};
