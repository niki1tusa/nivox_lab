import { create } from 'zustand';

interface IStore {
	refs: Record<string, HTMLDivElement | null>;
	setRef: (name: string, element: HTMLDivElement | null) => void;
	scrollTo: (name: string) => void;
}

export const useScrollStore = create<IStore>((set, get) => ({
	refs: {},
	setRef: (name, element) => set(state => ({ refs: { ...state.refs, [name]: element } })),
	scrollTo: name => {
		const element = get().refs[name];
		element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	},
}));
