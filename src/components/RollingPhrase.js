import React from 'react';
import RollingWord from './UI/RollingWord/RollingWord';

export default function RollingPhrase({ text, fontSize, colorTop, colorBottom }) {
  return (
    <div>
      {text.split(' ').map((word, index) =>
        <RollingWord
          key={index}
          fontSize={fontSize}
          colorTop={colorTop}
          colorBottom={colorBottom} 
          word={word} />
      )}
    </div>
  );
}