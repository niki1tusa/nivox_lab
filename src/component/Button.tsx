export default function Button({ children }: { children: React.ReactNode }) {
	return (
		<button
			type='button'
			className=' bg-sky gap-2 hover:bg-sky/80 flex items-center justify-center rounded shadow shadow-sky px-3 py-2 text-lg text-white transition-colors'
		>
			{children}
		</button>
	);
}
