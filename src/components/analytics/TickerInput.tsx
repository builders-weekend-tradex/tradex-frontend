import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TickerInput: React.FC = () => {
  const [ticker, setTicker] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTicker(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/analytics/${ticker}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a ticker symbol"
        value={ticker}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TickerInput;
