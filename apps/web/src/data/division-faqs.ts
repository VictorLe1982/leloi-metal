/**
 * LELOI METAL — Buyer FAQs, one hand-written set per division.
 *
 * Deliberately NOT rendered on all 60 family pages: the same FAQPage block
 * repeated across 60 URLs is duplicate structured data, and Google has
 * demoted FAQ rich results for exactly that pattern. Six substantive sets on
 * six strong division pages is worth more than sixty thin ones.
 *
 * Every answer states a fact we can stand behind (ADR-006). Where a number is
 * still UNVERIFIED — press force, own-facility annual tonnage, machining bed
 * length — the answer says what we do instead of inventing a figure.
 */

export interface DivisionFaq {
  question: string;
  answer: string;
}

export const DIVISION_FAQS: Record<string, DivisionFaq[]> = {
  'custom-extrusions': [
    {
      question: 'How much does a custom aluminium extrusion die cost?',
      answer:
        'Die cost depends on the circumscribing circle diameter, whether the section is solid, semi-hollow or hollow, and how many cavities the die carries. Hollow sections need a porthole or bridge die and cost more than a solid section of the same size. Send your drawing and we quote the tooling separately from the per-kilogram profile price, so you can see both.'
    },
    {
      question: 'What is the minimum order quantity for a new custom profile?',
      answer:
        'Trial batches typically start in the 500–1000 kg range, which is enough to validate a new die and let you test fit and finish before committing to production volumes. Repeat orders are usually quoted per container load.'
    },
    {
      question: 'Who owns the die once it has been cut?',
      answer:
        'A die cut from your drawing is dedicated to your parts. It is not used to produce for any other customer, and the drawing itself is covered by a mutual non-disclosure agreement available before you submit files.'
    },
    {
      question: 'What tolerances can extruded aluminium hold?',
      answer:
        'Standard production is held to EN 755-9 or ASTM B221, which define permissible deviation by dimension and by whether the feature spans a hollow. Tighter project-specific tolerances are assessed against your drawing before we quote, because holding them may change the die design or require secondary machining.'
    },
    {
      question: 'Which alloys do you extrude?',
      answer:
        'We extrude 6063, 6061, 6005A, 6082 and 6060 in T4, T5, T6 and T66 tempers. 6063 is the general architectural and general-purpose choice, 6061 and 6082 for structural and machined parts, and 6005A where higher strength must be combined with good extrudability.'
    }
  ],

  architectural: [
    {
      question: 'What is a thermal break and when do I need one?',
      answer:
        'A thermal break is a polyamide strip mechanically locked between the inner and outer aluminium shells of a frame, interrupting heat transfer through the metal. Specify one where the building must meet a U-value requirement, or in climates where condensation on the internal frame face is a concern. In mild climates a non-broken frame is often sufficient and costs less.'
    },
    {
      question: 'Should I specify anodizing or powder coating for a facade?',
      answer:
        'Powder coating gives a far wider colour range and repeatable batch-to-batch colour matching, which matters on phased projects. Anodizing is an integral conversion of the metal rather than a film, so it cannot chip, but colour varies slightly between batches. For exterior architectural exposure specify Class I anodizing at roughly 25 microns, or a powder coating system rated for exterior use.'
    },
    {
      question: 'Can you supply profiles compatible with our existing hardware?',
      answer:
        'Yes. Send the hardware datasheet or a sample along with your section drawing and our tool engineers confirm that the gear channel, euro groove and screw ports match before the die is cut. This check costs nothing and prevents a die revision later.'
    },
    {
      question: 'What glass thicknesses can your window and door systems accept?',
      answer:
        'Our sash profiles accommodate single glazing from 5 mm to 8 mm, insulated glazing units up to 24 mm, and laminated safety glass from 6.38 mm to 10.76 mm, using interchangeable snap-on glazing beads. Confirm the makeup at RFQ stage so the correct bead is supplied.'
    },
    {
      question: 'Do you provide a coating warranty?',
      answer:
        'Warranties of up to 10 years are available on approved AkzoNobel powder coating systems. The duration that applies to your project depends on the coating system selected, the site location and environmental exposure, surface preparation and the applicable warranty conditions, and is confirmed in writing with your quotation.'
    }
  ],

  'industrial-profiles': [
    {
      question: 'Are your T-slot profiles compatible with standard connectors?',
      answer:
        'Our T-slot framing follows the common 20, 30, 40, 45, 60 and 80 series slot geometries, so standard brackets, T-nuts and end connectors fit. If you are extending an existing installation, send a sample or a cross-section drawing and we confirm slot width and core dimensions before quoting.'
    },
    {
      question: 'Can you supply framing cut to our bill of materials?',
      answer:
        'Yes. Send the cutting list and we supply pre-cut, deburred components labelled by assembly, which removes offcut waste and saw time from your own line. This is usually cheaper than shipping stock lengths and cutting them on site.'
    },
    {
      question: 'What finish should I specify for factory framing?',
      answer:
        'Clear anodizing at 10–12 microns is the usual choice for indoor machine framing: it resists handling marks, does not flake into the process, and keeps the slot dimensions predictable. Mill finish is acceptable where the frame is enclosed or later painted.'
    },
    {
      question: 'Which alloy and temper do you use for machine framing?',
      answer:
        '6063-T5 is standard for general framing, giving a good surface for anodizing with adequate stiffness. Where the frame carries significant load or long unsupported spans, we recommend moving to 6061-T6 or 6082-T6 and will flag this when we review your drawing.'
    }
  ],

  solar: [
    {
      question: 'Which alloy should a solar module frame use?',
      answer:
        '6005A-T6 and 6063-T6 are the usual choices. 6005A-T6 offers higher yield strength for larger modules and higher wind and snow loads, while 6063-T6 suits standard residential and commercial modules at lower cost. Send your load case and module dimensions and we will advise on the drawing.'
    },
    {
      question: 'What anodizing thickness do solar frames need?',
      answer:
        'Solar frames are typically anodized at 15 microns for general installations and 20–25 microns for coastal, desert or high-humidity sites where corrosion exposure is severe. Layer thickness is verified per batch before release.'
    },
    {
      question: 'Can you produce to our existing frame drawing?',
      answer:
        'Yes. Solar frames are almost always customer-specific, so we work from your section drawing and cut a dedicated die. We also review corner key channels and drainage hole positions against the mounting system you intend to use.'
    },
    {
      question: 'Do you supply mounting rails and clamps as well as frames?',
      answer:
        'Yes. We extrude mounting rails, mid and end clamps, ground-mount and carport structural sections and inverter enclosure profiles, so a project can be sourced as one package rather than split across suppliers.'
    }
  ],

  'thermal-management': [
    {
      question: 'What fin aspect ratio can you extrude on a heat sink?',
      answer:
        'Achievable aspect ratio depends on fin height against the gap between fins, and on the press the section runs on. High-ratio dense-fin sections put more load on the die and typically run slower. Send your thermal target and envelope and we will tell you what is extrudable before you commit to a die.'
    },
    {
      question: 'Which alloy gives the best thermal conductivity?',
      answer:
        '6063 is the standard heat sink alloy because it combines good thermal conductivity with the extrudability needed for thin, closely spaced fins. Higher-strength alloys such as 6061 conduct less well and are used only where the sink also carries structural load.'
    },
    {
      question: 'Should a heat sink be black anodized?',
      answer:
        'Black anodizing raises surface emissivity, which helps meaningfully where a significant share of heat is shed by radiation rather than forced airflow. In fan-cooled assemblies the benefit is small and a clear anodized or mill finish may be sufficient.'
    },
    {
      question: 'Can you machine the base flat after extrusion?',
      answer:
        'Yes. Base flatness for die or module contact is a machining operation, not an extrusion one. We CNC machine the mounting face, drill and tap after extrusion so the part arrives ready to assemble.'
    }
  ],

  'oem-components': [
    {
      question: 'What file formats do you accept for machined parts?',
      answer:
        'PDF, DWG and DXF for 2D drawings, and STEP, STP, IGES or IGS for 3D models; archives may be sent as ZIP. Mark critical dimensions and datum references clearly, as those determine fixturing and inspection.'
    },
    {
      question: 'Do you machine extrusions you did not produce?',
      answer:
        'Yes, we machine customer-supplied and third-party extrusions. Combining extrusion and machining under one roof usually shortens lead time and reduces handling damage, but it is not a requirement.'
    },
    {
      question: 'Can you supply assembled sub-components rather than loose parts?',
      answer:
        'Yes. We perform hardware insertion, sub-assembly and custom kitting, and pack by assembly or project phase so your receiving team can put stock straight to the line.'
    },
    {
      question: 'Do you provide first-article inspection reports?',
      answer:
        'Yes. Dimensional first-article reports are issued on request and can be made a standing requirement on your purchase order. Each export batch is also accompanied by an EN 10204 3.1 mill test certificate covering alloy chemistry and hardness.'
    },
    {
      question: 'What surface finishes can be applied to machined parts?',
      answer:
        'Anodizing from 10 to 25 microns in clear, black, bronze or champagne, and powder coating in RAL and custom architectural colours. Note that machining after anodizing exposes bare metal, so tell us the required sequence at RFQ stage.'
    }
  ]
};

export function getDivisionFaqs(divisionSlug: string): DivisionFaq[] {
  return DIVISION_FAQS[divisionSlug] ?? [];
}
