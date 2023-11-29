import { Fragment, ReactElement, useEffect, useState } from "react";
import { StartupHttpService } from '../../Http/Startup/Startup.http.service'
import { Startup } from "../../Types/Startup";
import Cards from "../Card/Cards";
import '../styles.scss';
import Pagination from '@mui/material/Pagination';

function StartupList(): ReactElement {
  const [startupList, setStartupList] = useState<Startup[] | []>([])
  const [startupDisplayList, setDisplayList] = useState<Startup[] | []>([])
  const [error, setError] = useState<String | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {

    //fetch the data using StartupHttpService
    const fetchAllStartups = async () => {
      try {
        const response = await StartupHttpService.getAllStartups()
        console.log(response)
        setStartupList(response)
        setDisplayList(response.slice(0, 20))
      }
      catch (error) {
        console.log('error', error)
        setError('Error while fetching data')
      }
    }

    fetchAllStartups()
  }, [])


  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    //pagination 
    const slicedValue = startupList.slice((value - 1) * 20, value * 20)
    console.log(slicedValue)
    setDisplayList(slicedValue)

  };


  return (
    <Fragment>
      {error && <p className="error-box">{error}</p>}
      {!error && startupList.length > 0 && <Cards list={startupDisplayList} />}
      <Pagination count={10} page={page} onChange={handleChange} />
    </Fragment>
  )

}
export default StartupList