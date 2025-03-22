import type { Metadata } from "./types"

export default () => {
    return useQuery({
        queryKey: ["metadata"],
        queryFn: async () => await axios.get<Metadata>(`/1842/metadados`),
        select: (response) => response.data
    })
}