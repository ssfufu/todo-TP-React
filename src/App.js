
import './style/App.css';
import React, { useState } from "react";
import { Button, Col, Row, Container, Card, Form, ListGroup, ListGroupItem} from 'react-bootstrap'

export default function App(){
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))
  return(
    <Container
      style={{
        paddingTop: '2rem',
        paddingBottom: '2rem'
      }}
    >
      <Card>
        <Card.Body>
            <Row className='mx-auto'>
              <Col sm={10}>
                  <Form.Control type="text" placeholder="Enter Todo"/>
              </Col>
              <Col sm={2}>
                <Button variant="primary" block onClick={() => {
                    if(document.querySelector('input').value.trim() === ''){
                      return
                    }
                    let todo = document.querySelector('input').value
                    let todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
                    todos.push(todo)
                    localStorage.setItem('todos', JSON.stringify(todos))
                    document.querySelector('input').value = ''
                    setTodos(JSON.parse(localStorage.getItem('todos')))
                  }}>Add Todo</Button>
              </Col>
            </Row>
        </Card.Body>
      </Card>
      <br/>
      <Card>
        <Card.Body
          style={{
            backgroundColor: '#f2f2f2'
          }}
        >
          <br/>
          <Card.Title style={{
            textAlign: 'center',
            fontSize: '2rem'
          }}>Todo List:</Card.Title>
          <br/>
          <ListGroup>
              {
                todos ? todos.map((todo, index) => {
                  return(
                    <ListGroupItem key={index}>
                      <Row>
                        <Col sm={11}>
                          {todo}
                        </Col>
                        <Col sm={1}>
                          <Button variant="danger" block onClick={() => {
                            let todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
                            todos.splice(index, 1)
                            localStorage.setItem('todos', JSON.stringify(todos))
                            setTodos(JSON.parse(localStorage.getItem('todos')))
                          }}>Done</Button>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  )
                }) : null
              }
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  )
}