export default function Spinner(){
    return (
        <div className="w-screen h-screen fixed left-0 top-0 z-50">
            <img className="z-[60] invert-[10%]" src="/loading.png" />
        </div>
    )
}