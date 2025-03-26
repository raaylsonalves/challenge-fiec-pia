import type { Aggregate } from "./type"

type Props = {
    variables: any;
    periods: any;
    classifications: any;
    location?: string;
    geographLevels?: any;
    classification?: string;
    hasItems: boolean;
}

export default (
    {
        variables,
        periods,
        classifications,
        location = 'N1',
        geographLevels = 'all',
        classification = '12762',
        hasItems = false
    }: Props) => {
    const { data, refetch, isLoading } = useQuery({
        queryKey: ["aggregate", variables, periods, classifications],
        queryFn: async () => {
            const url = `/1842/periodos/${periods.value.join("|")}/variaveis/${variables.value.join("|")}?localidades=${location}[${geographLevels?.value?.join(",") ?? geographLevels}]&classificacao=${classification}[${classifications.value.join(",")}]`
            return await axios.get<Aggregate[]>(url)
        },
        select: (response) => response.data,
        enabled: hasItems
    })

    return { data, refetch, isLoading }
}