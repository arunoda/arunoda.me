export default function Tweet({children}) {
    return (
        <div>
            {children}
            <style jsx>{`
                div {
                    margin: 50px 0;
                }
            `}</style>
        </div>
    );
}