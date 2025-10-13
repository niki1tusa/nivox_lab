class PagesConfig {
	HOME = '/';
	BLOCKS = '/b';
	BLOCK(id: string) {
		return `${this.BLOCKS}/${id}`;
	}
	DOCS = '/d';
	CONSTRUCTOR = '/c';
}
export const PAGES = new PagesConfig();
