import * as React from 'react'
import { cn } from '@/lib/utils'
import { CheckCircle, XCircle } from 'lucide-react'

export interface ToastProps {
  message: string
  type?: "success" | "error"
  show: boolean
}

export const Toast: React.FC<ToastProps> = ({ message, type = "success", show }) => {
  if (!show) return null
  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 z-50 -translate-x-1/2 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3 min-w-[250px] border text-base",
        type === "success" ? "border-green-200 text-green-800" : "border-red-200 text-red-800"
      )}
      role="alert"
      aria-live="polite"
    >
      {type === "success" ? (
        <CheckCircle className="text-green-600 w-5 h-5" aria-hidden />
      ) : (
        <XCircle className="text-red-600 w-5 h-5" aria-hidden />
      )}
      <span>{message}</span>
    </div>
  )
}