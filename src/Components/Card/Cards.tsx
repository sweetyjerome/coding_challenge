import Card from '@mui/material/Card';
import { Fragment } from "react";
import './Cards.scss'
import Typography from '@mui/material/Typography';

//renders the list of cards. list to be rendered is passed as props
const Cards = ({ list }: (any)) => {

    const formatDate = (dateString : string)=>{
        return new Date(dateString).getFullYear()
    }
    return (
        <Fragment>
            {
                list.map((company: any) => {
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