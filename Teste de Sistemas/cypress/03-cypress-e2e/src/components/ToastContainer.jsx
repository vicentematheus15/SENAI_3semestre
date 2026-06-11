import React from 'react'

export default function ToastContainer({ toasts }) {
  return (
    <div id="toast-container" data-testid="toast-container">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`toast ${toast.type}`}
          data-testid={`toast-${toast.type}`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  )
}
