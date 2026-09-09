import { z } from 'zod';
import { ExtrusionShapeType } from '@leloi/types';

export const weightCalculatorSchema = z.object({
  shape: z.nativeEnum(ExtrusionShapeType),
  dimensionsMm: z.object({
    width: z.number().positive().optional(),
    height: z.number().positive().optional(),
    thickness: z.number().positive().optional(),
    outerDiameter: z.number().positive().optional(),
    wallThickness: z.number().positive().optional(),
    sideA: z.number().positive().optional(),
    sideB: z.number().positive().optional(),
    webThickness: z.number().positive().optional(),
    flangeThickness: z.number().positive().optional(),
    sideSquare: z.number().positive().optional()
  }),
  lengthMm: z.number().positive('Length must be greater than 0 mm').default(6000),
  quantityPieces: z.number().int().positive('Quantity must be at least 1 piece').default(1),
  alloyName: z.string().default('6063'),
  densityGPerCm3: z.number().positive('Density must be positive').default(2.70)
});

export type WeightCalculatorInput = z.infer<typeof weightCalculatorSchema>;
