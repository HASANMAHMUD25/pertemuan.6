import styles from "./AddMovieForm.module.css";

function AddMovieForm(){
    return(
        <div className={styles.container}>
            <div className={styles.form__left}>
                <img src="https://picsum.photos/600/400" alt="" className={styles.form__image} />
            </div>

           
        </div>
    );
}

export default AddMovieForm;