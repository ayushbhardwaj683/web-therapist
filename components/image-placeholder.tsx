interface ImagePlaceholderProps {
  imageName?: string
  alt?: string
  className?: string
  rounded?: 'lg' | 'full' | 'none'
}

export default function ImagePlaceholder({
  imageName = '',
  alt = 'Image',
  className = 'w-full h-96',
  rounded = 'lg'
}: ImagePlaceholderProps) {
  const roundedClasses = {
    lg: 'rounded-lg',
    full: 'rounded-full',
    none: ''
  }

  if (imageName) {
    return (
      <img
        src={`/images/${imageName}`}
        alt={alt}
        className={`${className} object-cover ${roundedClasses[rounded]}`}
      />
    )
  }

  return (
    <div className={`${className} bg-neutral-300 flex items-center justify-center text-neutral-500 font-medium ${roundedClasses[rounded]}`}>
      Image Placeholder
    </div>
  )
}
