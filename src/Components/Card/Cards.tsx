import Card from '@mui/material/Card';
import { Fragment } from "react";
import './Cards.scss'

//renders the list of cards. list to be rendered is passed as props
const Cards = ({ list }: (any)) => {
        return (
            <Fragment>
                {
                    list.map((company: any) => {
                        return (
                            <Card sx={{ minWidth: 275, borderRadius: '5px', marginBottom: '2%' }} className="card-style">
                                <p className="card-heading">{company.name} <br />
                                    <span className="subtext">Founded : </span>
                                </p>
                                <p>{company.shortDescription}</p>
                            </Card>
                        )
                    })
                }
            </Fragment>
        )
    }

export default Cards;