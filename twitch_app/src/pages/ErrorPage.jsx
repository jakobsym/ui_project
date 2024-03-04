export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <h1>Oops!</h1>
            <p>Sorry, unexpected error occured.</p>
            <p>
                <i>{error.statusText} || {error.message}</i>
            </p>
        </>
    );
}