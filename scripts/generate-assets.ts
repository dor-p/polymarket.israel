import { generateImage } from "../src/lib/generate-image";
import * as path from "path";
import * as fs from "fs";
import sharp from "sharp";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const IMAGES_DIR = path.join(PUBLIC_DIR, "images");

// Brand colors
const BRAND_COLORS = {
  primary: "#0066FF", // Blue
  accent: "#00D4AA", // Teal
  secondary: "#1a1a2e", // Dark
};

// Image prompts
const PROMPTS = {
  favicon: `Create a modern, minimalist fintech logo icon for a prediction market platform.
Design requirements:
- Simple geometric shape that works at 16x16 pixels
- Use blue (#0066FF) as primary color with teal (#00D4AA) accent
- Abstract representation of prediction/forecasting - could be a stylized chart arrow pointing up, a crystal ball silhouette, or an abstract "P" lettermark
- Clean, flat design without gradients or complex details
- Professional and trustworthy feel
- Icon should be centered with some padding
- White or transparent background
- No text or letters
Style: Modern fintech app icon, similar to Robinhood or Coinbase app icons`,

  ogImage: `Create a professional social media sharing card image for "פולימרקט ישראל" (Polymarket Israel) - a prediction markets platform.
Design requirements:
- Landscape orientation (1200x630 pixels aspect ratio)
- Blue (#0066FF) to dark blue gradient background
- Modern, clean fintech aesthetic
- Abstract visualization of trading/prediction charts in the background
- The Hebrew text "פולימרקט ישראל" prominently displayed (or leave space for text overlay)
- Teal (#00D4AA) accent elements
- Professional, trustworthy appearance
- Subtle grid or data visualization patterns
Style: Modern fintech social card, premium feel, suitable for sharing on Twitter/LinkedIn`,

  heroBg: `Create an abstract background image for a prediction market trading platform hero section.
Design requirements:
- Landscape orientation (16:9 aspect ratio)
- Dark theme with blue (#0066FF) and teal (#00D4AA) color scheme
- Abstract representation of:
  - Trading charts and candlestick patterns
  - Network/blockchain nodes connected by lines
  - Data visualization elements
  - Futuristic dashboard interface elements
- Subtle, not overwhelming - should work as a background
- Modern cryptocurrency/fintech aesthetic
- Smooth gradients and glowing effects
- No text
- Semi-transparent elements suitable for text overlay
Style: Futuristic fintech dashboard, crypto trading platform aesthetic, abstract data visualization`,
};

async function generateFavicon() {
  console.log("\n=== Generating Favicon Set ===\n");

  // Generate base icon at 512x512
  const baseIconPath = path.join(PUBLIC_DIR, "icon.png");
  await generateImage({
    prompt: PROMPTS.favicon,
    outputPath: baseIconPath,
    aspectRatio: "1:1",
  });

  // Create different sizes using sharp
  console.log("Creating favicon sizes...");

  // Apple icon 180x180
  await sharp(baseIconPath)
    .resize(180, 180)
    .png()
    .toFile(path.join(PUBLIC_DIR, "apple-icon.png"));
  console.log("Created: apple-icon.png (180x180)");

  // Create favicon.ico with multiple sizes
  const sizes = [16, 32, 48];
  const icoBuffers: Buffer[] = [];

  for (const size of sizes) {
    const buffer = await sharp(baseIconPath).resize(size, size).png().toBuffer();
    icoBuffers.push(buffer);
    console.log(`Prepared: ${size}x${size} for favicon.ico`);
  }

  // For simplicity, we'll create a 32x32 PNG as favicon.ico
  // (True .ico format would require additional library)
  await sharp(baseIconPath)
    .resize(32, 32)
    .png()
    .toFile(path.join(PUBLIC_DIR, "favicon.ico"));
  console.log("Created: favicon.ico (32x32)");

  // Also create a 192x192 for Android
  await sharp(baseIconPath)
    .resize(192, 192)
    .png()
    .toFile(path.join(PUBLIC_DIR, "icon-192.png"));
  console.log("Created: icon-192.png (192x192)");
}

async function generateOGImage() {
  console.log("\n=== Generating OG Image ===\n");

  await generateImage({
    prompt: PROMPTS.ogImage,
    outputPath: path.join(PUBLIC_DIR, "og-image.png"),
    aspectRatio: "16:9",
  });
}

async function generateHeroBackground() {
  console.log("\n=== Generating Hero Background ===\n");

  // Ensure images directory exists
  if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
  }

  await generateImage({
    prompt: PROMPTS.heroBg,
    outputPath: path.join(IMAGES_DIR, "hero-bg.png"),
    aspectRatio: "16:9",
  });
}

async function main() {
  console.log("=================================================");
  console.log("  Polymarket Israel - Asset Generation Script   ");
  console.log("=================================================");
  console.log(`\nBrand Colors:`);
  console.log(`  Primary: ${BRAND_COLORS.primary}`);
  console.log(`  Accent: ${BRAND_COLORS.accent}`);
  console.log(`  Secondary: ${BRAND_COLORS.secondary}`);

  // Check for API key
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY && !process.env.GEMINI_API_KEY) {
    console.error("\nError: GOOGLE_GENERATIVE_AI_API_KEY or GEMINI_API_KEY environment variable is required");
    console.error("Set it in .env.local or export it in your shell");
    process.exit(1);
  }

  try {
    // Generate all assets
    await generateFavicon();
    await generateOGImage();
    await generateHeroBackground();

    console.log("\n=================================================");
    console.log("  All assets generated successfully!             ");
    console.log("=================================================");
    console.log("\nGenerated files:");
    console.log("  - public/favicon.ico");
    console.log("  - public/icon.png (512x512)");
    console.log("  - public/icon-192.png (192x192)");
    console.log("  - public/apple-icon.png (180x180)");
    console.log("  - public/og-image.png");
    console.log("  - public/images/hero-bg.png");
  } catch (error) {
    console.error("\nError generating assets:", error);
    process.exit(1);
  }
}

main();
