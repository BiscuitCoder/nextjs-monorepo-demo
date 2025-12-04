import { type HTMLAttributes, forwardRef } from "react"

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: "none" | "sm" | "md" | "lg"
  shadow?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ padding = "md", shadow = true, className = "", children, ...props }, ref) => {
    const baseStyles = "bg-white rounded-lg border border-gray-200"

    const paddingStyles = {
      none: "",
      sm: "p-3",
      md: "p-4",
      lg: "p-6",
    }

    const shadowClass = shadow ? "shadow-sm" : ""

    const classes = `${baseStyles} ${paddingStyles[padding]} ${shadowClass} ${className}`

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    )
  },
)

Card.displayName = "Card"
