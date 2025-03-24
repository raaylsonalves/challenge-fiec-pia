import type { Aggregate } from "./type"

type Props = {
    variables: string;
    periods: string;
    classifications: string;
    location?: 'N1' | string;
    locations?: 'all' | string;
    classification?: '12762' | string;
}

export default (
    {
        variables,
        periods,
        location,
        locations,
        classification,
        classifications
    }: Props) => {
    return useQuery({
        queryKey: ["aggregate", variables, periods, classifications],
        queryFn: async () => await axios.get<Aggregate[]>(`/1842/periodos/${periods}/variaveis/${variables}?localidades=${location}[${locations}]&classificacao=${classification}[${classifications}]`),
        select: (response) => response.data,
        enabled: [variables, periods, classifications].filter(Boolean).length === 3
    })
}