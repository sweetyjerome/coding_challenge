import Card from '@mui/material/Card';
import { Fragment } from "react";
import './Cards.scss'
import Typography from '@mui/material/Typography';
import { Startup } from '../../Types/Startup';
import { CardProps } from '../../Types/Card';

//renders the list of cards. list to be rendered is passed as props
const Cards : React.FC<CardProps> = ({list}) =>{

    const formatDate = (dateVar : Date)=>{
        //to get only the year
        return new Date(dateVar).getFullYear()
    }
    return (
        <Fragment>
            {
               list.map((company: Startup) => {
                    return (
                        <Card key={company.id} className="card-style">
                            <Typography variant="h5" component="div">
                                {company.name}
                            </Typography>
                            <Typography className='subtext' color="##D3D3D3">
                                Founded : {formatDate(company.dateFounded) } | {company.employees} Employees | {company.totalFunding} $ | {company.currentInvestmentStage} 
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