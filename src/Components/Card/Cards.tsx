import Card from '@mui/material/Card';
import { Fragment } from "react";
import './Cards.scss'
import Typography from '@mui/material/Typography';
import { Startup } from '../../Types/Startup';
import { CardProps } from '../../Types/Card';

//renders the list of cards. list to be rendered is passed as props
const Cards : React.FC<CardProps> = ({list}) =>{

    return (
        <Fragment>
            {
               list.map((company: Startup) => {
                    return (
                        <Card key={company.id} className="card-style">
                            <Typography variant="h5" component="div">
                                {company.name} {company.id}
                            </Typography>
                            <Typography className='subtext'>
                                Founded : {company.dateFounded.getFullYear() } | {company.employees} Employees | {company.totalFunding} $ | {company.currentInvestmentStage} 
                            </Typography>
                            <Typography variant="body2">
                                {company.shortDescription}
                            </Typography>
                        </Card>
                    )
                })
            }
        </Fragment>
    )
}

export default Cards;