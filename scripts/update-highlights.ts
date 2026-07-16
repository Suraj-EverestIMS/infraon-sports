import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const serviceAccount = JSON.parse(
  readFileSync(
    path.join(__dirname, "service-account.json"),
    "utf8"
  )
);

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

const highlights = [
  {
    id: "1",
    type: "image",
    url: "https://infraon-assets.s3.us-west-1.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2026/1000077023.jpg",
  },
  {
    id: "2",
    type: "image",
    url: "https://infraon-assets.s3.us-west-1.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2026/1000077024.jpg",
  },
  {
    id: "3",
    type: "image",
    url: "https://infraon-assets.s3.us-west-1.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2026/1000077028.jpg",
  },
  {
    id: "4",
    type: "image",
    url: "https://infraon-assets.s3.us-west-1.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2026/1000077029.jpg",
  },
  {
    id: "5",
    type: "image",
    url: "https://infraon-assets.s3.us-west-1.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2026/1000077035.jpg",
  },
  {
    id: "6",
    type: "image",
    url: "https://infraon-assets.s3.us-west-1.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2026/1000077039.jpg",
  },
  {
    id: "7",
    type: "image",
    url: "https://infraon-assets.s3.us-west-1.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/2026/1000077037.jpg",
  },
];

async function updateHighlights() {
  const seasonId = "season-2";

  console.log(`Updating highlights for ${seasonId}...`);

  await db
    .collection("tt-seasons")
    .doc(seasonId)
    .update({
      highlights,
    });

  console.log("--------------------------------");
  console.log("✅ Highlights updated successfully");
  console.log(`Collection : tt-seasons`);
  console.log(`Document   : ${seasonId}`);
  console.log(`Highlights : ${highlights.length}`);
  console.log("--------------------------------");
}

updateHighlights().catch((err) => {
  console.error("Update failed:", err);
  process.exit(1);
});