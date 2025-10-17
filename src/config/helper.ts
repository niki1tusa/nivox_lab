import type { ComponentType } from "react";

export function createComponent<P>(
  component: ComponentType<P>,
  defaultProps: P
) {
  return { component, defaultProps } as const;
}