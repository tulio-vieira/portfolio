import React from 'react';
import RollingWord from './UI/RollingWord/RollingWord';

export default function RollingPhrase({ text, fontSize, className }) {
  return (
    <div>
      {text.split(' ').map((word, index) =>
        <RollingWord
          key={index}
          fontSize={fontSize}
          className={className}
          word={word} />
      )}
    </div>
  );
}