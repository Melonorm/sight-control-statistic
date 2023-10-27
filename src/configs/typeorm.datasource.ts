import {DataSource} from "typeorm";
import ormconfig from "./typeorm.config";

export const dataSource: DataSource = new DataSource(ormconfig);

// export default dataSource;