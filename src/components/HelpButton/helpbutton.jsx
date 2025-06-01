import styles from './styles.module.css';


const HelpButton =({onShowHelp})=> {

    const handleHelp = () =>{
        onShowHelp()
    }
    return(
        <div className={styles.helpButton}onClick={handleHelp}>  Поддержка</div>
    )
}

export default HelpButton;