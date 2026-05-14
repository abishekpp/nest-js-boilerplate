import { z } from 'zod';

export const UpdateExampleSchema = z.object({
  name: z.string(),
  email: z.email(),
});
