import { getLinkPreview } from "link-preview-js";

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Missing URL" });
  }

  try {
    const data = await getLinkPreview(decodeURIComponent(url));
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
