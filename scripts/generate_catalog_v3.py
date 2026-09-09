import json
import os

manifest = json.load(open('LELOI_METAL_CATALOG_VISUAL_ASSET_PACK_V1/generated_asset_manifest.json', encoding='utf-8'))

product_meta = {
    'square_rectangular_hollow_profiles': {
        'category': 'custom-extrusions',
        'categoryName': 'Custom Extrusions',
        'geometry': 'Hollow',
        'alloys': ['6063', '6061', '6005A'],
        'tempers': ['T5', 'T6'],
        'finishes': ['Mill Finish', 'Clear Anodized', 'Powder Coated'],
        'shortDesc': 'Square and rectangular tubular aluminium hollow profiles engineered to structural drawing tolerances.',
        'longDesc': 'Precision hollow aluminium extrusion profiles for structural frameworks, machinery bases, and transportation assemblies. Engineered from high-strength 6061 and 6063 billets in Vietnam with tight wall thickness concentricity.',
        'apps': ['Structural Frameworks', 'Transportation Enclosures', 'Machinery Bases', 'Industrial Racking'],
        'fabs': ['Precision Mitre Cutting ±0.2mm', 'CNC Slotting', 'Drilling & Tapping', 'Hardware Insertion'],
        'chips': ['6063 / 6061', 'T5 / T6', 'Mill / Anodized'],
        'aliases': ['square-rectangular-hollow-profiles', 'custom-hollow-extrusions'],
        'dfm': ['Maintain minimum corner radius of 0.5mm on internal corners to avoid stress risers.', 'Wall thickness transitions should not exceed 2:1 ratio.']
    },
    'round_tubes': {
        'category': 'custom-extrusions',
        'categoryName': 'Custom Extrusions',
        'geometry': 'Hollow',
        'alloys': ['6063', '6061', '6082'],
        'tempers': ['T5', 'T6'],
        'finishes': ['Mill Finish', 'Clear Anodized', 'Electropolished'],
        'shortDesc': 'Seamless and structural extruded round tubes with uniform wall thickness and concentricity.',
        'longDesc': 'Seamless and porthole extruded aluminium round tubing manufactured for fluid conveyance, structural masts, and mechanical rollers. Strict outer diameter and wall thickness controls.',
        'apps': ['Fluid & Pneumatic Lines', 'Industrial Rollers', 'Handrails & Stanchions', 'Structural Columns'],
        'fabs': ['Precision Cutting', 'Rotary Swaging', 'CNC Turning & Threading', 'Deburring'],
        'chips': ['6061 / 6082', 'T6 Temper', 'Concentric ID/OD'],
        'aliases': ['round-tubes'],
        'dfm': ['Specify required ovality and straightness tolerances per meter length.', 'Consider mandrel extrusion for seamless pressure-rated applications.']
    },
    'solid_bars': {
        'category': 'custom-extrusions',
        'categoryName': 'Custom Extrusions',
        'geometry': 'Solid',
        'alloys': ['6061', '6082', '6063'],
        'tempers': ['T6', 'T5'],
        'finishes': ['Mill Finish', 'Anodized'],
        'shortDesc': 'Solid rectangular, square, and flat bars optimized for structural loads and CNC machining.',
        'longDesc': 'Heavy-duty solid aluminium extrusion bars designed for subsequent high-speed CNC milling, electrical busbar conductivity, and load-bearing machine bases.',
        'apps': ['CNC Machined OEM Parts', 'Electrical Busbars', 'Heavy Structural Cleats', 'Base Mounting Plates'],
        'fabs': ['High-Speed Saw Cutting', 'Multi-Axis CNC Milling', 'Chamfering', 'Face Milling'],
        'chips': ['6061-T6 High Strength', 'CNC Ready', 'Flatness Inspected'],
        'aliases': ['solid-bars', 'custom-solid-extrusions'],
        'dfm': ['Provide grain direction requirements if severe bending is planned.', 'Verify alloy temper suitability for high-stress cyclic loading.']
    },
    'angle_profiles': {
        'category': 'custom-extrusions',
        'categoryName': 'Custom Extrusions',
        'geometry': 'Solid',
        'alloys': ['6063', '6061', '6005A'],
        'tempers': ['T5', 'T6'],
        'finishes': ['Mill Finish', 'Clear Anodized', 'Powder Coated'],
        'shortDesc': 'Equal and unequal structural angle sections for frame corners and structural bracing.',
        'longDesc': 'Extruded aluminium angles engineered for 90-degree corner stiffening, architectural bracketry, and mounting flanges. Clean apex radii minimize notch sensitivity under load.',
        'apps': ['Frame Corner Bracing', 'Solar Array Brackets', 'Facade Sub-Framing', 'Packaging Skid Frames'],
        'fabs': ['Angle Cutting', 'Multi-Hole Punching', 'Countersinking', 'Anodizing'],
        'chips': ['Equal / Unequal Leg', '6005A / 6061', 'Clean Apex Radius'],
        'aliases': ['angle-profiles', 'equal-angle'],
        'dfm': ['Equal leg profiles extrude faster with less twist than high-aspect unequal legs.', 'Maintain heel radius to prevent cooling stress cracks.']
    },
    'u_channel_profiles': {
        'category': 'custom-extrusions',
        'categoryName': 'Custom Extrusions',
        'geometry': 'Semi-Hollow',
        'alloys': ['6063', '6061'],
        'tempers': ['T5', 'T6'],
        'finishes': ['Mill Finish', 'Clear Anodized', 'Powder Coated'],
        'shortDesc': 'Open channel sections with parallel or tapered flanges for glass pocketing and linear guides.',
        'longDesc': 'Versatile U-channel aluminium extrusions manufactured for edge retention, structural trim, architectural pocket glazing, and wire routing pathways.',
        'apps': ['Glass Glazing Channels', 'Edge Trim & Capping', 'Cable Raceway Tracks', 'Linear Slide Enclosures'],
        'fabs': ['Miter Cutting', 'Slot Milling', 'Drilling', 'Surface Treatment'],
        'chips': ['Semi-Hollow Channel', '6063 Architectural', 'Smooth Anodizing'],
        'aliases': ['u-channel-profiles', 'semi-hollow-extrusions'],
        'dfm': ['Deep channel tongues require balanced die flow to prevent leg splay.', 'Specify whether inside or outside width is the critical mating dimension.']
    },
    't_profiles': {
        'category': 'custom-extrusions',
        'categoryName': 'Custom Extrusions',
        'geometry': 'Solid',
        'alloys': ['6063', '6061', '6005A'],
        'tempers': ['T5', 'T6'],
        'finishes': ['Mill Finish', 'Anodized'],
        'shortDesc': 'T-section structural profiles for suspended ceiling grids, stiffening ribs, and framing.',
        'longDesc': 'Extruded structural Tee sections engineered with balanced web and flange thicknesses for suspended ceilings, flooring expansion joints, and marine stiffeners.',
        'apps': ['Suspended Ceiling Grids', 'Deck Stiffeners', 'Floor Joint Covers', 'Wall Panel Cleats'],
        'fabs': ['Precision Length Cut', 'Notching', 'Punching', 'Deburring'],
        'chips': ['Solid Tee Section', '6063 / 6005A', 'Straightness Inspected'],
        'aliases': ['t-profiles'],
        'dfm': ['Flange-to-web intersection should feature generous fillet radius to maintain die life.']
    },
    'i_beam_profiles': {
        'category': 'custom-extrusions',
        'categoryName': 'Custom Extrusions',
        'geometry': 'Solid',
        'alloys': ['6061', '6005A', '6082'],
        'tempers': ['T6'],
        'finishes': ['Mill Finish', 'Clear Anodized'],
        'shortDesc': 'High moment of inertia I-beam sections for heavy load spans and crane rails.',
        'longDesc': 'Structural I-beam aluminium extrusions providing maximum strength-to-weight ratio for overhead conveyors, monorail cranes, and trailer chassis frames.',
        'apps': ['Overhead Conveyor Tracks', 'Gantry Spans', 'Trailer Chassis Beams', 'Solar Carport Purlins'],
        'fabs': ['Heavy Saw Cutting', 'End Coping & Flange Notching', 'High-Load Bolt Hole Drilling'],
        'chips': ['High Load Capacity', '6061-T6 Structural', 'EN 755-2 Certified'],
        'aliases': ['i-beam-profiles'],
        'dfm': ['Verify web thickness against shear load requirements at support bearings.']
    },
    'h_profiles': {
        'category': 'custom-extrusions',
        'categoryName': 'Custom Extrusions',
        'geometry': 'Solid',
        'alloys': ['6061', '6005A'],
        'tempers': ['T6'],
        'finishes': ['Mill Finish', 'Anodized'],
        'shortDesc': 'Wide-flange H-profiles for heavy compression columns and interlock framing.',
        'longDesc': 'Heavy-duty wide flange H-profiles designed for architectural column uprights, partition joints, and multi-tier structural racking.',
        'apps': ['Modular Cleanroom Posts', 'Partition Wall Interlocks', 'Structural Racking Columns'],
        'fabs': ['Precision Cutting', 'Milling', 'CNC Drilling', 'Packaging'],
        'chips': ['Wide Flange', '6061-T6 / 6005A', 'Tension Tested'],
        'aliases': ['h-profiles', 'complex-multi-void'],
        'dfm': ['Thermal equalization during quench is essential to prevent camber across wide flanges.']
    },
    't_slot_modular_profiles': {
        'category': 'industrial-profiles',
        'categoryName': 'Industrial Profiles',
        'geometry': 'T-Slot Modular',
        'alloys': ['6063', '6005A'],
        'tempers': ['T5', 'T6'],
        'finishes': ['Clear Satin Anodized (10–15µm)', 'Black Anodized'],
        'shortDesc': 'Standard 20, 30, 40, and 80 series metric modular T-slot extrusions for machine building.',
        'longDesc': 'The global industrial automation workhorse. Metric modular T-slot profiles engineered with 6mm, 8mm, and 10mm slot openings for rapid bolt-together machine frames, safety guards, and assembly benches.',
        'apps': ['Automation Machinery Frames', 'Robot Enclosures', 'Conveyor Side Rails', 'Cleanroom Workstations'],
        'fabs': ['Precision Length Cut ±0.15mm', 'Core Hole End Tapping (M5–M16)', 'Access Hole Drilling'],
        'chips': ['Metric 20/30/40/80', 'Satin Anodized 15µm', 'Hardware Compatible'],
        'aliases': ['t-slot-modular-profiles', 't-slot-40', 't-slot-20', 't-slot-30', 'industrial-t-slot'],
        'dfm': ['Slot root radius is optimized to withstand repeated dynamic fastener torque without flange deflection.']
    },
    'v_slot_profiles': {
        'category': 'industrial-profiles',
        'categoryName': 'Industrial Profiles',
        'geometry': 'T-Slot Modular',
        'alloys': ['6063'],
        'tempers': ['T5'],
        'finishes': ['Clear Anodized', 'Black Anodized'],
        'shortDesc': 'Integrated 90-degree chamfered V-rail profiles for smooth linear motion roller bearings.',
        'longDesc': 'Precision V-slot aluminium profiles featuring precision chamfered edges that act as dual linear motion guide rails for Delrin or polycarbonate V-wheels.',
        'apps': ['3D Printers & CNC Routers', 'Laser Engravers', 'Camera Slider Rigs', 'Pick & Place Cartesian Robots'],
        'fabs': ['Precision Cut', 'Tapping', 'Slot Milling', 'Custom Anodizing'],
        'chips': ['Integrated V-Rail', '6063-T5 Precision', 'Smooth Motion Finish'],
        'aliases': ['v-slot-profiles'],
        'dfm': ['V-groove surface roughness is tightly monitored to ensure zero jitter during linear roller traversal.']
    },
    'solar_panel_frame_profiles': {
        'category': 'solar-profiles',
        'categoryName': 'Solar Profiles',
        'geometry': 'Hollow',
        'alloys': ['6063', '6005A'],
        'tempers': ['T5', 'T6'],
        'finishes': ['Clear Anodized (15µm)', 'Black Anodized (15µm)'],
        'shortDesc': 'Perimeter aluminium frame extrusions for crystalline and bifacial photovoltaic modules.',
        'longDesc': 'High-volume perimeter frames engineered for automated solar panel assembly lines. Equipped with internal corner key slots, glass adhesive channels, and grounding contact dimples.',
        'apps': ['Bifacial PV Modules', 'Utility-Scale Solar Panels', 'Commercial Rooftop PV', 'Off-Grid Solar Panels'],
        'fabs': ['Automated Mitre Cutting 45°', 'Drain Hole Punching', 'Corner Key Insertion Hole Punching'],
        'chips': ['Class 1 Anodizing 15µm', 'High Volume Ready', 'Wind/Snow Load Rated'],
        'aliases': ['solar-panel-frame-profiles', 'solar-module-frame'],
        'dfm': ['Tolerances on 45-degree corner mitres are maintained within ±0.15° to prevent water leakage.']
    },
    'solar_mounting_rails': {
        'category': 'solar-profiles',
        'categoryName': 'Solar Profiles',
        'geometry': 'Complex Multi-Void',
        'alloys': ['6005A', '6061'],
        'tempers': ['T6'],
        'finishes': ['Clear Anodized (15–20µm)'],
        'shortDesc': 'Heavy-duty structural mounting rails with continuous top and side fastener channels.',
        'longDesc': 'Engineered structural racking rails designed to span purlins and structural rafters under high wind uplift and snow load conditions across ground and rooftop arrays.',
        'apps': ['Ground-Mount Utility Farms', 'Rooftop Ballast Systems', 'Solar Carport Structures', 'Floating Solar Arrays'],
        'fabs': ['Length Sawing up to 6.2m', 'Custom Slot Punching', 'End Cap Fitting', 'Splice Bar Jointing'],
        'chips': ['6005A-T6 High Yield', 'Continuous Slot', 'Outdoor Marine Anodized'],
        'aliases': ['solar-mounting-rails', 'solar-mounting-rail'],
        'dfm': ['Multi-void internal ribs are placed along the principal bending axis to maximize cross-sectional moment.']
    },
    'solar_mid_clamps': {
        'category': 'solar-profiles',
        'categoryName': 'Solar Profiles',
        'geometry': 'Solid',
        'alloys': ['6005A', '6063'],
        'tempers': ['T6', 'T5'],
        'finishes': ['Clear Anodized', 'Black Anodized'],
        'shortDesc': 'Extruded aluminium clamping sections for securing adjacent solar modules.',
        'longDesc': 'Solid profile extrusion cut to precise clamp lengths with central bolt clearance and serrated clamping pads for slip-resistant module retention.',
        'apps': ['Photovoltaic Array Fastening', 'Ground Mount Clamping', 'Rooftop Array Mid-Joints'],
        'fabs': ['High-Speed Chop Saw Cutting', 'Deburring & Tumbling', 'Clearance Hole Punching', 'Pre-Assembly Kitting'],
        'chips': ['Serrated Grip Pads', 'Pre-Cut / Full Length', '6005A-T6 High Clamp Load'],
        'aliases': ['solar-mid-clamps', 'solar-clamp-profile'],
        'dfm': ['Serration teeth are extruded directly into profile geometry, eliminating secondary knurling operations.']
    },
    'solar_end_clamps': {
        'category': 'solar-profiles',
        'categoryName': 'Solar Profiles',
        'geometry': 'Solid',
        'alloys': ['6005A', '6063'],
        'tempers': ['T6', 'T5'],
        'finishes': ['Clear Anodized', 'Black Anodized'],
        'shortDesc': 'Perimeter termination clamps designed to secure the outer edge of solar module arrays.',
        'longDesc': 'Engineered end-clamp profiles designed to match standard module frame heights (30mm, 35mm, 40mm) with integrated grounding rib geometry.',
        'apps': ['Array Outer Edge Termination', 'Rooftop Perimeter Mounting', 'Carport Array Framing'],
        'fabs': ['Precision Chopping', 'Tumble Deburring', 'Tapping / Piercing', 'Hardware Assembly'],
        'chips': ['30/35/40mm Frame Match', 'Anti-Slip Ribbing', 'Corrosion Resistant'],
        'aliases': ['solar-end-clamps', 'solar-carport'],
        'dfm': ['Leg height is calibrated to match module frame height with controlled clamping deflection.']
    },
    'heat_sink_profiles': {
        'category': 'heat-sink-thermal',
        'categoryName': 'Heat Sink / Thermal',
        'geometry': 'Fin Array',
        'alloys': ['6063', '1050', '6060'],
        'tempers': ['T5'],
        'finishes': ['Black Anodized (High Emissivity)', 'Clear Anodized', 'Mill Finish'],
        'shortDesc': 'High-density comb and tapered fin heat sinks for high-power semiconductor cooling.',
        'longDesc': 'Thermal management extrusion profiles engineered with high aspect ratio fin geometries for maximum surface area and efficient forced or natural convection in power electronics.',
        'apps': ['Solar Inverter Heatsinks', 'EV Motor Controllers', 'High-Power Switchgear', 'Audio Power Amplifiers'],
        'fabs': ['Precision CNC Fly-Cutting', 'Hole Drilling & Tapping for TO-220/TO-247', 'Surface Lapping'],
        'chips': ['High Aspect Ratio Fins', 'Thermal 6063-T5', 'Black Emissivity Anodized'],
        'aliases': ['heat-sink-profiles', 'inverter-heatsink'],
        'dfm': ['Fin tip draft angles of 0.5°–1.0° prevent die sticking during extrusion press runs.']
    },
    'led_lighting_profiles': {
        'category': 'heat-sink-thermal',
        'categoryName': 'Heat Sink / Thermal',
        'geometry': 'Semi-Hollow',
        'alloys': ['6063'],
        'tempers': ['T5'],
        'finishes': ['Anodized Silver', 'Matte Black Anodized', 'White Powder Coated'],
        'shortDesc': 'Linear LED architectural channel profiles with integrated lens snap tracks and thermal sink.',
        'longDesc': 'Architectural lighting profiles combining efficient LED strip thermal dissipation with precision snap-in channels for polycarbonate diffuser lenses and end-caps.',
        'apps': ['Linear Commercial Fixtures', 'High-Bay Industrial LED', 'Cove & Recessed Lighting', 'Display Case Illumination'],
        'fabs': ['Precision Miter Cutting', 'Access Hole Punching', 'Custom Length Anodizing', 'Lens Fitting'],
        'chips': ['Diffuser Lens Snap Fit', 'Integrated PCB Channel', 'Architectural Anodized'],
        'aliases': ['led-lighting-profiles', 'led-heatsink'],
        'dfm': ['Lens retention grooves maintain tight tolerance (±0.1mm) to guarantee clean snap-fit engagement.']
    },
    'curtain_wall_profiles': {
        'category': 'architectural-systems',
        'categoryName': 'Architectural Systems',
        'geometry': 'Complex Multi-Void',
        'alloys': ['6063', '6005A', '6061'],
        'tempers': ['T5', 'T6'],
        'finishes': ['PVDF Fluoropolymer (2/3 Coat)', 'AAMA 2605 Powder Coating', 'Hard Anodized'],
        'shortDesc': 'Large-span mullion and transom profiles for high-rise unitized and stick curtain wall facades.',
        'longDesc': 'Heavy structural architectural profiles engineered to withstand extreme wind deflection, thermal expansion, and seismic joint movement on commercial facade structures.',
        'apps': ['Unitized High-Rise Facades', 'Stick Curtain Wall Systems', 'Structural Glass Atriums', 'Canopy Support Mullions'],
        'fabs': ['CNC End Coping', 'Continuous Drainage Slotting', 'Pressure Plate Punching', 'Thermal Barrier Assembly'],
        'chips': ['AAMA 2605 Compliant', 'Multi-Chamber Mullion', '6005A-T6 Structural'],
        'aliases': ['curtain-wall-profiles', 'curtain-wall-mullion'],
        'dfm': ['Extrusion length straightness (camber and bow) is strictly controlled to ASTM B221 precision limits.']
    },
    'window_door_profiles': {
        'category': 'architectural-systems',
        'categoryName': 'Architectural Systems',
        'geometry': 'Complex Multi-Void',
        'alloys': ['6063'],
        'tempers': ['T5'],
        'finishes': ['AAMA 2604 Powder Coating', 'Clear / Bronze Anodizing', 'Woodgrain Sublimation'],
        'shortDesc': 'Multi-chamber thermally broken profile sections for energy-efficient windows and doors.',
        'longDesc': 'Architectural window and door frame suites engineered with knurled crimping channels for polyamide (PA66) thermal barrier strip insertion, maximizing acoustic and thermal performance.',
        'apps': ['Commercial Casement Windows', 'Heavy Sliding Patio Doors', 'Pivot Entrance Doors', 'Storefront Systems'],
        'fabs': ['45° Double Miter Sawing', 'Polyamide Strip Insertion & Rolling', 'Drain Hole Routing', 'Hardware Milling'],
        'chips': ['Thermal Break Ready', 'AAMA 2604 Coating', 'Multi-Chamber Acoustic'],
        'aliases': ['window-door-profiles', 'window-door'],
        'dfm': ['Polyamide rolling groove knurling is monitored to achieve pull-apart shear strengths per EN 14024.']
    },
    'handrail_profiles': {
        'category': 'architectural-systems',
        'categoryName': 'Architectural Systems',
        'geometry': 'Hollow',
        'alloys': ['6063', '6061'],
        'tempers': ['T5', 'T6'],
        'finishes': ['Satin Anodized (15–20µm)', 'Architectural Powder Coated'],
        'shortDesc': 'Ergonomic circular and ovate architectural handrails for commercial staircases and balconies.',
        'longDesc': 'Smooth extruded circular and oval handrail profiles with continuous bottom channels for concealed glass or baluster mounting brackets. Free of sharp parting lines.',
        'apps': ['Commercial Staircases', 'Balcony Railings', 'Public Transit Barrier Rails', 'Hospital Wall Protection'],
        'fabs': ['Precision Length Cut', 'End Cap Welding / Plugging', 'Curved Bending', 'Hardware Fastening'],
        'chips': ['Ergonomic Grip', 'Satin Smooth Finish', 'ADA Compliant Diameter'],
        'aliases': ['handrail-profiles', 'structural-railings'],
        'dfm': ['Outer surface is subjected to high-grade die polishing to eliminate visible die lines before anodizing.']
    },
    'railing_balustrade_profiles': {
        'category': 'architectural-systems',
        'categoryName': 'Architectural Systems',
        'geometry': 'Semi-Hollow',
        'alloys': ['6063', '6005A'],
        'tempers': ['T5', 'T6'],
        'finishes': ['Polished Anodized', 'Matte Architectural Powder Coat'],
        'shortDesc': 'Heavy-duty structural base shoe channels and post extrusions for frameless glass balustrades.',
        'longDesc': 'Heavy structural floor-mount base shoe profiles engineered to clamp 12mm to 21.5mm laminated glass panels under rigorous building code crowd loading standards.',
        'apps': ['Frameless Glass Balustrades', 'Rooftop Terrace Railings', 'Pool Safety Fencing', 'Atrium Guardrails'],
        'fabs': ['Heavy Precision Sawing', 'Anchor Hole Drilling & Counterboring', 'Drainage Slots', 'Surface Treatment'],
        'chips': ['Heavy Base Shoe', 'Laminated Glass Ready', 'Crowd Load Certified'],
        'aliases': ['railing-balustrade-profiles', 'louvers-sunshade'],
        'dfm': ['Thick base sections require controlled water spray quench to prevent internal residual stress distortion.']
    },
    'enclosure_profiles': {
        'category': 'architectural-systems',
        'categoryName': 'Architectural Systems',
        'geometry': 'Complex Multi-Void',
        'alloys': ['6063'],
        'tempers': ['T5'],
        'finishes': ['Clear Anodized', 'Black Anodized', 'Weatherproof Powder Coat'],
        'shortDesc': 'Modular interlocking enclosure extrusions with integrated PCB slots and sealing gasket grooves.',
        'longDesc': 'Engineered electronics and outdoor equipment enclosure profiles featuring slide-in PCB card guides, rubber gasket seal channels (IP65/IP66), and tongue-and-groove side interlocks.',
        'apps': ['Outdoor Telecom Enclosures', 'Industrial Instrumentation', 'Power Inverter Cabinets', 'Controller Housings'],
        'fabs': ['CNC End Milling', 'Connector Port Piercing', 'Gasket Channel Routing', 'Tapping'],
        'chips': ['Integrated PCB Guides', 'Gasket Groove (IP65)', 'Interlocking Shell'],
        'aliases': ['enclosure-profiles', 'power-electronics'],
        'dfm': ['PCB card guide tolerances must be held within +0.15/-0.05mm to ensure smooth slide insertion.']
    },
    'cnc_machined_components': {
        'category': 'oem-components',
        'categoryName': 'OEM Components',
        'geometry': 'CNC Component',
        'alloys': ['6061', '6082', '7075'],
        'tempers': ['T6', 'T651'],
        'finishes': ['Bead Blasted + Anodized', 'Hard Anodized (Type III)', 'Chemical Conversion'],
        'shortDesc': 'Turnkey multi-axis CNC milled and turned components manufactured to client STEP/CAD nominals.',
        'longDesc': 'Complex precision aluminium components produced from extruded profile blanks or forged billets. Equipped with 3-axis and 4-axis long-bed CNC centers for aerospace, robotics, and automation parts.',
        'apps': ['Robotic Joint Actuators', 'Engine Mounts', 'Hydraulic Manifold Blocks', 'Precision Sensor Housings'],
        'fabs': ['4-Axis CNC Milling', 'CNC Turning', 'Micro-Tapping', 'Ultrasonic Cleaning', 'CMM Inspection'],
        'chips': ['Tight Tolerance ±0.02mm', 'CMM Inspected', 'Traceable Heat Lot'],
        'aliases': ['cnc-machined-components', 'cnc-components'],
        'dfm': ['Design with standard cutter radii on pocket corners to maximize CNC machining feed rates.']
    },
    'custom_aluminium_parts': {
        'category': 'oem-components',
        'categoryName': 'OEM Components',
        'geometry': 'CNC Component',
        'alloys': ['6061', '6063', '5052'],
        'tempers': ['T6', 'H32'],
        'finishes': ['Anodized', 'Electroless Nickel Plating', 'Passivated'],
        'shortDesc': 'Custom fabricated aluminium parts combining extrusion blanking, stamping, bending, and finishing.',
        'longDesc': 'Customized OEM parts integrating profile extrusion with secondary stamping, hydraulic press braking, precision drilling, and custom packaging for international Tier-1 assemblies.',
        'apps': ['Automotive Heat Shields', 'Suspension Brackets', 'Machinery Linkages', 'Electronics Heatsink Assemblies'],
        'fabs': ['Stamping & Blanking', 'CNC Bending', 'Tapping', 'Surface Finishing', 'Custom Kitting'],
        'chips': ['Multi-Process OEM', 'Custom Tooling', 'Export Ready Kitting'],
        'aliases': ['custom-aluminium-parts', 'cut-drill-tap', 'surface-finished-oem'],
        'dfm': ['Combine extrusion features with secondary fabrication to minimize overall part cost.']
    },
    'industrial_assemblies': {
        'category': 'oem-components',
        'categoryName': 'OEM Components',
        'geometry': 'CNC Component',
        'alloys': ['6063', '6061'],
        'tempers': ['T5', 'T6'],
        'finishes': ['Anodized', 'Powder Coated'],
        'shortDesc': 'Complete sub-assemblies including hardware insertion, modular framing, and export crating.',
        'longDesc': 'Turnkey factory sub-assembly services for global equipment manufacturers. Profiles are cut, machined, tapped, equipped with bearings, brackets, fasteners, and packaged for rapid on-site installation.',
        'apps': ['Conveyor Modules', 'Inspection Workstations', 'Cleanroom Modular Trolleys', 'Linear Gantry Modules'],
        'fabs': ['Full Sub-Assembly', 'Fastener Insertion', 'Sub-System Functional Check', 'Custom Export Crating'],
        'chips': ['Turnkey Assembly', 'Integrated Fasteners', 'Factory Tested'],
        'aliases': ['industrial-assemblies', 'assembled-subcomponents'],
        'dfm': ['Modular fastener slots allow tolerance accommodation during mechanical sub-assembly alignment.']
    }
}

