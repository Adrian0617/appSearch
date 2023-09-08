import React from 'react'
import { OptionsFilter } from './OptionsFilter';
import { fetchingData2 } from '../helpers.js/filters';
import { CustomSelect, SelectArrow } from '../styles/ListTable';

export const FilterDocs = ({formatFileAndDate, setList}) => {
  
  const selectsFilter = ["type", "status", "created"]
  
  const handleChange = async(e) => {
    const valueFilter = e.target.value
    const nameFilter = e.target.name
    const filterBy = formatFileAndDate.filter(doc => doc[nameFilter] === valueFilter)
    setList(filterBy);
    // try {
    //   const data = await fetchingData2(nameFilter, valueFilter);
    //   setList(data)
    // } catch (error) {
    //   console.error('Error al obtener datos:', error);
    // }
  }


  return (
    <div>
      {selectsFilter.map(doc =>(
        <>
        <CustomSelect name={doc}  onChange={(e)=>handleChange(e)}>
          <OptionsFilter
            formatFileAndDate={formatFileAndDate}
            selectsFilter={selectsFilter}
            doc={doc}
          />
          <SelectArrow>&#x25BC</SelectArrow>
        </CustomSelect>
        </>
      ))}
    </div>
  )
}
