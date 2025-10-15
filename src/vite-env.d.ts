/// <reference types="vite/client" />

declare module "*.svg?react" {
    import { FunctionComponent, SVGProps } from "react";
    const content: FunctionComponent<SVGProps<SVGElement>>;
    export default content;
}

declare module "*.svg" {
    const content: string;
    export default content;
}
