import { GithubUser } from '../types/github';
import GithubCard from './GithubCard';

type GridProps = {
  items: GithubUser[];
  loading: boolean;
  selected: number[];
  setSelected: (selected: number[]) => void;
  editMode: boolean;
};

// Grid component, for the list of items
const Grid = ({
  items,
  loading,
  selected,
  setSelected,
  editMode,
}: GridProps) => {
  return (
    <div
      className={`items-grid${loading || !items.length ? ' is-centered' : ''}`}
    >
      <>
        {loading && <p>Chargement...</p>}
        {!items.length && !loading && <p>Aucun résultat</p>}
        {items &&
          !loading &&
          items.length > 0 &&
          items.map((item, idx) => (
            <GithubCard
              idx={idx}
              selected={selected}
              setSelected={setSelected}
              key={idx}
              user={item}
              editMode={editMode}
            />
          ))}
      </>
    </div>
  );
};

export default Grid;
