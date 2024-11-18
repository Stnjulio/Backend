import { configDotenv } from 'dotenv'

configDotenv({ override: true })

export const backend = {
  jwt_secret: process.env.SECRET!,
}