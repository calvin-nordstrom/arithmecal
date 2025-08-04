import CalculatorLayout from '@/app/components/CalculatorLayout';
import KatexRenderer from '@/app/components/KatexRenderer';
import type { Metadata } from 'next'
import Dropdown from '@/app/components/Dropdown';
import SquareAreaCalculator from '@/app/components/math/area/SquareAreaCalculator';
import RectangleAreaCalculator from '@/app/components/math/area/RectangleAreaCalculator';
import TriangleAreaCalculator from '@/app/components/math/area/TriangleAreaCalculator';
import CircleAreaCalculator from '@/app/components/math/area/CircleAreaCalculator';
import EllipseAreaCalculator from '@/app/components/math/area/EllipseAreaCalculator';
import CircleSectorAreaCalculator from '@/app/components/math/area/CircleSectorAreaCalculator';
import ParallelogramAreaCalculator from '@/app/components/math/area/ParallelogramAreaCalculator';
import RhombusAreaCalculator from '@/app/components/math/area/RhombusAreaCalculator';
import KiteAreaCalculator from '@/app/components/math/area/KiteAreaCalculator';
import TrapezoidAreaCalculator from '@/app/components/math/area/TrapezoidAreaCalculator';
import RegularPentagonAreaCalculator from '@/app/components/math/area/RegularPentagonAreaCalculator';
import RegularHexagonAreaCalculator from '@/app/components/math/area/RegularHexagonAreaCalculator';
import RegularOctagonAreaCalculator from '@/app/components/math/area/RegularOctagonAreaCalculator';
import RegularNgonAreaCalculator from '@/app/components/math/area/RegularNgonAreaCalculator';
import AnnulusAreaCalculator from '@/app/components/math/area/AnnulusAreaCalculator';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Area Calculator',
  description: 'Calculate the area of 15 different geometric shapes using Arithmecal’s simple formulas and interactive tools.',
  keywords: 'area calculator, geometry, triangle area, circle area, Arithmecal, square area, ellipse area, polygon area, area',
  alternates: {
    canonical: 'https://www.arithmecal.com/math/area',
  },
}

