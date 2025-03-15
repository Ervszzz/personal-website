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
      "I'm skilled in frontend technologies like React, HTML, CSS, JavaScript, and TailwindCSS. For backend, I work with Python, PHP, Laravel, C#, and Mocha JS. I also have experience with DevOps tools like DataDog, Betterstack, ArgoCD, and GitHub Actions, as well as RPA (Robotic Process Automation).",
  },
  {
    questions: [
      "What is your experience?",
      "Where have you worked?",
      "What's your work history?",
      "Tell me about your experience",
    ],
    answer:
      "I have experience as a Software Engineer developing applications with modern technologies. His journey spans Python development, data engineering, and DevOps automation. I've built everything from automated ETL pipelines to AI-powered applications and responsive web interfaces.",
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
      "He has worked on various projects including web applications, data pipelines, and automation tools. You can see details of his projects in the Projects section of this portfolio.",
  },
  {
    questions: [
      "Are you available for hire?",
      "Are you looking for work?",
      "Job availability",
    ],
    answer:
      "Yes, he is currently available for full-time positions. I'm particularly interested in roles involving software engineering, data engineering, or DevOps.",
  },
  {
    questions: [
      "What is your education?",
      "Where did you study?",
      "Educational background",
    ],
    answer:
      "He has a degree in Computer Science with a focus on software development and data engineering.",
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
        onClick={() => setIsOpen(!isOpen)}
        className="bg-tech-cyan hover:bg-tech-teal text-tech-dark p-3 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
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
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-tech-dark border border-tech-cyan shadow-xl rounded-lg overflow-hidden transition-all duration-300">
          {/* Chat header */}
          <div className="bg-tech-gray-dark p-3 border-b border-tech-cyan/30">
            <h3 className="text-tech-cyan font-tech text-lg">
              Portfolio Assistant
            </h3>
            <p className="text-tech-light/70 text-xs">
              Ask me about Ervin's skills & experience
            </p>
          </div>

          {/* Chat messages */}
          <div className="h-80 overflow-y-auto p-3 bg-tech-gray-dark/50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 ${
                  message.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  className={`inline-block p-2 rounded-lg max-w-[80%] ${
                    message.sender === "user"
                      ? "bg-tech-cyan text-tech-dark"
                      : "bg-tech-gray-dark text-tech-light"
                  }`}
                >
                  {message.text}
                </div>
                <div className="text-xs text-tech-light/50 mt-1">
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
            className="p-3 border-t border-tech-cyan/30 bg-tech-gray-dark"
          >
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about skills, experience, etc."
                className="flex-1 bg-tech-dark text-tech-light p-2 rounded-l-lg border border-tech-cyan/30 focus:outline-none focus:border-tech-cyan"
              />
              <button
                type="submit"
                className="bg-tech-cyan hover:bg-tech-teal text-tech-dark p-2 rounded-r-lg transition-colors duration-300"
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
