import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div className="main-loader">
  <div className="lds-spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <p className="loader-text">Loading, please wait...</p>
</div>

  )
}

export default Loader