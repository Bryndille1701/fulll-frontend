import { GithubUser } from '../types/github';
import GithubCard from './GithubCard';

type GridProps = {
  items: GithubUser[];
  loading: boolean;
  selected: GithubUser['id'][];
  setSelected: (selected: GithubUser['id'][]) => void;
};

const Grid = ({ items, loading, selected, setSelected }: GridProps) => {
  return (
    <div className="items-grid">
      <>
        {loading && <p>Loading...</p>}
        {items &&
          items.length > 0 &&
          items.map((item, idx) => (
            <GithubCard
              idx={idx}
              selected={selected}
              setSelected={setSelected}
              key={idx}
              user={item}
            />
          ))}
      </>
    </div>
  );
};

export default Grid;
