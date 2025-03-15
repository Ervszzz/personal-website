import { useState, useEffect } from "react";

const ResumeDownload = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isGenerating) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + Math.random() * 15;
          if (newProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsGenerating(false);
              // Automatically trigger download when generation is complete
              downloadResume();
            }, 500);
            return 100;
          }
          return newProgress;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [isGenerating]);

  const handleGenerate = () => {
    setIsGenerating(true);
    setProgress(0);
  };

  const downloadResume = () => {
    // Create a link to download the file
    const link = document.createElement("a");
    link.href = "/personal-website/resume/Ervin_Fernandez_Resume.pdf";
    link.download = "Ervin_Fernandez_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isGenerating) {
    return (
      <div className="relative inline-block w-full sm:w-auto">
        <div className="bg-tech-dark border border-tech-cyan p-4 rounded-none">
          <div className="flex justify-between mb-2">
            <span className="text-tech-light text-sm">
              Generating resume...
            </span>
            <span className="text-tech-cyan text-sm">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-tech-gray-dark/50 h-2 rounded-none overflow-hidden">
            <div
              className="bg-tech-cyan h-full transition-all duration-200"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="mt-4 text-tech-light/70 text-xs">
            <p className="mb-1">⚙️ Formatting sections...</p>
            <p className="mb-1">📊 Optimizing for PDF...</p>
            <p className="mb-1">🔍 Enhancing ATS compatibility...</p>
            <p>✨ Adding tech flair...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={handleGenerate}
      className="bg-tech-cyan hover:bg-tech-teal text-tech-dark font-bold py-3 px-6 rounded-none border border-tech-cyan hover:shadow-neon transition duration-300 font-tech flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      Download Resume
    </button>
  );
};

export default ResumeDownload;
