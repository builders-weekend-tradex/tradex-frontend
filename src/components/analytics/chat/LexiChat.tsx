import { useState, useEffect, useRef, useContext } from "react";
import { chatWithLexi } from "../../../utilities/api";
import { useTranslation } from "react-i18next";
import { TickerContext } from "../../../context/TickerContext";

interface TickerContextType {
  ticker: string | null;
}

const LexiChat: React.FC = () => {
  const { ticker } = useContext(TickerContext) as TickerContextType;

  const prompts = [
    {
      label: "Profitability Ratios",
      prompt: `Calculate Profitability Ratios from /data/home/${ticker}.pdf`,
    },
    {
      label: "Liquidity Ratios",
      prompt: `Calculate and summarize Liquidity Ratios for /data/home/${ticker}.pdf`,
    },
    {
      label: "Solvency Ratios",
      prompt: `Calculate and summarize Solvency Ratios for /data/home/${ticker}.pdf`,
    },
    {
      label: "Valuation Ratios",
      prompt: `Calculate and summarize Valuation Ratios for /data/home/${ticker}.pdf`,
    },
    {
      label: "Competitive Advantages",
      prompt: `Calculate and summarize Competitive Advantages for /data/home/${ticker}.pdf`,
    },
    {
      label: "Management Quality",
      prompt: `Calculate and summarize Management Quality for /data/home/${ticker}.pdf`,
    },
    {
      label: "Industry Trends",
      prompt: `Calculate and summarize Industry Trends for /data/home/${ticker}.pdf`,
    },
    {
      label: "Growth Prospects",
      prompt: `Calculate and summarize Growth Prospects for /data/home/${ticker}.pdf`,
    },
    {
      label: "Corporate Governance",
      prompt: `Calculate and summarize Corporate Governance for /data/home/${ticker}.pdf`,
    },
    {
      label: "ESG Factors",
      prompt: `Calculate and summarize ESG Factors for /data/home/${ticker}.pdf`,
    },
    {
      label: "Fundamental Analysis",
      prompt: `Give Fundamental Analysis for /data/home/${ticker}.pdf`,
    },
  ];

  const [newMessage, setNewMessage] = useState("");
  const [allMessages, setAllMessages] = useState<
    { sender: string; content: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const cachedMessages = sessionStorage.getItem("lexiChatMessages");
    if (cachedMessages) {
      setAllMessages(JSON.parse(cachedMessages));
    }
  }, []);

  useEffect(() => {
    if (allMessages.length > 0) {
      sessionStorage.setItem("lexiChatMessages", JSON.stringify(allMessages));
    }
  }, [allMessages]);

  // useEffect to clear the session storage cache when ticker context updates
  useEffect(() => {
    const previousTicker = sessionStorage.getItem("previousTicker") || "";

    if (previousTicker !== ticker) {
      sessionStorage.removeItem("lexiChatMessages");
      setAllMessages([]);
      sessionStorage.setItem("previousTicker", ticker || "");
    }
  }, [ticker]);

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(event.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      textareaRef.current.style.overflowY =
        textareaRef.current.scrollHeight > 500 ? "scroll" : "hidden";
    }
  };

  const handleSendMessage = async (message?: string) => {
    const inputMessage = message || newMessage;
    if (!inputMessage.trim()) return;

    setAllMessages((previousMessages) => [
      ...previousMessages,
      { sender: "user", content: inputMessage },
    ]);

    setLoading(true);
    setError(null);

    try {
      const res = await chatWithLexi(inputMessage);
      setAllMessages((previousMessages) => [
        ...previousMessages,
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
    <div className="flex flex-col w-full h-full mx-auto bg-gray rounded-lg mb-2">
      <div className="p-4 flex flex-wrap gap-2 bg-white border-b">
        {prompts.map(({ label, prompt }, index) => (
          <button
            key={index}
            onClick={() => handleSendMessage(prompt)}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex-grow overflow-y-auto space-y-4 p-4 px-12 pb-12">
        {allMessages.map((msg, index) => {
          let filteredContent = msg.content;

          // Remove <think> blocks and TOOL lines
          filteredContent = filteredContent.replace(
            /<think>[\s\S]*?<\/think>/g,
            ""
          );
          filteredContent = filteredContent.replace(/TOOL: .*?({.*?})?/g, "");
          filteredContent = filteredContent.replace(/\*\*/g, "");

          return (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-4xl min-w-md break-words ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-white"
                }`}
              >
                <strong>{msg.sender === "user" ? "You" : "Lexi"}:</strong>
                {msg.sender === "lexi" ? (
                  <div className="space-y-2 mt-1">
                    {filteredContent.split("\n").map((paragraph, i) => (
                      <p key={i} className="mb-2">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className="mt-1">{msg.content}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 p-4 bg-white">
        <textarea
          ref={textareaRef}
          value={newMessage}
          onChange={handleInput}
          placeholder={t("analytics_page.lexi_chat.placeholder")}
          className="w-full p-2 border rounded bg-white text-black resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ minHeight: "40px", maxHeight: "500px", overflowY: "hidden" }}
        />
        <button
          onClick={() => handleSendMessage()}
          disabled={loading}
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300 mt-2"
        >
          {loading
            ? t("analytics_page.lexi_chat.sending")
            : t("analytics_page.lexi_chat.button")}
        </button>
      </div>

      {error && <p className="mt-2 text-center text-red-500">{error}</p>}
    </div>
  );
};

export default LexiChat;
