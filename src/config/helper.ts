import type { ComponentType } from 'react';

export interface IDetails {
	prop: string;
	type: string;
	default: string;
}
export interface IUiItem<T> {
	component: ComponentType<T>;
	defaultProps: T;
	description: string;
	category: 'base' | 'complex';
	howToUse: string;
	code: string;
	details: IDetails[];
}
export function defineUiItem<T>(item: IUiItem<T>) {
	return item;
}
export function pickUiItem<
	TRegistry extends Record<string, IUiItem<any>>,
	TName extends keyof TRegistry,
>(registry: TRegistry, name: TName): TRegistry[TName] {
	return registry[name];
}
