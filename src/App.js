import { useState } from 'react'
import axios from 'axios'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [server, setServer] = useState('')
  const [port, setPort] = useState('')
  const [speed, setSpeed] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    // const object = { name, server, port, speed }

    axios
      .post(
        'https://sheet.best/api/sheets/a6ee0bd8-f1c7-41f0-9feb-f560359b2339',
        { name, server, port, speed }
      )
      .then((response) => {
        console.log(response)
      })

    console.log(name)
    console.log(server)
    console.log(port)
    console.log(speed)
    setName('')
    setServer('')
    setPort('')
    setSpeed('')
  }

  const isEnable =
    name.length > 0 && server.length > 0 && port.length > 0 && speed.length > 0

  return (
    <Container fluid className='container'>
      <Header textAlign='center' as='h2'>
        Proxy server Sheets!
      </Header>
      <Form className='form' onSubmit={submitHandler}>
        <Form.Field>
          <label>Server Name</label>
          <input
            placeholder='Enter the server name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Server Address</label>
          <input
            placeholder='Enter server address'
            value={server}
            onChange={(e) => setServer(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Port Address</label>
          <input
            placeholder='Enter port address'
            value={port}
            onChange={(e) => setPort(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Speed</label>
          <input
            placeholder='Enter server speed'
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </Form.Field>

        <Button color='blue' type='submit' disabled={!isEnable}>
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default App
