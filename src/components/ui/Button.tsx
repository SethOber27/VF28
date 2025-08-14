import * as React from 'react'
import { cn } from '../../lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline"
  loading?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", loading, disabled, children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus-visible:ring-2 focus-visible:ring-primary-400 disabled:opacity-50 disabled:pointer-events-none"
    const variants = {
      primary: "bg-primary-500 text-white hover:bg-primary-600 shadow-lg",
      secondary: "bg-white text-primary-700 border border-primary-200 hover:bg-primary-50 shadow",
      ghost: "bg-transparent text-primary-700 hover:bg-primary-100",
      outline: "bg-transparent text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800"
    }
    return (
      <button
        ref={ref}
        className={cn(
          base,
          variants[variant],
          loading && "opacity-60 pointer-events-none",
          "px-5 py-2.5",
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="inline-block mr-2">
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
          </span>
        ) : null}
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"