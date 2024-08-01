// hooks/useIngresos.js

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchIngresosByMonth = async ({ queryKey }) => {
  const [, year, month] = queryKey;
  const { data } = await axios.get(
    `http://localhost:8000/ingresos/${year}/${month}`
  );
  return data;
};

const useGetIngresosData = (year = "2024", month = "07") => {
  return useQuery({
    queryKey: ["ingresos", year, month],
    queryFn: fetchIngresosByMonth,
    enabled: !!year && !!month, // Solo ejecuta la query si year y month están definidos
  });
};

export default useGetIngresosData;
