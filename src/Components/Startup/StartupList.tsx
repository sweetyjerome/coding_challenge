import { Fragment, ReactElement, useEffect, useState } from "react";
import { StartupHttpService } from '../../Http/Startup/Startup.http.service'
import { Startup } from "../../Types/Startup";
import Cards from "../Card/Cards";
import '../styles.scss';

function StartupList(): ReactElement {
  const [startupList, setStartupList] = useState<Startup[] | []>([])
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {

    //fetch the data using StartupHttpService
    const fetchAllStartups = async () => {
      try {
        const response = await StartupHttpService.getAllStartups()
        setStartupList(response)
      }
      catch (error) {
        console.log('error', error)
        setError('Error while fetching data')
      }
    }

    fetchAllStartups()
  }, [])



  return (
    <Fragment>
      {error && <p className="error-box">{error}</p>}
      {!error && startupList.length > 0 && <Cards list={startupList} />}

    </Fragment>
  )

}
export default StartupList