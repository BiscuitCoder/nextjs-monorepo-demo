import { type HTMLAttributes, forwardRef } from "react"

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "error" | "info"
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "default", className = "", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"

    const variantStyles = {
      default: "bg-gray-100 text-gray-800",
      success: "bg-green-100 text-green-800",
      warning: "bg-yellow-100 text-yellow-800",
      error: "bg-red-100 text-red-800",
      info: "bg-blue-100 text-blue-800",
    }

    const classes = `${baseStyles} ${variantStyles[variant]} ${className}`

    return (
      <span ref={ref} className={classes} {...props}>
        {children}
      </span>
    )
  },
)

Badge.displayName = "Badge"
