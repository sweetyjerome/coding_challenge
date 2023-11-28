import { Fragment, ReactElement, useEffect, useState } from "react";
import { StartupHttpService } from '../../Http/Startup/Startup.http.service'
import { Startup } from "../../Types/Startup";
import Card from '@mui/material/Card';


export default function StartupList(): ReactElement {
  const [startupList, setStartupList] = useState <Startup| null>(null)

  useEffect(() => {

    //fetch the data using StartupHttpService
    const fetchAllStartups = async ()=>{
      try {
        const response = await StartupHttpService.getAllStartups()
        console.log(' recieved', response)
        setStartupList(response)
      }
      catch (error) {
        console.log('error', error)
      }
    }

    fetchAllStartups()
  }, [])


  return <Fragment>
    <div>
      hi app
    </div>
  </Fragment>;
}
