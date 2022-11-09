import { PostType } from '../services';

export const useGetRandomItems = (
  targetArray: [] | PostType[],
  numberOfItems: number
) => {
  const shuffled = [...targetArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numberOfItems);
};
