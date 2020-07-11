import React from 'react'
import { fetchData } from './api'

import { Cards, Chart, CountryPicker } from './Components'

import coronaImage from './img/coronaImage.png'
import styles from './App.module.css'

class App extends React.Component {


    state = {
        data: {},
        countryPicker: '',
    }


    handleCountryChange = async (country) => {
        //fetch data
        console.log(country)
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country })
        //setState
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        // console.log('data = ', fetchedData)
        this.setState({ data: fetchedData })
    }


    render() {

        const { data, country } = this.state
        // console.log(data.confirmed)
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="Corona Image" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App
