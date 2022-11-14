import { Button } from '@mui/material';
import styles from './Atoms.module.scss'

interface ButtonProps {
    text: 'string';
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
}


export default function MainButton({text, handleClick}: ButtonProps) {
    return (
        <Button
            onClick={handleClick}>
            {text}
        </Button>
    )
}