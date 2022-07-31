class Api {
    static URL = "https://62057f8a161670001741bbf0.mockapi.io/";

    static getTables() {
        async function load() {
            const response = await fetch(`${Api.URL}/tables`);

            return await response.json();
        }
        return load();
    }
}

export default Api;
