import type { Period } from "./type"

export default () => {
    return useQuery({
        queryKey: ["periods"],
        queryFn: async () => await axios.get(`/1842/periodos`),
        select: (response) => response?.data?.map((item: Period) => {
            return {
                id: item.id,
                nome: `${item.literals[0]} - (modificado em ${item.modificacao})`
            }
        }),
    })
}