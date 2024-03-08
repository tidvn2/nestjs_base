import * as dotenv from 'dotenv';

dotenv.config();

// Set server timezone
if (!process.env.TZ) {
  process.env.TZ = 'UTC';
}

export const TIMEZONE = process.env.TZ;
