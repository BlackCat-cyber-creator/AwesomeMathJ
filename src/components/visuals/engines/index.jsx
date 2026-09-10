import React from 'react';
import { BarModelVisual, BalanceScaleVisual, ShoppingVisual } from './AlgebraVisuals.jsx';
import { RightTriangleVisual, TriangleVisual, QuadrilateralVisual, Solid3DVisual } from './GeometryVisuals.jsx';
import { CartesianPlotVisual } from './CoordinateVisuals.jsx';
import { 
  NumberLineVisual, 
  FractionStripVisual, 
  CircleFractionVisual,
  ProbabilityBagVisual,
  ProbabilityObjectVisual,
  ClockAngleVisual,
  UnitGridVisual,
  PictogramVisual
} from './ArithmeticVisuals.jsx';
import { BarChartVisual, ScatterPlotVisual } from './StatisticsVisuals.jsx';

/**
 * renderVisualEngine:
 * Menerima objek visual config dan me-render komponen SVG engine yang bersesuaian.
 */
export function renderVisualEngine(config, question) {
  if (!config) return null;

  const { type, props = {} } = config;

  switch (type) {
    // Aljabar & Mikro
    case 'bar-model':
      return <BarModelVisual {...props} />;
    case 'balance-scale':
      return <BalanceScaleVisual {...props} />;
    case 'shopping':
      return <ShoppingVisual {...props} />;

    // Geometri & Ruang
    case 'right-triangle':
      return <RightTriangleVisual {...props} />;
    case 'triangle':
      return <TriangleVisual {...props} />;
    case 'quadrilateral':
    case 'rectangle':
    case 'square':
    case 'trapezoid':
    case 'parallelogram':
    case 'rhombus':
    case 'kite':
      return <QuadrilateralVisual type={props.type || type} {...props} />;
    case 'solid-3d':
      return <Solid3DVisual {...props} />;

    // Koordinat & Transformasi
    case 'cartesian-plot':
      return <CartesianPlotVisual {...props} />;

    // Aritmetika, SD, Pecahan & Peluang
    case 'number-line':
      return <NumberLineVisual {...props} />;
    case 'fraction-strip':
      return <FractionStripVisual {...props} />;
    case 'circle-fraction':
      return <CircleFractionVisual {...props} />;
    case 'clock-angle':
      return <ClockAngleVisual {...props} />;
    case 'unit-grid':
      return <UnitGridVisual {...props} />;
    case 'pictogram':
      return <PictogramVisual {...props} />;
    case 'probability-bag':
      return <ProbabilityBagVisual {...props} />;
    case 'probability-object':
    case 'coin':
    case 'dice':
    case 'spinner':
      return <ProbabilityObjectVisual type={props.type || type} {...props} />;

    // Statistika & Data
    case 'bar-chart':
      return <BarChartVisual {...props} />;
    case 'scatter-plot':
      return <ScatterPlotVisual {...props} />;

    // Kustom JSX / Spesifik
    case 'custom':
      if (typeof config.render === 'function') {
        return config.render(question);
      }
      return config.jsx || null;

    default:
      return null;
  }
}
