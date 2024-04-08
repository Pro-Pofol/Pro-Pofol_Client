interface PropsType {
    size?: number
    onClick?: () => void
    className?: string
}

export const Kakaotalk = ({ size = 24, onClick, className = '' }: PropsType) => {
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
            <path d="M12.0009 3.00012C17.7999 3.00012 22.501 6.66457 22.501 11.1848C22.501 15.7051 17.7999 19.3695 12.0009 19.3695C11.4127 19.3695 10.8361 19.3311 10.2742 19.2587L5.86611 22.142C5.36471 22.4074 5.18769 22.3779 5.39411 21.729L6.28571 18.0514C3.40572 16.592 1.50098 14.062 1.50098 11.1848C1.50098 6.66457 6.20194 3.00012 12.0009 3.00012ZM17.908 11.0592L19.3783 9.63629C19.5656 9.45497 19.5705 9.15629 19.3893 8.96894C19.2081 8.78184 18.9094 8.7768 18.7219 8.958L16.7937 10.824V9.28238C16.7937 9.02184 16.5825 8.8105 16.3218 8.8105C16.0613 8.8105 15.8499 9.02184 15.8499 9.28238V11.8394C15.8321 11.9124 15.8325 11.988 15.8499 12.0612V13.5001C15.8499 13.7607 16.0613 13.972 16.3218 13.972C16.5825 13.972 16.7937 13.7607 16.7937 13.5001V12.1374L17.2213 11.7237L18.6491 13.7566C18.741 13.8874 18.8873 13.9574 19.0357 13.9574C19.1295 13.9574 19.2241 13.9294 19.3066 13.8715C19.5199 13.7218 19.5713 13.4274 19.4215 13.2141L17.908 11.0592ZM14.9503 12.984H13.4904V9.29714C13.4904 9.0366 13.2791 8.82526 13.0184 8.82526C12.7579 8.82526 12.5467 9.0366 12.5467 9.29714V13.4558C12.5467 13.7165 12.7579 13.9277 13.0184 13.9277H14.9503C15.211 13.9277 15.4222 13.7165 15.4222 13.4558C15.4222 13.1953 15.211 12.984 14.9503 12.984ZM9.09318 11.8926L9.78919 10.185L10.4265 11.8926H9.09318ZM11.6159 12.3803C11.6161 12.3749 11.6175 12.37 11.6175 12.3646C11.6175 12.2406 11.5687 12.1288 11.4906 12.0446L10.4452 9.24388C10.3468 8.96402 10.1005 8.77827 9.81761 8.7704C9.53948 8.76289 9.28066 8.93684 9.16453 9.21681L7.50348 13.2925C7.40519 13.5338 7.52107 13.8093 7.76242 13.9077C8.00378 14.0061 8.2792 13.8901 8.37749 13.6487L8.70852 12.8365H10.7787L11.077 13.6357C11.1479 13.8255 11.3278 13.9427 11.5193 13.9426C11.5741 13.9426 11.6298 13.933 11.6842 13.9127C11.9284 13.8217 12.0524 13.5498 11.9612 13.3055L11.6159 12.3803ZM8.29446 9.30206C8.29446 9.04152 8.08312 8.83018 7.82258 8.83018H4.57822C4.31755 8.83018 4.10622 9.04152 4.10622 9.30206C4.10622 9.56261 4.31755 9.77394 4.57822 9.77394H5.73824V13.51C5.73824 13.7706 5.94957 13.9818 6.21012 13.9818C6.47078 13.9818 6.68212 13.7706 6.68212 13.51V9.77394H7.82258C8.08312 9.77394 8.29446 9.56261 8.29446 9.30206Z" fill="currentColor" />
        </svg>
    )
}
