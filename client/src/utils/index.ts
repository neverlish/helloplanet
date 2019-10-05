import { TextProps, LayoutProps } from "../interfaces";
import { theme } from "./theme";


export const setCssDeclaration = (propertyName: String, value: any) =>
`${propertyName}: ${value};`;

export const medium = ({ medium }: TextProps) => medium && setCssDeclaration("font-weight", theme.fontweights.medium);
export const regular = ({ regular }: TextProps) => regular && setCssDeclaration("font-weight", theme.fontweights.regular);
export const demiLight = ({ demiLight }: TextProps) => demiLight && setCssDeclaration("font-weight", theme.fontweights.demilight);
export const light = ({ light }: TextProps) => light && setCssDeclaration("font-weight", theme.fontweights.light);

export const margin = ({ mg }: LayoutProps) => mg && setCssDeclaration("margin", mg);
export const marginTop = ({ mt }: LayoutProps) => mt && setCssDeclaration("margin-top", mt);
export const marginRight = ({ mr }: LayoutProps) => mr && setCssDeclaration("margin-right", mr);
export const marginLeft = ({ ml }: LayoutProps) => ml && setCssDeclaration("margin-left", ml);
export const marginBottom = ({ mb }: LayoutProps) => mb && setCssDeclaration("margin-bottom", mb);

export const padding = ({ pd }: LayoutProps) => pd && setCssDeclaration("padding", pd);
export const paddingTop = ({ pt }: LayoutProps) => pt && setCssDeclaration("padding-top", pt);
export const paddingRight = ({ pr }: LayoutProps) => pr && setCssDeclaration("padding-right", pr);
export const paddingLeft = ({ pl }: LayoutProps) => pl && setCssDeclaration("padding-left", pl);
export const paddingBottom = ({ pb }: LayoutProps) => pb && setCssDeclaration("padding-bottom", pb);