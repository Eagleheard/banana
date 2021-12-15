import { Button } from 'react-bootstrap';
import "./Build.scss";

export const Build = () => {

    return (
        <div className="build">
            <Button variant="warning" onClick={() => console.log('10 bananas eaten')}>Eat Bananas</Button>
        </div>
    )
}