import { btnPrimary } from "./ui";

const RESUME_PATH = "/personal-website/resume/Ervin_Fernandez_Resume.pdf";

const ResumeDownload = () => (
  <a href={RESUME_PATH} download="Ervin_Fernandez_Resume.pdf" className={btnPrimary}>
    <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v11m0 0l-4-4m4 4l4-4M5 19h14" />
    </svg>
    Download resume
  </a>
);

export default ResumeDownload;
