import httpService from "./http.servise";

const todosEndpoint = "todos/"

const todosService = {
    fetch: async() => {
        const {data} = await httpService.get(todosEndpoint, {
            params: {
                _page: 1,
                _limit: 10
            }
        })
        return data
    },
    post: async(data) => {
        return await httpService.post(todosEndpoint, {
                body: data
        },
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }

            })
    }
}

export default todosService
