type InputProps = {
  input: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  message: string;
};

const Input = ({ input, onInputChange, message }: InputProps) => {
  return (
    <div className="input-container">
      <input
        type="text"
        name="search-input"
        id="search-input"
        value={input}
        placeholder="Search for a Github user"
        onChange={onInputChange}
      />
      {message && <p className="error-message">{message}</p>}
    </div>
  );
};

export default Input;
