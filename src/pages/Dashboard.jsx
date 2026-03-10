import PaymentChart from "../components/PaymentChart"
import StatsCards from "../components/StatsCards"
import TransactionTable from "../components/TransactionTable"
import InsightsPanel from "../components/InsightsPanel"
import PaymentMethodPie from "../components/PaymentMethodPie"
import payments from "../data/payments"

function Dashboard({ darkMode }) {

  const successCount = payments.filter(p => p.status === "success").length
  const failedCount = payments.filter(p => p.status === "failed").length
  const exportCSV = () => {

  const headers = ["ID","Method","Amount","Status"]

  const rows = payments.map(p =>
    `${p.id},${p.method},${p.amount},${p.status}`
  )

  const csvContent = [headers.join(","), ...rows].join("\n")

  const blob = new Blob([csvContent], { type: "text/csv" })

  const url = URL.createObjectURL(blob)

  const a = document.createElement("a")

  a.href = url
  a.download = "payments.csv"

  a.click()

}

  const cardStyle = {
    background: darkMode ? "#1e293b" : "#ffffff",
    color: darkMode ? "white" : "black",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontSize: "18px"
  }

  return (
    <div style={{ padding: "20px" }}>

      <h1>Payment Success Analyzer</h1>
      <button
  onClick={exportCSV}
  style={{
    padding:"10px 20px",
    marginTop:"10px",
    borderRadius:"8px",
    border:"none",
    background:"#38bdf8",
    color:"white",
    cursor:"pointer"
  }}
>
Download CSV
</button>

      <StatsCards payments={payments} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginTop: "20px"
        }}
      >

        <div style={cardStyle}>
          <h3>Total Payments</h3>
          <p>{payments.length}</p>
        </div>

        <div style={cardStyle}>
          <h3>Successful</h3>
          <p>{successCount}</p>
        </div>

        <div style={cardStyle}>
          <h3>Failed</h3>
          <p>{failedCount}</p>
        </div>

      </div>

      <div style={{ marginTop: "30px" }}>
        <PaymentChart payments={payments} />
      </div>

      <div style={{ marginTop: "30px" }}>
        <PaymentMethodPie payments={payments} />
      </div>

      <div style={{ marginTop: "30px" }}>
        <InsightsPanel payments={payments} />
      </div>

      <div style={{ marginTop: "30px" }}>
        <TransactionTable payments={payments} />
      </div>

    </div>
  )
}

export default Dashboard