'use client';

import React from 'react';
import { saveSvg } from 'save-svg-as-png';

export const useLogoExporter = () => {
  const exportLogo = (component: React.ReactElement, name: string) => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    import('react-dom').then(ReactDOM => {
      ReactDOM.render(component, container);

      const svgElem = container.querySelector('svg');
      if (svgElem) {
        // Use save-svg-as-png to save the SVG with all styles inlined
        saveSvg(svgElem, `puterjs-claude-${name}.svg`);
      }

      ReactDOM.unmountComponentAtNode(container);
      document.body.removeChild(container);
    });
  };

  const exportAllLogos = (logos: { component: React.ReactElement; name: string }[]) => {
    logos.forEach(({ component, name }, index) => {
      setTimeout(() => exportLogo(component, name), index * 300);
    });
  };

  return { exportLogo, exportAllLogos };
};

export const LogoCard: React.FC<{
  logo: React.ReactElement;
  title: string;
  description: string;
  onExport: () => void;
}> = ({ logo, title, description, onExport }) => {
  return (
    <div className="logo-card">
      <div className="logo-variant">
        {logo}
      </div>
      <h3 className="logo-title">{title}</h3>
      <p className="logo-description">{description}</p>
      <button className="export-btn" onClick={onExport}>
        Export SVG
      </button>
    </div>
  );
};