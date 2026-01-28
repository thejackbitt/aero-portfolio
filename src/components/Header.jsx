import SkeuoImage from "./SkeuoImage";

export default function Header() {
    return(
        <>
        <div className="header-bar">
            <div className="header-content">
                <SkeuoImage 
                    width={100}
                    height={100}
                    image="https://avatars.githubusercontent.com/u/71474581?v=4"
                />
                <div className="header-text">
                    <h1 className="skeuo-text">
                        thejackbitt
                    </h1>
                    <h2 className="skeuo-text">portfolio</h2>
                </div>
            </div>
        </div>
        </>
    )
}