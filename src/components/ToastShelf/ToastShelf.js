import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';

import styles from './ToastShelf.module.css';



function ToastShelf() {
  const { toasts, removeToast : removerById, removeAllToasts } = React.useContext(ToastContext);

  // Allowing users to press Escape to remove all toasts
  React.useEffect(() => {
    function handleKeyDown(event) {
      console.log('Pressed a key.')
      if (event.code === 'Escape') {
        removeAllToasts();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
