import { useTicker } from "../../hooks/useTicker";

const TickerInput = () => {
  const { ticker, setTicker } = useTicker(); // Use global ticker state

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTicker(event.target.value.toUpperCase());
  };

  return (
    <div className="flex flex-col items-center p-2 mb-2 bg-white">
      <label
        htmlFor="ticker"
        className="text-xl text-gray-800 font-semibold mb-1"
      >
        Enter Your Ticker:
      </label>
      <input
        type="text"
        placeholder="Enter a ticker symbol"
        value={ticker}
        onChange={handleChange}
        className="p-2 border rounded bg-white text-black"
      />
      <button
        className="w-32 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300 mt-2 mb-2"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};

export default TickerInput;
