import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsPlusLg } from 'react-icons/bs';
import './TodoForm.css'
import Grid from './../template/Grid';

export default function TodoForm(props) {

    return (
        <Grid cols="12 10 8">
            <div className="form-cadastro">
                <Form.Label>Nova Tarefa</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="Adicione um tarefa"
                        value={props.description}
                        onChange={props.handleChange}
                        onKeyUp={(e) => e.key === "Enter" ? props.handleAdd() : ""}

                    />
                    <Button variant="dark" id="button-addon2" onClick={props.handleAdd}>
                        <BsPlusLg className="mb-1" />
                    </Button>
                </InputGroup>
            </div>
        </Grid>

    )
}