const RESUME_PATH = "/personal-website/resume/Ervin_Fernandez_Resume.pdf";

const ResumeDownload = () => (
  <a
    href={RESUME_PATH}
    download="Ervin_Fernandez_Resume.pdf"
    className="inline-flex items-center justify-center gap-2 bg-tech-cyan hover:bg-tech-teal text-tech-dark font-semibold py-3 px-6 transition-colors duration-200"
  >
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
    </svg>
    Download resume
  </a>
);

export default ResumeDownload;
