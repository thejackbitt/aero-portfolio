export default function Button({children, click}) {
    return (
        <>
        <button className="skeuo-button" onClick={click}>
            <div className="skeuo-button-content">
                <p className="skeuo-button-text">
                    {children}
                </p>
            </div>
        </button>
        </>
    )
}