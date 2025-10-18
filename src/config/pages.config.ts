class PagesConfig {
	HOME = '/';
	BLOCKS = '/b';
	BLOCK(name: string) {
		return `${this.BLOCKS}/${(name.charAt(0).toLowerCase() + name.slice(1).trim())}`;
	}
	DOCS = '/d';
	CONSTRUCTOR = '/c';
}
export const PAGES = new PagesConfig();
