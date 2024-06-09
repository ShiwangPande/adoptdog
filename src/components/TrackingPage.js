import React from 'react'
import Timeline from './Timeline';
import News from './News';
import PieChart from './PieChart';
import AnnualFiguresTable from './AnnualFiguresTable';
const TrackingPage = () => {

    return (
        <div className='bg-gray-100		 min-h-screen'>
            <div className="lg:container  mx-auto ">
                <h1 className="text-3xl underline font-bold mb-4 text-center p-4">Shelter Statistics</h1>
                <div className='mt-10 flex flex-col lg:flex-row justify-between lg:w-[85vw]'>
                    <div className=' mx-auto lg:w-[50%]'>
                        <Timeline />
                        <div className=''>
                            <h1 className="text-3xl p-4 font-semibold ">Euthanasia Totals by Date</h1>
                            <div className="flex justify-center mx-0 mt-8">
                                <PieChart />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[50%] p-2 '>
                        <News />
                    </div>
                </div>
                <AnnualFiguresTable />
            </div>
        </div>
    );
};

export default TrackingPage;
