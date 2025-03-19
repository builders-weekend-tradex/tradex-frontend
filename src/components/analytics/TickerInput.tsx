import { useTicker } from "../../hooks/useTicker";

const TickerInput = () => {
  const { ticker, setTicker } = useTicker(); // Use global ticker state

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTicker(event.target.value.toUpperCase());
  };

  return (
    <div>
      <label htmlFor="ticker" className="text-lg font-medium">
        Ticker:
      </label>
      <input
        type="text"
        placeholder="Enter a ticker symbol"
        value={ticker}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </div>
  );
};

export default TickerInput;
