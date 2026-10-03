import Image from "next/image"
import type { ReactNode } from "react"

interface AssociationCardProps {
  name: string
  description: string
  logoSrc: string
  links: {
    icon: ReactNode
    url: string
  }[]
}

export default function AssociationCard({ name, description, logoSrc, links }: AssociationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden bg-[#7f1623]/10 flex items-center justify-center">
            <Image
              src={logoSrc || "/placeholder.svg"}
              alt={`Logo ${name}`}
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-[#7f1623]">{name}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        {links.length > 0 && (
          <div className="flex gap-3 mt-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#7f1623] transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
