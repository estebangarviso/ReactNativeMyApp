type AddToCartProps = {
  setCart: (newArray: CharacterProps[]) => void;
  cart: CharacterProps[];
  character: CharacterProps;
};
type CharacterResponseInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};
type PagginationButtonsProps = {
  page: number;
  setPage: (page: number) => void;
  pageInfo: CharacterResponseInfo;
};
interface CharacterResponse {
  info: CharacterResponseInfo;
  results: CharacterProps[];
}
interface CharacterProps {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
  image: string;
  episode: Array;
  url: string;
  created: string;
}
