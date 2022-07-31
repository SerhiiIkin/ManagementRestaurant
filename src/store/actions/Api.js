class Api {
    static URL = "http://localhost:4200";

    static getTables() {
        async function load() {
            const response = await fetch(`${Api.URL}/tables`);

            return await response.json();
        }
        return load();
    }

    static getMenu() {
        async function load() {
            const response = await fetch(`${Api.URL}/menu`);
            const json = await response.json();
            return json;
        }
        return load();
    }

    
    static getWaiters() {
        async function load() {
            const response = await fetch(`${Api.URL}/waiters`);
            const json = await response.json();
            return json;
        }
        return load();
    }

    // static delRow(id) {
    //     async function delRow() {
    //         await fetch(`${Api.URL}/tables/${id}`, {method:"DELETE"});
    //     }
    //     return delRow();
    // }

    // static update(id, table) {
    //     return fetch(this.URL + id, {
    //         method: "PUT",
    //         body: JSON.stringify(table),
    //         headers: {
    //             "Content-type": "application/json",
    //         },
    //     }).then((res) => {
    //         if (res.ok) {
    //             return res.json();
    //         }

    //         throw new Error(`Can't update data`);
    //     });
    // }
}

export default Api;
