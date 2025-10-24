import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: false,
      }),
    );
    await app.init();
  });

  describe('/api/v1/townPlanning/estateTransaction/bar (GET)', () => {
    it('should return only the price value', () => {
      return request(app.getHttpServer())
        .get('/api/v1/townPlanning/estateTransaction/bar')
        .query({ year: 2015, prefectureCode: 8, type: 1 })
        .expect(200)
        .expect((res) => {
          const value = Number(res.text);
          expect(value).toBe(22871);
          expect(value).toBeGreaterThan(0);
        });
    });

    it('should return correct value for different query', () => {
      return request(app.getHttpServer())
        .get('/api/v1/townPlanning/estateTransaction/bar')
        .query({ year: 2015, prefectureCode: 8, type: 1 })
        .expect(200)
        .expect((res) => {
          const value = Number(res.text);
          expect(typeof value).toBe('number');
          expect(value).toBeGreaterThan(0);
        });
    });

    it('should return 400 for invalid year', () => {
      return request(app.getHttpServer())
        .get('/api/v1/townPlanning/estateTransaction/bar')
        .query({ year: 2020, prefectureCode: 8, type: 1 })
        .expect(400);
    });
  });
});
