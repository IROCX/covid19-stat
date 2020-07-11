import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'


const Cards = (props) => {

    try {
        if (!props.data.confirmed.value) {
            return (
                <h3>Loading...</h3>
            )
        } else {
            return (
                <div className={styles.container}>
                    <Grid container spacing={3} justify='center'>
                        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.infected)}>
                            <CardContent>
                                <Typography color='textSecondary' gutterBottom>
                                    Infected
                        </Typography>
                                <Typography variant='h5'>
                                    <CountUp start={0} end={props.data.confirmed.value} duration={1} separator=',' />
                                </Typography>
                                <Typography color='textSecondary' gutterBottom>
                                    {new Date(props.data.lastUpdate).toDateString()}

                                </Typography>
                                <Typography variant='body2'>
                                    Active Cases
                        </Typography>
                            </CardContent>
                        </Grid>

                        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.recovered)}>
                            <CardContent>
                                <Typography color='textSecondary' gutterBottom>
                                    Recovered
                                </Typography>
                                <Typography variant='h5'>
                                    <CountUp start={0} end={props.data.recovered.value} duration={1} separator=',' />

                                </Typography>
                                <Typography color='textSecondary' gutterBottom>
                                    {new Date(props.data.lastUpdate).toDateString()}

                                </Typography>
                                <Typography variant='body2'>
                                    Recovered Cases
                        </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.deaths)}>
                            <CardContent>
                                <Typography color='textSecondary' gutterBottom>
                                    Deaths
                        </Typography>
                                <Typography variant='h5'>
                                    <CountUp start={0} end={props.data.deaths.value} duration={1} separator=',' />

                                </Typography>
                                <Typography color='textSecondary' gutterBottom>
                                    {new Date(props.data.lastUpdate).toDateString()}

                                </Typography>
                                <Typography variant='body2'>
                                    Fatal Cases
                        </Typography>
                            </CardContent>
                        </Grid>

                    </Grid>
                </div>
            )
        }

    } catch (TypeError) {
        return ("failed to load")
    }
    // 


    // }
}
export default Cards
