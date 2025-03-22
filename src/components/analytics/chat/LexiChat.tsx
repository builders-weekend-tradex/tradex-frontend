import { useState, useEffect, useRef } from "react";
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
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const cachedMessages = localStorage.getItem("lexiChatMessages");
    if (cachedMessages) {
      setAllMessages(JSON.parse(cachedMessages));
    }
  }, []);

  useEffect(() => {
    if (allMessages.length > 0) {
      localStorage.setItem("lexiChatMessages", JSON.stringify(allMessages));
    }
  }, [allMessages]);

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(event.target.value);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

      if (textareaRef.current.scrollHeight > 500) {
        textareaRef.current.style.height = "500px";
        textareaRef.current.style.overflowY = "scroll";
      } else {
        textareaRef.current.style.overflowY = "hidden";
      }
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    setAllMessages((prev) => [
      ...prev,
      { sender: "user", content: newMessage },
    ]);

    setLoading(true);
    setError(null);

    try {
      const res = await chatWithLexi(newMessage);
      setAllMessages((prev) => [
        ...prev,
        { sender: "lexi", content: res.response },
      ]);
    } catch {
      setError("Failed to get response from Lexi.");
    } finally {
      setLoading(false);
    }

    setNewMessage("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.overflowY = "hidden";
    }
  };

  return (
    <div className="flex flex-col max-w-xl h-full mx-auto bg-white rounded-lg mb-2">
      <div className="flex-grow overflow-y-auto space-y-4 p-4 pb-12">
        {" "}
        {allMessages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-xs break-words ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-white"
              }`}
            >
              <strong>{msg.sender === "user" ? "You" : "Lexi"}:</strong>{" "}
              {msg.content}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-4">
        <textarea
          ref={textareaRef}
          value={newMessage}
          onChange={handleInput}
          placeholder={t("analytics_page.lexi_chat.placeholder")}
          className="w-full p-2 border rounded bg-white text-black resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ minHeight: "40px", maxHeight: "500px", overflowY: "hidden" }}
        />
        <button
          onClick={handleSendMessage}
          disabled={loading}
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300 mt-2"
        >
          {loading ? "Sending..." : t("analytics_page.lexi_chat.button")}
        </button>
      </div>

      {error && <p className="mt-2 text-center text-red-500">{error}</p>}
    </div>
  );
};

export default LexiChat;
