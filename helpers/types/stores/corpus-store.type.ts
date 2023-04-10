export interface CorpusStoreType {
  isLoadingCorpus: boolean;
  corpusData: {
    c2: string[];
    c3: string[];
  };
  corpusActive: {
    two: boolean;
    three: boolean;
  };
  firstAvailableCorpusAndFloor: {
    corpus: string | null;
    floor: string | null;
  };
}
