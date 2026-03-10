import { payments } from "../data/payments"
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts"

function SuccessChart(){

 function calculateRate(method){

  const filtered = payments.filter(
    (p)=>p.method === method
  )

  const success = filtered.filter(
    (p)=>p.status === "success"
  )

  const rate = (success.length / filtered.length) * 100

  return rate.toFixed(0)
 }

 const data = [
  {name:"UPI", rate: calculateRate("UPI")},
  {name:"Card", rate: calculateRate("Card")},
  {name:"Wallet", rate: calculateRate("Wallet")}
 ]

 return(

  <div style={{marginTop:"40px"}}>

   <h3>Payment Success Rate</h3>

   <BarChart width={500} height={300} data={data}>

    <XAxis dataKey="name"/>
    <YAxis/>
    <Tooltip/>

    <Bar dataKey="rate"/>

   </BarChart>

  </div>

 )

}

export default SuccessChart