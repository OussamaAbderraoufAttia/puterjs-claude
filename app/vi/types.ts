// app/vi/types.ts
export type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
};

export type LogoComponent = React.FC<LogoProps>;