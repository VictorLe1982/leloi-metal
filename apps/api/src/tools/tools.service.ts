import { Injectable } from '@nestjs/common';
import { ExtrusionShapeType, WeightCalculationResult } from '@leloi/types';
import { WeightCalculatorInput } from '@leloi/validation';

@Injectable()
export class ToolsService {
  calculateWeight(input: WeightCalculatorInput): WeightCalculationResult {
    const { shape, dimensionsMm, lengthMm, quantityPieces, densityGPerCm3 } = input;
    const density = densityGPerCm3 || 2.70;

    let areaMm2 = 0;
    let formulaDescription = '';

    switch (shape) {
      case ExtrusionShapeType.FLAT_BAR: {
        const w = dimensionsMm.width || 0;
        const t = dimensionsMm.thickness || 0;
        areaMm2 = w * t;
        formulaDescription = `Flat Bar Area = ${w} mm × ${t} mm`;
        break;
      }
      case ExtrusionShapeType.ROUND_BAR: {
        const d = dimensionsMm.outerDiameter || 0;
        areaMm2 = Math.PI * Math.pow(d / 2, 2);
        formulaDescription = `Round Bar Area = π × (${d}/2)²`;
        break;
      }
      case ExtrusionShapeType.SQUARE_BAR: {
        const s = dimensionsMm.sideSquare || 0;
        areaMm2 = Math.pow(s, 2);
        formulaDescription = `Square Bar Area = ${s}²`;
        break;
      }
      case ExtrusionShapeType.ROUND_TUBE: {
        const od = dimensionsMm.outerDiameter || 0;
        const wt = dimensionsMm.wallThickness || 0;
        const id = Math.max(0, od - 2 * wt);
        areaMm2 = Math.PI * (Math.pow(od / 2, 2) - Math.pow(id / 2, 2));
        formulaDescription = `Round Tube Area = π × ((${od}/2)² - (${id}/2)²)`;
        break;
      }
      case ExtrusionShapeType.RECTANGULAR_TUBE: {
        const w = dimensionsMm.width || 0;
        const h = dimensionsMm.height || 0;
        const wt = dimensionsMm.wallThickness || 0;
        const innerW = Math.max(0, w - 2 * wt);
        const innerH = Math.max(0, h - 2 * wt);
        areaMm2 = w * h - innerW * innerH;
        formulaDescription = `Hollow Box Tube Area = (${w}×${h}) - (${innerW}×${innerH})`;
        break;
      }
      case ExtrusionShapeType.EQUAL_ANGLE:
      case ExtrusionShapeType.UNEQUAL_ANGLE: {
        const a = dimensionsMm.sideA || 0;
        const b = dimensionsMm.sideB || 0;
        const t = dimensionsMm.thickness || 0;
        areaMm2 = (a + b - t) * t;
        formulaDescription = `L-Angle Area = (${a} + ${b} - ${t}) × ${t}`;
        break;
      }
      case ExtrusionShapeType.CHANNEL_U: {
        const w = dimensionsMm.width || 0;
        const h = dimensionsMm.height || 0;
        const t = dimensionsMm.thickness || 0;
        areaMm2 = w * t + 2 * Math.max(0, h - t) * t;
        formulaDescription = `U-Channel Area = (${w}×${t}) + 2×(${h - t}×${t})`;
        break;
      }
      case ExtrusionShapeType.TEE_PROFILE: {
        const w = dimensionsMm.width || 0;
        const h = dimensionsMm.height || 0;
        const t = dimensionsMm.thickness || 0;
        areaMm2 = w * t + Math.max(0, h - t) * t;
        formulaDescription = `T-Profile Area = (${w}×${t}) + (${h - t}×${t})`;
        break;
      }
      default:
        areaMm2 = 0;
        formulaDescription = 'Custom Profile Geometry';
    }

    // Weight per meter (kg/m) = Area (mm²) * Density (g/cm³) / 1000
    const weightPerMeterKg = (areaMm2 * density) / 1000;
    const weightPerPieceKg = weightPerMeterKg * (lengthMm / 1000);
    const totalWeightKg = weightPerPieceKg * quantityPieces;
    const totalWeightMetricTonnes = totalWeightKg / 1000;

    return {
      shape,
      crossSectionAreaMm2: Number(areaMm2.toFixed(2)),
      weightPerMeterKg: Number(weightPerMeterKg.toFixed(4)),
      weightPerPieceKg: Number(weightPerPieceKg.toFixed(4)),
      totalWeightKg: Number(totalWeightKg.toFixed(2)),
      totalWeightMetricTonnes: Number(totalWeightMetricTonnes.toFixed(4)),
      densityUsed: density,
      formulaDescription
    };
  }
}
