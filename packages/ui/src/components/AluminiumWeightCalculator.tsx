'use client';

import React, { useState, useId } from 'react';
import { ExtrusionShapeType } from '@leloi/types';
import { Button } from './Button';
import { Card } from './Card';
import { FormGroup, Input, Select } from './FormControls';

export interface AlloyOption {
  name: string;
  density: number; // g/cm³
  description: string;
}

export const STANDARD_ALLOYS: AlloyOption[] = [
  { name: '6063', density: 2.70, description: 'Architectural & standard extrusion alloy (most common)' },
  { name: '6061', density: 2.70, description: 'High-strength structural & machining alloy' },
  { name: '6005A', density: 2.70, description: 'Medium-strength railway, solar & automotive profile alloy' },
  { name: '6082', density: 2.70, description: 'European structural standard alloy' },
  { name: '7075', density: 2.81, description: 'Ultra-high strength aerospace & high-stress engineering' },
  { name: '5052', density: 2.68, description: 'Marine grade, excellent corrosion resistance' },
  { name: '5083', density: 2.66, description: 'High-strength marine & cryogenic vessel alloy' }
];

export const AluminiumWeightCalculator: React.FC<{
  onRfqClick?: (data?: any) => void;
  className?: string;
}> = ({ onRfqClick, className = '' }) => {
  const shapeId = useId();
  const alloyId = useId();
  const [shape, setShape] = useState<ExtrusionShapeType>(ExtrusionShapeType.RECTANGULAR_TUBE);
  const [alloyName, setAlloyName] = useState<string>('6063');
  const [customDensity, setCustomDensity] = useState<number>(2.70);
  const [lengthMm, setLengthMm] = useState<number>(6000);
  const [quantity, setQuantity] = useState<number>(100);

  // Geometry dimensions in mm
  const [width, setWidth] = useState<number>(50);
  const [height, setHeight] = useState<number>(50);
  const [thickness, setThickness] = useState<number>(3);
  const [outerDiameter, setOuterDiameter] = useState<number>(50);
  const [wallThickness, setWallThickness] = useState<number>(3);
  const [sideA, setSideA] = useState<number>(40);
  const [sideB, setSideB] = useState<number>(40);
  const [sideSquare, setSideSquare] = useState<number>(40);

  // Density handling
  const activeAlloy = STANDARD_ALLOYS.find((a) => a.name === alloyName);
  const density = alloyName === 'CUSTOM' ? customDensity : (activeAlloy?.density || 2.70);

  // Calculate Cross-Section Area in mm²
  let areaMm2 = 0;
  let formulaNotes = '';

  switch (shape) {
    case ExtrusionShapeType.FLAT_BAR:
      // Width * Thickness
      areaMm2 = width * thickness;
      formulaNotes = `Flat Bar: ${width} mm × ${thickness} mm`;
      break;

    case ExtrusionShapeType.ROUND_BAR:
      // π * (D/2)²
      areaMm2 = Math.PI * Math.pow(outerDiameter / 2, 2);
      formulaNotes = `Solid Round: Ø${outerDiameter} mm`;
      break;

    case ExtrusionShapeType.SQUARE_BAR:
      // a²
      areaMm2 = Math.pow(sideSquare, 2);
      formulaNotes = `Solid Square: ${sideSquare} mm × ${sideSquare} mm`;
      break;

    case ExtrusionShapeType.ROUND_TUBE:
      // π * (R_out² - R_in²)
      const innerDiameter = Math.max(0, outerDiameter - 2 * wallThickness);
      areaMm2 = Math.PI * (Math.pow(outerDiameter / 2, 2) - Math.pow(innerDiameter / 2, 2));
      formulaNotes = `Round Tube: OD Ø${outerDiameter} mm × Wall ${wallThickness} mm`;
      break;

    case ExtrusionShapeType.RECTANGULAR_TUBE:
      // (W * H) - ((W - 2t) * (H - 2t))
      const innerW = Math.max(0, width - 2 * wallThickness);
      const innerH = Math.max(0, height - 2 * wallThickness);
      areaMm2 = (width * height) - (innerW * innerH);
      formulaNotes = `Box / Tube: ${width} × ${height} mm × Wall ${wallThickness} mm`;
      break;

    case ExtrusionShapeType.EQUAL_ANGLE:
    case ExtrusionShapeType.UNEQUAL_ANGLE:
      // (A + B - t) * t
      areaMm2 = (sideA + sideB - thickness) * thickness;
      formulaNotes = `L-Angle: ${sideA} × ${sideB} mm × Wall ${thickness} mm`;
      break;

    case ExtrusionShapeType.CHANNEL_U:
      // Web*t + 2 * (Flange - t)*t
      areaMm2 = (width * thickness) + 2 * Math.max(0, height - thickness) * thickness;
      formulaNotes = `U-Channel: ${width} × ${height} mm × Wall ${thickness} mm`;
      break;

    case ExtrusionShapeType.TEE_PROFILE:
      // Flange(W*t) + Stem((H-t)*t)
      areaMm2 = (width * thickness) + Math.max(0, height - thickness) * thickness;
      formulaNotes = `T-Profile: ${width} × ${height} mm × Wall ${thickness} mm`;
      break;

    default:
      areaMm2 = 0;
  }

  // Engineering calculation:
  // Weight per meter (kg/m) = Area (mm²) * Density (g/cm³) / 1000
  // Note: 1 mm² * 1 m = 1,000 mm³ = 1 cm³. Hence (area mm² * 1 cm³) * density g / 1000 = kg.
  const weightPerMeterKg = (areaMm2 * density) / 1000;
  const weightPerPieceKg = weightPerMeterKg * (lengthMm / 1000);
  const totalWeightKg = weightPerPieceKg * quantity;
  const totalTonnes = totalWeightKg / 1000;

  return (
    <div className={`w-full bg-white rounded-xl border border-[#E2E8F0] shadow-sm overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-[#0A2D5B] text-white p-6 border-b border-[#123D77]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#2F7BFF] font-heading font-semibold mb-1">
              Engineering Calculation Utility
            </div>
            <h2 className="text-xl md:text-2xl font-bold font-heading">
              Aluminium Profile Weight Calculator
            </h2>
          </div>
          <div className="text-right">
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-mono tracking-wide text-[#DCE6F3] border border-white/20">
              ISO / ASTM Precision Standard
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Input parameters */}
        <div className="lg:col-span-7 space-y-6">
          {/* Shape selection */}
          <FormGroup label="1. Profile Geometry / Shape">
            <Select
              id={shapeId}
              aria-label="Profile Geometry / Shape"
              value={shape}
              onChange={(e) => setShape(e.target.value as ExtrusionShapeType)}
            >
              <option value={ExtrusionShapeType.RECTANGULAR_TUBE}>Square / Rectangular Hollow Tube</option>
              <option value={ExtrusionShapeType.ROUND_TUBE}>Round Pipe / Tube</option>
              <option value={ExtrusionShapeType.FLAT_BAR}>Flat Bar / Plate</option>
              <option value={ExtrusionShapeType.ROUND_BAR}>Solid Round Rod / Bar</option>
              <option value={ExtrusionShapeType.SQUARE_BAR}>Solid Square Bar</option>
              <option value={ExtrusionShapeType.EQUAL_ANGLE}>Equal / Unequal L-Angle</option>
              <option value={ExtrusionShapeType.CHANNEL_U}>U-Channel / C-Profile</option>
              <option value={ExtrusionShapeType.TEE_PROFILE}>T-Profile</option>
            </Select>
          </FormGroup>

          {/* Dynamic Dimensions */}
          <div className="bg-[#F1F4F8]/60 p-4 rounded-lg border border-[#E2E8F0] space-y-4">
            <div className="text-xs font-heading font-semibold text-[#0A2D5B] uppercase tracking-wider">
              Cross-Section Dimensions (mm)
            </div>

            {(shape === ExtrusionShapeType.RECTANGULAR_TUBE ||
              shape === ExtrusionShapeType.CHANNEL_U ||
              shape === ExtrusionShapeType.TEE_PROFILE) && (
              <div className="grid grid-cols-2 gap-4">
                <FormGroup label="Width (W, mm)">
                  <Input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(Math.max(1, Number(e.target.value)))}
                  />
                </FormGroup>
                <FormGroup label="Height (H, mm)">
                  <Input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(Math.max(1, Number(e.target.value)))}
                  />
                </FormGroup>
              </div>
            )}

            {shape === ExtrusionShapeType.FLAT_BAR && (
              <div className="grid grid-cols-2 gap-4">
                <FormGroup label="Width (mm)">
                  <Input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(Math.max(1, Number(e.target.value)))}
                  />
                </FormGroup>
                <FormGroup label="Thickness (mm)">
                  <Input
                    type="number"
                    value={thickness}
                    onChange={(e) => setThickness(Math.max(0.5, Number(e.target.value)))}
                  />
                </FormGroup>
              </div>
            )}

            {(shape === ExtrusionShapeType.ROUND_BAR || shape === ExtrusionShapeType.ROUND_TUBE) && (
              <FormGroup label="Outer Diameter (Ø, mm)">
                <Input
                  type="number"
                  value={outerDiameter}
                  onChange={(e) => setOuterDiameter(Math.max(1, Number(e.target.value)))}
                />
              </FormGroup>
            )}

            {shape === ExtrusionShapeType.SQUARE_BAR && (
              <FormGroup label="Side Dimension (mm)">
                <Input
                  type="number"
                  value={sideSquare}
                  onChange={(e) => setSideSquare(Math.max(1, Number(e.target.value)))}
                />
              </FormGroup>
            )}

            {(shape === ExtrusionShapeType.EQUAL_ANGLE || shape === ExtrusionShapeType.UNEQUAL_ANGLE) && (
              <div className="grid grid-cols-2 gap-4">
                <FormGroup label="Leg A (mm)">
                  <Input
                    type="number"
                    value={sideA}
                    onChange={(e) => setSideA(Math.max(1, Number(e.target.value)))}
                  />
                </FormGroup>
                <FormGroup label="Leg B (mm)">
                  <Input
                    type="number"
                    value={sideB}
                    onChange={(e) => setSideB(Math.max(1, Number(e.target.value)))}
                  />
                </FormGroup>
              </div>
            )}

            {/* Wall Thickness where applicable */}
            {(shape === ExtrusionShapeType.RECTANGULAR_TUBE || shape === ExtrusionShapeType.ROUND_TUBE) && (
              <FormGroup label="Wall Thickness (mm)">
                <Input
                  type="number"
                  step="0.1"
                  value={wallThickness}
                  onChange={(e) => setWallThickness(Math.max(0.5, Number(e.target.value)))}
                />
              </FormGroup>
            )}

            {(shape === ExtrusionShapeType.EQUAL_ANGLE ||
              shape === ExtrusionShapeType.CHANNEL_U ||
              shape === ExtrusionShapeType.TEE_PROFILE) && (
              <FormGroup label="Wall / Flange Thickness (mm)">
                <Input
                  type="number"
                  step="0.1"
                  value={thickness}
                  onChange={(e) => setThickness(Math.max(0.5, Number(e.target.value)))}
                />
              </FormGroup>
            )}
          </div>

          {/* Alloy & Length Options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FormGroup label="Alloy Grade">
              <Select
                id={alloyId}
                aria-label="Alloy Grade"
                value={alloyName}
                onChange={(e) => setAlloyName(e.target.value)}
              >
                {STANDARD_ALLOYS.map((a) => (
                  <option key={a.name} value={a.name}>
                    {a.name} ({a.density} g/cm³)
                  </option>
                ))}
                <option value="CUSTOM">Custom Density...</option>
              </Select>
            </FormGroup>

            {alloyName === 'CUSTOM' && (
              <FormGroup label="Density (g/cm³)">
                <Input
                  type="number"
                  step="0.01"
                  value={customDensity}
                  onChange={(e) => setCustomDensity(Number(e.target.value))}
                />
              </FormGroup>
            )}

            <FormGroup label="Cut Length (mm)">
              <Input
                type="number"
                value={lengthMm}
                onChange={(e) => setLengthMm(Math.max(1, Number(e.target.value)))}
              />
            </FormGroup>

            <FormGroup label="Order Quantity (Pieces)">
              <Input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
              />
            </FormGroup>
          </div>
        </div>

        {/* Right: Results Display & Conversion CTA */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#F1F4F8] p-6 rounded-xl border border-[#E2E8F0]">
          <div>
            <div className="text-xs uppercase font-heading font-semibold text-[#0A2D5B] tracking-wider mb-3">
              Calculated Engineering Results
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-[#E2E8F0]">
                <div className="text-xs text-slate-500 mb-1">Weight per Meter</div>
                <div className="text-2xl font-bold font-heading text-[#0A2D5B] flex items-baseline gap-1">
                  {weightPerMeterKg.toFixed(3)}
                  <span className="text-sm font-normal text-slate-600">kg / m</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-[#E2E8F0]">
                <div className="text-xs text-slate-500 mb-1">Weight per Piece ({lengthMm} mm)</div>
                <div className="text-2xl font-bold font-heading text-[#0A2D5B] flex items-baseline gap-1">
                  {weightPerPieceKg.toFixed(3)}
                  <span className="text-sm font-normal text-slate-600">kg / piece</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-[#2F7BFF]/30 bg-blue-50/20">
                <div className="text-xs font-semibold text-[#2F7BFF] uppercase tracking-wide mb-1">
                  Total Order Weight ({quantity} pcs)
                </div>
                <div className="text-3xl font-extrabold font-heading text-[#0A2D5B] flex items-baseline gap-1">
                  {totalWeightKg.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
                  <span className="text-base font-normal text-slate-600">kg</span>
                </div>
                <div className="text-xs text-slate-600 mt-1 font-mono">
                  ≈ {totalTonnes.toFixed(3)} Metric Tonnes
                </div>
              </div>
            </div>

            {/* Mathematical note */}
            <div className="text-[11px] text-slate-500 mt-4 leading-relaxed">
              * Cross section area: {areaMm2.toFixed(1)} mm² | Standard density: {density} g/cm³ ({activeAlloy?.name || 'Alloy'}). Theoretical weight excludes extrusion tolerance variations (EN 755-9 / ASTM B221).
            </div>
          </div>

          {/* Qualified RFQ Conversion CTA */}
          <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
            <div className="text-xs font-heading font-semibold text-[#0A2D5B] mb-2">
              Have a custom drawing or complex hollow profile?
            </div>
            <p className="text-xs text-slate-600 mb-4">
              Send your STEP, DWG, DXF or PDF drawing directly to our extrusion engineering team in Vietnam for complete DFM review and export quote.
            </p>
            <Button
              variant="cta"
              size="lg"
              className="w-full"
              onClick={() => {
                if (onRfqClick) {
                  onRfqClick({
                    shape,
                    alloy: alloyName,
                    lengthMm,
                    quantity,
                    weightPerMeterKg,
                    totalWeightKg
                  });
                } else {
                  window.location.href = `/rfq?alloy=${alloyName}&qty=${totalWeightKg.toFixed(0)}`;
                }
              }}
            >
              Request Custom Profile Quote →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
