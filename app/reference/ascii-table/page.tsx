import ReferenceLayout from '@/app/components/ReferenceLayout';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ASCII Table',
  description: 'Explore Arithmecal’s ASCII table with both standard and extended characters, including binary, octal, hex, and character representations.',
  keywords: 'ASCII table, standard ASCII, extended ASCII, character encoding, binary, octal, hex, printable characters, control characters, character encoding reference',
  alternates: {
    canonical: 'https://www.arithmecal.com/reference/ascii-table',
  },
  formatDetection: { telephone: false, },
}

export default function ASCIITablePage() {
  return (
    <ReferenceLayout>
      <h1>ASCII Table</h1>
      <div className='ascii-table-content'>
        <div className='ascii-table-text-container'>
          <h2>Standard ASCII Table</h2>
          <p>ASCII, which stands for the <strong>American Standard Code for Information Interchange</strong>, is a character encoding standard used for representing text in computers, communication equipment, and other digital devices. Each character is assigned a numeric value between 0 and 127 in the standard ASCII specification. ASCII was developed in the early 1960s and became widely adopted due to its simplicity and compatibility with early computing systems.</p>
          <p>Standard ASCII contains:</p>
          <ul>
            <li><strong>Control characters</strong> (0-31 and 127), such as carriage return (CR), line feed (LF), and backspace (BS), which are used for text formatting and control in data streams.</li>
            <li><strong>Printable characters</strong> (32-126), including:
              <ul>
                <li>Uppercase and lowercase English letters (A-Z, a-z)</li>
                <li>Digits (0-9)</li>
                <li>Common punctuation marks and symbols (e.g., !, @, #, $, %, &, *)</li>
                <li>Whitespace characters like the space (decimal 32)</li>
              </ul>
            </li>
          </ul>
          <p>Standard ASCII is universally supported across all modern programming languages and systems. It forms the basis for most modern character encodings, including <strong>UTF-8</strong>.</p>
          <p>The standard ASCII table is as follows:</p>
        </div>

        <div className='reference-table'>
          <table>
            <caption>Decimal 0 - 31</caption>
            <thead>
              <tr><th>Dec</th><th>Bin</th><th>Oct</th><th>Hex</th><th>ASCII</th></tr>
            </thead>
            <tbody>
              <tr><th>0</th><td>00000000</td><td>000</td><td>00</td><td>NUL</td></tr>
              <tr><th>1</th><td>00000001</td><td>001</td><td>01</td><td>SOH</td></tr>
              <tr><th>2</th><td>00000010</td><td>002</td><td>02</td><td>STX</td></tr>
              <tr><th>3</th><td>00000011</td><td>003</td><td>03</td><td>ETX</td></tr>
              <tr><th>4</th><td>00000100</td><td>004</td><td>04</td><td>EOT</td></tr>
              <tr><th>5</th><td>00000101</td><td>005</td><td>05</td><td>ENQ</td></tr>
              <tr><th>6</th><td>00000110</td><td>006</td><td>06</td><td>ACK</td></tr>
              <tr><th>7</th><td>00000111</td><td>007</td><td>07</td><td>BEL</td></tr>
              <tr><th>8</th><td>00001000</td><td>010</td><td>08</td><td>BS</td></tr>
              <tr><th>9</th><td>00001001</td><td>011</td><td>09</td><td>TAB</td></tr>
              <tr><th>10</th><td>00001010</td><td>012</td><td>0A</td><td>LF</td></tr>
              <tr><th>11</th><td>00001011</td><td>013</td><td>0B</td><td>VT</td></tr>
              <tr><th>12</th><td>00001100</td><td>014</td><td>0C</td><td>FF</td></tr>
              <tr><th>13</th><td>00001101</td><td>015</td><td>0D</td><td>CR</td></tr>
              <tr><th>14</th><td>00001110</td><td>016</td><td>0E</td><td>SO</td></tr>
              <tr><th>15</th><td>00001111</td><td>017</td><td>0F</td><td>SI</td></tr>
              <tr><th>16</th><td>00010000</td><td>020</td><td>10</td><td>DLE</td></tr>
              <tr><th>17</th><td>00010001</td><td>021</td><td>11</td><td>DC1</td></tr>
              <tr><th>18</th><td>00010010</td><td>022</td><td>12</td><td>DC2</td></tr>
              <tr><th>19</th><td>00010011</td><td>023</td><td>13</td><td>DC3</td></tr>
              <tr><th>20</th><td>00010100</td><td>024</td><td>14</td><td>DC4</td></tr>
              <tr><th>21</th><td>00010101</td><td>025</td><td>15</td><td>NAK</td></tr>
              <tr><th>22</th><td>00010110</td><td>026</td><td>16</td><td>SYN</td></tr>
              <tr><th>23</th><td>00010111</td><td>027</td><td>17</td><td>ETB</td></tr>
              <tr><th>24</th><td>00011000</td><td>030</td><td>18</td><td>CAN</td></tr>
              <tr><th>25</th><td>00011001</td><td>031</td><td>19</td><td>EM</td></tr>
              <tr><th>26</th><td>00011010</td><td>032</td><td>1A</td><td>SUB</td></tr>
              <tr><th>27</th><td>00011011</td><td>033</td><td>1B</td><td>ESC</td></tr>
              <tr><th>28</th><td>00011100</td><td>034</td><td>1C</td><td>FS</td></tr>
              <tr><th>29</th><td>00011101</td><td>035</td><td>1D</td><td>GS</td></tr>
              <tr><th>30</th><td>00011110</td><td>036</td><td>1E</td><td>RS</td></tr>
              <tr><th>31</th><td>00011111</td><td>037</td><td>1F</td><td>US</td></tr>
            </tbody>
          </table>
          <table>
            <caption>Decimal 32 - 63</caption>
            <thead>
              <tr><th>Dec</th><th>Bin</th><th>Oct</th><th>Hex</th><th>ASCII</th></tr>
            </thead>
            <tbody>
              <tr><th>32</th><td>00100000</td><td>040</td><td>20</td><td>SPACE</td></tr>
              <tr><th>33</th><td>00100001</td><td>041</td><td>21</td><td>!</td></tr>
              <tr><th>34</th><td>00100010</td><td>042</td><td>22</td><td>&quot;</td></tr>
              <tr><th>35</th><td>00100011</td><td>043</td><td>23</td><td>#</td></tr>
              <tr><th>36</th><td>00100100</td><td>044</td><td>24</td><td>$</td></tr>
              <tr><th>37</th><td>00100101</td><td>045</td><td>25</td><td>%</td></tr>
              <tr><th>38</th><td>00100110</td><td>046</td><td>26</td><td>&</td></tr>
              <tr><th>39</th><td>00100111</td><td>047</td><td>27</td><td>&apos;</td></tr>
              <tr><th>40</th><td>00101000</td><td>050</td><td>28</td><td>(</td></tr>
              <tr><th>41</th><td>00101001</td><td>051</td><td>29</td><td>)</td></tr>
              <tr><th>42</th><td>00101010</td><td>052</td><td>2A</td><td>*</td></tr>
              <tr><th>43</th><td>00101011</td><td>053</td><td>2B</td><td>+</td></tr>
              <tr><th>44</th><td>00101100</td><td>054</td><td>2C</td><td>,</td></tr>
              <tr><th>45</th><td>00101101</td><td>055</td><td>2D</td><td>-</td></tr>
              <tr><th>46</th><td>00101110</td><td>056</td><td>2E</td><td>.</td></tr>
              <tr><th>47</th><td>00101111</td><td>057</td><td>2F</td><td>/</td></tr>
              <tr><th>48</th><td>00110000</td><td>060</td><td>30</td><td>0</td></tr>
              <tr><th>49</th><td>00110001</td><td>061</td><td>31</td><td>1</td></tr>
              <tr><th>50</th><td>00110010</td><td>062</td><td>32</td><td>2</td></tr>
              <tr><th>51</th><td>00110011</td><td>063</td><td>33</td><td>3</td></tr>
              <tr><th>52</th><td>00110100</td><td>064</td><td>34</td><td>4</td></tr>
              <tr><th>53</th><td>00110101</td><td>065</td><td>35</td><td>5</td></tr>
              <tr><th>54</th><td>00110110</td><td>066</td><td>36</td><td>6</td></tr>
              <tr><th>55</th><td>00110111</td><td>067</td><td>37</td><td>7</td></tr>
              <tr><th>56</th><td>00111000</td><td>070</td><td>38</td><td>8</td></tr>
              <tr><th>57</th><td>00111001</td><td>071</td><td>39</td><td>9</td></tr>
              <tr><th>58</th><td>00111010</td><td>072</td><td>3A</td><td>:</td></tr>
              <tr><th>59</th><td>00111011</td><td>073</td><td>3B</td><td>;</td></tr>
              <tr><th>60</th><td>00111100</td><td>074</td><td>3C</td><td>&lt;</td></tr>
              <tr><th>61</th><td>00111101</td><td>075</td><td>3D</td><td>=</td></tr>
              <tr><th>62</th><td>00111110</td><td>076</td><td>3E</td><td>&gt;</td></tr>
              <tr><th>63</th><td>00111111</td><td>077</td><td>3F</td><td>?</td></tr>
            </tbody>
          </table>
          <table>
            <caption>Decimal 64 - 95</caption>
            <thead>
              <tr><th>Dec</th><th>Bin</th><th>Oct</th><th>Hex</th><th>ASCII</th></tr>
            </thead>
            <tbody>
              <tr><th>64</th><td>01000000</td><td>100</td><td>40</td><td>@</td></tr>
              <tr><th>65</th><td>01000001</td><td>101</td><td>41</td><td>A</td></tr>
              <tr><th>66</th><td>01000010</td><td>102</td><td>42</td><td>B</td></tr>
              <tr><th>67</th><td>01000011</td><td>103</td><td>43</td><td>C</td></tr>
              <tr><th>68</th><td>01000100</td><td>104</td><td>44</td><td>D</td></tr>
              <tr><th>69</th><td>01000101</td><td>105</td><td>45</td><td>E</td></tr>
              <tr><th>70</th><td>01000110</td><td>106</td><td>46</td><td>F</td></tr>
              <tr><th>71</th><td>01000111</td><td>107</td><td>47</td><td>G</td></tr>
              <tr><th>72</th><td>01001000</td><td>110</td><td>48</td><td>H</td></tr>
              <tr><th>73</th><td>01001001</td><td>111</td><td>49</td><td>I</td></tr>
              <tr><th>74</th><td>01001010</td><td>112</td><td>4A</td><td>J</td></tr>
              <tr><th>75</th><td>01001011</td><td>113</td><td>4B</td><td>K</td></tr>
              <tr><th>76</th><td>01001100</td><td>114</td><td>4C</td><td>L</td></tr>
              <tr><th>77</th><td>01001101</td><td>115</td><td>4D</td><td>M</td></tr>
              <tr><th>78</th><td>01001110</td><td>116</td><td>4E</td><td>N</td></tr>
              <tr><th>79</th><td>01001111</td><td>117</td><td>4F</td><td>O</td></tr>
              <tr><th>80</th><td>01010000</td><td>120</td><td>50</td><td>P</td></tr>
              <tr><th>81</th><td>01010001</td><td>121</td><td>51</td><td>Q</td></tr>
              <tr><th>82</th><td>01010010</td><td>122</td><td>52</td><td>R</td></tr>
              <tr><th>83</th><td>01010011</td><td>123</td><td>53</td><td>S</td></tr>
              <tr><th>84</th><td>01010100</td><td>124</td><td>54</td><td>T</td></tr>
              <tr><th>85</th><td>01010101</td><td>125</td><td>55</td><td>U</td></tr>
              <tr><th>86</th><td>01010110</td><td>126</td><td>56</td><td>V</td></tr>
              <tr><th>87</th><td>01010111</td><td>127</td><td>57</td><td>W</td></tr>
              <tr><th>88</th><td>01011000</td><td>130</td><td>58</td><td>X</td></tr>
              <tr><th>89</th><td>01011001</td><td>131</td><td>59</td><td>Y</td></tr>
              <tr><th>90</th><td>01011010</td><td>132</td><td>5A</td><td>Z</td></tr>
              <tr><th>91</th><td>01011011</td><td>133</td><td>5B</td><td>[</td></tr>
              <tr><th>92</th><td>01011100</td><td>134</td><td>5C</td><td>\</td></tr>
              <tr><th>93</th><td>01011101</td><td>135</td><td>5D</td><td>]</td></tr>
              <tr><th>94</th><td>01011110</td><td>136</td><td>5E</td><td>^</td></tr>
              <tr><th>95</th><td>01011111</td><td>137</td><td>5F</td><td>_</td></tr>
            </tbody>
          </table>
          <table>
            <caption>Decimal 96 - 127</caption>
            <thead>
              <tr><th>Dec</th><th>Bin</th><th>Oct</th><th>Hex</th><th>ASCII</th></tr>
            </thead>
            <tbody>
              <tr><th>96</th><td>01100000</td><td>140</td><td>60</td><td>`</td></tr>
              <tr><th>97</th><td>01100001</td><td>141</td><td>61</td><td>a</td></tr>
              <tr><th>98</th><td>01100010</td><td>142</td><td>62</td><td>b</td></tr>
              <tr><th>99</th><td>01100011</td><td>143</td><td>63</td><td>c</td></tr>
              <tr><th>100</th><td>01100100</td><td>144</td><td>64</td><td>d</td></tr>
              <tr><th>101</th><td>01100101</td><td>145</td><td>65</td><td>e</td></tr>
              <tr><th>102</th><td>01100110</td><td>146</td><td>66</td><td>f</td></tr>
              <tr><th>103</th><td>01100111</td><td>147</td><td>67</td><td>g</td></tr>
              <tr><th>104</th><td>01101000</td><td>150</td><td>68</td><td>h</td></tr>
              <tr><th>105</th><td>01101001</td><td>151</td><td>69</td><td>i</td></tr>
              <tr><th>106</th><td>01101010</td><td>152</td><td>6A</td><td>j</td></tr>
              <tr><th>107</th><td>01101011</td><td>153</td><td>6B</td><td>k</td></tr>
              <tr><th>108</th><td>01101100</td><td>154</td><td>6C</td><td>l</td></tr>
              <tr><th>109</th><td>01101101</td><td>155</td><td>6D</td><td>m</td></tr>
              <tr><th>110</th><td>01101110</td><td>156</td><td>6E</td><td>n</td></tr>
              <tr><th>111</th><td>01101111</td><td>157</td><td>6F</td><td>o</td></tr>
              <tr><th>112</th><td>01110000</td><td>160</td><td>70</td><td>p</td></tr>
              <tr><th>113</th><td>01110001</td><td>161</td><td>71</td><td>q</td></tr>
              <tr><th>114</th><td>01110010</td><td>162</td><td>72</td><td>r</td></tr>
              <tr><th>115</th><td>01110011</td><td>163</td><td>73</td><td>s</td></tr>
              <tr><th>116</th><td>01110100</td><td>164</td><td>74</td><td>t</td></tr>
              <tr><th>117</th><td>01110101</td><td>165</td><td>75</td><td>u</td></tr>
              <tr><th>118</th><td>01110110</td><td>166</td><td>76</td><td>v</td></tr>
              <tr><th>119</th><td>01110111</td><td>167</td><td>77</td><td>w</td></tr>
              <tr><th>120</th><td>01111000</td><td>170</td><td>78</td><td>x</td></tr>
              <tr><th>121</th><td>01111001</td><td>171</td><td>79</td><td>y</td></tr>
              <tr><th>122</th><td>01111010</td><td>172</td><td>7A</td><td>z</td></tr>
              <tr><th>123</th><td>01111011</td><td>173</td><td>7B</td><td>&#123;</td></tr>
              <tr><th>124</th><td>01111100</td><td>174</td><td>7C</td><td>|</td></tr>
              <tr><th>125</th><td>01111101</td><td>175</td><td>7D</td><td>&#125;</td></tr>
              <tr><th>126</th><td>01111110</td><td>176</td><td>7E</td><td>~</td></tr>
              <tr><th>127</th><td>01111111</td><td>177</td><td>7F</td><td>DEL</td></tr>
            </tbody>
          </table>
        </div>

        <div className='ascii-table-text-container'>
          <h2>Extended ASCII Table</h2>
          <p>Extended ASCII refers to the set of characters that occupy the decimal values 128 through 255. These characters are not part of the original ASCII standard but are commonly used in many systems to support additional characters needed for various languages and symbols.</p>
          <p>Since the original ASCII only used 7 bits (128 values), the extended ASCII set uses the 8th bit to allow for 256 total values. The characters in this range vary depending on the specific character encoding used, but common implementations include:</p>
          <ul>
            <li><strong>ISO 8859-1 (Latin-1)</strong>: Adds accented characters for Western European languages, currency symbols, and additional punctuation.</li>
            <li><strong>Windows-1252</strong>: A superset of ISO 8859-1 used by Microsoft Windows, which includes typographic quotation marks, the euro sign, and more.</li>
            <li><strong>Box-drawing characters</strong> and graphic symbols in certain legacy DOS-based encodings (e.g., Code Page 437).</li>
          </ul>
          <p>Extended ASCII is not standardized in the same way as the original ASCII set, which can lead to inconsistencies across different systems and encodings. For modern applications, Unicode (such as UTF-8) is typically used to represent a much larger set of characters across multiple languages and symbols while maintaining backward compatibility with standard ASCII.</p>
        </div>

        <div className='reference-table'>
          <table>
            <caption>Decimal 128 - 159</caption>
            <thead>
              <tr><th>Dec</th><th>Bin</th><th>Oct</th><th>Hex</th><th>ASCII</th></tr>
            </thead>
            <tbody>
              <tr><th>128</th><td>10000000</td><td>200</td><td>80</td><td>&euro;</td></tr>
              <tr><th>129</th><td>10000001</td><td>201</td><td>81</td><td><em>unused</em></td></tr>
              <tr><th>130</th><td>10000010</td><td>202</td><td>82</td><td>&sbquo;</td></tr>
              <tr><th>131</th><td>10000011</td><td>203</td><td>83</td><td>&fnof;</td></tr>
              <tr><th>132</th><td>10000100</td><td>204</td><td>84</td><td>&bdquo;</td></tr>
              <tr><th>133</th><td>10000101</td><td>205</td><td>85</td><td>&hellip;</td></tr>
              <tr><th>134</th><td>10000110</td><td>206</td><td>86</td><td>&dagger;</td></tr>
              <tr><th>135</th><td>10000111</td><td>207</td><td>87</td><td>&Dagger;</td></tr>
              <tr><th>136</th><td>10001000</td><td>210</td><td>88</td><td>&circ;</td></tr>
              <tr><th>137</th><td>10001001</td><td>211</td><td>89</td><td>&permil;</td></tr>
              <tr><th>138</th><td>10001010</td><td>212</td><td>8A</td><td>&Scaron;</td></tr>
              <tr><th>139</th><td>10001011</td><td>213</td><td>8B</td><td>&lsaquo;</td></tr>
              <tr><th>140</th><td>10001100</td><td>214</td><td>8C</td><td>&OElig;</td></tr>
              <tr><th>141</th><td>10001101</td><td>215</td><td>8D</td><td><em>unused</em></td></tr>
              <tr><th>142</th><td>10001110</td><td>216</td><td>8E</td><td>&#381;</td></tr>
              <tr><th>143</th><td>10001111</td><td>217</td><td>8F</td><td><em>unused</em></td></tr>
              <tr><th>144</th><td>10010000</td><td>220</td><td>90</td><td><em>unused</em></td></tr>
              <tr><th>145</th><td>10010001</td><td>221</td><td>91</td><td>&lsquo;</td></tr>
              <tr><th>146</th><td>10010010</td><td>222</td><td>92</td><td>&rsquo;</td></tr>
              <tr><th>147</th><td>10010011</td><td>223</td><td>93</td><td>&ldquo;</td></tr>
              <tr><th>148</th><td>10010100</td><td>224</td><td>94</td><td>&rdquo;</td></tr>
              <tr><th>149</th><td>10010101</td><td>225</td><td>95</td><td>&bull;</td></tr>
              <tr><th>150</th><td>10010110</td><td>226</td><td>96</td><td>&ndash;</td></tr>
              <tr><th>151</th><td>10010111</td><td>227</td><td>97</td><td>&mdash;</td></tr>
              <tr><th>152</th><td>10011000</td><td>230</td><td>98</td><td>&tilde;</td></tr>
              <tr><th>153</th><td>10011001</td><td>231</td><td>99</td><td>&trade;</td></tr>
              <tr><th>154</th><td>10011010</td><td>232</td><td>9A</td><td>&scaron;</td></tr>
              <tr><th>155</th><td>10011011</td><td>233</td><td>9B</td><td>&rsaquo;</td></tr>
              <tr><th>156</th><td>10011100</td><td>234</td><td>9C</td><td>&oelig;</td></tr>
              <tr><th>157</th><td>10011101</td><td>235</td><td>9D</td><td><em>unused</em></td></tr>
              <tr><th>158</th><td>10011110</td><td>236</td><td>9E</td><td>&#382;</td></tr>
              <tr><th>159</th><td>10011111</td><td>237</td><td>9F</td><td>&Yuml;</td></tr>
            </tbody>
          </table>
          <table>
            <caption>Decimal 160 - 191</caption>
            <thead>
              <tr><th>Dec</th><th>Bin</th><th>Oct</th><th>Hex</th><th>ASCII</th></tr>
            </thead>
            <tbody>
              <tr><th>160</th><td>10100000</td><td>240</td><td>A0</td><td>&nbsp;</td></tr>
              <tr><th>161</th><td>10100001</td><td>241</td><td>A1</td><td>&iexcl;</td></tr>
              <tr><th>162</th><td>10100010</td><td>242</td><td>A2</td><td>&cent;</td></tr>
              <tr><th>163</th><td>10100011</td><td>243</td><td>A3</td><td>&pound;</td></tr>
              <tr><th>164</th><td>10100100</td><td>244</td><td>A4</td><td>&curren;</td></tr>
              <tr><th>165</th><td>10100101</td><td>245</td><td>A5</td><td>&yen;</td></tr>
              <tr><th>166</th><td>10100110</td><td>246</td><td>A6</td><td>&brvbar;</td></tr>
              <tr><th>167</th><td>10100111</td><td>247</td><td>A7</td><td>&sect;</td></tr>
              <tr><th>168</th><td>10101000</td><td>250</td><td>A8</td><td>&uml;</td></tr>
              <tr><th>169</th><td>10101001</td><td>251</td><td>A9</td><td>&copy;</td></tr>
              <tr><th>170</th><td>10101010</td><td>252</td><td>AA</td><td>&ordf;</td></tr>
              <tr><th>171</th><td>10101011</td><td>253</td><td>AB</td><td>&laquo;</td></tr>
              <tr><th>172</th><td>10101100</td><td>254</td><td>AC</td><td>&not;</td></tr>
              <tr><th>173</th><td>10101101</td><td>255</td><td>AD</td><td>&shy;</td></tr>
              <tr><th>174</th><td>10101110</td><td>256</td><td>AE</td><td>&reg;</td></tr>
              <tr><th>175</th><td>10101111</td><td>257</td><td>AF</td><td>&macr;</td></tr>
              <tr><th>176</th><td>10110000</td><td>260</td><td>B0</td><td>&deg;</td></tr>
              <tr><th>177</th><td>10110001</td><td>261</td><td>B1</td><td>&plusmn;</td></tr>
              <tr><th>178</th><td>10110010</td><td>262</td><td>B2</td><td>&sup2;</td></tr>
              <tr><th>179</th><td>10110011</td><td>263</td><td>B3</td><td>&sup3;</td></tr>
              <tr><th>180</th><td>10110100</td><td>264</td><td>B4</td><td>&acute;</td></tr>
              <tr><th>181</th><td>10110101</td><td>265</td><td>B5</td><td>&micro;</td></tr>
              <tr><th>182</th><td>10110110</td><td>266</td><td>B6</td><td>&para;</td></tr>
              <tr><th>183</th><td>10110111</td><td>267</td><td>B7</td><td>&middot;</td></tr>
              <tr><th>184</th><td>10111000</td><td>270</td><td>B8</td><td>&cedil;</td></tr>
              <tr><th>185</th><td>10111001</td><td>271</td><td>B9</td><td>&sup1;</td></tr>
              <tr><th>186</th><td>10111010</td><td>272</td><td>BA</td><td>&ordm;</td></tr>
              <tr><th>187</th><td>10111011</td><td>273</td><td>BB</td><td>&raquo;</td></tr>
              <tr><th>188</th><td>10111100</td><td>274</td><td>BC</td><td>&frac14;</td></tr>
              <tr><th>189</th><td>10111101</td><td>275</td><td>BD</td><td>&frac12;</td></tr>
              <tr><th>190</th><td>10111110</td><td>276</td><td>BE</td><td>&frac34;</td></tr>
              <tr><th>191</th><td>10111111</td><td>277</td><td>BF</td><td>&iquest;</td></tr>
            </tbody>
          </table>
          <table>
            <caption>Decimal 192 - 223</caption>
            <thead>
              <tr><th>Dec</th><th>Bin</th><th>Oct</th><th>Hex</th><th>ASCII</th></tr>
            </thead>
            <tbody>
              <tr><th>192</th><td>11000000</td><td>300</td><td>C0</td><td>&Agrave;</td></tr>
              <tr><th>193</th><td>11000001</td><td>301</td><td>C1</td><td>&Aacute;</td></tr>
              <tr><th>194</th><td>11000010</td><td>302</td><td>C2</td><td>&Acirc;</td></tr>
              <tr><th>195</th><td>11000011</td><td>303</td><td>C3</td><td>&Atilde;</td></tr>
              <tr><th>196</th><td>11000100</td><td>304</td><td>C4</td><td>&Auml;</td></tr>
              <tr><th>197</th><td>11000101</td><td>305</td><td>C5</td><td>&Aring;</td></tr>
              <tr><th>198</th><td>11000110</td><td>306</td><td>C6</td><td>&AElig;</td></tr>
              <tr><th>199</th><td>11000111</td><td>307</td><td>C7</td><td>&Ccedil;</td></tr>
              <tr><th>200</th><td>11001000</td><td>310</td><td>C8</td><td>&Egrave;</td></tr>
              <tr><th>201</th><td>11001001</td><td>311</td><td>C9</td><td>&Eacute;</td></tr>
              <tr><th>202</th><td>11001010</td><td>312</td><td>CA</td><td>&Ecirc;</td></tr>
              <tr><th>203</th><td>11001011</td><td>313</td><td>CB</td><td>&Euml;</td></tr>
              <tr><th>204</th><td>11001100</td><td>314</td><td>CC</td><td>&Igrave;</td></tr>
              <tr><th>205</th><td>11001101</td><td>315</td><td>CD</td><td>&Iacute;</td></tr>
              <tr><th>206</th><td>11001110</td><td>316</td><td>CE</td><td>&Icirc;</td></tr>
              <tr><th>207</th><td>11001111</td><td>317</td><td>CF</td><td>&Iuml;</td></tr>
              <tr><th>208</th><td>11010000</td><td>320</td><td>D0</td><td>&ETH;</td></tr>
              <tr><th>209</th><td>11010001</td><td>321</td><td>D1</td><td>&Ntilde;</td></tr>
              <tr><th>210</th><td>11010010</td><td>322</td><td>D2</td><td>&Ograve;</td></tr>
              <tr><th>211</th><td>11010011</td><td>323</td><td>D3</td><td>&Oacute;</td></tr>
              <tr><th>212</th><td>11010100</td><td>324</td><td>D4</td><td>&Ocirc;</td></tr>
              <tr><th>213</th><td>11010101</td><td>325</td><td>D5</td><td>&Otilde;</td></tr>
              <tr><th>214</th><td>11010110</td><td>326</td><td>D6</td><td>&Ouml;</td></tr>
              <tr><th>215</th><td>11010111</td><td>327</td><td>D7</td><td>&times;</td></tr>
              <tr><th>216</th><td>11011000</td><td>330</td><td>D8</td><td>&Oslash;</td></tr>
              <tr><th>217</th><td>11011001</td><td>331</td><td>D9</td><td>&Ugrave;</td></tr>
              <tr><th>218</th><td>11011010</td><td>332</td><td>DA</td><td>&Uacute;</td></tr>
              <tr><th>219</th><td>11011011</td><td>333</td><td>DB</td><td>&Ucirc;</td></tr>
              <tr><th>220</th><td>11011100</td><td>334</td><td>DC</td><td>&Uuml;</td></tr>
              <tr><th>221</th><td>11011101</td><td>335</td><td>DD</td><td>&Yacute;</td></tr>
              <tr><th>222</th><td>11011110</td><td>336</td><td>DE</td><td>&THORN;</td></tr>
              <tr><th>223</th><td>11011111</td><td>337</td><td>DF</td><td>&szlig;</td></tr>
            </tbody>
          </table>
          <table>
            <caption>Decimal 224 - 255</caption>
            <thead>
              <tr><th>Dec</th><th>Bin</th><th>Oct</th><th>Hex</th><th>ASCII</th></tr>
            </thead>
            <tbody>
              <tr><th>224</th><td>11100000</td><td>340</td><td>E0</td><td>&agrave;</td></tr>
              <tr><th>225</th><td>11100001</td><td>341</td><td>E1</td><td>&aacute;</td></tr>
              <tr><th>226</th><td>11100010</td><td>342</td><td>E2</td><td>&acirc;</td></tr>
              <tr><th>227</th><td>11100011</td><td>343</td><td>E3</td><td>&atilde;</td></tr>
              <tr><th>228</th><td>11100100</td><td>344</td><td>E4</td><td>&auml;</td></tr>
              <tr><th>229</th><td>11100101</td><td>345</td><td>E5</td><td>&aring;</td></tr>
              <tr><th>230</th><td>11100110</td><td>346</td><td>E6</td><td>&aelig;</td></tr>
              <tr><th>231</th><td>11100111</td><td>347</td><td>E7</td><td>&ccedil;</td></tr>
              <tr><th>232</th><td>11101000</td><td>350</td><td>E8</td><td>&egrave;</td></tr>
              <tr><th>233</th><td>11101001</td><td>351</td><td>E9</td><td>&eacute;</td></tr>
              <tr><th>234</th><td>11101010</td><td>352</td><td>EA</td><td>&ecirc;</td></tr>
              <tr><th>235</th><td>11101011</td><td>353</td><td>EB</td><td>&euml;</td></tr>
              <tr><th>236</th><td>11101100</td><td>354</td><td>EC</td><td>&igrave;</td></tr>
              <tr><th>237</th><td>11101101</td><td>355</td><td>ED</td><td>&iacute;</td></tr>
              <tr><th>238</th><td>11101110</td><td>356</td><td>EE</td><td>&icirc;</td></tr>
              <tr><th>239</th><td>11101111</td><td>357</td><td>EF</td><td>&iuml;</td></tr>
              <tr><th>240</th><td>11110000</td><td>360</td><td>F0</td><td>&eth;</td></tr>
              <tr><th>241</th><td>11110001</td><td>361</td><td>F1</td><td>&ntilde;</td></tr>
              <tr><th>242</th><td>11110010</td><td>362</td><td>F2</td><td>&ograve;</td></tr>
              <tr><th>243</th><td>11110011</td><td>363</td><td>F3</td><td>&oacute;</td></tr>
              <tr><th>244</th><td>11110100</td><td>364</td><td>F4</td><td>&ocirc;</td></tr>
              <tr><th>245</th><td>11110101</td><td>365</td><td>F5</td><td>&otilde;</td></tr>
              <tr><th>246</th><td>11110110</td><td>366</td><td>F6</td><td>&ouml;</td></tr>
              <tr><th>247</th><td>11110111</td><td>367</td><td>F7</td><td>&divide;</td></tr>
              <tr><th>248</th><td>11111000</td><td>370</td><td>F8</td><td>&oslash;</td></tr>
              <tr><th>249</th><td>11111001</td><td>371</td><td>F9</td><td>&ugrave;</td></tr>
              <tr><th>250</th><td>11111010</td><td>372</td><td>FA</td><td>&uacute;</td></tr>
              <tr><th>251</th><td>11111011</td><td>373</td><td>FB</td><td>&ucirc;</td></tr>
              <tr><th>252</th><td>11111100</td><td>374</td><td>FC</td><td>&uuml;</td></tr>
              <tr><th>253</th><td>11111101</td><td>375</td><td>FD</td><td>&yacute;</td></tr>
              <tr><th>254</th><td>11111110</td><td>376</td><td>FE</td><td>&thorn;</td></tr>
              <tr><th>255</th><td>11111111</td><td>377</td><td>FF</td><td>&yuml;</td></tr>
            </tbody>
          </table>
        </div>

        <div className='ascii-table-text-container'>
          <h2>More About Extended ASCII</h2>
          <p>You might have noticed that some characters are <strong>unused</strong>, namely decimal values <strong>141</strong>, <strong>143</strong>, <strong>144</strong>, and <strong>157</strong>. This is because the <strong>ISO/IEC 8859-1 (Latin-1)</strong> character set, a widely adopted standard, does not assign visible characters to these positions. Instead, they were reserved for <em>control characters</em> in older standards like <strong>CP437</strong> or <strong>Windows-1252</strong>.</p>
          <p>The character at the decimal value <strong>160</strong> is the <em>Non-Breaking Space</em> character. It appears invisible, but it&apos;s simply an empty character.</p>
          <p>Additionally, character <strong>173</strong> is the <em>Soft Hyphen</em> (SHY). It is an invisible character used to suggest where a word can break at the end of a line. Most modern browsers do not render it unless a line break occurs at that point, which is why it often appears blank in character tables.</p>
        </div>
      </div>
    </ReferenceLayout>
  );
}
