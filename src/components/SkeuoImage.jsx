export default function SkeuoImage({ width, height, image }) {
    return (
        <>
        <div 
            className="skeuo-image-wrapper"
            style={{width: `${width + (width*0.15)}px`, height: `${height + (height*0.15)}px`}}
            >
            <img
                src={image}
                alt=""
                style={{ width: `${width}px`, height: `${height}px`, borderRadius: "100%" }}
                />
        </div>
        <div 
            className="skeuo-reflection"
            style={{width: `${width + 15}px`, height: `${height + 15}px`}}
        />
        </>
    );
}
