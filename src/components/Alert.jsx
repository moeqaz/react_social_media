import React from 'react'

export default function Alert({ message, category, flashMessage }) {
  return (
    <div className={`alert alert-${category} alert-dismissable fade show mt-3`} role='alert' onClick={() => flashMessage(null, null)}>
        <strong>{message}</strong>
    </div>
  )
}
