/**
 * Registry Visual untuk Modul Kompetisi Matematika AMC (AMC 8, AMC 10, AMC 12)
 * Stimulus diagram kontekstual untuk soal Geometri, Geometri Analitik/Koordinat,
 * Bangun Ruang 3D, Bidang Argand, dan Kombinatorika Grid.
 */
export const amcVisualRegistry = {
  // AMC 8 Geometry: Special Triangles (45-45-90 dan 30-60-90)
  'amc8-geo-q1': {
    type: 'right-triangle',
    props: {
      title: 'Segitiga Siku-Siku Khusus 45°-45°-90°',
      caption: '*Segitiga siku-siku sama kaki dengan panjang kaki 10 cm',
      base: 10,
      height: 10,
      baseLabel: '10 cm',
      heightLabel: '10 cm',
      hypLabel: 'x cm',
      vertices: { right: 'B', top: 'A', far: 'C' }
    }
  },

  'amc8-geo-q2': {
    type: 'right-triangle',
    props: {
      title: 'Segitiga Siku-Siku 30°-60°-90°',
      caption: '*Panjang sisi di depan sudut 30° adalah 6 cm',
      base: 10.39, // 6 * sqrt(3)
      height: 6,
      baseLabel: '6√3 cm',
      heightLabel: '6 cm (depan 30°)',
      hypLabel: 'H = ? cm',
      vertices: { right: 'C', top: 'A', far: 'B' }
    }
  },

  // AMC 8 Geometry: Circles & Inscribed Angle
  'amc8-geo-q3': {
    type: 'circle-angle',
    props: {
      title: 'Sudut Pusat dan Sudut Keliling Lingkaran',
      caption: '*Sudut keliling menghadap busur yang sama dengan sudut pusat',
      centralAngle: '80°',
      inscribedAngle: '?°'
    }
  },

  // AMC 10 Geometry: Trapezoid & Similar Triangles
  'amc10-geo-q1': {
    type: 'trapezoid',
    props: {
      title: 'Trapesium Sama Kaki ABCD',
      caption: '*Sisi sejajar AB = 10 cm dan CD = 16 cm dengan tinggi t = 4 cm',
      dimA: '10 cm',
      dimB: '16 cm',
      dimT: 't = 4 cm',
      labels: { topLeft: 'A', topRight: 'B', bottomRight: 'C', bottomLeft: 'D' }
    }
  },

  // AMC 10 Geometry: Coordinate Plane / Cartesian Plot
  'amc10-geo-q2': {
    type: 'cartesian-plot',
    props: {
      title: 'Grafik Koordinat Kartesius Titik Kisi (Lattice Points)',
      caption: '*Titik potong garis y = 2x + 1 dan y = -x + 7',
      xRange: [-2, 8],
      yRange: [-2, 10],
      points: [
        { x: 2, y: 5, label: 'P(2, 5)' },
        { x: 0, y: 1, label: '(0, 1)' },
        { x: 0, y: 7, label: '(0, 7)' }
      ]
    }
  },

  // AMC 10 Geometry: Shoelace Formula
  'amc10-geo-shoelace': {
    type: 'cartesian-plot',
    props: {
      title: 'Luas Poligon via Shoelace Formula',
      caption: '*Luas segitiga dengan titik sudut A(1, 2), B(5, 1), C(4, 6)',
      xRange: [-1, 7],
      yRange: [-1, 7],
      points: [
        { x: 1, y: 2, label: 'A(1, 2)' },
        { x: 5, y: 1, label: 'B(5, 1)' },
        { x: 4, y: 6, label: 'C(4, 6)' }
      ]
    }
  },

  // AMC 10 Geometry: Power of a Point Theorem
  'amc10-geo-power': {
    type: 'circle-angle',
    props: {
      title: 'Kuasa Titik pada Lingkaran (Power of a Point)',
      caption: '*Dua tali busur berpotongan di dalam lingkaran: PA × PB = PC × PD',
      centralAngle: '80°',
      inscribedAngle: '40°'
    }
  },

  // AMC 12 Geometry: Solid 3D Cube & Ruang
  'amc12-geo-q1': {
    type: 'solid-3d',
    props: {
      title: 'Kubus dan Diagonal Ruang',
      caption: '*Kubus dengan rusuk s = 6 cm dan diagonal ruang AG',
      solid: 'box',
      lengthLabel: 's = 6 cm',
      widthLabel: 's = 6 cm',
      heightLabel: 's = 6 cm'
    }
  },

  // AMC 12 Geometry: Sphere in Cylinder (Archimedes)
  'amc12-geo-sphere-cyl': {
    type: 'solid-3d',
    props: {
      title: 'Bola dalam Tabung Archimedes',
      caption: '*Rasio volume bola terhadap tabung pembungkus berdimensi sama',
      solid: 'sphere-in-cylinder',
      radiusLabel: 'r = 6 cm',
      heightLabel: 't = 12 cm'
    }
  },

  // AMC 12 Complex Numbers: Argand Plane Roots of Unity
  'amc12-argand-roots': {
    type: 'cartesian-plot',
    props: {
      title: 'Akar Kesatuan Ketiga pada Bidang Argand',
      caption: '*Titik-titik sudut segitiga sama sisi pada lingkaran satuan |z| = 1',
      xRange: [-2, 2],
      yRange: [-2, 2],
      points: [
        { x: 1, y: 0, label: '1' },
        { x: -0.5, y: 0.866, label: 'ω' },
        { x: -0.5, y: -0.866, label: 'ω²' }
      ]
    }
  },

  // AMC 8 Combinatorics: Grid Paths
  'amc8-comb-q4': {
    type: 'unit-grid',
    props: {
      title: 'Grid Jalur Terpendek 3x4 (Lattice Path)',
      caption: '*Banyak langkah dari titik pojok kiri bawah (0,0) ke pojok kanan atas (4,3)',
      rows: 3,
      cols: 4,
      highlightPath: true
    }
  }
};
