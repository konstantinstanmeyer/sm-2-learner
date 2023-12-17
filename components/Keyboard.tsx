export default function Keyboard(){
    return (
        <div id="keyboard" className="w-fit font-[--font-poppins] text-lg font-bold flex flex-col relative [&>div]:flex [&>div]:flex-row [&>div]:w-full [&>div]:mb-2">
            <div className=" [&>p]:w-14 [&>p]:flex [&>p]:justify-center [&>p]:items-center [&>p]:aspect-square [&>p]:ml-2">
                <p>q</p>
                <p>w</p>
                <p>e</p>
                <p>r</p>
                <p>t</p>
                <p>y</p>
                <p>u</p>
                <p>i</p>
                <p>o</p>
                <p>p</p>
            </div>
            <div className="ml-4 [&>p]:w-14 [&>p]:flex [&>p]:justify-center [&>p]:items-center [&>p]:aspect-square [&>p]:ml-2">
                <p>a</p>
                <p>s</p>
                <p>d</p>
                <p>f</p>
                <p>g</p>
                <p>h</p>
                <p>j</p>
                <p>k</p>
                <p>l</p>
            </div>
            <div className="ml-8  [&>p]:w-14 [&>p]:flex [&>p]:justify-center [&>p]:items-center [&>p]:aspect-square [&>p]:ml-2">
            <p>a</p>
                <p>z</p>
                <p>x</p>
                <p>c</p>
                <p>v</p>
                <p>b</p>
                <p>n</p>
                <p>m</p>
            </div>
        </div>
    )
}