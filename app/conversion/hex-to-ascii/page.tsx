import CalculatorLayout from '@/app/components/CalculatorLayout';
import type { Metadata } from 'next'
import BaseConverterNavigator from '@/app/components/BaseConverterNavigator';
import HexToASCIIConverter from '@/app/components/conversion/HexToASCIIConverter';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hex to ASCII Conversion',
  description: 'Arithmecal hex to ASCII conversion',
  keywords: '',
};

export default function HexToASCIIConversionPage() {
  return (
    <CalculatorLayout>
      <h1>Hex to ASCII Conversion</h1>
      <div className='calculator-content'>
        <div className='calculator-component'>
          <BaseConverterNavigator />
          <HexToASCIIConverter />
        </div>
        <div className='calculator-description'>
          <p>This tool allows you to convert hexadecimal (base-16) values into ASCII text and vice versa.</p>

          <h2>How to Use This Converter</h2>
          <ul>
            <li>Enter a hex string like <code>48 65 6C 6C 6F</code> to convert it to ASCII (e.g., &quot;Hello&quot;)</li>
            <li>Or input ASCII text to see its hexadecimal representation</li>
          </ul>
          <p>Great for decoding hex-encoded messages or viewing raw data.</p>

          <h2>Understanding the Conversion</h2>
          <p>Each ASCII character is represented by a hexadecimal byte (two hex digits).</p>
          <p>For example:</p>
          <ul>
            <li>&quot;A&quot; → Hex <code>41</code></li>
            <li>&quot;B&quot; → Hex <code>42</code></li>
            <li>&quot;a&quot; → Hex <code>61</code></li>
          </ul>

          <h2>Example</h2>
          <p>Convert <code>48 65 6C 6C 6F</code> to ASCII:</p>
          <table>
            <thead>
              <tr>
                <th>Hex</th>
                <th>ASCII</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>48</td>
                <td>H</td>
              </tr>
              <tr>
                <td>65</td>
                <td>e</td>
              </tr>
              <tr>
                <td>6C</td>
                <td>l</td>
              </tr>
              <tr>
                <td>6C</td>
                <td>l</td>
              </tr>
              <tr>
                <td>6F</td>
                <td>o</td>
              </tr>
            </tbody>
          </table>
          <p><strong>Result: &quot;Hello&quot;</strong></p>

          <h2>Why Convert Hex to ASCII?</h2>
          <p>Hex to ASCII is commonly used in:</p>
          <ul>
            <li>Debugging memory dumps</li>
            <li>Decoding URL/HTTP data</li>
            <li>Viewing encoded messages in network protocols</li>
          </ul>
          <p>For a full character reference, check out our <Link href='../reference/ascii-table' target='_blank'>ASCII Table</Link>.</p>
        </div>
      </div>
    </CalculatorLayout>
  );
}
