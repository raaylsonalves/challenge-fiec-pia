import type { Period } from "./type"

export default (id: string) => {
    return useQuery({
        queryKey: ["periods"],
        queryFn: async () => await axios.get<Period[]>(`/1842/periodos`),
        select: (response) => response.data,
    })
}