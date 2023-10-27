import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";

export const ormconfig: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    database: 'sight_control_db',
    port: 5432,
    username: 'postgres',
    password: '123',
    entities: ['dist/common/entities/*.entity{.ts,.js}'],
    subscribers: ['dist/common/subscribers/*.subscriber{.ts,.js}'],
    migrations: ['dist/common/migrations/**/*{.ts,.js}'],
    migrationsTableName: 'migrations',
    migrationsRun: false,
    synchronize: false
};

export default ormconfig;





