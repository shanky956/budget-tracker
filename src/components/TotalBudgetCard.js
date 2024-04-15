import React from 'react'
import BudgetCard from './BudgetCard'
import { useBudgets } from '../contexts/BudgetsContext'

export default function TotalBudgetCard() {
    const { expenses, budgets } = useBudgets()
    const amount = expenses.reduce(
        (total, expense) => total + expense.amount, 
        0
    )

    const max = budgets.reduce(
        (total, budgets) => total + budgets.max, 
        0
    )

    if(max === 0)
        return null

  return (
    <BudgetCard name="Total" amount={amount} gray max={max}  hideButtons/>
  )
}
