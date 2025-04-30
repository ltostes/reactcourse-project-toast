import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';

import styles from './ToastShelf.module.css';



function ToastShelf() {
  const { toasts, removeToast : removerById } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {
        toasts.map(({message, variant, id}) => {
          return (
              <li 
              className={styles.toastWrapper}
              key={id}
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
