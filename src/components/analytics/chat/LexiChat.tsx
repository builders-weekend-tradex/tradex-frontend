import { useState } from "react";
import { chatWithLexi } from "../../../utilities/api";

const LexiChat: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { sender: string; content: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", content: message },
    ]);

    setLoading(true);
    setError(null);

    try {
      const res = await chatWithLexi(message);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "lexi", content: res.response },
      ]);
    } catch {
      setError("Failed to get response from Lexi.");
    } finally {
      setLoading(false);
    }

    setMessage("");
  };

  return (
    <div className="flex flex-col h-full max-w-xl mx-auto">
      <div className="flex-grow overflow-y-auto space-y-4 p-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs break-words ${
                msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-800"
              }`}
            >
              <p>
                <strong>{msg.sender === "user" ? "You" : "Lexi"}:</strong>{" "}
                {msg.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="w-full p-2 border rounded bg-white text-black"
        />
        <button
          onClick={handleSendMessage}
          disabled={loading}
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300 mt-2"
        >
          Send Message
        </button>
      </div>

      {loading && <p className="mt-2 text-center text-blue-500">Loading...</p>}
      {error && <p className="mt-2 text-center text-red-500">{error}</p>}
    </div>
  );
};

export default LexiChat;
