import { FullDeckDto } from "@/shared/types"
import Image from "next/image"
import Link from "next/link"

type Props = {
    deck: FullDeckDto;
}

export default function Card({ deck }: Props) {

    return (
         <div className="group relative overflow-hidden rounded-lg border border-gray-200">
            <Image 
                src="https://picsum.photos/300/400"
                alt=""
                width={400}
                height={300}
                className="h-40 w-full object-cover transition-transform duration-200 group-hover:scale-105"/>
            <div className="p-4">
                <h3 className="font-semibold">{deck.name}</h3>
                <p className="text-sm text-gray-500">{deck.subject.name}</p>
            </div>
            <Link
                href={`/decks/${deck.id}`}
                className="absolute inset-0"
            />
        </div>
    )
}