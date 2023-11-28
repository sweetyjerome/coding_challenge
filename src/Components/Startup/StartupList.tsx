import { Fragment, ReactElement, useEffect, useState } from "react";
import { StartupHttpService } from '../../Http/Startup/Startup.http.service'
import { Startup } from "../../Types/Startup";
import Cards from "../Card/Cards";

function StartupList(): ReactElement {
  const [startupList, setStartupList] = useState<Startup[] | []>([])

  useEffect(() => {

    //fetch the data using StartupHttpService
    const fetchAllStartups = async () => {
      try {
        const response = await StartupHttpService.getAllStartups()
        setStartupList(response)
      }
      catch (error) {
        console.log('error', error)
      }
    }

    fetchAllStartups()
  }, [])



  return (
    <Fragment>
      { startupList.length>0 && <Cards list={startupList} /> }
    
  </Fragment>
  )

}
export default StartupList