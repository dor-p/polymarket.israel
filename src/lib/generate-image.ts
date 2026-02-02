import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import * as fs from "fs";
import * as path from "path";

export type AspectRatio = "1:1" | "16:9" | "9:16" | "3:4" | "4:3";

interface GenerateImageOptions {
  prompt: string;
  outputPath: string;
  aspectRatio?: AspectRatio;
}

export async function generateImage({
  prompt,
  outputPath,
}: GenerateImageOptions): Promise<string> {
  console.log(`Generating image: ${path.basename(outputPath)}`);
  console.log(`Prompt: ${prompt.substring(0, 100)}...`);

  const result = await generateText({
    model: google("gemini-2.0-flash-exp-image-generation"),
    providerOptions: {
      google: {
        responseModalities: ["TEXT", "IMAGE"],
      },
    },
    prompt,
  });

  // Extract image from response
  const imageFile = result.files?.[0];
  if (!imageFile) {
    throw new Error("No image generated in response");
  }

  // Decode base64 and save to file
  const imageBuffer = Buffer.from(imageFile.base64, "base64");

  // Ensure directory exists
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(outputPath, imageBuffer);
  console.log(`Saved: ${outputPath}`);

  return outputPath;
}
