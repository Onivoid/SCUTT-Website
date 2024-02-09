import type { NextApiRequest, NextApiResponse } from 'next';
import folders from "./folders.json"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(folders);
}