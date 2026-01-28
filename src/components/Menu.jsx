export default function Menu({children, row=false}) {
    return (
        <>
        <div className="skeuo-menu" style={{flexDirection: row?"row":"column"}}>
            {children}
        </div>
        </>
    )
}