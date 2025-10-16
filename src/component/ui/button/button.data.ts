export const BUTTON_DATA = [
	{ prop: 'children', type: 'React.ReactNode', default: '-' },
	{ prop: 'type', type: "'button' | 'submit' | 'reset'", default: "'button'" },
	{ prop: 'style', type: "'default' | 'friendly'", default: "'default'" },
	{ prop: 'textSize', type: "'1' | '2'", default: "'1'" },
	{ prop: 'color', type: 'keyof typeof colorMap', default: "'neutral'" },
	{ prop: 'animate', type: 'keyof typeof animateVariants', default: '-' },
	{ prop: 'loading', type: 'boolean', default: 'false' },
	{ prop: 'disabled', type: 'boolean', default: 'false' },
];
