import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'techstore_orders'

function loadOrders() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return parsed.sort((a, b) => b.id - a.id)
  } catch {
    return []
  }
}

function saveOrders(orders) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders))
}

let nextId = loadOrders().reduce((max, o) => Math.max(max, o.id), 0) + 1

export function useOrders() {
  const [orders, setOrders] = useState(() => loadOrders())

  useEffect(() => {
    saveOrders(orders)
  }, [orders])

  const addOrder = useCallback((data) => {
    const order = {
      id: nextId++,
      customer: data.customer,
      product: data.product,
      amount: data.amount,
      status: 'pending',
      createdAt: new Date().toISOString()
    }
    setOrders(prev => [order, ...prev])
    return order
  }, [])

  const updateStatus = useCallback((id, status) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o))
  }, [])

  const clearOrders = useCallback(() => {
    setOrders([])
    nextId = 1
  }, [])

  const stats = {
    totalRevenue: orders
      .filter(o => o.status === 'completed')
      .reduce((sum, o) => sum + o.amount, 0),
    totalOrders: orders.length,
    pendingCount: orders.filter(o => o.status === 'pending').length,
    cancelledCount: orders.filter(o => o.status === 'cancelled').length,
    recentOrders: orders.slice(0, 5)
  }

  return { orders, addOrder, updateStatus, clearOrders, stats }
}
