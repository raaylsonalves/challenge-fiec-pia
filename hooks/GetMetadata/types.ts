export type Metadata = {
    URL: string;
    assunto: string;
    id: number;
    nome: string;
    pesquisa: string;
    classificacoes: Classification[];
    nivelTerritorial: TerritorialLevel;
    periodicidade: Periodicity;
    variaveis: Variables[];
}

type Classification = {
    id: number;
    nome: string;
    categorias: Category[];
}

type Category = {
    id: number;
    nivel: number;
    nome: string;
    unidade: string | null;
    sumarizacao: Sumarization;
}

type Sumarization = {
    status: boolean;
    excecao: any;
}

type TerritorialLevel = {
    administrativo: string[];
    especial: string[];
    ibge: string[];
}

type Periodicity = {
    fim: number;
    frequencia: string;
    inicio: 2007;
}

type Variables = {
    id: number;
    nome: string;
    sumarizacao: Sumarization[];
    unidade: string;
}