output_lines = []
output_lines.append('''export interface CategoryCatalogItem {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  overview: string;
  heroImage: string;
  applications: string[];
  keyAdvantages: string[];
  faqs: { q: string; a: string }[];
}

export interface CatalogMediaItem {
  id: string;
  productId: string;
  assetKey: string;
  url: string;
  mediaType: string;
  sourceType: string;
  license: string;
  altText: string;
  isPrimary: boolean;
  approvalStatus: 'APPROVED' | 'DRAFT' | 'REVIEW';
}

export interface ProductCatalogItem {
  id: string;
  slug: string;
  aliases?: string[];
  name: string;
  category: string;
  categoryName: string;
  shortDescription: string;
  longDescription: string;
  profileGeometry: 'Solid' | 'Hollow' | 'Semi-Hollow' | 'Complex Multi-Void' | 'T-Slot Modular' | 'Fin Array' | 'CNC Component';
  alloys: string[];
  tempers: string[];
  surfaceFinishes: string[];
  applications: string[];
  fabrications: string[];
  verifiedChips: string[];
  primaryImage: string;
  galleryImages: string[];
  media?: CatalogMediaItem[];
  isStandard: boolean;
  isCustom: boolean;
  requiresDrawing: boolean;
  verificationStatus: 'VERIFIED' | 'UNVERIFIED';
  technicalClaimStatus: 'VERIFIED' | 'UNVERIFIED';
  specs: {
    label: string;
    value: string;
    verified: boolean;
    unit?: string;
  }[];
  mediaProvenance: {
    type: 'APPROVED_CUSTOM_RENDER' | 'FACTORY_OWNED';
    license: string;
    author: string;
  };
  dfmNotes: string[];
  qcStandards: string[];
  packaging: string;
}

export const CATEGORIES_V2: CategoryCatalogItem[] = [
  {
    id: 'cat-custom',
    slug: 'custom-extrusions',
    name: 'Custom Extrusions',
    shortDescription: 'Tailored solid, hollow, and complex multi-void aluminium profiles engineered to client drawings.',
    overview: 'Custom aluminium extrusion profiles manufactured in Vietnam for global OEM fabricators and machinery builders. Our engineering team validates die flow, wall-thickness uniformity, and alloy temper suitability directly from 2D/3D CAD models.',
    heroImage: '/media/catalog/01_square_rectangular_hollow_profiles.webp',
    applications: ['Automotive Subframes', 'Industrial Automation', 'Transport Rails', 'Specialized Enclosures'],
    keyAdvantages: [
      'Tailored die tooling manufactured to client CAD specifications',
      'Structural 6000-series alloys: 6063, 6061, 6005A, 6082',
      'Full DFM flow analysis to prevent die deflection and uneven cooling'
    ],
    faqs: [
      {
        q: 'What 2D/3D drawing formats are accepted for custom die development?',
        a: 'We accept 3D models in STEP (.stp, .step), IGES (.igs), Parasolid (.x_t), and 2D CAD engineering drawings in DWG, DXF, and PDF with all critical tolerance callouts.'
      },
      {
        q: 'What is the standard lead time for custom extrusion tooling?',
        a: 'Standard custom extrusion dies take 15 to 21 calendar days for trial sample production (T0 samples) including CMM dimensional inspection reports.'
      }
    ]
  },
  {
    id: 'cat-industrial',
    slug: 'industrial-profiles',
    name: 'Industrial Profiles',
    shortDescription: 'Standard modular T-slot and V-slot framing systems for industrial machinery and automation.',
    overview: 'Modular aluminium extrusion profiles for factory automation, robotic cells, machine guarding, and cleanroom workstations. Fully compatible with international hardware brackets and fasteners.',
    heroImage: '/media/catalog/09_t_slot_modular_profiles.webp',
    applications: ['Machine Guarding', 'Conveyor Framing', 'Assembly Workstations', 'Linear Actuator Tracks'],
    keyAdvantages: [
      'Standard metric grid series (20, 30, 40, 80 series) and V-slot rails',
      'Clear satin anodized finish 10–15µm for scratch resistance',
      'Precision length cuts with deburred edges and tapped end holes'
    ],
    faqs: [
      {
        q: 'Are your T-slot profiles compatible with standard European brackets?',
        a: 'Yes, our 20, 30, 40, and 80 series strictly adhere to standard European slot dimensions (6mm, 8mm, and 10mm slot widths) and accept standard T-nuts and drop-in bolts.'
      }
    ]
  },
  {
    id: 'cat-solar',
    slug: 'solar-profiles',
    name: 'Solar Profiles',
    shortDescription: 'High-volume photovoltaic module perimeter frames, mounting rails, and clamping hardware.',
    overview: 'Engineered structural aluminium extrusions designed for utility-scale solar farms, commercial rooftop racking, and PV module perimeter framing.',
    heroImage: '/media/catalog/11_solar_panel_frame_profiles.webp',
    applications: ['Photovoltaic Module Frames', 'Ground Mount Racking', 'Rooftop Ballast Systems', 'Solar Carports'],
    keyAdvantages: [
      'High strength-to-weight structural alloys: 6005A-T6 and 6061-T6',
      'Class 1 Anodizing (15–20µm) tested for outdoor coastal corrosion resistance',
      'Automated CNC punch lines for corner key insertion and drainage holes'
    ],
    faqs: [
      {
        q: 'What anodizing thickness is provided for solar mounting rails?',
        a: 'Standard outdoor solar rails are supplied with minimum 15µm clear anodizing, with optional 20µm or 25µm for harsh maritime environments.'
      }
    ]
  },
  {
    id: 'cat-architectural',
    slug: 'architectural-systems',
    name: 'Architectural Systems',
    shortDescription: 'Curtain wall mullions, thermal-break window/door systems, louvers, and structural balustrades.',
    overview: 'High-performance architectural extrusions manufactured to international building standards. Engineered for wind load deflection, air infiltration resistance, and acoustic performance.',
    heroImage: '/media/catalog/17_curtain_wall_profiles.webp',
    applications: ['Commercial Facades', 'Unitized Curtain Walls', 'Thermal-Break Windows', 'Glass Balustrades'],
    keyAdvantages: [
      'AAMA 2604 / AAMA 2605 compliant architectural powder coating',
      'Integrated thermal-break polyamide barrier channels',
      'Tight angular and straightness tolerances compliant with EN 755-9'
    ],
    faqs: [
      {
        q: 'Do you offer PVDF fluoropolymer coating for high-rise facades?',
        a: 'Yes, our electrostatic coating line supports 2-coat and 3-coat PVDF coatings tested for UV resistance and color retention under ASTM D2244.'
      }
    ]
  },
  {
    id: 'cat-thermal',
    slug: 'heat-sink-thermal',
    name: 'Heat Sink / Thermal',
    shortDescription: 'High-density fin profiles and heat sinks for inverters, power electronics, and LED luminaires.',
    overview: 'Thermal dissipation extrusion profiles with high aspect ratio fin geometry for forced and natural convection cooling in power electronics and EV infrastructure.',
    heroImage: '/media/catalog/15_heat_sink_profiles.webp',
    applications: ['Solar Inverters', 'EV Charging Stations', 'High-Power LED Fixtures', 'VFD Motor Drives'],
    keyAdvantages: [
      'High aspect ratio fin designs engineered for maximum surface area',
      'High thermal conductivity 6063 and 1050/6060 alloys',
      'Black anodized high-emissivity finish for superior radiative cooling'
    ],
    faqs: [
      {
        q: 'What is the maximum fin-to-space aspect ratio you can extrude?',
        a: 'We reliably extrude fin ratios up to 14:1 on standard presses, and up to 18:1 using specialized die designs and high-conductivity 6063 alloy.'
      }
    ]
  },
  {
    id: 'cat-oem',
    slug: 'oem-components',
    name: 'OEM Components',
    shortDescription: 'Turnkey machined components: precision cutting, 4-axis CNC milling, tapping, and sub-assembly.',
    overview: 'Full-service aluminium component manufacturing from raw billet to finished machined part. Our machine shop handles multi-axis milling, drilling, tapping, and kitting.',
    heroImage: '/media/catalog/22_cnc_machined_components.webp',
    applications: ['Automotive Brackets', 'Robotic Arms & End-Effectors', 'Precision Electronic Housings', 'Machinery Bases'],
    keyAdvantages: [
      'Long-bed 3-axis and 4-axis CNC machining centers',
      'Complete in-house secondary deburring, tumbling, and hardware insertion',
      'Traceable CMM dimensional inspection and material certification'
    ],
    faqs: [
      {
        q: 'Can you deliver fully assembled kits ready for assembly lines?',
        a: 'Yes, our assembly shop installs threaded inserts, helicoils, captive fasteners, and provides barcoded custom kitting for export.'
      }
    ]
  }
];

export const PRODUCTS_V2: ProductCatalogItem[] = [
''')

