import { useState, useRef, useEffect } from "react";

// Define the structure for chat messages
interface Message {
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

// FAQ data structure
interface FAQ {
  questions: string[];
  answer: string;
}

// Define your FAQs about skills, experience, and contact info
const faqs: FAQ[] = [
  {
    questions: [
      "What are your skills?",
      "What technologies do you know?",
      "What can you do?",
      "What are you good at?",
    ],
    answer:
      "My core is site reliability: Datadog, Grafana, incident.io, and Betterstack for observability and incidents, and AWS, Kubernetes, Docker, ArgoCD, and GitHub Actions for infrastructure. I write Python and Bash day to day, and I've also built with JavaScript, React, PHP, Laravel, and C#. Lately I build automation with Claude Code and LLMs.",
  },
  {
    questions: [
      "What is your experience?",
      "Where have you worked?",
      "What's your work history?",
      "Tell me about your experience",
    ],
    answer:
      "I'm currently a Software Engineer II – Site Reliability Engineer at Zendesk, focused on incident management, AI-assisted alert triage, and deployment safety. I built an AI alert triage bot that cut investigation time by 54% in its pilot. Previously, I worked as a Python Developer at Kodexa, building AI/ML solutions and data engineering pipelines. My journey spans SRE, Python development, data engineering, and DevOps automation.",
  },
  {
    questions: [
      "How can I contact you?",
      "What's your email?",
      "How do I reach you?",
      "Contact information",
    ],
    answer:
      "You can reach me through the contact form on this website, or directly via email at ervsfernandez21@gmail.com. I'm also available on LinkedIn linkedin.com/in/ervin-fernandez/",
  },
  {
    questions: [
      "What projects have you worked on?",
      "Show me your projects",
      "Portfolio projects",
    ],
    answer:
      "I've worked on various projects including web applications, data pipelines, and automation tools. You can see details in the Projects section of this portfolio.",
  },
  {
    questions: [
      "Are you available for hire?",
      "Are you looking for work?",
      "Job availability",
    ],
    answer:
      "I'm currently working full-time as an SRE II at Zendesk. I'm always open to interesting opportunities — feel free to reach out via the contact form.",
  },
  {
    questions: [
      "What is your education?",
      "Where did you study?",
      "Educational background",
    ],
    answer:
      "I have a degree in Computer Science with a focus on software development and data engineering.",
  },
  {
    questions: ["hello", "hi", "hey", "greetings", "what's up"],
    answer:
      "Hello! I'm Ervin's portfolio assistant. I can tell you about Ervin's skills, experience, projects, or contact information. What would you like to know?",
  },
];

// Simple function to find the best matching FAQ
function findBestMatch(query: string): string {
  // Convert query to lowercase for case-insensitive matching
  const normalizedQuery = query.toLowerCase().trim();

  // If query is empty, provide a default response
  if (!normalizedQuery) {
    return "I'm here to help you learn about Ervin's skills, experience, and how to contact him. What would you like to know?";
  }

  // Check for exact matches first
  for (const faq of faqs) {
    if (faq.questions.some((q) => q.toLowerCase() === normalizedQuery)) {
      return faq.answer;
    }
  }

  // If no exact match, look for partial matches
  let bestMatch: FAQ | null = null;
  let highestScore = 0;

  for (const faq of faqs) {
    for (const question of faq.questions) {
      // Calculate a simple matching score based on word overlap
      const questionWords = question.toLowerCase().split(/\s+/);
      const queryWords = normalizedQuery.split(/\s+/);

      let matchCount = 0;
      for (const word of queryWords) {
        if (
          word.length > 2 &&
          questionWords.some((qw) => qw.includes(word) || word.includes(qw))
        ) {
          matchCount++;
        }
      }

      const score = matchCount / queryWords.length;
      if (score > highestScore) {
        highestScore = score;
        bestMatch = faq;
      }
    }
  }

  // Return the best match if score is above threshold, otherwise a default response
  if (bestMatch && highestScore > 0.3) {
    return bestMatch.answer;
  }

  return "I'm not sure I understand that question. I can tell you about Ervin's skills, experience, projects, or how to contact him. Could you rephrase your question?";
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi there! I'm Ervin's portfolio assistant. I can answer questions about his skills, experience, and contact information. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate typing delay for bot response
    setTimeout(() => {
      const botResponse: Message = {
        text: findBestMatch(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Ask a question about Ervin"}
        aria-expanded={isOpen}
        className="bg-accent hover:bg-accent/85 text-accent-ink p-3 rounded-full shadow-lg transition-colors flex items-center justify-center"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[calc(100vw-2.5rem)] max-w-sm bg-surface border border-line shadow-xl rounded-lg overflow-hidden">
          {/* Chat header */}
          <div className="p-4 border-b border-line">
            <h3 className="font-semibold text-ink">
              Portfolio Assistant
            </h3>
            <p className="text-muted text-sm">
              Ask me about Ervin's skills & experience
            </p>
          </div>

          {/* Chat messages */}
          <div className="h-80 overflow-y-auto p-4 bg-bg">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block px-3 py-2 rounded-lg max-w-[85%] text-sm text-left ${
                    message.sender === "user"
                      ? "bg-accent text-accent-ink"
                      : "bg-surface border border-line text-ink"
                  }`}
                >
                  {message.text}
                </div>
                <div className="text-xs text-muted mt-1">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat input */}
          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-line"
          >
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about skills, experience, etc."
                aria-label="Your question"
                className="flex-1 min-w-0 bg-bg text-ink placeholder:text-muted/80 px-3 py-2 rounded-l-md border border-line focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                aria-label="Send question"
                className="bg-accent hover:bg-accent/85 text-accent-ink px-3 rounded-r-md transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
