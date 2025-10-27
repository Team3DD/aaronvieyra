"use client"

import type React from "react"

interface GlassButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export default function GlassButton({ children, onClick, className = "" }: GlassButtonProps) {
  return (
    <button className={`uiverse ${className}`} onClick={onClick}>
      <div className="wrapper">
        <span>{children}</span>
        <div className="circle circle-12"></div>
        <div className="circle circle-11"></div>
        <div className="circle circle-10"></div>
        <div className="circle circle-9"></div>
        <div className="circle circle-8"></div>
        <div className="circle circle-7"></div>
        <div className="circle circle-6"></div>
        <div className="circle circle-5"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-1"></div>
      </div>
    </button>
  )
}
