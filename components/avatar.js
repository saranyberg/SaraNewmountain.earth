import Image from 'next/image'

export default function Avatar({ name, picture }) {
    return (
        <div className="flex items-center">
            <div className="w-12 h-12 mr-4">
                <Image
                    src={picture}
                    width={48}
                    height={48}
                    alt={name}
                    className="rounded-full"
                />
            </div>
            <div className="text-xl font-bold">{name}</div>
        </div>
    )
}
