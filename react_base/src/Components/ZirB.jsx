export default function ZirB({ number }) {
    const textStyle = {
        color: number === 1 ? 'blue' : 'red',
    };

    return (
        <h1 style={textStyle}>Zebrai ir Bebrai</h1>
    );
}
