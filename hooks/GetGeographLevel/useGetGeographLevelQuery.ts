import type { GeographLevel } from "./type"

export default (id: string) => {
    return useQuery({
        queryKey: ["geograph-level"],
        queryFn: async () => await axios.get<GeographLevel[]>(`/1842/localidades/${id}`),
        select: (response) => response.data
    })
}