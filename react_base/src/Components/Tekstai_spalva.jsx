export default function Tekstai_spalva({ text1, text2, color }) {
    
    const textStyle = { color };
    
    return (
        <>
            <h1 style={textStyle}>{text1}</h1>
            <h2 style={textStyle}>{text2}</h2>
        </>
    )
}