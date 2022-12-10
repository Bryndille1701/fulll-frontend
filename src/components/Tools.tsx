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

// Tools component, for the edit mode (select all, copy, delete)
const Tools = ({ items, selected, setSelected, setItems }: ToolsProps) => {
  const onCheckboxClick = () => {
    // If no items or some items are selected, select all
    if (
      selected.length === 0 ||
      (selected.length && selected.length < items.length)
    ) {
      const selectedItems: number[] = [];
      items.forEach((_, idx) => selectedItems.push(idx));
      setSelected(selectedItems);
    }
    // If all items are selected, deselect all
    if (selected.length && selected.length === items.length) {
      setSelected([]);
    }
  };

  const onCopyClick = () => {
    // Copy selected items to a new array
    const newItems = [...items];
    // Insert copies of items at the idx of the source item
    selected.forEach((idx) => {
      newItems.splice(idx, 0, items[idx]);
    });
    setItems(newItems);
    setSelected([]);
  };

  const onDeleteClick = () => {
    // Copy selected items to a new array
    let newItems = [...items];
    // Filter out selected items
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
        <span>
          {selected.length > 0
            ? `${selected.length} élément${
                selected.length > 1 ? 's' : ''
              } sélectionné${selected.length > 1 ? 's' : ''}`
            : 'Tout sélectionner'}
        </span>
      </button>
      <div className="section-tools__buttons">
        <button onClick={onCopyClick}>
          <Copy />
          {/* srOnly for screen readers */}
          <div className="srOnly">Copier les éléments sélectionnés</div>
        </button>

        <button onClick={onDeleteClick}>
          <Delete />
          {/* srOnly for screen readers */}
          <div className="srOnly">Supprimer les éléments sélectionnés</div>
        </button>
      </div>
    </div>
  );
};
export default Tools;
