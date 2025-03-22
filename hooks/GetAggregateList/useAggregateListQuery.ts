export default (variables: string, periods: string, location = 'N1', locations = 'all', classification = '12762', classifications: string) => {
    return useQuery({
        queryKey: ["aggregate"],
        queryFn: async () => await axios.get(`/1842/periodos/${periods}/variaveis/${variables}?localidades=${location}[${locations}]&classificacao=${classification}[${classifications}]`),
        select: (response: any) => response.data
    })
}