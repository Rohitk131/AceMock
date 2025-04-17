"use server";

import Groq from "groq-sdk";
import { revalidatePath } from "next/cache";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function analyzeResume(formData: FormData) {
  try {
    const resumeFile = formData.get("resume") as File;

    if (!resumeFile) {
      throw new Error("No resume file provided");
    }

    const fileText = await resumeFile.text();

    const completion = await groq.chat.completions.create({
      model: "llama-3-70b-8192",
      messages: [
        {
          role: "user",
          content: `
You are an expert ATS (Applicant Tracking System) analyzer and resume improvement specialist.

Analyze the following resume and provide:
1. An ATS compatibility score from 0-100
2. A list of 3-5 specific issues that could cause the resume to be rejected by ATS systems
3. A list of 3-5 strengths in the resume
4. A list of 3-5 specific recommendations to improve the resume for ATS compatibility

Format your response as a JSON object with the following structure:
{
  "score": number,
  "issues": string[],
  "strengths": string[],
  "recommendations": string[]
}

Only return the JSON object, nothing else.

Here is the resume to analyze:
${fileText}
          `,
        },
      ],
    });

    const rawResponse = completion.choices[0]?.message?.content || "";

    const result = JSON.parse(rawResponse);

    revalidatePath("/");

    return result;
  } catch (error) {
    console.error("Error analyzing resume:", error);
    throw new Error("Failed to analyze resume");
  }
}
