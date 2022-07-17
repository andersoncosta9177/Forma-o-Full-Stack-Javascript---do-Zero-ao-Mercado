


const Content = ({ children,titulo }) => {
    return (
        <article>
            <h2>{titulo}</h2>
            {children}
        </article>
    )
}

export default Content