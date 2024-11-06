import Image, { ImageProps } from "next/image"

const SVGWrapper: React.FC<ImageProps> = ({
  src,
  alt,
  height = 24,
  width = 24,
  className,
  ...props
}) => {
  return <Image src={src} alt={alt || 'alt image'} width={width} height={height} className={className} {...props} />
}

export default SVGWrapper;