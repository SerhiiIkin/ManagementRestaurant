class TableApi {
    static URL = "https://62057f8a161670001741bbf0.mockapi.io/tables/";

    static getList() {
        return fetch(this.URL).then((res) => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(`Can't get  list`);
        });
    }

    static update(id, table) {
        return fetch(this.URL + id, {
            method: "PUT",
            body: JSON.stringify(table),
            headers: {
                "Content-type": "application/json",
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            throw new Error(`Can't update data`);
        });
    }
}

export default TableApi;
