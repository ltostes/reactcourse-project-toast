import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
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

  function removeAllToasts() {
    const newToasts = [];
    setActiveToasts(newToasts);
  }

  const ctx = {
    toasts: activeToasts,
    addToast,
    removeToast,
    removeAllToasts
  }

  return <ToastContext.Provider value={ctx}>
          {children}
         </ToastContext.Provider>;
}

export default ToastProvider;
