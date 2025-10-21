'use client'
import { PAGES } from "@/config/pages.config";
import { useScrollStore } from "@/store/scroll.store";
import Link from "next/link";

export function SideList({ data, isComponent }: { data: string[], isComponent?: boolean }) {
	const {scrollTo} = useScrollStore()
	return (
		<ul className='border-edge mx-1 flex flex-col gap-2 border-l pl-4 text-sm'>
			{data.map((item, i) =>
				isComponent ? (
					<Link href={PAGES.BLOCK(item)} key={i} className='hover:text-muted-edge transition-all'>
						{item}
					</Link>
				) : (
					<li onClick={()=>{
						scrollTo(item)}}  className='hover:text-muted-edge transition-all' key={i}>
						{item}
					</li>
				)
			)}
		</ul>
	);
}