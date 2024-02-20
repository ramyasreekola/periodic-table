export type Element = {
  name: string;
  atomicNumber: number;
  atomicWeight: string;
  column: number;
  row: number;
  block: Block;
  symbol: string;
};

export enum Block {
  S = "s",
  P = "p",
  D = "d",
  F = "f",
}

export const blockColors: { [key in Block]: string } = {
  [Block.S]: "#ff9396",
  [Block.P]: "#fdff79",
  [Block.D]: "#8aceff",
  [Block.F]: "#74f587",
};
