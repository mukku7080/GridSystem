import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'

const ReactBS = () => {
    const [show, setShow] = useState(true);

    if (show) {

        return (
            <>
                <Alert variant='danger' onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>This is My alert</Alert.Heading>
                    <p>Hey this is my First Alert I am learning react technology for my better future I think The God Give me Ashirvad To successess in my aim</p>
                    <Alert.Link>Click here to Show the Warning</Alert.Link>
                </Alert>
            </>
        );
    }
    // return (
    //     <>
    //     {


    //          
    //     }

    //     </>
    // )
}

export default ReactBS


{/* <>
{
    if(alert){

        
    }
}
    
    {/* <Button href='https://www.google.com' variant='danger' size='sm' >Submit</Button>
    <Button variant='warning' size='sm' >Update</Button>
    <Button variant='primary' size='sm' >Edit</Button> */}
