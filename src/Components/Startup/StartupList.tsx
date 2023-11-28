import { Fragment, ReactElement, useEffect, useState } from "react";
import { StartupHttpService } from '../../Http/Startup/Startup.http.service'
import { Startup } from "../../Types/Startup";
import Cards from "../Card/Cards";

function StartupList(): ReactElement {
  const [startupList, setStartupList] = useState<any>([])

  useEffect(() => {

    //fetch the data using StartupHttpService
    const fetchAllStartups = async () => {
      try {
        const response = await StartupHttpService.getAllStartups()
        setStartupList(response)
        const singleResponse = await StartupHttpService.getStartupById(1)
        console.log('single--', singleResponse)
      }
      catch (error) {
        console.log('error', error)
      }
    }

    fetchAllStartups()
  }, [])



  return <Fragment>
    <Cards list={startupList} />
  </Fragment>;
}
export default StartupList