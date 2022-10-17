import styles from '../../styles/Home.module.css';


function Stopwatch() {
    // count time
    // reset button
    // pause
    // split
    let countTime = 2

    return(
        <div className={styles.description}>
        <h3>{countTime}</h3>
        <button>Start</button>
        </div>
    )

}

export default Stopwatch