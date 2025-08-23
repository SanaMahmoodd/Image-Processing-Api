import { processImage, fileExists } from '../utils/image';

describe('Image processing util', () => {
  const base = 'fjord';
  const w = 200;
  const h = 200;

  it('creates a resized image on first call and reuses cache on second', async () => {
    const out1 = await processImage(base, w, h);
    expect(fileExists(out1)).toBeTrue();

    const out2 = await processImage(base, w, h);
    expect(out2).toBe(out1);
  });

  it('throws on missing source image', async () => {
    await expectAsync(processImage('does-not-exist', 100, 100)).toBeRejected();
  });
});
