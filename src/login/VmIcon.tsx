import React from "react";
import styled from "styled-components";
import { iconRegistry, IconName, SvgComponent, ImageData } from "./iconRegistry";

interface VmIconProps {
    name: IconName;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

const StyledIconWrapper = styled.div<{ $objectFit: string }>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: inherit;

    svg {
        width: 100%;
        height: 100%;
        object-fit: ${props => props.$objectFit};
        display: block;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: ${props => props.$objectFit};
    }
`;

export const VmIcon: React.FC<VmIconProps> = ({
    name,
    className,
    style,
    onClick,
    objectFit = "contain"
}) => {
    const iconDef = iconRegistry[name];

    if (!iconDef) {
        console.warn(
            `VmIcon: "${name}" 아이콘을 찾을 수 없습니다. 사용 가능한 아이콘:`,
            Object.keys(iconRegistry)
        );
        return null;
    }

    return (
        <StyledIconWrapper
            className={className}
            style={style}
            onClick={onClick}
            $objectFit={objectFit}
        >
            {iconDef.type === "svg" ? (
                (() => {
                    const SvgComponent = iconDef.source as SvgComponent;
                    return <SvgComponent />;
                })()
            ) : (
                <img src={iconDef.source as ImageData} alt={name} />
            )}
        </StyledIconWrapper>
    );
};

export default VmIcon;
