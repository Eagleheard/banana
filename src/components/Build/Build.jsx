import { Button, Table } from 'react-bootstrap';
import "./Build.scss";

export const Build = ({ units, addUnit, handleChange, unit, isToggle }) => {
    return (
        <>
        <div className="build">
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={handleChange}>
                <option defaultValue="first item">Choise your warrior</option>
                {units.map(u =>
                    <option value={u.id} key={u.id}>{u.Title} || Cost: {u.Cost} Bananas</option>
                )}
            </select>
        </div>
        <Button variant="warning" onClick={addUnit} className="build__btn">Eat Bananas</Button>
        <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Attack</th>
                        <th>Defense</th>
                        <th>Health</th>
                    </tr>
                </thead>
                <tbody>
                    {isToggle && (unit.map(u =>
                        <tr key={u.id}>
                            <td>{u.Title}</td>
                            <td>{u.Attack}</td>
                            <td>{u.Defense}</td>
                            <td>{u.Health}</td>
                        </tr>))}
                </tbody>
            </Table>
        </>
    )
}


