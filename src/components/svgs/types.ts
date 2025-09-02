import { ComponentType, SVGProps } from "react";

export type CustomIconProps = SVGProps<SVGSVGElement> & { size?: number | string }

export type CustomIcon = ComponentType<CustomIconProps>
