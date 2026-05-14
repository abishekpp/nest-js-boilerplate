import { z } from 'zod';

export const CreateExampleSchema = z.object({
  name: z.string(),
  email: z.email(),
});
