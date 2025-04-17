import { ResumeAnalyzer } from "@/components/resume-analyzer";

export default function Home() {
  return (
    <main className="mt-20 lg:mt-52 flex flex-col items-center p-4 md:p-8 bg-gradient-to-b from-background to-muted/50">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#9248ff] via-[#ff77a5] to-[#ffb340]">
                Resume ATS Analyzer
              </h1>
              <p className="text-muted-foreground text-lg max-w-md">
                Optimize your resume for Applicant Tracking Systems and increase
                your chances of landing interviews.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#9248ff] to-[#ff77a5] flex items-center justify-center text-white font-bold">
                  1
                </div>
                <p className="font-medium">
                  Upload your resume (PDF, DOC, DOCX, or TXT)
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#ff77a5] to-[#ffb340] flex items-center justify-center text-white font-bold">
                  2
                </div>
                <p className="font-medium">
                  Our AI analyzes your resume against ATS criteria
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#ffb340] to-[#9248ff] flex items-center justify-center text-white font-bold">
                  3
                </div>
                <p className="font-medium">
                  Get a detailed report with actionable improvements
                </p>
              </div>
            </div>
          </div>
          <div>
            <ResumeAnalyzer />
          </div>
        </div>
      </div>
    </main>
  );
}
