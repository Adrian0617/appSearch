import { useEffect, useState } from "react";
import { Container, Table, Td, Tr } from "../styles/ListTable";
import { Search } from "./Search";

export function ListOfDocuments({ formatFileAndDate }) {
  const [list, setList] = useState(null)


  const renderList = list ? list : formatFileAndDate

  return (
    <>
      <Search
        formatFileAndDate={formatFileAndDate}
        list={list}
        setList={setList}
      />
      <Table>
        <thead>
          <Tr>
            <Td>Tipo </Td>
            <Td>Estado </Td>
            <Td>Archivo </Td>
            <Td>Creado </Td>
          </Tr>
        </thead>
        <tbody>
          {renderList.map(doc => (
            <Tr key={doc.id}>
              <td>{doc.type}</td>
              <td>{doc.status}</td>
              <td>{doc.file}</td>
              <td>{doc.created}</td>
            </Tr>
          ))
          }
        </tbody>
      </Table>
    </>
  )
}

