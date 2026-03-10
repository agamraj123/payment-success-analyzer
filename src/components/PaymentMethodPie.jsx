import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts"

function PaymentMethodPie({ payments }) {

  const methodCounts = {}

  payments.forEach(p => {
    methodCounts[p.method] = (methodCounts[p.method] || 0) + 1
  })

  const data = Object.keys(methodCounts).map(method => ({
    name: method,
    value: methodCounts[method]
  }))

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]

  return (

    <div>
      <h2>Payment Methods</h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >

            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}

          </Pie>

          <Tooltip />
          <Legend />

        </PieChart>
      </ResponsiveContainer>

    </div>

  )
}

export default PaymentMethodPie