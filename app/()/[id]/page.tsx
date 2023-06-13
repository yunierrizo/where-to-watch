import Movie from "../../../components/Movie/Movie"

export default function MovieShow({ params }: { params: { id: string } }) {
    return <Movie id={params.id}/>;
}
