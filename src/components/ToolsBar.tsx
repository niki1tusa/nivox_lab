import CopyButton from "./ui/copy-button/CopyButton";
import Tabs from "./ui/tabs/Tabs";

export default function ToolsBar({
	value,
	isShow,
	setIsShow,
	code,
}: {
	value: string;
	isShow: string;
	setIsShow: (arg: string) => void;
	code: string;
}) {
	return (
		<div className='bg-edge relative z-10 h-[35px] w-full'>
			{value === 'preview' ? (
				<div className='absolute top-1 right-0 max-h-[35px] text-sm'>
					<Tabs items={['show', 'hide']} value={isShow} setValue={setIsShow} />
				</div>
			) : (
				<div className='absolute top-1 right-0'>
					<CopyButton code={code} />
				</div>
			)}
		</div>
	);
}
