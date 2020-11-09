import config from "./config.js"
import { Pool } from "pg"


const pool = new Pool({
  user: config.user,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.port,
})

export default pool;