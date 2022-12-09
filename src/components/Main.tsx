import { useState } from 'react';
import useDebounce from '../hooks/use-debounce';

const Main = () => {
  const [input, setInput] = useState('');
  const debouncedInput = useDebounce(input, 500);
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <main id="main" role="main">
      <header>
        <input
          type="text"
          name="search-input"
          id="search-input"
          value={input}
          onChange={onInputChange}
        />
      </header>
      <section></section>
    </main>
  );
};

export default Main;
