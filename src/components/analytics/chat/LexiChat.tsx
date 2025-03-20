import { useState } from "react";
import { chatWithLexi } from "../../../utilities/api";
import { useTranslation } from "react-i18next";

const LexiChat: React.FC = () => {
  const [newMessage, setNewMessage] = useState("");
  const [allMessages, setAllMessages] = useState<
    { sender: string; content: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    setAllMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", content: newMessage },
    ]);

    setLoading(true);
    setError(null);

    try {
      const res = await chatWithLexi(newMessage);
      setAllMessages((prevMessages) => [
        ...prevMessages,
        { sender: "lexi", content: res.response },
      ]);
    } catch {
      setError("Failed to get response from Lexi.");
    } finally {
      setLoading(false);
    }

    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-full max-w-xl mx-auto">
      <div className="flex-grow overflow-y-auto space-y-4 p-4">
        {allMessages.map((msg, index) => (
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
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder={t("analytics_page.lexi_chat.placeholder")}
          className="w-full p-2 border rounded bg-white text-black"
        />
        <button
          onClick={handleSendMessage}
          disabled={loading}
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300 mt-2"
        >
          {t("analytics_page.lexi_chat.button")}
        </button>
      </div>

      {loading && <p className="mt-2 text-center text-blue-500">Loading...</p>}
      {error && <p className="mt-2 text-center text-red-500">{error}</p>}
    </div>
  );
};

export default LexiChat;
