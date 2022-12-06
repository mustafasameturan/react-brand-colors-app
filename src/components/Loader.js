import React from "react"
import ContentLoader from "react-content-loader"

function Loader(){
  <ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="50" y="6" rx="3" ry="3" width="88" height="10" /> 
    <rect x="50" y="27" rx="0" ry="0" width="70" height="40" /> 
    <rect x="132" y="27" rx="0" ry="0" width="70" height="40" /> 
    <rect x="213" y="27" rx="0" ry="0" width="70" height="40" />
  </ContentLoader>
}

export default Loader

