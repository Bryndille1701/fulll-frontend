import { GithubUser } from '../types/github';
import CheckboxEmpty from './icons/CheckboxEmpty';
import CheckboxFull from './icons/CheckboxFull';
import CheckboxIntermediate from './icons/CheckboxIntermediate';
import Copy from './icons/Copy';
import Delete from './icons/Delete';

type ToolsProps = {
  items: GithubUser[];
  selected: number[];
  setSelected: (selected: number[]) => void;
  setItems: (items: GithubUser[]) => void;
};

const Tools = ({ items, selected, setSelected, setItems }: ToolsProps) => {
  const onCheckboxClick = () => {
    if (
      selected.length === 0 ||
      (selected.length && selected.length < items.length)
    ) {
      const selectedItems: number[] = [];
      items.forEach((_, idx) => selectedItems.push(idx));
      setSelected(selectedItems);
    }
    if (selected.length && selected.length === items.length) {
      setSelected([]);
    }
  };

  const onCopyClick = () => {
    const newItems = [...items];
    selected.forEach((idx) => {
      newItems.splice(idx, 0, items[idx]);
    });
    setItems(newItems);
    setSelected([]);
  };

  const onDeleteClick = () => {
    let newItems = [...items];
    setItems(newItems.filter((_, idx) => !selected.includes(idx)));
    setSelected([]);
  };
  return (
    <div className="section-tools">
      <button className="section-tools__checkbox" onClick={onCheckboxClick}>
        {selected.length > 0 && selected.length < items.length && (
          <CheckboxIntermediate />
        )}
        {selected.length === 0 && <CheckboxEmpty />}
        {selected.length > 0 && selected.length === items.length && (
          <CheckboxFull />
        )}
        <span>Tout sélectionner</span>
      </button>
      <div className="section-tools__buttons">
        <button onClick={onCopyClick}>
          <Copy />
          <div className="srOnly">Copier les éléments sélectionnés</div>
        </button>

        <button onClick={onDeleteClick}>
          <Delete />
          <div className="srOnly">Supprimer les éléments sélectionnés</div>
        </button>
      </div>
    </div>
  );
};
export default Tools;
