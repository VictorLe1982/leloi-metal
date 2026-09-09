import test from 'node:test';
import assert from 'node:assert/strict';
import { ExtrusionShapeType } from '../packages/types/src/enums';

// Implementation of engineering weight calculation formulas with precision rounding
function calculateAluminiumWeight(shape: ExtrusionShapeType, dimensions: any, lengthMm: number, quantity: number, density: number = 2.70) {
  let areaMm2 = 0;

  switch (shape) {
    case ExtrusionShapeType.FLAT_BAR:
      areaMm2 = dimensions.width * dimensions.thickness;
      break;

    case ExtrusionShapeType.ROUND_BAR:
      areaMm2 = Math.PI * Math.pow(dimensions.outerDiameter / 2, 2);
      break;

    case ExtrusionShapeType.SQUARE_BAR:
      areaMm2 = Math.pow(dimensions.sideSquare, 2);
      break;

    case ExtrusionShapeType.ROUND_TUBE: {
      const id = Math.max(0, dimensions.outerDiameter - 2 * dimensions.wallThickness);
      areaMm2 = Math.PI * (Math.pow(dimensions.outerDiameter / 2, 2) - Math.pow(id / 2, 2));
      break;
    }

    case ExtrusionShapeType.RECTANGULAR_TUBE: {
      const innerW = Math.max(0, dimensions.width - 2 * dimensions.wallThickness);
      const innerH = Math.max(0, dimensions.height - 2 * dimensions.wallThickness);
      areaMm2 = (dimensions.width * dimensions.height) - (innerW * innerH);
      break;
    }

    case ExtrusionShapeType.EQUAL_ANGLE:
    case ExtrusionShapeType.UNEQUAL_ANGLE:
      areaMm2 = (dimensions.sideA + dimensions.sideB - dimensions.thickness) * dimensions.thickness;
      break;

    default:
      areaMm2 = 0;
  }

  const weightPerMeterKg = (areaMm2 * density) / 1000;
  const weightPerPieceKg = weightPerMeterKg * (lengthMm / 1000);
  const totalWeightKg = weightPerPieceKg * quantity;
  const totalTonnes = totalWeightKg / 1000;

  return {
    areaMm2: Number(areaMm2.toFixed(2)),
    weightPerMeterKg: Number(weightPerMeterKg.toFixed(4)),
    weightPerPieceKg: Number(weightPerPieceKg.toFixed(4)),
    totalWeightKg: Number(totalWeightKg.toFixed(2)),
    totalTonnes: Number(totalTonnes.toFixed(4))
  };
}

test('Aluminium Weight Calculator - Flat Bar (50x10mm)', () => {
  const result = calculateAluminiumWeight(
    ExtrusionShapeType.FLAT_BAR,
    { width: 50, thickness: 10 },
    6000,
    100,
    2.70
  );

  assert.equal(result.areaMm2, 500);
  assert.equal(result.weightPerMeterKg, 1.35); // 500 * 2.70 / 1000 = 1.35 kg/m
  assert.equal(result.weightPerPieceKg, 8.1); // 1.35 * 6m = 8.1 kg
  assert.equal(result.totalWeightKg, 810); // 8.1 * 100 = 810 kg
  assert.equal(result.totalTonnes, 0.81);
});

test('Aluminium Weight Calculator - Rectangular Hollow Tube (50x50x3mm)', () => {
  const result = calculateAluminiumWeight(
    ExtrusionShapeType.RECTANGULAR_TUBE,
    { width: 50, height: 50, wallThickness: 3 },
    6000,
    1000,
    2.70
  );

  // Outer area = 2500, Inner area = 44*44 = 1936, Area = 564 mm²
  assert.equal(result.areaMm2, 564);
  assert.equal(result.weightPerMeterKg, 1.5228);
  assert.equal(result.weightPerPieceKg, 9.1368);
  assert.equal(result.totalTonnes, 9.1368);
});

test('Aluminium Weight Calculator - Equal Angle (40x40x4mm)', () => {
  const result = calculateAluminiumWeight(
    ExtrusionShapeType.EQUAL_ANGLE,
    { sideA: 40, sideB: 40, thickness: 4 },
    6000,
    1,
    2.70
  );

  // Area = (40 + 40 - 4) * 4 = 76 * 4 = 304 mm²
  assert.equal(result.areaMm2, 304);
  assert.equal(result.weightPerMeterKg, 0.8208);
});

test('Aluminium Weight Calculator - Alloy 7075 Custom Density (2.81 g/cm³)', () => {
  const result = calculateAluminiumWeight(
    ExtrusionShapeType.FLAT_BAR,
    { width: 100, thickness: 10 },
    1000,
    1,
    2.81
  );

  // Area = 1000 mm², weight = 1000 * 2.81 / 1000 = 2.81 kg/m
  assert.equal(result.areaMm2, 1000);
  assert.equal(result.weightPerMeterKg, 2.81);
});
