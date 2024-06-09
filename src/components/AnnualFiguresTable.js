import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnnualFiguresTable = () => {
    const [data, setData] = useState([]);
    const [totals, setTotals] = useState(Array(13).fill(0));

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        calculateTotals();
    }, [data]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://apdoptdogserver.onrender.com/api/annual-figures');
            setData(response.data);
        } catch (error) {
            console.error('There was an error fetching the annual figures!', error);
        }
    };
    const calculateTotals = () => {
        const newTotals = Array(13).fill(0);
        data.forEach(row => {
            newTotals[0] += row.jan || 0;
            newTotals[1] += row.feb || 0;
            newTotals[2] += row.mar || 0;
            newTotals[3] += row.apr || 0;
            newTotals[4] += row.may || 0;
            newTotals[5] += row.jun || 0;
            newTotals[6] += row.jul || 0;
            newTotals[7] += row.aug || 0;
            newTotals[8] += row.sep || 0;
            newTotals[9] += row.oct || 0;
            newTotals[10] += row.nov || 0;
            newTotals[11] += row.dec || 0;
            newTotals[12] += row.total || 0;
        });
        setTotals(newTotals);
    };

    const addRow = async () => {
        const newRow = {
            species: 'New Species',
            jan: 0,
            feb: 0,
            mar: 0,
            apr: 0,
            may: 0,
            jun: 0,
            jul: 0,
            aug: 0,
            sep: 0,
            oct: 0,
            nov: 0,
            dec: 0,
            total: 0
        };

        try {
            const response = await axios.post('https://apdoptdogserver.onrender.com/api/annual-figures', newRow);
            newRow.id = response.data.id; // Assuming the backend returns the ID of the new row
            setData([...data, newRow]);
        } catch (error) {
            console.error('There was an error adding the row!', error);
        }
    };

    const removeRow = async (id) => {
        try {
            await axios.delete(`https://apdoptdogserver.onrender.com/api/annual-figures/${id}`);
            setData(data.filter(row => row.id !== id));
        } catch (error) {
            console.error('There was an error deleting the row!', error);
        }
    };

    const handleCellChange = async (index, col, value) => {
        const newData = [...data];
        newData[index][col] = value;
        newData[index].total = Object.keys(newData[index]).reduce((acc, key) => {
            if (key !== 'species' && key !== 'id') {
                return acc + (newData[index][key] || 0);
            }
            return acc;
        }, 0);
        setData(newData);

        try {
            await axios.put(`https://apdoptdogserver.onrender.com/api/annual-figures/${newData[index].id}`, newData[index]);
        } catch (error) {
            console.error('There was an error updating the cell!', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-8 text-center">Annual Figures (by species)</h1>
            <div className="overflow-x-auto">
                <table className="table-auto min-w-max w-full whitespace-nowrap border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th className="border border-gray-200 px-4 py-2">Species</th>
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Total'].map((month, index) => (
                                <th key={index} className="border border-gray-200 px-4 py-2">{month}</th>
                            ))}
                            <th className="border border-gray-200 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={row.id}>
                                <td className="border border-gray-200 px-4 py-2">
                                    <input
                                        type="text"
                                        value={row.species}
                                        onChange={(e) => handleCellChange(rowIndex, 'species', e.target.value)}
                                        className="w-full  font-semibold capitalize px-1"
                                    />
                                </td>
                                {['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'].map((col, colIndex) => (
                                    <td key={colIndex} className="border border-gray-200 px-4 py-2">
                                        <input
                                            type="number"
                                            value={row[col]}
                                            onChange={(e) => handleCellChange(rowIndex, col, parseInt(e.target.value, 10))}
                                            className="w-full px-1"
                                        />
                                    </td>
                                ))}
                                <td className="border border-gray-200 px-4 py-2">{row.total}</td>
                                <td className="border border-gray-200 px-4 py-2">
                                    <button
                                        onClick={() => removeRow(row.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td className="border border-gray-200 px-4 py-2 font-bold">Total</td>
                            {totals.slice(0, 12).map((total, index) => (
                                <td key={index} className="border border-gray-200 px-4 py-2 font-bold">{total}</td>
                            ))}
                            <td key="total" className="border border-gray-200 px-4 py-2 font-bold">{totals[12]}</td>
                            <td className="border border-gray-200 px-4 py-2"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button onClick={addRow} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Add Row
            </button>
        </div>
    );
};

export default AnnualFiguresTable;
