import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsBackspace, BsCheck2Circle, BsArrowRepeat } from 'react-icons/bs'
import './TodoList.css'
import Grid from './../template/Grid';


export default function TodoList(props) {
    function renderRows() {
        const list = props.list || [];
        list.forEach(todo => {
            let data = todo.createdAt.split("T");
            todo.createdAt = data[0];
        });
        return list.filter((todo) => todo.description.toLowerCase().includes(search.toLowerCase().trim())).map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? "TarefaOk" : ""}>{todo.description}</td>
                <td>{todo.createdAt}</td>
                <td className="Actions">
                    <Button hidden={todo.done} variant="outline-success" onClick={() => props.handleMarkAsDone(todo)} >
                        <BsCheck2Circle className="mb-1"></BsCheck2Circle>
                    </Button>
                    <Button hidden={!todo.done} variant="outline-warning" onClick={() => props.handleMarkAsPending(todo)} >
                        <BsArrowRepeat className="mb-1"></BsArrowRepeat>
                    </Button>
                    <Button variant="outline-danger" onClick={() => props.handleRemove(todo)} >
                        <BsBackspace className="mb-1"></BsBackspace>
                    </Button>
                </td>

            </tr>
        ))
    }
    const [search, setSearch] = useState("");
    return (
        <div>
            <div className="search d-flex justify-content-end">
                <Grid cols="6 5 3">
                    <Form.Control
                        type="text"
                        placeholder="Pesquisar tarefa"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Grid>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Data</th>
                        <th className="Actions">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}
