import { useEffect, useState } from 'react';
import { setSyntheticTrailingComments } from 'typescript';
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
      <header>
        <Input input={input} onInputChange={onInputChange} message={message} />
        <Tools />
        <Grid items={items} loading={loading} />
      </header>
    </main>
  );
};

export default Main;
