import React from 'react'
import {  OptionSelect } from '../styles/ListTable';

export const OptionsFilter = ({doc, formatFileAndDate}) => {

    const filterOption = formatFileAndDate.map(item => item[doc])
    const options = [...new Set(filterOption)]

     const translations = {
      "type": "Tipo",
      "status": "Estado",
      "created": "Fecha"
    };

  return (
    <>
      <OptionSelect value="" selected disabled>{translations[doc]}</OptionSelect>
    {
        options.map(item =>(
            <OptionSelect value={item}>{item}</OptionSelect>
        ))
    }
    </>
  )
}
