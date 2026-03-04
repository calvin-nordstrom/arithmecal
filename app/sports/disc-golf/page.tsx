import CalculatorLayout from '@/app/components/CalculatorLayout';
import DiscGolfFlightChartCalculator from '@/app/components/sports/disc-golf/DiscGolfFlightChartCalculator';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disc Golf Flight Guide',
  description: 'Disc golf flight chart calculator and guide. Enter speed, glide, turn, fade, power, hand, and throw type to visualize flight paths and understand disc stability.',
  keywords: 'disc golf flight chart calculator, flight numbers explained, speed glide turn fade, backhand vs forehand, disc stability guide, understable vs overstable, distance driver flight',
  alternates: {
    canonical: 'https://arithmecal.com/sports/disc-golf',
  },
}

export default function DiscGolfPage() {
  return (
    <CalculatorLayout>
      <h1>Disc Golf Flight Guide</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <DiscGolfFlightChartCalculator />
        </div>
        <div className='calculator-description'>
          <h2>Flight Numbers</h2>
          <p>In disc golf, the flight numbers of a disc describe how it flies. While not formally standardized across manufacturers, the four-number system is widely used to communicate a disc&apos;s aerodynamic tendencies throughout its flight. These numbers represent <strong>Speed, Glide, Turn,</strong> and <strong>Fade</strong>.</p>

          <h3>Quick Summary</h3>
          <ul>
            <li><a href='#speed'><strong>Speed</strong></a> - The required launch velocity for the disc to achieve its intended flight.</li>
            <li><a href='#glide'><strong>Glide</strong></a> - The disc&apos;s ability to maintain loft and carry downfield.</li>
            <li><a href='#turn'><strong>Turn</strong></a> - High-speed stability; the tendency to drift right (RHBH) during the fastest phase of flight.</li>
            <li><a href='#fade'><strong>Fade</strong></a> - Low-speed stability; the disc&apos;s tendency to hook left (RHBH) as it slows down.</li>
          </ul>
          <p className='note'>The term <strong>RHBH</strong> stands for the <strong>Right-Hand Backhand</strong> type of throw. See <a href='#backhand-vs-forehand'>Backhand vs. Forehand</a> and <a href='#throw-hand-orientation'>Throw Hand Orientation</a> for more information.</p>

          <h3 id='speed'><strong>Speed</strong> (1 to 14)</h3>
          <p>Speed ranges typically from 1 to 14 and reflects the disc&apos;s rim width and aerodynamic profile. Higher-speed discs require greater launch velocity to behave as designed. If thrown below their intended velocity, they will act more overstable (less turn, more fade). If thrown at or above their intended velocity, their full flight characteristics — especially turn — become more pronounced.</p>

          <h3 id='glide'><strong>Glide</strong> (1 to 7)</h3>
          <p>Glide typically ranges from 1 to 7 and represents how efficiently a disc maintains lift. Higher glide discs stay in the air longer and can produce greater distance with less power. Lower glide discs drop more quickly and are often preferred for controlled approaches or windy conditions.</p>

          <h3 id='turn'><strong>Turn</strong> (-5 to 1)</h3>
          <p>Turn generally ranges from -5 to +1 and describes the disc&apos;s behavior during the high-speed portion of the flight. Negative values indicate a tendency to “turn over” (move right for a right-hand backhand throw), while positive values indicate resistance to turning. Turn is most visible when the disc is thrown at or above its rated speed.</p>

          <h3 id='fade'><strong>Fade</strong> (0 to 5)</h3>
          <p>Fade typically ranges from 0 to 5 and describes the disc&apos;s low-speed finishing behavior. As the disc loses velocity, aerodynamic stability increases and the disc begins to move in its natural fade direction (left for a right-hand backhand throw). Higher fade values indicate a stronger, earlier finishing hook.</p>

          <h2>How This Calculator Works</h2>
          <p>This calculator models a disc&apos;s projected flight path based on its flight numbers and user-defined throw parameters. It adjusts the expected high-speed and low-speed phases according to:</p>
          <ul>
            <li>Disc flight numbers (Speed, Glide, Turn, Fade)</li>
            <li>Throw power (60% - 120%, where 100% represents nominal speed rating)</li>
            <li>Throw hand (Right or Left)</li>
            <li>Throw type (Backhand or Forehand)</li>
          </ul>
          <p>Because flight numbers are dependent on the disc manufacturer, the result of the flight chart is an approximation. However, as companies want to accurately describe their discs, the chart is close to what you would observe!</p>

          <h3 id='power-level-and-disc-speed'>Power Level and Disc Speed</h3>
          <p>Power percentage directly modifies the effective launch velocity relative to the disc&apos;s speed rating. At <strong>100% power</strong>, the disc is assumed to be thrown at its intended design speed.</p>
          <ul>
            <li><strong>Below 100% (60-90%)</strong> - The disc behaves more overstable. Turn is reduced or eliminated, and fade becomes more pronounced and earlier.</li>
            <li><strong>At 100%</strong> - The disc exhibits its intended high-speed turn and late fade characteristics.</li>
            <li><strong>Above 100% (110-120%)</strong> - High-speed turn increases. Understable discs may turn significantly before fading back, while stable discs may begin to show turn not normally visible at lower power.</li>
          </ul>
          <p>Higher-speed discs are more sensitive to underpowering. For example, a speed 12 driver thrown at 75% power will likely never reach its designed high-speed turn phase and will instead fly similarly to a slower, more overstable disc.</p>

          <h3 id='backhand-vs-forehand'>Backhand vs. Forehand</h3>
          <p>Throw type affects how torque and release mechanics influence the disc&apos;s stability.</p>
          <ul>
            <li>
              <strong>Backhand (BH)</strong> - Typically produces smoother spin and more consistent high-speed turn. Flight numbers most closely reflect backhand performance under clean release conditions.
            </li>
            <li>
              <strong>Forehand (FH)</strong> - Often introduces greater off-axis torque. Discs may behave slightly more understable during the high-speed phase unless they have strong high-speed stability. Players commonly select more overstable discs for forehand throws to compensate.
            </li>
          </ul>

          <h3 id='throw-hand-orientation'>Throw Hand Orientation</h3>
          <p>The calculator mirrors lateral movement based on throw hand:</p>
          <ul>
            <li><strong>Right-Hand Backhand (RHBH)</strong>: Turn moves right, fade finishes left.</li>
            <li><strong>Right-Hand Forehand (RHFH)</strong>: Turn moves left, fade finishes right.</li>
            <li><strong>Left-Hand Backhand (LHBH)</strong>: Turn moves left, fade finishes right.</li>
            <li><strong>Left-Hand Forehand (LHFH)</strong>: Turn moves right, fade finishes left.</li>
          </ul>

          <h2>Flight Chart Output</h2>
          <p>Using these parameters, the calculator generates a projected 2D flight chart illustrating:</p>
          <ul>
            <li>Initial straight-line acceleration phase</li>
            <li>High-speed turn (if sufficient power is applied)</li>
            <li>Glide-dominant carry segment</li>
            <li>Low-speed fade and finishing angle</li>
          </ul>
          <p>The result is not a perfect physics simulation, but a structured approximation that helps players understand how disc selection and throw mechanics interact to shape real-world flight paths.</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
