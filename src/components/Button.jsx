export default function Button({children, click, svg=false}) {
    return (
        <>
        <button className="skeuo-button" onClick={click}>
            <div className="skeuo-button-content" style={{minWidth: `${svg?30:0}px`}}>
                {!svg && (
                    <p className="skeuo-button-text">
                        {children}
                    </p>
                ) || (
                    <svg className="skeuo-button-svg">
                        {children}
                    </svg>
                )}
            </div>
        </button>
        </>
    )
}