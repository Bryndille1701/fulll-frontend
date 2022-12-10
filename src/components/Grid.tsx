import { GithubUser } from '../types/github';
import GithubCard from './GithubCard';

type GridProps = {
  items: GithubUser[];
  loading: boolean;
};

const Grid = ({ items, loading }: GridProps) => {
  return (
    <div className="items-grid">
      <>
        {loading && <p>Loading...</p>}
        {items &&
          items.length > 0 &&
          items.map((item) => <GithubCard key={item.id} user={item} />)}
      </>
    </div>
  );
};

export default Grid;
