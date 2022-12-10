import { GithubUser } from '../types/github';
import CheckboxEmpty from './icons/CheckboxEmpty';
import CheckboxFull from './icons/CheckboxFull';

type GithubCardProps = {
  user: GithubUser;
  selected: number[];
  setSelected: (selected: number[]) => void;
  idx: number;
  editMode: boolean;
};

const GithubCard = ({
  user,
  selected,
  setSelected,
  idx,
  editMode,
}: GithubCardProps) => {
  const isSelected = selected.includes(idx);
  const onCheckboxClick = () => {
    if (isSelected) {
      const newSelected = [...selected];
      const index = newSelected.indexOf(idx);
      newSelected.splice(index, 1);
      setSelected(newSelected);
    } else {
      setSelected([...selected, idx]);
    }
  };
  return (
    <div className={`item-card${isSelected ? ' is-selected' : ''}`}>
      <div className="item-card__checkbox">
        {editMode && (
          <button onClick={onCheckboxClick}>
            <>{isSelected ? <CheckboxFull /> : <CheckboxEmpty />}</>
          </button>
        )}
      </div>
      <div className="item-card__image">
        <img src={user.avatar_url} alt="" />
      </div>
      <div className="item-card__content">
        <p>{user.id}</p>
        <p>{user.login}</p>
      </div>
      <a target="_blank" rel="noreferrer" href={user.html_url} className="btn">
        View profile
      </a>
    </div>
  );
};

export default GithubCard;
