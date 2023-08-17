import React, { useState } from 'react'
import { XMarkIcon, ChevronDownIcon, PlusCircleIcon } from '@heroicons/react/24/outline'

export default function SerachFocus() {
    const initialCondition = { type: 'Prisoner', operator: 'And', value: 'Guard', };
    const [conditions, setConditions] = useState([initialCondition]);

    const operators = ['And', 'Also', 'Or'];
    const andOperators = ['Guard', 'Owner', 'Police'];


    const addCondition = () => {
        setConditions([...conditions, initialCondition]);
    };

    const removeCondition = (index) => {
        const updatedConditions = conditions.filter((_, i) => i !== index);
        setConditions(updatedConditions);
    };

    const handleTypeChange = (index, selectedType) => {
        const updatedConditions = conditions.map((condition, i) => {
            if (i === index) {
                return { ...condition, type: selectedType };
            }
            return condition;
        });
        setConditions(updatedConditions);
    };

    const handleOperatorChange = (index, selectedOperator) => {
        const updatedConditions = conditions.map((condition, i) => {
            if (i === index) {
                return { ...condition, operator: selectedOperator };
            }
            return condition;
        });
        setConditions(updatedConditions);
    };


    const handleAndOperatorChange = (index, selectedAndOperator) => {
        const updatedConditions = conditions.map((condition, i) => {
            if (i === index) {
                return { ...condition, andOperator: selectedAndOperator };
            }
            return condition;
        });
        setConditions(updatedConditions);
    };

    return (
        <div className='border rounded-md mt-5'>
            <ul className='inline-flex space-x-5 p-5'>
                {/* personer */}
                {conditions.map((condition, index) => (
                    <>
                        <li key={index} className='bg-[#F2FDC1] flex justify-between items-center space-x-2 p-2 rounded-[5px]'>
                            <select
                                value={condition.type}
                                onChange={(e) => handleTypeChange(index, e.target.value)}
                                className='capitalize bg-transparent'
                            >
                                <option value='Age'>Personer</option>
                                <option value='younger'>Double Personer</option>
                                <option value='younger'>Single Personer</option>

                            </select>

                            <span> | </span>
                            <XMarkIcon className='h-4 w-4 text-black' onClick={() => removeCondition(index)} />
                        </li>
                        {/*  */}
                        <li className='bg-[#F2FDC1] flex justify-between items-center space-x-2 p-2 rounded-[5px]'>  <select
                            value={condition.operator}
                            className='bg-transparent'
                            onChange={(e) => handleOperatorChange(index, e.target.value)}
                        >
                            {operators.map((operator) => (
                                <option key={operator} value={operator}>
                                    {operator}
                                </option>
                            ))}
                        </select>
                            <ChevronDownIcon className='h-4 w-4 text-black' />
                            <span> | </span>
                            <XMarkIcon className='h-4 w-4 text-black bg-transparent' onClick={() => removeCondition(index)} />
                        </li>


                        <li className='bg-[#F2FDC1] flex justify-between items-center space-x-2 p-2 rounded-[5px]'><select
                            value={condition.andOperator}
                            className='bg-transparent'
                            onChange={(e) => handleAndOperatorChange(index, e.target.value)}
                        >
                            {andOperators.map((andOperator) => (
                                <option key={andOperator} value={andOperator}>
                                    {andOperator}
                                </option>
                            ))}
                        </select>

                            <span> | </span>
                            <XMarkIcon className='h-4 w-4 text-black' onClick={() => removeCondition(index)} /></li>

                    </>

                ))}
                <li className='bg-[#F2FDC1] flex justify-between items-center space-x-2 p-2 rounded-[5px]'>
                    <PlusCircleIcon className='h-4 w-4 text-black' onClick={addCondition} />
                    <h4>Add Condition</h4>
                </li>
            </ul>
        </div>
    )
}
