import z from 'zod';
import { CreateExampleSchema } from '../schema/create-example.schema';

export type CreateExampleDto = z.infer<typeof CreateExampleSchema>;
