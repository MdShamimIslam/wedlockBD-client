const Loading = () => {
  return ( 
    <div className="flex-col gap-2 md:gap-4 w-full flex items-center justify-center">
        <div
            className="w-12 h-12 md:w-20 md:h-20 border-4 border-transparent text-blue-500 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
        >
            <div
            className="w-8 h-8 md:w-16 md:h-16 border-4 border-transparent text-pink-500 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
            />
        </div>
    </div>

  )
}

export default Loading;