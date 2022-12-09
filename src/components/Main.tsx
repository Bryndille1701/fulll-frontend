import { useEffect, useState } from 'react';
import useDebounce from '../hooks/use-debounce';
import { getGithubUser } from '../utils/github';
import Input from './Input';
import Tools from './Tools';

const Main = () => {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
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
        console.log(data);
        if (data.message) {
          setMessage(data.message);
        }
      };
      getUser(debouncedInput);
    }
  }, [debouncedInput]);
  return (
    <main id="main" role="main">
      <header>
        <Input input={input} onInputChange={onInputChange} message={message} />
        <Tools />
      </header>
    </main>
  );
};

export default Main;
