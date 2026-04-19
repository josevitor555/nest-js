import { DataSourceOptions } from "typeorm";

export const config: DataSourceOptions = {
    type: "sqlite",
    database: "db.sqlite",
    entities: ["dist/**/*.entity.js"],
    migrations: ["dist/**/*.migration.js"],
    subscribers: ["dist/**/*.subscriber.js"],
    synchronize: true,
};
