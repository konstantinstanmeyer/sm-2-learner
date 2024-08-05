interface Props {
    description: string;
    id: string;
}

export default function PreviewCard({ description, id }: Props){
    return (
        <div className="w-20 bg-black min-h-[5rem] mb-2">
            <p className="text-white">{description}</p>
        </div>
    )
}