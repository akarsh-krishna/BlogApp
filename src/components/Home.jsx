import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    var [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            setData(res.data)
        })
    }, [])

  return (
    <div style={{ textAlign:'center', marginLeft:'25%' }} >
        <TableContainer  >
            <Table sx={{ maxWidth: 650 }} >
                <TableHead>
                    <TableRow>
                        <TableCell> Id </TableCell>
                        <TableCell> Title </TableCell>
                        <TableCell> Body </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map((val,index) => {
                            return(
                                <TableRow key={index} >
                                    <TableCell> {val.id} </TableCell>
                                    <TableCell> {val.title} </TableCell>
                                    <TableCell> {val.body} </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>

    </div>
  )
}

export default Home