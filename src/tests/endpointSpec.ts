import supertest from 'supertest';
import app from '../server';

const request = supertest(app);

describe('GET/api/images', () => {
  it('returns 200 and an image for a valid query', async () => {
    const res = await request
      .get('/api/images')
      .query({ filename: 'fjord', width: 150, height: 150 });

    expect(res.status).toBe(200);
    expect(res.header['content-type']).toContain('image/jpeg');
  });

  it('400 when a required param is missing', async () => {
    const res = await request.get('/api/images').query({ filename: 'fjord', width: 150 });
    expect(res.status).toBe(400);
  });

  it('404 when source image does not exist', async () => {
    const res = await request
      .get('/api/images')
      .query({ filename: 'unknown', width: 100, height: 100 });
    expect(res.status).toBe(404);
  });

  it('400 when width/height are invalid', async () => {
    const res = await request
      .get('/api/images')
      .query({ filename: 'fjord', width: 'abc', height: 100 });
    expect(res.status).toBe(400);
  });
});
