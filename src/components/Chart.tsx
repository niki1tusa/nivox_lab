'use client';

import {
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from 'recharts';

const data = [
	{
		name: '1 day',
		'nivox lab': 0,
		other: 0,
	},
	{
		name: '2 day',
		'nivox lab': 2,
		other: 1,
	},
	{
		name: '3 day',
		'nivox lab': 3,
		other: 1,
	},
	{
		name: '4 day',
		'nivox lab': 5,
		other: 1,
	},
	{
		name: '5 day',
		'nivox lab': 10,
		other: 2,
	},
];

export default function Chart() {
	return (
		<ResponsiveContainer width='100%' height='100%'>
			<LineChart
				width={500}
				height={300}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<XAxis dataKey='name' />
				<YAxis />

				<Legend />
				<Line type='monotone' dataKey='nivox lab' stroke='#1f6feb' />
				<Line type='monotone' dataKey='other' stroke='#475569' />
			</LineChart>
		</ResponsiveContainer>
	);
}
