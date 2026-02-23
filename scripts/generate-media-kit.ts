import fs from "node:fs/promises";
import path from "node:path";

import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";

import { MediaKitDocument, type MediaKitAssets } from "../media-kit/MediaKitDocument";
import { siteConfig } from "../lib/site";

type AssetRule = {
  target: string;
  candidates: string[];
};

const root = process.cwd();

async function exists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function ensureDirectory(filePath: string): Promise<void> {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function ensureAsset(rule: AssetRule): Promise<string> {
  const targetPath = path.join(root, rule.target);

  if (await exists(targetPath)) {
    return targetPath;
  }

  for (const candidate of rule.candidates) {
    const candidatePath = path.join(root, candidate);
    if (await exists(candidatePath)) {
      await ensureDirectory(targetPath);
      await fs.copyFile(candidatePath, targetPath);
      return targetPath;
    }
  }

  throw new Error(`Asset not found for target: ${rule.target}`);
}

async function prepareAssets(): Promise<MediaKitAssets> {
  const rules: Record<string, AssetRule> = {
    pdfCover: {
      target: "public/assets/pdf/pdf-image.png",
      candidates: [
        "public/assets/pdf/pdf-image.png",
        "pdf-image.png",
        "pdf-image.jpg",
        "pdf-image.jpeg"
      ]
    },
    cover: {
      target: "public/assets/cover-main.jpg",
      candidates: ["public/assets/cover-main.jpg", "cover-main.jpg.jpg"]
    },
    headshot: {
      target: "public/assets/headshot/headshot-main.png",
      candidates: [
        "public/assets/headshot/headshot-main.png",
        "public/assets/headshot/headshot-main.jpg",
        "headshot-main.jpg.JPG"
      ]
    },
    analytics7days: {
      target: "public/assets/analytics/analytics-7days.jpg",
      candidates: ["public/assets/analytics/analytics-7days.jpg", "analytics-7days-800k.jpg.jpg"]
    },
    analyticsFollowers: {
      target: "public/assets/analytics/analytics-followers.jpg",
      candidates: [
        "public/assets/analytics/analytics-followers.jpg",
        "analytics-followers-growth.jpg.jpg"
      ]
    },
    analyticsTotalLikes: {
      target: "public/assets/analytics/analytics-total-likes.jpg",
      candidates: [
        "public/assets/analytics/analytics-total-likes.jpg",
        "public/assets/analytics/analytics-likes.jpg",
        "analytics-total-likes.jpg.jpg"
      ]
    },
    analyticsProfile: {
      target: "public/assets/analytics/analytics-profile.jpg",
      candidates: [
        "public/assets/analytics/analytics-profile.jpg",
        "public/assets/analytics/analytics-video-top.jpg",
        "analytics-video-top-400k.jpg.jpg"
      ]
    },
    proof1: {
      target: "public/assets/proof/proof.jpg",
      candidates: [
        "public/assets/proof/proof.jpg",
        "proof.JPG",
        "proof.jpg",
        "public/assets/proof/proof-01.jpg",
        "public/assets/portfolio/portfolio-transformacion-02.jpg"
      ]
    },
    proof2: {
      target: "public/assets/proof/proof2.jpg",
      candidates: [
        "public/assets/proof/proof2.jpg",
        "proof2.JPG",
        "proof2.jpg",
        "public/assets/proof/proof-02.jpg",
        "public/assets/portfolio/portfolio-skincare-01.jpg"
      ]
    },
    proof3: {
      target: "public/assets/proof/proof3.jpg",
      candidates: [
        "public/assets/proof/proof3.jpg",
        "proof3.JPG",
        "proof3.jpg",
        "public/assets/proof/proof-03.jpg",
        "public/assets/portfolio/portfolio-update-01.jpg"
      ]
    },
    proof4: {
      target: "public/assets/proof/proof4.jpg",
      candidates: [
        "public/assets/proof/proof4.jpg",
        "proof4.JPG",
        "proof4.jpg",
        "public/assets/proof/proof-04.jpg",
        "public/assets/portfolio/portfolio-educativo-01.jpg"
      ]
    }
  };

  return {
    pdfCover: await ensureAsset(rules.pdfCover),
    cover: await ensureAsset(rules.cover),
    headshot: await ensureAsset(rules.headshot),
    analytics7days: await ensureAsset(rules.analytics7days),
    analyticsFollowers: await ensureAsset(rules.analyticsFollowers),
    analyticsTotalLikes: await ensureAsset(rules.analyticsTotalLikes),
    analyticsProfile: await ensureAsset(rules.analyticsProfile),
    proof: [
      await ensureAsset(rules.proof1),
      await ensureAsset(rules.proof2),
      await ensureAsset(rules.proof3),
      await ensureAsset(rules.proof4)
    ]
  };
}

async function main() {
  const assets = await prepareAssets();

  const document = React.createElement(MediaKitDocument, {
    assets,
    email: siteConfig.email,
    tiktok: siteConfig.tiktokHandle,
    location: siteConfig.location
  }) as unknown as React.ReactElement;

  const buffer = await renderToBuffer(document);

  const outputMain = path.join(root, "public/media-kit.pdf");
  const outputLegacy = path.join(root, "public/assets/media-kit/media-kit.pdf");

  await ensureDirectory(outputMain);
  await ensureDirectory(outputLegacy);

  await fs.writeFile(outputMain, buffer);
  await fs.writeFile(outputLegacy, buffer);

  console.log(`Media kit generated: ${outputMain}`);
}

main().catch((error) => {
  console.error("Failed to generate media kit PDF:", error);
  process.exit(1);
});
