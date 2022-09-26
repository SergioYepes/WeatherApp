import React from 'react'
import load from "./loading.module.css"

export default function Loading() {
  return (
    <div className={load.loadingCont}>
      <div className={load.loader}>
        <div></div>
      </div>
    </div>
  )
}
