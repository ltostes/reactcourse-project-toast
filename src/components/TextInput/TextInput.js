import React from 'react';

import styles from './TextInput.module.css';

function TextInput({value, setValue, styles: inputStyles, ...delegated}) {

  const appliedStyles = {...styles, ...inputStyles};

  return <>
            <label
                htmlFor="message"
                className={styles.label}
                style={{ alignSelf: 'baseline' }}
                >
                Message
              </label>
              <div className={styles.inputWrapper}>
                <textarea 
                  id="message" 
                  className={styles.messageInput} 
                  value={value}
                  onChange={(event) => {
                    const nextMessage = event.target.value;
                    setValue(nextMessage);
                  }}
                  {...delegated}
                />
              </div>
          </>;
}

export default TextInput;
