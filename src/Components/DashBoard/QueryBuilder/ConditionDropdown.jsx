import React, { useState } from 'react';
import { ChevronDownIcon, XMarkIcon, PlusCircleIcon } from '@heroicons/react/24/outline'; // Import your icon components

const ConditionDropdown = () => {
  const initialCondition = { type: 'Age', operator: 'Is Greater Than', value: '25', andOperator: 'And' };
  const [conditions, setConditions] = useState([initialCondition]);

  const operators = ['Is Greater Than', 'Is Less Than', 'Equals To'];
  const andOperators = ['And', 'Also', 'Or'];
  const sexOperators = ['Sex', 'Male', 'Female', 'Others'];
  const values = ['25', '30', '35', '40'];

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

  const handleValueChange = (index, selectedValue) => {
    const updatedConditions = conditions.map((condition, i) => {
      if (i === index) {
        return { ...condition, value: selectedValue };
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
  const handleSexOperatorChange = (index, selectedSexOperator) => {
    const updatedConditions = conditions.map((condition, i) => {
      if (i === index) {
        return { ...condition, sexOperator: selectedSexOperator };
      }
      return condition;
    });
    setConditions(updatedConditions);
  };

  return (
    <div className='border rounded-md mt-5'>
      <ul className='inline-flex space-x-5 p-5'>
        {conditions.map((condition, index) => (
          <>
            <li key={index} className='bg-[#F2FDC1] flex justify-between items-center space-x-2 p-2 rounded-[5px]'>
              <select
                value={condition.type}
                onChange={(e) => handleTypeChange(index, e.target.value)}
                className='capitalize bg-transparent'
              >
                <option value='Age'>Age</option>
                <option value='younger'>Younger</option>
                <option value='ans'>Answer</option>
                <option value='sex'>Sex</option>
              </select>

              <span> | </span>
              <XMarkIcon className='h-4 w-4 text-black' onClick={() => removeCondition(index)} />
            </li>

            <li className='bg-[#F2FDC1] flex justify-between items-center space-x-2 p-2 rounded-[5px]'>  <select
              className='bg-transparent'
              value={condition.operator}
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
              <XMarkIcon className='h-4 w-4 text-black' onClick={() => removeCondition(index)} />
            </li>
            <li className='bg-[#F2FDC1] flex justify-between items-center space-x-2 p-2 rounded-[5px]'>
              <select
                className='bg-transparent'
                value={condition.value}
                onChange={(e) => handleValueChange(index, e.target.value)}
              >
                {values.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>

              <span> | </span>
              <XMarkIcon className='h-4 w-4 text-black' onClick={() => removeCondition(index)} />
            </li>

            <li className='bg-[#F2FDC1] flex justify-between items-center space-x-2 p-2 rounded-[5px]'><select
              className='bg-transparent'
              value={condition.andOperator}
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
            <li className='bg-[#F2FDC1] flex justify-between items-center space-x-2 p-2 rounded-[5px]'><select
              className='bg-transparent'
              value={condition.sexOperator}
              onChange={(e) => handleSexOperatorChange(index, e.target.value)}
            >
              {sexOperators.map((sexOperator) => (
                <option key={sexOperator} value={sexOperator}>
                  {sexOperator}
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
  );
};

export default ConditionDropdown;
