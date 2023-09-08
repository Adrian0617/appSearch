import React from 'react'
import { FilterDocs } from './FilterDocs'
import { FilterContainer, InputSearch } from '../styles/ListTable'

export const Search = ({ formatFileAndDate, setList, list }) => {

  const handleInputChange = (e) => {
    const valueInput = e.target.value.toLowerCase()
    const filterByinput = formatFileAndDate.filter(item => {
      const typeLowerCase = item.type.toLowerCase()
      const statusLowerCase = item.status.toLowerCase()
      const fileLowerCase = item.file.toLowerCase()
      const dateLowerCase = item.created.toLowerCase()
      if (
        typeLowerCase.includes(valueInput) ||
        statusLowerCase.includes(valueInput) ||
        fileLowerCase.includes(valueInput) ||
        dateLowerCase.includes(valueInput)

      ) return item
    })
    setList(filterByinput)

  }

  return (
    <FilterContainer>
      <InputSearch type="text" placeholder='Buscar...' onChange={e => handleInputChange(e)} />
      <FilterDocs
        formatFileAndDate={formatFileAndDate}
        setList={setList}
      />
    </FilterContainer>
  )
}
