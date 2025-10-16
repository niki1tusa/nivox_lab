class PagesConfig {
	HOME = '/';
	BLOCKS = '/b';
	BLOCK(name: string) {
		return `${this.BLOCKS}/${name}`;
	}
	DOCS = '/d';
	CONSTRUCTOR = '/c';
}
export const PAGES = new PagesConfig();
