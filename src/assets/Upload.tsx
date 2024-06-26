interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Upload = ({ size = 24, onClick, className = '' }: PropsType) => {
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
      <path d="M1 14.5001C1 12.1717 2.22429 10.1292 4.06426 8.98132C4.56469 5.04412 7.92686 2.00012 12 2.00012C16.0731 2.00012 19.4353 5.04412 19.9357 8.98132C21.7757 10.1292 23 12.1717 23 14.5001C23 17.9217 20.3562 20.7258 17 20.9812L7 21.0001C3.64378 20.7258 1 17.9217 1 14.5001ZM16.8483 18.9869C19.1817 18.8094 21 16.8562 21 14.5001C21 12.9271 20.1884 11.4963 18.8771 10.6782L18.0714 10.1755L17.9517 9.2335C17.5735 6.25815 15.0288 4.00012 12 4.00012C8.97116 4.00012 6.42647 6.25815 6.0483 9.2335L5.92856 10.1755L5.12288 10.6782C3.81156 11.4963 3 12.9271 3 14.5001C3 16.8562 4.81833 18.8094 7.1517 18.9869L7.325 19.0001H16.675L16.8483 18.9869ZM13 13.0001V17.0001H11V13.0001H8L12 8.00012L16 13.0001H13Z" fill="currentColor" />
    </svg>
  )
}
