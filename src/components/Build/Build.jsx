import { Button } from 'react-bootstrap';
import "./Build.scss";

export const Build = (props) => {
    const eatBanana = () => {
        props.eatBanana();
    }
    return (
        <div className="build">
            <Button variant="warning" onClick={eatBanana}>Eat Bananas</Button>
        </div>
    )
}