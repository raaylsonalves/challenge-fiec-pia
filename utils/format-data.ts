import type { Aggregate } from "~/hooks/GetAggregateList/type";

export const formatData = <T>(
  aggregateList: Aggregate[],
  variable: string
): Array<{ categoria: string; localidade: string; ano: string; valor: string | T; valorChart: string; variavel: string }> => {
  const item = aggregateList.find((d) => d.id === variable);
  if (!item) {
    return [];
  }

  const results = item.resultados.flatMap((result) => {
    const category = Object.values(result.classificacoes[0].categoria)[0];
    const location = result.series[0].localidade.nome;
    

    // Mapeando cada ano da série individualmente
    return Object.entries(result.series[0].serie).map(([ano, valor]) => {
      const formatValueUnit = item.unidade === "Percentual" ? `${valor}%` : `${Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(+valor)}`
      return { categoria: category, localidade: location, ano, valor: formatValueUnit, valorChart: valor, variavel: item.variavel };
    });
  });

  return results;
};