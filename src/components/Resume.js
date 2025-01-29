import ResumeImg from '../assets/resume.jpg'; // Importing image for display
import resumeFile from '../assets/resume.pdf'; // Importing the resume PDF for download

export default function Resume() {
  return (
    <section id="resume" className="flex flex-col md:flex-row bg-secondary px-5">
      <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
        <img className="w-[300px]" src={ResumeImg} alt="Resume" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-black">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold">
            Resume
          </h1>
          <p className="pb-5">
            You can view my resume{' '}
            <a className="btn" href={resumeFile} download>
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
