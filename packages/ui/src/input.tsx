import { type InputHTMLAttributes, forwardRef } from "react"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  fullWidth?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = false, className = "", ...props }, ref) => {
    const inputStyles =
      "px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
    const errorStyles = error ? "border-red-500 focus:ring-red-500" : ""
    const widthClass = fullWidth ? "w-full" : ""

    const inputClasses = `${inputStyles} ${errorStyles} ${widthClass} ${className}`

    return (
      <div className={fullWidth ? "w-full" : ""}>
        {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
        <input ref={ref} className={inputClasses} {...props} />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    )
  },
)

Input.displayName = "Input"
