
export default (expenses) => {
    return expenses.reduce((acc, curr) => acc + curr.amount, 0)
}