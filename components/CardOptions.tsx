export default function CardOptions(){
    return (
        <div className="flex absolute flex-row items-center [&>button]:bg-gray-300 [&>button]:mx-1 [&>button]:px-2 [&>button]:rounded-sm [&>button]:py-1 bottom-2">
            <button>1 <span className="text-xs">(no clue)</span></button>
            <button>2</button>
            <button>3 <span className="text-xs">(familiar)</span></button>
            <button>4</button>
            <button>5 <span className="text-xs">(confident)</span></button>
        </div>
    )
}