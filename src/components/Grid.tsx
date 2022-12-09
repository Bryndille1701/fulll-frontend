import { GithubUser } from '../types/github';

type GridProps = {
  items: GithubUser[];
  loading: boolean;
};

const Grid = ({ items, loading }: GridProps) => {
  return <div>{JSON.stringify(items)}</div>;
};

export default Grid;
