import type { NextApiResponse } from 'next';
import translationsLinks from "./translationsLinks.json"

export default function handler(
  res: NextApiResponse
) {
  res.status(200).json(translationsLinks);
}