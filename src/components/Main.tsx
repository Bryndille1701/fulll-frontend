import { useEffect, useState } from 'react';
import useDebounce from '../hooks/use-debounce';
import { GithubUser } from '../types/github';
import { getGithubUser } from '../utils/github';
import Grid from './Grid';
import CheckboxEmpty from './icons/CheckboxEmpty';
import CheckboxFull from './icons/CheckboxFull';
import Input from './Input';
import Tools from './Tools';

const Main = () => {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [items, setItems] = useState<GithubUser[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const debouncedInput = useDebounce(input, 500);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    if (debouncedInput) {
      setMessage('');
      const getUser = async (debouncedInput: string) => {
        setLoading(true);
        setItems([]);
        const data = await getGithubUser(debouncedInput);
        setLoading(false);
        if (data.message) {
          setMessage(data.message);
        } else if (data.items) {
          if (data.total_count && data.total_count > 0) {
            setSelected([]);
            setItems(data.items);
            setMessage('');
          } else {
            setItems([]);
            setMessage('');
          }
        } else if (data.message) {
          setMessage(data.message);
        }
      };
      getUser(debouncedInput);
    }
  }, [debouncedInput]);

  const onEditModeClick = () => {
    setEditMode(!editMode);
    setSelected([]);
  };
  return (
    <main id="main" role="main" className="wrapper">
      <header className="main__header wrapper">
        <div className="edit-mode__container">
          <button onClick={onEditModeClick} className="edit-mode__button">
            {editMode ? <CheckboxFull /> : <CheckboxEmpty />}Mode édition
          </button>
        </div>
        <Input input={input} onInputChange={onInputChange} message={message} />
        {editMode && (
          <Tools
            setItems={setItems}
            items={items}
            selected={selected}
            setSelected={setSelected}
          />
        )}
      </header>
      <Grid
        selected={selected}
        setSelected={setSelected}
        items={items}
        loading={loading}
        editMode={editMode}
      />
    </main>
  );
};

export default Main;
