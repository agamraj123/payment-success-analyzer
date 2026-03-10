import { useState } from "react"

function TransactionTable({ payments }) {

  const [search,setSearch] = useState("")
  const [filter,setFilter] = useState("all")

  const filteredPayments = payments.filter(p => {

    const matchesSearch = p.method.toLowerCase().includes(search.toLowerCase())

    const matchesFilter =
      filter === "all" || p.status === filter

    return matchesSearch && matchesFilter
  })

  return (

    <div>

      <h2>Transactions</h2>

      <div style={{marginBottom:"10px"}}>

        <input
          type="text"
          placeholder="Search method..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

        <select
          value={filter}
          onChange={(e)=>setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="success">Success</option>
          <option value="failed">Failed</option>
        </select>

      </div>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>ID</th>
            <th>Method</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {filteredPayments.map(p => (

            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.method}</td>
              <td>₹{p.amount}</td>
              <td>{p.status}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )
}

export default TransactionTable