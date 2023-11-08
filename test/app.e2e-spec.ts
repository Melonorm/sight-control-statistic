import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import {ShooterDto} from "../src/common/dto/shooter.dto";
import {ShooterEntity} from "../src/common/entities/shooter.entity";
import {ShooterController} from "../src/api/shooter/shooter.controller";
import {ShooterService} from "../src/api/shooter/shooter.service";
import {ShooterModule} from "../src/api/shooter/shooter.module";
import {TypeOrmModule} from "@nestjs/typeorm";

const mockShooterDto: ShooterDto = {
  firstName: "Мок",
  lastName: "Мокнутый",
  fatherName: "Мокнутович",
  callName: "Мистер Мок",
  yearBorn: 1984
}

describe('ShooterController (e2e)', () => {
  let app: INestApplication;
  let shooterService = { findAll: () => ['test'] }

  let createdShooterId: number;
  let createdShooter: ShooterEntity = null;


  beforeEach(async () => {
    // const moduleFixture: TestingModule = await Test.createTestingModule({
    //   imports: [AppModule],
    // }).compile();
    //
    // app = moduleFixture.createNestApplication();
    // await app.init();
    const moduleRef = await Test.createTestingModule({
      imports: [
          ShooterModule,
          TypeOrmModule.forFeature([ShooterEntity])
      ]
    })
        .overrideProvider(ShooterService)
        .useValue(shooterService)
        .compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('Тест наличия коннекшена как такового',   async () => {
    return request(app.getHttpServer())
        .get('/shooter/all')
        .expect(200)
        .then((req: request.Response) => {
          const shooters: ShooterEntity[] = req.body;
          expect(shooters).toBeDefined();
          expect(shooters.length).toBeGreaterThanOrEqual(0);
        });
  });

  // it('shooter/create (POST) - success',async () => {
  //   return request(app.getHttpServer())
  //       .post('/shooter/create')
  //       .send(mockShooterDto)
  //       .expect(201)
  //       .then((response: request.Response) => {
  //         createdShooter = response.body;
  //         createdShooterId = response.body.id;
  //         expect(createdShooterId).toBeDefined();
  //       });
  // });
  //
  // it('shooter/:id (DELETE) - success', () =>  {
  //   return request(app.getHttpServer())
  //       .delete('/shooter/' + createdShooterId)
  //       .expect(200);
  // });
  //
  // afterAll(async () => {
  //   await app.close();
  // })
});
