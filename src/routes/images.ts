import { Router, Request, Response } from 'express';
import { parsePositiveInt, processImage } from '../utils/image';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const { filename, width, height } = req.query;

    if (!filename) {
      return res.status(400).json({ error: 'Missing required query parameter: filename' });
    }

    // ✅ نحول القيم لسلاسل نصية أو undefined
    const w = parsePositiveInt(typeof width === 'string' ? width : '', undefined);
    const h = parsePositiveInt(typeof height === 'string' ? height : '', undefined);

    // ✅ نتأكد إنو w,h أرقام صالحة
    if (!w || !h) {
      return res.status(400).json({ error: 'Width and height must be positive integers' });
    }

    const outputPath = await processImage(String(filename), w, h);

    return res.sendFile(outputPath);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';

    if (/not found/i.test(message)) {
      return res.status(404).json({ error: message });
    }

    return res.status(400).json({ error: message });
  }
});

export default router;
