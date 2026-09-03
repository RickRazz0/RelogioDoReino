import React from 'react';

export default function Avatar({ raca }) {
  const strokeColor = '#3d2314';
  const strokeWidth = 4;

  const getPalette = (raca) => {
    switch (raca) {
      case 'Orc':
        return { bg: '#dce8d8', fill: '#5c7a54', accent: '#8aa67f', detail: '#9fb3a0' };
      case 'Elfo':
        return { bg: '#fff3d1', fill: '#d4af37', accent: '#f3c940', detail: '#f7e3a1' };
      case 'Tiefling':
        return { bg: '#f4dada', fill: '#7a1f1f', accent: '#a83232', detail: '#c94f4f' };
      case 'Anão':
        return { bg: '#f0e4d4', fill: '#8b5a2b', accent: '#b87333', detail: '#d4a76a' };
      case 'Draconato':
        return { bg: '#fff3cc', fill: '#b8860b', accent: '#e6c687', detail: '#f2d98b' };
      case 'Halfling':
        return { bg: '#e3f0e6', fill: '#4f7a5c', accent: '#6d946f', detail: '#8aab8e' };
      default:
        return { bg: '#e8eef8', fill: '#3a4b6e', accent: '#5a6f9a', detail: '#8a9cbf' };
    }
  };

  const palette = getPalette(raca);

  return (
    <svg viewBox="0 0 100 100" className="avatar-svg" style={{ width: '100%', height: '100%' }}>
      <defs>
        <radialGradient id={`bg-${raca}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={palette.bg} />
          <stop offset="100%" stopColor="#ffffff" />
        </radialGradient>
      </defs>

      <circle cx="50" cy="50" r="50" fill={`url(#bg-${raca})`} />

      {raca === 'Elfo' && (
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M 22,25 C 18,50 20,80 20,95" fill={palette.fill} />
          <path d="M 78,25 C 82,50 80,80 80,95" fill={palette.fill} />
          <path d="M 22,35 C 22,12 78,12 78,35" fill={palette.accent} />
          <path d="M 28,20 Q 50,15 72,20" />
          <path d="M 32,28 Q 50,22 68,28" />
          <polygon points="50,23 54,30 50,37 46,30" fill={palette.detail} />
          <path d="M 30,38 L 10,35 L 28,48" fill={palette.fill} />
          <path d="M 70,38 L 90,35 L 72,48" fill={palette.fill} />
          <path d="M 30,38 C 30,65 70,65 70,38" />
          <path d="M 40,60 L 40,70 Q 20,75 10,95" fill={palette.accent} />
          <path d="M 60,60 L 60,70 Q 80,75 90,95" fill={palette.accent} />
          <path d="M 40,70 L 50,85 L 60,70" />
        </g>
      )}

      {raca === 'Anão' && (
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M 20,40 C 20,10 80,10 80,40" fill={palette.fill} />
          <path d="M 20,30 L 80,30" />
          <path d="M 26,35 C 26,55 74,55 74,35" />
          <path d="M 26,45 C 20,85 50,95 50,95 C 50,95 80,85 74,45" fill={palette.accent} />
          <path d="M 50,52 L 50,95" />
          <path d="M 18,55 L 5,95" fill={palette.fill} />
          <path d="M 82,55 L 95,95" fill={palette.fill} />
        </g>
      )}

      {raca === 'Tiefling' && (
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M 35,28 C 25,5 12,12 8,28 C 18,22 30,28 32,35" fill={palette.fill} />
          <path d="M 65,28 C 75,5 88,12 92,28 C 82,22 70,28 68,35" fill={palette.fill} />
          <path d="M 32,32 C 35,20 65,20 68,32" />
          <path d="M 32,35 L 50,65 L 68,35" fill={palette.accent} />
          <path d="M 20,95 L 35,60 L 50,72 L 65,60 L 80,95" fill={palette.accent} />
        </g>
      )}

      {raca === 'Orc' && (
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M 25,25 L 75,25 L 75,42 L 25,42 Z" fill={palette.fill} />
          <path d="M 25,42 L 35,65 L 65,65 L 75,42" fill={palette.accent} />
          <path d="M 35,65 L 38,55 L 42,65" />
          <path d="M 65,65 L 62,55 L 58,65" />
          <path d="M 20,50 L 5,95" fill={palette.fill} />
          <path d="M 80,50 L 95,95" fill={palette.fill} />
          <path d="M 12,58 L 2,50" />
          <path d="M 88,58 L 98,50" />
        </g>
      )}

      {raca === 'Draconato' && (
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M 50,10 L 50,25" />
          <path d="M 38,15 L 42,28" />
          <path d="M 62,15 L 58,28" />
          <path d="M 30,30 L 50,20 L 70,30 L 65,55 L 50,68 L 35,55 Z" fill={palette.accent} />
          <path d="M 35,68 L 20,95" fill={palette.fill} />
          <path d="M 65,68 L 80,95" fill={palette.fill} />
          <path d="M 50,68 L 50,95" />
        </g>
      )}

      {raca === 'Halfling' && (
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M 22,45 C 18,15 82,15 78,45" fill={palette.fill} />
          <path d="M 22,45 C 30,55 70,55 78,45" fill={palette.accent} />
          <path d="M 32,45 C 32,62 68,62 68,45" />
          <path d="M 25,60 C 15,75 10,95 10,95 L 90,95 C 90,95 85,75 75,60" fill={palette.fill} />
          <path d="M 50,55 L 50,95" />
        </g>
      )}

      {(raca === 'Humano' || !['Elfo','Anão','Tiefling','Orc','Draconato','Halfling'].includes(raca)) && (
        <g stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M 28,38 C 25,15 75,15 72,38" fill={palette.fill} />
          <path d="M 28,30 Q 50,38 72,30" />
          <path d="M 30,35 C 30,62 70,62 70,35" />
          <path d="M 40,58 L 40,70 L 12,95" fill={palette.accent} />
          <path d="M 60,58 L 60,70 L 88,95" fill={palette.accent} />
          <path d="M 40,70 L 50,82 L 60,70" />
        </g>
      )}
    </svg>
  );
}
