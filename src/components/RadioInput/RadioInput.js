import React from 'react';

import styles from './RadioInput.module.css';

function RadioInput({name, label, options, styles: inputStyles, value, setValue, ...delegated}) {
  const appliedStyles = {...styles, ...inputStyles};

  return <>
      <div className={appliedStyles.label}>{label}</div>
      {options.map((option) => {
        const id = `variant-${option}`; 
        return (
          <div
          className={`${appliedStyles.inputWrapper} ${appliedStyles.radioWrapper}`}
          key={id}
          >
            <label htmlFor={id}>
              <input
                type="radio"
                name={name}
                id={id}
                value={option}
                checked={value == option}
                onChange={event => {
                  const nextValue = event.target.value;
                  setValue(event.target.value);
                  console.log(`Set ${name} value to: ${nextValue}`)
                }}
                {...delegated}
              />
              {option}
            </label>
          </div>
          )
        })
      }
  </>;
}

export default RadioInput;
