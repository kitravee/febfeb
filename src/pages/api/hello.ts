import type { NextApiRequest, NextApiResponse } from 'next';

type HelloData = {
  name: string;
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<HelloData>,
) {
  res.status(200).json({ name: 'John Doe' });
}
