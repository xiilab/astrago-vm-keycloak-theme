import { ComponentType, SVGProps } from "react";

// SVG 컴포넌트들
import EmailIconSvg from "../assets/images/login/icon-email.svg?react";
import PasswordIconSvg from "../assets/images/login/icon-pw.svg?react";
import ShowPasswordIconSvg from "../assets/images/login/icon-show-pw.svg?react";
import HidePasswordIconSvg from "../assets/images/login/icon-hide-pw.svg?react";
import LoginSymbolSvg from "../assets/images/login/login-symbol.svg?react";

// 이미지 파일들 (PNG, JPEG 등)
import logoImage from "../assets/images/logo.png";
import loginBgImage from "../assets/images/login/login-bg.jpg";

export type SvgComponent = ComponentType<SVGProps<SVGElement>>;
export type ImageData = string;

export interface IconDefinition {
    type: "svg" | "image";
    source: SvgComponent | ImageData;
}

// 아이콘 레지스트리
export const iconRegistry: Record<string, IconDefinition> = {
    // SVG 아이콘들
    email: { type: "svg", source: EmailIconSvg },
    password: { type: "svg", source: PasswordIconSvg },
    showPassword: { type: "svg", source: ShowPasswordIconSvg },
    hidePassword: { type: "svg", source: HidePasswordIconSvg },
    loginSymbol: { type: "svg", source: LoginSymbolSvg },
    // SVG 외 이미지 파일들
    logo: { type: "image", source: logoImage },
    loginBg: { type: "image", source: loginBgImage }
} as const;

export type IconName = keyof typeof iconRegistry;
