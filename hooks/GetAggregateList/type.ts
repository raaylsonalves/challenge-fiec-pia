type Category = {
    [key: string]: string;
}

type Classification = {
    id: string;
    nome: string;
    categoria: Category;
}

type Level = {
    id: string;
    nome: string;
}

type Location = {
    id: string;
    nivel: Level;
    nome: string;
}

type Serie = {
    [ano: string]: string;
}

type SerieInfo = {
    localidade: Location;
    serie: Serie;
}

type Result = {
    classificacoes: Classification[];
    series: SerieInfo[];
}

export type Aggregate = {
    id: string;
    variavel: string;
    unidade: string;
    resultados: Result[];
}