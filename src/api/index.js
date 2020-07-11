import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {

    let urlVariate = url

    if (country) {
        urlVariate = `${url}/countries/${country}`
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios({
            "method": "GET",
            "url": `${urlVariate}`,
        })

        return { confirmed, recovered, deaths, lastUpdate }
    } catch (error) {
        console.log('error ocurred', error)
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios({
            "method": "GET",
            "url": `${url}/daily`,

        })


        const modifiedData = data.map((value, index, array) =>
            ({
                confirmed: value.confirmed.total,
                deaths: value.deaths.total,
                date: value.reportDate,
            })
        )
        // console.log('arraydata = ', data)
        return modifiedData
    } catch (error) {
        console.log(error)
    }
}


export const Countries = async () => {
    try {
        const { data: { countries } } = await axios({
            "method": "GET",
            "url": `${url}/countries`,
        })
        return countries.map((country) => country.name)
    } catch (error) {
        console.log(error)
    }
}


// export default fetchData