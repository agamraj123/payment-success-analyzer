import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts"

function PaymentChart({ payments }) {

  const successCount = payments.filter(p => p.status === "success").length
  const failedCount = payments.filter(p => p.status === "failed").length

  const data = [
    { name: "Success", value: successCount },
    { name: "Failed", value: failedCount }
  ]

  return (

    <div>
      <h2>Payment Status Overview</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>

  )
}

export default PaymentChart