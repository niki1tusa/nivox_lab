interface IItemData {
	prop: string;
	type: string;
	default: string;
}
export default function UiCardDetails({ data }: { data: IItemData[] }) {
	return (
		<div className='border-edge grid w-full grid-cols-3 rounded border-2 text-sm 2xl:text-base'>
			<div className='border-edge flex flex-col border-r-2'>
				<span className='border-edge bg-edge/30 border-b-2 px-2 py-1'>Prop</span>
				<div>
					{data.map(item => (
						<div key={item.prop} className='border-edge h-[35px] border-b-2 px-2 py-1'>
							{item.prop}
						</div>
					))}
				</div>
			</div>
			<div className='border-edge flex flex-col border-r-2'>
				<span className='border-edge bg-edge/30 border-b-2 px-2 py-1'>Type</span>
				<div>
					{data.map(item => (
						<div key={item.prop} className='border-edge h-[35px] border-b-2 px-2 py-1'>
							{item.type}
						</div>
					))}
				</div>
			</div>
			<div className='flex flex-col'>
				<span className='border-edge bg-edge/30 border-b-2 px-2 py-1'>Default</span>
				<div>
					{data.map(item => (
						<div key={item.prop} className='border-edge h-[35px] border-b-2 px-2 py-1'>
							{item.default}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
