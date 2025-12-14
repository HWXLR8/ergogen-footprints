module.exports = {
  params: {
    designator: 'MCU',
    side: 'F',

    P1:  { type: 'net', value: 'P1'  },
    P2:  { type: 'net', value: 'P2'  },
    P3:  { type: 'net', value: 'P3'  },
    P4:  { type: 'net', value: 'P4'  },
    P5:  { type: 'net', value: 'P5'  },
    P6:  { type: 'net', value: 'P6'  },
    P7:  { type: 'net', value: 'P7'  },
    P8:  { type: 'net', value: 'P8'  },
    P9:  { type: 'net', value: 'P9'  },
    P10: { type: 'net', value: 'P10' },
    P11: { type: 'net', value: 'P11' },
    P12: { type: 'net', value: 'P12' },
    P13: { type: 'net', value: 'P13' },
    P14: { type: 'net', value: 'P14' },
    P15: { type: 'net', value: 'P15' },
    P16: { type: 'net', value: 'P16' },
    P17: { type: 'net', value: 'P17' },
    P18: { type: 'net', value: 'P18' },
    P19: { type: 'net', value: 'P19' },
    P20: { type: 'net', value: 'P20' },
    P21: { type: 'net', value: 'P21' },
    P22: { type: 'net', value: 'P22' },
    P23: { type: 'net', value: 'P23' }
  },

  body: p => `
  (footprint "ceoloide:mcu_rp2040_zero"
    (layer "${p.side}.Cu")
    ${p.at}

    (property "Reference" "${p.ref}"
      (at 9 -13 ${p.r})
      (layer "${p.side}.SilkS")
      ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.15)))
    )

    (attr through_hole exclude_from_pos_files exclude_from_bom)

    ${''/* Courtyard & fabrication outline (from RP2040-Zero .kicad_mod) */}
    (fp_line (start 0 -23.5) (end 18 -23.5) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
    (fp_line (start 0 0) (end 0 -23.5) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
    (fp_line (start 18 -23.5) (end 18 0) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
    (fp_line (start 18 0) (end 0 0) (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))

    (fp_line (start 0 -23.5) (end 0 0) (stroke (width 0.12) (type solid)) (layer "F.Fab"))
    (fp_line (start 0 0) (end 18 0) (stroke (width 0.12) (type solid)) (layer "F.Fab"))
    (fp_line (start 4.67 -24.5) (end 4.67 -23.5) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
    (fp_line (start 4.67 -24.5) (end 13.3 -24.5) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
    (fp_line (start 13.3 -24.5) (end 13.3 -23.5) (stroke (width 0.1) (type solid)) (layer "F.Fab"))
    (fp_line (start 18 -23.5) (end 0 -23.5) (stroke (width 0.12) (type solid)) (layer "F.Fab"))
    (fp_line (start 18 0) (end 18 -23.5) (stroke (width 0.12) (type solid)) (layer "F.Fab"))

    ${''/* Through-hole pads (positions, sizes, offsets from .kicad_mod) */}
    (pad "1" thru_hole roundrect
      (at 1.38 -21.91 ${p.r})
      (size 2.6 1.6002)
      (drill 0.8 (offset -0.6 0))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P1.str}
    )

    (pad "2" thru_hole roundrect
      (at 1.38 -19.37 ${p.r})
      (size 2.6 1.6002)
      (drill 0.8 (offset -0.6 0))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P2.str}
    )

    (pad "3" thru_hole roundrect
      (at 1.38 -16.83 ${p.r})
      (size 2.6 1.6002)
      (drill 0.8 (offset -0.6 0))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P3.str}
    )

    (pad "4" thru_hole roundrect
      (at 1.38 -14.29 ${p.r})
      (size 2.6 1.6002)
      (drill 0.8 (offset -0.6 0))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P4.str}
    )

    (pad "5" thru_hole roundrect
      (at 1.38 -11.75 ${p.r})
      (size 2.6 1.6002)
      (drill 0.8 (offset -0.6 0))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P5.str}
    )

    (pad "6" thru_hole roundrect
      (at 1.38 -9.21 ${p.r})
      (size 2.6 1.6002)
      (drill 0.8 (offset -0.6 0))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P6.str}
    )

    (pad "7" thru_hole roundrect
      (at 1.38 -6.67 ${p.r})
      (size 2.6 1.6002)
      (drill 0.8 (offset -0.6 0))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P7.str}
    )

    (pad "8" thru_hole roundrect
      (at 1.38 -4.13 ${p.r})
      (size 2.6 1.6002)
      (drill 0.8 (offset -0.6 0))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P8.str}
    )

    (pad "9" thru_hole roundrect
      (at 1.38 -1.59 ${p.r})
      (size 2.6 1.6002)
      (drill 0.8 (offset -0.6 0))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P9.str}
    )

    (pad "10" thru_hole roundrect
      (at 3.92 -1.38 ${p.r})
      (size 1.5748 2.6)
      (drill 0.8 (offset 0 0.6))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P10.str}
    )

    (pad "11" thru_hole roundrect
      (at 6.46 -1.38 ${p.r})
      (size 1.5748 2.6)
      (drill 0.8 (offset 0 0.6))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P11.str}
    )

    (pad "12" thru_hole roundrect
      (at 9 -1.38 ${p.r})
      (size 1.5748 2.6)
      (drill 0.8 (offset 0 0.6))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P12.str}
    )

    (pad "13" thru_hole roundrect
      (at 11.54 -1.38 ${p.r})
      (size 1.5748 2.6)
      (drill 0.8 (offset 0 0.6))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P13.str}
    )

    (pad "14" thru_hole roundrect
      (at 14.08 -1.38 ${p.r})
      (size 1.6 2.6)
      (drill 0.8 (offset 0 0.6))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P14.str}
    )

    (pad "15" thru_hole roundrect
      (at 16.62 -1.59 ${p.r})
      (size 2.6 1.6002)
      (drill 0.8 (offset 0.6 0))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P15.str}
    )

    (pad "16" thru_hole roundrect
      (at 16.62 -4.13 ${p.r})
      (size 2.6 1.6002)
      (drill 0.8 (offset 0.6 0))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P16.str}
    )

    (pad "17" thru_hole roundrect
      (at 16.62 -6.67 ${p.r})
      (size 2.6 1.6002)
      (drill 0.8 (offset 0.6 0))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P17.str}
    )

    (pad "18" thru_hole roundrect
      (at 16.62 -9.21 ${p.r})
      (size 2.6 1.6002)
      (drill 0.8 (offset 0.6 0))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P18.str}
    )

    (pad "19" thru_hole roundrect
      (at 16.62 -11.75 ${p.r})
      (size 2.6 1.6)
      (drill 0.8 (offset 0.6 0))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P19.str}
    )

    (pad "20" thru_hole roundrect
      (at 16.62 -14.29 ${p.r})
      (size 2.6 1.6)
      (drill 0.8 (offset 0.6 0))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P20.str}
    )

    (pad "21" thru_hole roundrect
      (at 16.62 -16.83 ${p.r})
      (size 2.6 1.6)
      (drill 0.8 (offset 0.6 0))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P21.str}
    )

    (pad "22" thru_hole roundrect
      (at 16.62 -19.37 ${p.r})
      (size 2.6 1.6)
      (drill 0.8 (offset 0.6 0))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P22.str}
    )

    (pad "23" thru_hole roundrect
      (at 16.62 -21.91 ${p.r})
      (size 2.6 1.6)
      (drill 0.8 (offset 0.6 0))
      (layers "*.Cu" "*.Mask")
      (roundrect_rratio 0.25)
      ${p.P23.str}
    )

  )
  `
};
