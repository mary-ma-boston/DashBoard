import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { FiSettings} from 'react-icons/fi';
import { registerLicense } from '@syncfusion/ej2-base';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';


import { Navbar, Footer, Sidebar, ThemeSettings} from './components';
import { ECommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line } from './pages';
import { useStateContext } from './contexts/ContextProvider';

import './App.css';

registerLicense('Mgo+DSMBaFt/QHRqVVhjVFpFdEBBXHxAd1p/VWJYdVt5flBPcDwsT3RfQF9iS3xUd0FhXH5ZdHdVQw==;Mgo+DSMBPh8sVXJ0S0J+XE9HflRDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS3xSdEdkWHtcdXVSQmRfVA==;ORg4AjUWIQA/Gnt2VVhkQlFadVdJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0dhXn5acnFUQWRZVkE=;ODI1OTUzQDMyMzAyZTM0MmUzMGt0YUlJUkpuTEx5NDg1cXAwQ0NFdUJLUlZ3WUF3cjUvSGlicS9KRlRMYkk9;ODI1OTU0QDMyMzAyZTM0MmUzMGdGUkRScmVqZE1PT0RTOXVDcGRBQTBlU1E5cTQ0cnVnYVF0aTAwNmlZbGc9;NRAiBiAaIQQuGjN/V0Z+WE9EaFxKVmJLYVB3WmpQdldgdVRMZVVbQX9PIiBoS35RdERhW3hfdHZQR2dZU01z;ODI1OTU2QDMyMzAyZTM0MmUzMEtxczNxVW9XM05ka0R1NmNnWUVuM1Nqdkd6Q0ppczhTZlJkSUxXTnVIdkU9;ODI1OTU3QDMyMzAyZTM0MmUzME13aU8xa25LejlrdXR2WVlCM1BUblBpSDMzWVUvRWhIRkphQjFDbjI3ajA9;Mgo+DSMBMAY9C3t2VVhkQlFadVdJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0dhXn5acnFUQWZcUEE=;ODI1OTU5QDMyMzAyZTM0MmUzMG96L2R3NWlGcDVPVTgzdDNIZC9YM2RxVUJjeW9JZGJ5SHRSSUpzbkd3Mmc9;ODI1OTYwQDMyMzAyZTM0MmUzMGdtK3k2V0hwb2d4Wkw3RXYxa3ViY0xUZkFYb1kzeXVuNTk5bTdWWVdLSDg9;ODI1OTYxQDMyMzAyZTM0MmUzMEtxczNxVW9XM05ka0R1NmNnWUVuM1Nqdkd6Q0ppczhTZlJkSUxXTnVIdkU9');

const App = () => {
    
    const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode} = useStateContext();

    return (
        <div className={currentMode === 'Dark'? 'dark':''}>
            <BrowserRouter>
                <div className='flex relative dark:bg-main-dark-bg'>
                    <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
                        <TooltipComponent content='Settings' position='Top'>
                            <button 
                                type='button' 
                                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                                style={{ background: currentColor, borderRadius:'50%'}}
                                onClick={()=>{setThemeSettings(true)}}
                            >
                                <FiSettings />
                            </button>
                        </TooltipComponent>
                    </div>
                    { activeMenu ? (
                        <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                            <Sidebar />
                        </div>
                    ): (
                        <div className='w-0 dark:bg-secondary-dark-bg'> 
                            <Sidebar />
                        </div>
                    )   
                    }
                    <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
                    ${activeMenu?'md:ml-72':'flex-2'}`}>
                        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                            <Navbar />
                        </div>
                    
                        <div>
                            {themeSettings && <ThemeSettings />} 

                            <Routes>
                                {/* dashboard */}
                                <Route path='/' element = { <ECommerce /> } />
                                <Route path='/ecommerce' element = { <ECommerce /> }/>

                                {/* pages */}
                                <Route path='/orders' element = { <Orders />} />
                                <Route path='/employees' element = {< Employees />}/>
                                <Route path='/customers' element = {< Customers />}/>

                                {/* Apps */}
                                <Route path='/kanban' element = {< Kanban />}/>
                                <Route path='/editor' element = {< Editor />}/>
                                <Route path='/calendar' element = {< Calendar />}/>
                                <Route path='/color-picker' element = {< ColorPicker />}/>  

                                {/* Charts */}  
                                <Route path='/line' element = {< Line />}/>
                                <Route path='/area' element = {< Area />}/>
                                <Route path='/bar' element = {< Bar />}/>
                                <Route path='/pie' element = {< Pie />}/>
                                <Route path='/financial' element = {< Financial />}/>
                                <Route path='/color-mapping' element =  {< ColorMapping />}/>
                                <Route path='/pyramid' element = {< Pyramid />}/>
                                <Route path='/stacked' element = {< Stacked />}/>
                            </Routes>
                        </div>
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App