export const Button = ({children, className, onClick}) =>{
    return(
        <button type='button' onClick={onClick} className={`uppercase bg-[#4C7766] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#3a5d51] transition cursor-pointer justify-self-center ${className}`}>{children}</button>
    )
}