import { useEffect, useState } from 'react';
import useDebounce from '../hooks/use-debounce';
import { GithubUser } from '../types/github';
import { getGithubUser } from '../utils/github';
import Grid from './Grid';
import Input from './Input';
import Tools from './Tools';

const Main = () => {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
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
        const data = await getGithubUser(debouncedInput);
        setLoading(false);
        if (data.message) {
          setMessage(data.message);
        } else if (data.items) {
          if (data.total_count && data.total_count > 0) {
            setSelected([]);
            setItems(data.items);
          } else {
            setMessage('No results found');
          }
        } else if (data.message) {
          setMessage(data.message);
        }
      };
      getUser(debouncedInput);
    }
  }, [debouncedInput]);
  return (
    <main id="main" role="main" className="wrapper">
      <header className="main__header wrapper">
        <Input input={input} onInputChange={onInputChange} message={message} />
        <Tools
          setItems={setItems}
          items={items}
          selected={selected}
          setSelected={setSelected}
        />
      </header>
      {items && items.length > 0 && (
        <Grid
          selected={selected}
          setSelected={setSelected}
          items={items}
          loading={loading}
        />
      )}
    </main>
  );
};

export default Main;
