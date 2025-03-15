import { useState, useEffect } from "react";

interface ResumeFormat {
  id: string;
  name: string;
  icon: string;
  file: string;
}

interface ResumeSection {
  id: string;
  name: string;
  default: boolean;
}

const InteractiveResumeDownload = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedFormat, setSelectedFormat] = useState<string>("pdf");
  const [selectedSections, setSelectedSections] = useState<string[]>([
    "skills",
    "experience",
    "education",
    "projects",
    "contact",
  ]);
  const [downloadReady, setDownloadReady] = useState(false);

  const resumeFormats: ResumeFormat[] = [
    {
      id: "pdf",
      name: "PDF",
      icon: "📄",
      file: "/resume/Ervin_Fernandez_Resume.pdf",
    },
    {
      id: "docx",
      name: "Word (DOCX)",
      icon: "📝",
      file: "/resume/Ervin_Fernandez_Resume.docx",
    },
    {
      id: "txt",
      name: "Plain Text (ATS-Friendly)",
      icon: "📋",
      file: "/resume/Ervin_Fernandez_Resume.txt",
    },
  ];

  const resumeSections: ResumeSection[] = [
    { id: "skills", name: "Skills & Technologies", default: true },
    { id: "experience", name: "Work Experience", default: true },
    { id: "education", name: "Education", default: true },
    { id: "projects", name: "Projects", default: true },
    { id: "contact", name: "Contact Information", default: true },
  ];

  useEffect(() => {
    if (isGenerating) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + Math.random() * 15;
          if (newProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsGenerating(false);
              setDownloadReady(true);
            }, 500);
            return 100;
          }
          return newProgress;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [isGenerating]);

  const handleSectionToggle = (sectionId: string) => {
    setSelectedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setProgress(0);
    setDownloadReady(false);
  };

  const handleDownload = () => {
    // Get the selected format
    const format = resumeFormats.find((f) => f.id === selectedFormat);

    if (format) {
      // Create a link to download the file
      const link = document.createElement("a");
      link.href = format.file;
      link.download = `Ervin_Fernandez_Resume.${format.id}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset the state
      setDownloadReady(false);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-tech-cyan hover:bg-tech-teal text-tech-dark font-bold py-2 px-4 rounded-none border border-tech-cyan hover:shadow-neon transition duration-300 font-tech flex items-center"
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

      {isOpen && (
        <div className="absolute mt-2 right-0 w-80 bg-tech-dark border border-tech-cyan shadow-xl rounded-none z-50">
          <div className="p-4">
            <h3 className="text-tech-cyan font-tech text-lg mb-4 border-b border-tech-cyan/30 pb-2">
              Resume Generator
            </h3>

            {!isGenerating && !downloadReady && (
              <>
                <div className="mb-4">
                  <h4 className="text-tech-light font-tech text-sm mb-2">
                    Select Format:
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {resumeFormats.map((format) => (
                      <label
                        key={format.id}
                        className={`flex items-center p-2 border ${
                          selectedFormat === format.id
                            ? "border-tech-cyan bg-tech-gray-dark/50"
                            : "border-tech-gray-dark/50"
                        } cursor-pointer hover:bg-tech-gray-dark/30 transition-colors duration-200`}
                      >
                        <input
                          type="radio"
                          name="format"
                          value={format.id}
                          checked={selectedFormat === format.id}
                          onChange={() => setSelectedFormat(format.id)}
                          className="mr-2 accent-tech-cyan"
                        />
                        <span className="mr-2">{format.icon}</span>
                        <span className="text-tech-light">{format.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-tech-light font-tech text-sm mb-2">
                    Include Sections:
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {resumeSections.map((section) => (
                      <label
                        key={section.id}
                        className={`flex items-center p-2 border ${
                          selectedSections.includes(section.id)
                            ? "border-tech-cyan bg-tech-gray-dark/50"
                            : "border-tech-gray-dark/50"
                        } cursor-pointer hover:bg-tech-gray-dark/30 transition-colors duration-200`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedSections.includes(section.id)}
                          onChange={() => handleSectionToggle(section.id)}
                          className="mr-2 accent-tech-cyan"
                        />
                        <span className="text-tech-light">{section.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={selectedSections.length === 0}
                  className={`w-full py-2 px-4 font-tech text-center ${
                    selectedSections.length === 0
                      ? "bg-tech-gray-dark/50 text-tech-light/50 cursor-not-allowed"
                      : "bg-tech-cyan hover:bg-tech-teal text-tech-dark hover:shadow-neon"
                  } transition duration-300`}
                >
                  Generate Resume
                </button>
              </>
            )}

            {isGenerating && (
              <div className="py-4">
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
                  <p className="mb-1">
                    📊 Optimizing for{" "}
                    {resumeFormats.find((f) => f.id === selectedFormat)?.name}
                    ...
                  </p>
                  <p className="mb-1">🔍 Enhancing ATS compatibility...</p>
                  <p>✨ Adding tech flair...</p>
                </div>
              </div>
            )}

            {downloadReady && (
              <div className="py-4">
                <div className="text-center mb-4">
                  <div className="inline-block p-3 rounded-full bg-tech-cyan/20 text-tech-cyan mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="text-tech-cyan font-tech text-lg">
                    Resume Ready!
                  </h4>
                  <p className="text-tech-light/70 text-sm mt-1">
                    Your custom resume has been generated with{" "}
                    {selectedSections.length} sections in{" "}
                    {resumeFormats.find((f) => f.id === selectedFormat)?.name}{" "}
                    format.
                  </p>
                </div>
                <button
                  onClick={handleDownload}
                  className="w-full py-2 px-4 bg-tech-cyan hover:bg-tech-teal text-tech-dark font-tech hover:shadow-neon transition duration-300 flex items-center justify-center"
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
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download Now
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveResumeDownload;
