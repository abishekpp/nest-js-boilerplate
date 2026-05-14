import z from 'zod';
import { UpdateExampleSchema } from '../schema/update-example.schema';

export type UpdateExampleDto = z.infer<typeof UpdateExampleSchema>;
