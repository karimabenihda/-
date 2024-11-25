import React, { useState } from 'react';
import { fonts } from './font';

function Fontfr() {
  const [inputValue, setInputValue] = useState('');
  const [selectedFont, setSelectedFont] = useState('gothic');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };

  const transformText = (text, fontType) => {
    if (!text || !fonts[fontType]) return text;

    return text
      .split('')
      .map((char) => fonts[fontType][char] || char)
      .join('');
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert('Text copied to clipboard!');
  };

  return (
    <div>
      <h1>Font Transformer</h1>
      <textarea
        placeholder="Type something..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <div>
        <h2>Transformed Texts:</h2>
        <ul>
          {Object.keys(fonts).map((font) => {
            const transformedText = transformText(inputValue, font);
            return (
              <li key={font} style={{ marginBottom: '10px' }}>
                <strong>{font}:</strong>
                <p style={{ display: 'inline', marginRight: '10px' }}>
                  {transformedText || 'Type something to see transformation'}
                </p>
                <button onClick={() => handleCopy(transformedText)}>Copy</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Fontfr;
