import { animateVariants } from "@/component/motion-primitive/animate";

export interface ICodeProps {
    code: string;
    animate?: keyof typeof animateVariants;
}