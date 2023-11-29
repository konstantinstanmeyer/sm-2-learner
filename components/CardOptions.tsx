export default function CardOptions(){
    return (
        <div className="flex absolute flex-row h-fit items-center [&>button]:justify-center [&>button]:min-h-[3rem] [&>button]:flex [&>button]:flex-col [&>button]:items-center [&>button]:bg-gray-300 [&>button]:mx-1 [&>button]:px-2 [&>button]:rounded-sm [&>button]:py-1 bottom-2">
            <button className="">
                <p>1</p>
                <p className="text-xs inline-block">(no clue)</p>
            </button>
            <button>2</button>
            <button>3 <span className="text-xs">(familiar)</span></button>
            <button>4</button>
            <button>5 <span className="text-xs">(confident)</span></button>
        </div>
    )
}