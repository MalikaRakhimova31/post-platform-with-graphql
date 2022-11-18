import styles from './Atoms.module.scss'

interface InputProps {
    placeholder: string,
    value: string,
    onChange: () => void,
    icon: JSX.Element,
    name: string,
    type: string
        
}

export default function InputBar({placeholder, value, onChange, icon, name, type='text'} : InputProps) {
    return (
        <div className={styles.inputBox}>
            <input
                className={styles.input}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                type={type}
                name={name}
                required
            />
            {icon && icon}
        </div>
    )
}