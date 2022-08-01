function Api() {
    const URL = "https://62057f8a161670001741bbf0.mockapi.io/";

    async function getTables() {
        const response = await fetch(`${URL}/tables`);

        if (response.ok) {
            return await response.json();
        }
        const errorMessage = new Error("cant get data");
        
        return errorMessage
    }

    return getTables();
}

export default Api;