for it in manifest:
    slug = it['slug']
    name = it['name']
    meta = product_meta[slug]
    filename = os.path.basename(it['file'])
    media_url = f'/media/catalog/{filename}'
    
    item_id = it['id']
    prod_id = f'prod-{item_id:02d}'
    
    output_lines.append(f'''  {{
    id: '{prod_id}',
    slug: '{slug}',
    aliases: {json.dumps(meta['aliases'])},
    name: {json.dumps(name)},
    category: '{meta['category']}',
    categoryName: '{meta['categoryName']}',
    shortDescription: {json.dumps(meta['shortDesc'])},
    longDescription: {json.dumps(meta['longDesc'])},
    profileGeometry: '{meta['geometry']}',
    alloys: {json.dumps(meta['alloys'])},
    tempers: {json.dumps(meta['tempers'])},
    surfaceFinishes: {json.dumps(meta['finishes'])},
    applications: {json.dumps(meta['apps'])},
    fabrications: {json.dumps(meta['fabs'])},
    verifiedChips: {json.dumps(meta['chips'])},
    primaryImage: '{media_url}',
    galleryImages: [
      '{media_url}',
      '{media_url}'
    ],
    media: [
      {{
        id: 'med-{prod_id}-01',
        productId: '{prod_id}',
        assetKey: '{slug}',
        url: '{media_url}',
        mediaType: 'image/webp',
        sourceType: 'APPROVED_CUSTOM_RENDER',
        license: 'LELOI Proprietary Visual Asset V1',
        altText: {json.dumps(name + " 4:3 industrial aluminium extrusion studio render")},
        isPrimary: true,
        approvalStatus: 'APPROVED'
      }}
    ],
    isStandard: {str(meta['geometry'] in ['Solid', 'Hollow', 'T-Slot Modular']).lower()},
    isCustom: true,
    requiresDrawing: true,
    verificationStatus: 'UNVERIFIED',
    technicalClaimStatus: 'UNVERIFIED',
    specs: [
      {{ label: 'Available Alloys', value: {json.dumps(', '.join(meta['alloys']))}, verified: false }},
      {{ label: 'Standard Tempers', value: {json.dumps(', '.join(meta['tempers']))}, verified: false }},
      {{ label: 'Surface Finishes', value: {json.dumps(', '.join(meta['finishes']))}, verified: false }},
      {{ label: 'Extrusion Tolerance Standard', value: 'Per client CAD / ASTM B221 / EN 755', verified: false }},
      {{ label: 'B2B Minimum Order (Trial Batch)', value: '500–1,000 kg (Full container scaling)', verified: false }}
    ],
    mediaProvenance: {{
      type: 'APPROVED_CUSTOM_RENDER',
      license: 'LELOI Proprietary Visual Asset V1',
      author: 'LELOI METAL Studio'
    }},
    dfmNotes: {json.dumps(meta['dfm'])},
    qcStandards: ['ASTM B221', 'EN 755', 'ISO 9001:2015'],
    packaging: 'Fumigated export-grade timber crates with rust-inhibiting moisture barrier.'
  }},''')

output_lines.append('''
];

export default PRODUCTS_V2;
''')

final_content = '\n'.join(output_lines)

with open('packages/types/src/products-catalog-v2.ts', 'w', encoding='utf-8') as f:
    f.write(final_content)

with open('packages/database/src/data/products-catalog-v2.ts', 'w', encoding='utf-8') as f:
    f.write(final_content)

print('Successfully written products-catalog-v2.ts to both packages/types and packages/database!')
