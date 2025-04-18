"use client";

import type React from "react";

import { useState } from "react";
import {
  Upload,
  FileText,
  CheckCircle,
  AlertCircle,
  Loader2,
  Download,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { analyzeResume } from "@/lib/actions";
import { cn } from "@/lib/utils";

export function ResumeAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    score: number;
    issues: string[];
    strengths: string[];
    recommendations: string[];
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (
        selectedFile.type === "application/pdf" ||
        selectedFile.type === "application/msword" ||
        selectedFile.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        selectedFile.type === "text/plain"
      ) {
        setFile(selectedFile);
        setError(null);
      } else {
        setError("Please upload a PDF, DOC, DOCX, or TXT file");
        setFile(null);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setIsAnalyzing(true);
    setResult(null);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("resume", file);

      const result = await analyzeResume(formData);
      setResult(result);
    } catch (err) {
      setError("Failed to analyze resume. Please try again.");
      console.error(err);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500 dark:text-green-400";
    if (score >= 60) return "text-yellow-500 dark:text-yellow-400";
    return "text-red-500 dark:text-red-400";
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-gradient-to-r from-green-500 to-emerald-500";
    if (score >= 60) return "bg-gradient-to-r from-yellow-500 to-amber-500";
    return "bg-gradient-to-r from-red-500 to-rose-500";
  };

  return (
    <div className="space-y-6">
      {!result ? (
        <Card className="border border-border/40 shadow-lg backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl">Upload Your Resume</CardTitle>
            <CardDescription>
              {"We'll analyze your resume against ATS systems and provide feedback"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div
                className={cn(
                  "border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all",
                  "hover:border-[#9248ff]/70 hover:bg-[#9248ff]/5",
                  "dark:hover:border-[#ff77a5]/70 dark:hover:bg-[#ff77a5]/5",
                  error ? "border-red-400" : "border-border"
                )}
                onClick={() =>
                  document.getElementById("resume-upload")?.click()
                }
              >
                <input
                  type="file"
                  id="resume-upload"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.txt"
                />
                <div className="flex flex-col items-center justify-center space-y-3 py-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#9248ff]/20 via-[#ff77a5]/20 to-[#ffb340]/20 flex items-center justify-center">
                    <Upload className="h-8 w-8 text-[#ff77a5]" />
                  </div>
                  {file ? (
                    <div className="flex items-center space-x-2 bg-[#9248ff]/10 dark:bg-[#9248ff]/20 px-4 py-2 rounded-full">
                      <FileText className="h-5 w-5 text-[#9248ff]" />
                      <span className="font-medium text-[#9248ff] dark:text-[#ff77a5]">
                        {file.name}
                      </span>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-base font-medium">
                        Drag and drop your resume or click to browse
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Supports PDF, DOC, DOCX, and TXT files
                      </p>
                    </div>
                  )}
                </div>
              </div>
              {error && (
                <div className="text-red-500 dark:text-red-400 text-sm flex items-center space-x-1">
                  <AlertCircle className="h-4 w-4" />
                  <span>{error}</span>
                </div>
              )}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#9248ff] via-[#ff77a5] to-[#ffb340] hover:opacity-90 transition-opacity text-white"
                disabled={!file || isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing Resume...
                  </>
                ) : (
                  "Analyze Resume"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <Card className="border border-border/40 shadow-lg backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl">ATS Analysis Results</CardTitle>
                <CardDescription>
                  {"Here's how your resume performs against ATS systems"}
                </CardDescription>
              </div>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#9248ff]/10 via-[#ff77a5]/10 to-[#ffb340]/10">
                <div
                  className={cn(
                    "text-2xl font-bold",
                    getScoreColor(result.score)
                  )}
                >
                  {result.score}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">ATS Compatibility Score</h3>
                <span
                  className={cn(
                    "text-xl font-bold",
                    getScoreColor(result.score)
                  )}
                >
                  {result.score}/100
                </span>
              </div>
              <Progress
                value={result.score}
                className={getProgressColor(result.score)}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3 p-4 rounded-lg bg-background/50 border border-border/50">
                <h3 className="font-medium flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 dark:text-red-400 mr-2" />
                  Issues to Address
                </h3>
                <ul className="space-y-2 pl-7 list-disc text-sm">
                  {result.issues.map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 p-4 rounded-lg bg-background/50 border border-border/50">
                <h3 className="font-medium flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
                  Resume Strengths
                </h3>
                <ul className="space-y-2 pl-7 list-disc text-sm">
                  {result.strengths.map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-3 p-4 rounded-lg bg-gradient-to-r from-[#9248ff]/5 via-[#ff77a5]/5 to-[#ffb340]/5 border border-[#ff77a5]/20">
              <h3 className="font-medium">Recommendations</h3>
              <ul className="space-y-2 pl-7 list-disc text-sm">
                {result.recommendations.map((recommendation, index) => (
                  <li key={index}>{recommendation}</li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <Button
              variant="outline"
              onClick={() => setResult(null)}
              className="gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Analyze Another Resume
            </Button>
            <Button className="bg-gradient-to-r from-[#9248ff] via-[#ff77a5] to-[#ffb340] hover:opacity-90 transition-opacity text-white gap-2">
              <Download className="h-4 w-4" />
              Download Full Report
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
