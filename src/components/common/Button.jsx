const Button = ({children}) => {
    return (
        <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-4 rounded-full lg:text-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
          {children}
      </button>
    )
}

export default Button;