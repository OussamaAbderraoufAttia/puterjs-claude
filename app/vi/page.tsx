"use client";
import React from 'react';
import {
  PrimaryLogo,
  IconLogo,
  HorizontalLogo,
  MinimalLogo,
  DarkLogo,
  MonogramLogo
} from './Logos';
import { LogoCard } from './LogoExporter';
import * as LogoExporter from './LogoExporter';
import './styles.css';

const VisualIdentityPage = () => {
    const { exportLogo, exportAllLogos } = LogoExporter.useLogoExporter();


  return (
    <div className="container">
      <div className="header">
        <h1 className="main-title">PuterJS Claude</h1>
        <p className="subtitle">Complete Visual Identity System</p>
        <div className="badge">Open Source & Free</div>
      </div>

      <div className="logo-grid">
        <LogoCard
          logo={<PrimaryLogo />}
          title="Primary Logo"
          description="Main brand logo with full wordmark and icon"
          onExport={() => exportLogo(<PrimaryLogo />, 'primary-logo')}
        />

        <LogoCard
          logo={<IconLogo />}
          title="Icon Logo"
          description="Standalone icon for favicons and small applications"
          onExport={() => exportLogo(<IconLogo />, 'icon-logo')}
        />

        <LogoCard
          logo={<HorizontalLogo />}
          title="Horizontal Logo"
          description="Wide format logo perfect for headers and banners"
          onExport={() => exportLogo(<HorizontalLogo />, 'horizontal-logo')}
        />

        <LogoCard
          logo={<MinimalLogo />}
          title="Minimal Logo"
          description="Clean outline version for subtle branding"
          onExport={() => exportLogo(<MinimalLogo />, 'minimal-logo')}
        />

        <LogoCard
          logo={<DarkLogo />}
          title="Dark Background"
          description="Optimized version for dark backgrounds"
          onExport={() => exportLogo(<DarkLogo />, 'dark-logo')}
        />

        <LogoCard
          logo={<MonogramLogo />}
          title="Monogram"
          description="Compact monogram for profile pictures and stamps"
          onExport={() => exportLogo(<MonogramLogo />, 'monogram-logo')}
        />
      </div>

      <button 
        className="export-all-btn" 
        onClick={() => {
          const logos = [
            { component: <PrimaryLogo />, name: 'primary-logo' },
            { component: <IconLogo />, name: 'icon-logo' },
            { component: <HorizontalLogo />, name: 'horizontal-logo' },
            { component: <MinimalLogo />, name: 'minimal-logo' },
            { component: <DarkLogo />, name: 'dark-logo' },
            { component: <MonogramLogo />, name: 'monogram-logo' }
          ];
          exportAllLogos(logos);
        }}
      >
        📦 Export All Logos
      </button>
    </div>
  );
};

export default VisualIdentityPage;