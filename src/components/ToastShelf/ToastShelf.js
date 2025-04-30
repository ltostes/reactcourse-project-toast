import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, removerById}) {
  return (
    <ol className={styles.wrapper}>
      {
        toasts.map(({message, variant, id}) => {
          return (
              <li 
              className={styles.toastWrapper}
              id={id}
              >
                <Toast 
                  variant={variant}
                  handleDismiss={() => removerById(id)}
                  >
                    {message}
                </Toast>
              </li>
            )
          } 
        )
      }
    </ol>
  );
}

export default ToastShelf;
