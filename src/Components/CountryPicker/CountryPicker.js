import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { Countries } from '../../api'

const CountryPicker = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await Countries())
        }
        fetchAPI()
    }, [setFetchedCountries])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect className={styles.optionText} defaultValue="" onChange={e => (handleCountryChange(e.target.value))}>
                <option value=''>Global</option>
                {fetchedCountries.map((country, index) => <option key={index} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
