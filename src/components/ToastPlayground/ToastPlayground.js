import React from 'react';

import Button from '../Button';
import TextInput from '../TextInput';
import RadioInput from '../RadioInput';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [variant, setVariant] = React.useState('notice');
  const [message, setMessage] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Toasted this:", {variant, message})
    // setMessage('');
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <form
          onSubmit={handleSubmit}
          >
          <div className={styles.row}>
            <TextInput 
                label='Message'
                value={message} 
                setValue={setMessage}
                styles={styles} 
            />
          </div>

          <div className={styles.row}>
              <RadioInput 
                label='Variant'
                name='variant'
                options={VARIANT_OPTIONS}
                styles={styles}
                value={variant}
                setValue={setVariant}
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
