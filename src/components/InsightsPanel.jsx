function InsightsPanel({ payments }) {

  const successCount = payments.filter(p => p.status === "success").length
  const failedCount = payments.filter(p => p.status === "failed").length

  const successRate = ((successCount / payments.length) * 100).toFixed(1)

  const methodCounts = {}

  payments.forEach(p => {
    methodCounts[p.method] = (methodCounts[p.method] || 0) + 1
  })

  let mostUsedMethod = Object.keys(methodCounts).reduce((a,b)=>
    methodCounts[a] > methodCounts[b] ? a : b
  )

  let alertMessage = ""

  if(successRate < 60){
    alertMessage = "⚠ High payment failure rate detected."
  }
  else if(successRate < 80){
    alertMessage = "⚠ Moderate success rate. Monitor transactions."
  }
  else{
    alertMessage = "✅ Payment system performing well."
  }

  return(

    <div style={{
      marginTop:"40px",
      padding:"20px",
      border:"1px solid #ddd",
      borderRadius:"10px",
      background:"#1e293b",
      color:"white"
    }}>

      <h3>Smart Payment Insights</h3>

      <p>{alertMessage}</p>

      <p>Most used method: <b>{mostUsedMethod}</b></p>

      <p>Success Rate: <b>{successRate}%</b></p>

      <h4>Success Rate</h4>

      <div style={{
        background:"#444",
        height:"20px",
        borderRadius:"10px",
        overflow:"hidden"
      }}>

        <div style={{
          width:`${successRate}%`,
          background:"green",
          height:"100%"
        }}></div>

      </div>

    </div>

  )

}

export default InsightsPanel