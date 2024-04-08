interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Share = ({ size = 24, onClick, className = '' }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
      className={`${onClick ? 'cursor-pointer ' : ''}${className}`}
    >
      <path d="M12 2.58594L18.2071 8.79304L16.7929 10.2072L13 6.41436V16.0001H11V6.41436L7.20711 10.2072L5.79289 8.79304L12 2.58594ZM3 18.0001V14.0001H5V18.0001C5 18.5524 5.44772 19.0001 6 19.0001H18C18.5523 19.0001 19 18.5524 19 18.0001V14.0001H21V18.0001C21 19.657 19.6569 21.0001 18 21.0001H6C4.34315 21.0001 3 19.657 3 18.0001Z" fill="currentColor" />
    </svg>
  )
}
