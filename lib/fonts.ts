import localFont from "next/font/local";
import { Instrument_Serif } from "next/font/google";

export const fontDisplay = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-display", display: "swap" });
export const fontBody = localFont({ src: "../public/fonts/dmsans.ttf", variable: "--font-body", weight: "100 1000", display: "swap" });
