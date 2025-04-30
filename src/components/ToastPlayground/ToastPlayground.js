import React from 'react';

import Button from '../Button';
import TextInput from '../TextInput';
import RadioInput from '../RadioInput';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const defaultVariant = VARIANT_OPTIONS[0];
  const [inputVariant, setInputVariant] = React.useState(defaultVariant);
  const [inputMessage, setInputMessage] = React.useState('');

  const [activeToasts, setActiveToasts] = React.useState([])

  function addToast({message, variant}) {
    const id = crypto.randomUUID();
    const newToast = {message, variant, id};
    const newActiveToasts = [...activeToasts, newToast];

    setActiveToasts(newActiveToasts);
  }

  function removeToast(id_to_remove) {
    const newToasts = activeToasts.filter(({id}) => id != id_to_remove)
    setActiveToasts(newToasts);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addToast({variant: inputVariant, message: inputMessage});
    setInputMessage('');
    setInputVariant(defaultVariant);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf 
        toasts={activeToasts}
        removerById={removeToast}
      />

      <div className={styles.controlsWrapper}>
        <form
          onSubmit={handleSubmit}
          >
          <div className={styles.row}>
            <TextInput 
                label='Message'
                value={inputMessage} 
                setValue={setInputMessage}
                styles={styles} 
            />
          </div>

          <div className={styles.row}>
              <RadioInput 
                label='Variant'
                name='variant'
                options={VARIANT_OPTIONS}
                styles={styles}
                value={inputVariant}
                setValue={setInputVariant}
              />
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
              >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
