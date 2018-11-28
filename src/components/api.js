export default async (user) => {
    return new Promise((resolve, reject) => {
        fetch(`https://scrapp-slide.herokuapp.com/api/scrap/find/${user}`).then(async (response) => {
            if (!response.ok) {
                const res = await response.json()
                throw Error(JSON.stringify(res.error))
            }
            return response
        })
            .then(response => resolve(response.json()))
            .catch(error => reject(JSON.parse(error.message)))
    })
}

