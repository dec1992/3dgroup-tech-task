interface ILoadingScreenProps {
    text: string;
    loading: boolean
}

const LoadingScreen: React.FC<ILoadingScreenProps> = ({ text, loading }) => {
    return <div className="container is-flex is-flex-direction-column is-align-items-center m-4">
        <h3 className="title">{text}</h3>
        {loading && <progress className="progress is-large is-info" max="100" />}
    </div>

}

export default LoadingScreen