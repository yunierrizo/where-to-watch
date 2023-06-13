import NavBar from "../../components/NavBar/NavBar"

export const metadata = {
    title: "Movies",
    description: "List of Movies",
};

export default function MoviesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <NavBar/>
            {children}
        </>
    );
}
