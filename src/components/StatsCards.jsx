function StatsCards({ payments }) {

  const total = payments.length

  const success = payments.filter(p => p.status === "success").length

  const failed = payments.filter(p => p.status === "failed").length

  const successRate = ((success / total) * 100).toFixed(1)

  return (

    <div style={{
      display: "flex",
      gap: "20px",
      marginBottom: "20px"
    }}>

      <div style={cardStyle}>
        <h3>Total Transactions</h3>
        <p>{total}</p>
      </div>

      <div style={cardStyle}>
        <h3>Successful Payments</h3>
        <p>{success}</p>
      </div>

      <div style={cardStyle}>
        <h3>Failed Payments</h3>
        <p>{failed}</p>
      </div>

      <div style={cardStyle}>
        <h3>Success Rate</h3>
        <p>{successRate}%</p>
      </div>

    </div>

  )
}

const cardStyle = {
  background: "#f5f5f5",
  padding: "20px",
  borderRadius: "10px",
  width: "200px",
  textAlign: "center",
  color: "black"
}

export default StatsCards