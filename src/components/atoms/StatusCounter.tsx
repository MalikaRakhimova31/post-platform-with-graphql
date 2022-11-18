interface CounterProps {
    count: number
}


export default function StatusCounter({count}: CounterProps) {
    return (
        <div className="bg-light-blue w-fit h-5 py-1 px-2 rounded-full flex justify-center items-center text-white text-xs font-medium">
            {count}
        </div>
    )
}