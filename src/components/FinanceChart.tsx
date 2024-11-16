"use client"

import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        income: 2400,
        expense: 4000,
    },
    {
        name: 'Feb',
        income: 1398,
        expense: 3000,
    },
    {
        name: 'Mar',
        income: 9800,
        expense: 2000,
    },
    {
        name: 'Apr',
        income: 3908,
        expense: 2780,
    },
    {
        name: 'May',
        income: 4800,
        expense: 1890,
    },
    {
        name: 'Jun',
        income: 3800,
        expense: 2390,
    },
    {
        name: 'Jul',
        income: 4300,
        expense: 3490,
    },
    {
        name: 'Aug',
        income: 4300,
        expense: 3490,
    },
    {
        name: 'Sep',
        income: 4300,
        expense: 3490,
    },
    {
        name: 'Oct',
        income: 4300,
        expense: 3490,
    },
    {
        name: 'Nov',
    income: 4300,
    expense: 3490
    },
    {
        name: 'Dec',
        income: 4300,
        expense: 3490,
    },
];

const FinanceChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* TITLE */}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Finance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            {/* CHART */}
            <div className='relative w-full h-[75%]'>
                <ResponsiveContainer width="100%" height="90%">
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
                        <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#d1d5db'}} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#d1d5db'}} tickMargin={10} />
                        <Tooltip />
                        <Legend align="center" verticalAlign="top" wrapperStyle={{ paddingTop: '10px', paddingBottom: '30px' }} />
                        <Line type="monotone" dataKey="income" stroke="#3FEBFA" strokeWidth={5}/>
                        <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default FinanceChart