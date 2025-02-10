export default function Selectbox({ 
    className = '',
    options = [], 
    currentValue = '', 
    ...props 
}) {
    return (
        <select
            {...props}
            defaultValue={currentValue}
            className={
                'rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 block w-full ' +
                className
            }
        >
            {options.map((option,index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
}