export default function AreaCalculatorPage() {
  const dropdownConfig = [
    { label: 'Square', component: <SquareAreaCalculator /> },
    { label: 'Rectangle', component: <RectangleAreaCalculator /> },
    { label: 'Triangle', component: <TriangleAreaCalculator /> },
    { label: 'Circle', component: <CircleAreaCalculator /> },
    { label: 'Ellipse', component: <EllipseAreaCalculator /> },
    { label: 'Sector of a Circle', component: <CircleSectorAreaCalculator /> },
    { label: 'Parallelogram', component: <ParallelogramAreaCalculator /> },
    { label: 'Rhombus', component: <RhombusAreaCalculator /> },
    { label: 'Kite', component: <KiteAreaCalculator /> },
    { label: 'Trapezoid', component: <TrapezoidAreaCalculator /> },
    { label: 'Regular Pentagon', component: <RegularPentagonAreaCalculator /> },
    { label: 'Regular Hexagon', component: <RegularHexagonAreaCalculator /> },
    { label: 'Regular Octagon', component: <RegularOctagonAreaCalculator /> },
    { label: 'Regular n-gon', component: <RegularNgonAreaCalculator /> },
    { label: 'Annulus', component: <AnnulusAreaCalculator /> },
  ];

  return (
    <CalculatorLayout>
      <h1>Area Calculator</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <Dropdown label='Shape' config={dropdownConfig} />
        </div>
        <div className='calculator-description'>
          <p>This calculator allows you to compute the area of <strong>15 popular shapes</strong> rapidly and accurately. Below is a list of the shapes we offer and information about computing their areas.</p>

          <h2>How to Use This Calculator</h2>
          <ol>
            <li>Choose the shape to find the area of</li>
            <li>Enter the required values</li>
          </ol>
          <p>Some area calculators offer various methods of computing the area. For example, the triangle area calculator allows you to find the area given different values such as:</p>
          <ul>
            <li>Base & height</li>
            <li>Three sides</li>
            <li>Two sides & angle between them</li>
            <li>Two angles & side between them</li>
            <li>2D vertex coordinates</li>
          </ul>

          <h2>Table of Area Formulas</h2>
          <ul>
            <li><Link href='#square-area'>Square</Link></li>
            <li><Link href='#rectangle-area'>Rectangle</Link></li>
            <li><Link href='#triangle-area'>Triangle</Link></li>
            <li><Link href='#circle-area'>Circle</Link></li>
            <li><Link href='#ellipse-area'>Ellipse</Link></li>
            <li><Link href='#sector-of-a-circle-area'>Sector of a circle</Link></li>
            <li><Link href='#parallelogram-area'>Parallelogram</Link></li>
            <li><Link href='#rhombus-area'>Rhombus</Link></li>
            <li><Link href='#kite-area'>Kite</Link></li>
            <li><Link href='#trapezoid-area'>Trapezoid</Link></li>
            <li><Link href='#regular-pentagon-area'>Regular pentagon</Link></li>
            <li><Link href='#regular-hexagon-area'>Regular hexagon</Link></li>
            <li><Link href='#regular-octagon-area'>Regular octagon</Link></li>
            <li><Link href='#regular-n-gon-area'>Regular n-gon</Link></li>
            <li><Link href='#annulus-area'>Annulus</Link></li>
          </ul>

          <h2>Area Formulas</h2>

          <h3 id='square-area'>Square Area Formula</h3>
          <p>Side length: <KatexRenderer formula='A = s^2' /> where <em>s</em> is the side length.</p>
          <p>Diagonal length: <KatexRenderer formula='A = \frac{d^2}{2}' /> where <em>d</em> is the diagonal length.</p>

          <h3 id='rectangle-area'>Rectangle Area Formula</h3>
          <p><KatexRenderer formula='A = l \times w' /> where <em>l</em> is length and <em>w</em> is width.</p>
          
          <h3 id='triangle-area'>Triangle Area Formula</h3>
          <p>Base and height: <KatexRenderer formula='A = \frac{1}{2} b h' /></p>
          <p>Three sides (Heron&apos;s formula): <KatexRenderer formula='A = \sqrt{s(s-a)(s-b)(s-c)}' />, where <KatexRenderer formula='s = \frac{a + b + c}{2}' /></p>
          <p>Two sides and included angle: <KatexRenderer formula='A = \frac{1}{2} ab \sin(C)' /></p>
          <p>One side and two angles: <KatexRenderer formula='A = \frac{1}{2} \cdot \frac{a^2 \sin(B) \sin(C)}{\sin(A)}' /></p>
          <p>Coordinates: <KatexRenderer formula='A = \frac{1}{2} \left| x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2) \right|' /></p>

          <h3 id='circle-area'>Circle Area Formula</h3>
          <p><KatexRenderer formula='A = \pi r^2' /> where <em>r</em> is the radius.</p>
          
          <h3 id='ellipse-area'>Ellipse Area Formula</h3>
          <p><KatexRenderer formula='A = \pi a b' /> where <em>a</em> and <em>b</em> are the semi-major and semi-minor axes.</p>
          
          <h3 id='sector-of-a-circle-area'>Sector of a Circle Area Formula</h3>
          <p><KatexRenderer formula='A = \frac{\theta}{360^\circ} \pi r^2' /> where <em>θ</em> is in degrees and <em>r</em> is the radius.</p>
          
          <h3 id='parallelogram-area'>Parallelogram Area Formula</h3>
          <p>Base and height: <KatexRenderer formula='A = b h' /></p>
          <p>Two sides and included angle: <KatexRenderer formula='A = ab \sin(\theta)' /></p>
          <p>Diagonals and angle between: <KatexRenderer formula='A = \frac{1}{2} d_1 d_2 \sin(\theta)' /></p>
          
          <h3 id='rhombus-area'>Rhombus Area Formula</h3>
          <p>Diagonals: <KatexRenderer formula='A = \frac{1}{2} d_1 d_2' /></p>
          <p>Side and height: <KatexRenderer formula='A = s h' /></p>
          <p>Side and angle: <KatexRenderer formula='A = s^2 \sin(\theta)' /></p>
          
          <h3 id='kite-area'>Kite Area Formula</h3>
          <p>Diagonals: <KatexRenderer formula='A = \frac{1}{2} d_1 d_2' /></p>
          <p>Two unequal sides and included angle: <KatexRenderer formula='A = ab \sin(\theta)' /></p>
          
          <h3 id='trapezoid-area'>Trapezoid Area Formula</h3>
          <p><KatexRenderer formula='A = \frac{1}{2} (a + b) h' /> where <em>a</em> and <em>b</em> are the parallel sides, and <em>h</em> is the height.</p>
                    
          <h3 id='regular-pentagon-area'>Regular Pentagon Area Formula</h3>
          <p><KatexRenderer formula='A = \frac{5}{4} s^2 \cot\left(\frac{\pi}{5}\right)' /> where <em>s</em> is the side length.</p>
                    
          <h3 id='regular-hexagon-area'>Regular Hexagon Area Formula</h3>
          <p><KatexRenderer formula='A = \frac{3\sqrt{3}}{2} s^2' /> where <em>s</em> is the side length.</p>
                    
          <h3 id='regular-octagon-area'>Regular Octagon Area Formula</h3>
          <p><KatexRenderer formula='A = 2(1 + \sqrt{2}) s^2' /> where <em>s</em> is the side length.</p>
                    
          <h3 id='regular-n-gon-area'>Regular N-gon Area Formula</h3>
          <p><KatexRenderer formula='A = \frac{n s^2}{4} \cot\left(\frac{\pi}{n}\right)' /> where <em>n</em> is the number of sides and <em>s</em> is the side length.</p>
                    
          <h3 id='annulus-area'>Annulus Area Formula</h3>
          <p><KatexRenderer formula='A = \pi(R^2 - r^2)' /> where <em>R</em> is the outer radius and <em>r</em> is the inner radius.</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
