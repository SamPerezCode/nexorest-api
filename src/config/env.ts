import { config } from "dotenv";
import { z } from "zod";

config({ quiet: true });

const environmentSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  PORT: z.coerce.number().int().min(1).max(65535).default(3000),
});

const environment = environmentSchema.parse(process.env);

export { environment };
