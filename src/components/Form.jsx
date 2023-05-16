import { Button, Card, CardContent, TextField } from '@mui/material'
import React from 'react'

const Form = () => {
  return (
    <div style={{ marginTop:'5%' }} >
        <Card  >
            <h2> Add Blog </h2>
            <CardContent>
                <TextField style={{ margin:10 }} label="Author" />
                <br />
                <TextField style={{ margin:10}} label="Title" />
                <br />
                <TextField style={{ margin:10 }} label="Description" />
                <br />
                <Button variant='contained' > Submit </Button>
            </CardContent>
        </Card>
    </div>
  )
}

export default Form