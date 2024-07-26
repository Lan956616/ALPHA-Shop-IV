export default function Container({children}) {
  return(
    <div className="container" style={{width:'80%',margin:'0 auto',backgroundColor:'pink'}}>
      {children}
    </div>
  )
}