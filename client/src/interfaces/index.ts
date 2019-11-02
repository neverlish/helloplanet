
export interface FlexProps {
  row?: boolean;
  column?: boolean;
  center?: boolean;
  justifyContent?: string;
  alignItems?: string; 
};

export interface LayoutProps {
  w?: string | number;
  h?: string | number;
  bg?: string;
  mg?: number | string;
  mt?: number | string;
  mr?: number | string;
  mb?: number | string;
  ml?: number | string;
  pd?: number | string;
  pt?: number | string;
  pr?: number | string;
  pb?: number | string;
  pl?: number | string;
  hover?: boolean;
  hoverColor?: string;
  position?: string;
}

export interface BorderProps {
  border?: string;
  borderRadius?: string;
}

export interface TextProps {
  h1?: boolean;
  fontSize?: string | number;
  color?: string;
  children?: React.ReactNode;
  medium?:boolean;
  regular?:boolean;
  demiLight?:boolean;
  light?:boolean;
  lineHeight?: number;
  b?: boolean;
  eb?: boolean;
};

export interface MouseProps {
  cursor?: string;
}