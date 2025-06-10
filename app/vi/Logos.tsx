// app/vi/Logos.tsx
import React from 'react';
import { LogoProps } from './types';

export const PrimaryLogo: React.FC<LogoProps> = ({
  width = 100,
  height = 100,
  primaryColor = '#ff6b35',
  secondaryColor = '#ff8f65',
  accentColor = '#6c5ce7',
  className = ''
}) => (
  <svg
    className={`logo-svg primary-logo ${className}`}
    viewBox="0 0 200 80"
    width={width}
    height={height}
  >
    <defs>
      <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: primaryColor }} />
        <stop offset="50%" style={{ stopColor: secondaryColor }} />
        <stop offset="100%" style={{ stopColor: accentColor }} />
      </linearGradient>
    </defs>
    <circle cx="25" cy="40" r="18" fill="url(#primaryGradient)" />
    <path d="M20 32 Q25 28 30 32 Q25 44 20 40 Z" fill="#0e0e1a" />
    <text
      x="55"
      y="35"
      className="logo-text"
      style={{
        fill: primaryColor,
        fontFamily: "'Segoe UI', sans-serif",
        fontWeight: 700,
        fontSize: 16
      }}
    >
      PuterJS
    </text>
    <text
      x="55"
      y="55"
      className="logo-text"
      style={{
        fill: primaryColor,
        fontFamily: "'Segoe UI', sans-serif",
        fontWeight: 600,
        fontSize: 12,
        opacity: 0.8
      }}
    >
      Claude
    </text>
  </svg>
);

export const IconLogo: React.FC<LogoProps> = ({
  width = 100,
  height = 100,
  primaryColor = '#ff6b35',
  secondaryColor = '#ff8f65',
  accentColor = '#6c5ce7',
  className = ''
}) => (
  <svg
    className={`logo-svg icon-logo ${className}`}
    viewBox="0 0 80 80"
    width={width}
    height={height}
  >
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: primaryColor }} />
        <stop offset="33%" style={{ stopColor: secondaryColor }} />
        <stop offset="66%" style={{ stopColor: '#ffb299' }} />
        <stop offset="100%" style={{ stopColor: accentColor }} />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <circle cx="40" cy="40" r="35" fill="url(#iconGradient)" filter="url(#glow)" />
    <path d="M30 25 Q40 15 50 25 Q40 55 30 45 Z" fill="#0e0e1a" />
    <circle cx="35" cy="35" r="3" fill={primaryColor} />
    <path d="M25 50 Q40 45 55 50" stroke="#0e0e1a" strokeWidth="2" fill="none" />
  </svg>
);

export const HorizontalLogo: React.FC<LogoProps> = ({
  width = 140,
  height = 60,
  primaryColor = '#ff6b35',
  secondaryColor = '#ff8f65',
  className = ''
}) => (
  <svg
    className={`logo-svg horizontal-logo ${className}`}
    viewBox="0 0 280 60"
    width={width}
    height={height}
  >
    <defs>
      <linearGradient id="horizontalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: primaryColor }} />
        <stop offset="100%" style={{ stopColor: secondaryColor }} />
      </linearGradient>
    </defs>
    <circle cx="30" cy="30" r="20" fill="url(#horizontalGradient)" />
    <path d="M23 20 Q30 15 37 20 Q30 40 23 35 Z" fill="#0e0e1a" />
    <text
      x="65"
      y="25"
      style={{
        fill: primaryColor,
        fontFamily: "'Segoe UI', sans-serif",
        fontWeight: 700,
        fontSize: 14
      }}
    >
      PuterJS
    </text>
    <text
      x="65"
      y="42"
      style={{
        fill: secondaryColor,
        fontFamily: "'Segoe UI', sans-serif",
        fontWeight: 600,
        fontSize: 11
      }}
    >
      Claude
    </text>
    <rect x="140" y="27" width="30" height="2" fill={primaryColor} opacity="0.6" />
    <text
      x="180"
      y="35"
      style={{
        fill: '#ffffff',
        fontFamily: "'Segoe UI', sans-serif",
        fontWeight: 400,
        fontSize: 10
      }}
    >
      AI Assistant
    </text>
  </svg>
);

export const MinimalLogo: React.FC<LogoProps> = ({
  width = 100,
  height = 100,
  primaryColor = '#ff6b35',
  className = ''
}) => (
  <svg
    className={`logo-svg minimal-logo ${className}`}
    viewBox="0 0 200 80"
    width={width}
    height={height}
  >
    <circle
      cx="25"
      cy="40"
      r="18"
      stroke={primaryColor}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20 32 Q25 28 30 32 Q25 44 20 40 Z"
      stroke={primaryColor}
      strokeWidth="1.5"
      fill="none"
    />
    <text
      x="55"
      y="45"
      style={{
        fill: '#ffffff',
        fontFamily: "'Segoe UI', sans-serif",
        fontWeight: 300,
        fontSize: 18
      }}
    >
      PuterJS Claude
    </text>
  </svg>
);

export const DarkLogo: React.FC<LogoProps> = ({
  width = 100,
  height = 100,
  primaryColor = '#ff6b35',
  secondaryColor = '#ffb299',
  className = ''
}) => (
  <svg
    className={`logo-svg dark-logo ${className}`}
    viewBox="0 0 200 80"
    width={width}
    height={height}
  >
    <defs>
      <linearGradient id="darkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: primaryColor }} />
        <stop offset="100%" style={{ stopColor: secondaryColor }} />
      </linearGradient>
    </defs>
    <circle cx="25" cy="40" r="18" fill="url(#darkGradient)" />
    <path d="M20 32 Q25 28 30 32 Q25 44 20 40 Z" fill="#0e0e1a" />
    <text
      x="55"
      y="35"
      style={{
        fill: '#ffffff',
        fontFamily: "'Segoe UI', sans-serif",
        fontWeight: 700,
        fontSize: 16
      }}
    >
      PuterJS
    </text>
    <text
      x="55"
      y="55"
      style={{
        fill: secondaryColor,
        fontFamily: "'Segoe UI', sans-serif",
        fontWeight: 600,
        fontSize: 12
      }}
    >
      Claude
    </text>
  </svg>
);

export const MonogramLogo: React.FC<LogoProps> = ({
  width = 100,
  height = 100,
  primaryColor = '#ff6b35',
  secondaryColor = '#6c5ce7',
  accentColor = '#4a90e2',
  className = ''
}) => (
  <svg
    className={`logo-svg monogram-logo ${className}`}
    viewBox="0 0 80 80"
    width={width}
    height={height}
  >
    <defs>
      <linearGradient id="monogramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: primaryColor }} />
        <stop offset="50%" style={{ stopColor: secondaryColor }} />
        <stop offset="100%" style={{ stopColor: accentColor }} />
      </linearGradient>
    </defs>
    <rect x="10" y="10" width="60" height="60" rx="15" fill="url(#monogramGradient)" />
    <text
      x="40"
      y="35"
      textAnchor="middle"
      style={{
        fill: '#ffffff',
        fontFamily: "'Segoe UI', sans-serif",
        fontWeight: 900,
        fontSize: 16
      }}
    >
      P
    </text>
    <text
      x="40"
      y="55"
      textAnchor="middle"
      style={{
        fill: '#ffffff',
        fontFamily: "'Segoe UI', sans-serif",
        fontWeight: 700,
        fontSize: 12
      }}
    >
      C
    </text>
  </svg>
);