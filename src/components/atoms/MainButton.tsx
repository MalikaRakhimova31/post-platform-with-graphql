import { Button } from '@mui/material';
import styles from './Atoms.module.scss'

interface ButtonProps {
    text: string;
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
    type: string;
}


export default function MainButton({text, handleClick, type='button'}: ButtonProps) {
    return (
        <Button onClick={handleClick} type={type}>
            {text}
        </Button>
    )
}