import React from 'react'

export default function StatCard({ title, value, variant, testId }) {
  return (
    <div className={`stat-card ${variant}`} data-testid={testId}>
      <h3>{title}</h3>
      <div className="value">{value}</div>
    </div>
  )
}
