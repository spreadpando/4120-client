import React, { useState } from 'react'
import styled from 'styled-components'
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default function Checkout() {
    const [vis, setVis] = useState('hidden')
    const Form = styled.form`
    width:40vw;
    height:80vh;
    position:absolute;
    z-index:1000;
    right:0;
    bottom:0;
    margin: 20vw 2vw 0 0;
    text-align:right;
    visibility:${vis};
    p{
        font-family:'Ubuntu Mono', monospace;
        color:white;
    }
    label{
        color:white;
        font-family:'Ubuntu Mono', monospace;
        margin-bottom:1em;
        margin-right:1em;
    }
    input{
        background-color:rgba(1,1,1,0.3);
        color:white;
        margin-bottom:1em;
        border-radius:10px;
        padding: 2px;
        font-family:'Ubuntu Mono', monospace;

    }
    `
    document.addEventListener('sink', () => {
        setVis('visible')
    })
    document.addEventListener('keydown', (e) => {
        if (e.key === 'q') {
            setVis('hidden')
        }
    })


    const onSuccess = (payment) => {
        // 1, 2, and ... Poof! You made it, everything's fine and dandy!
        console.log("Payment successful!", payment);
        // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    }

    const onCancel = (data) => {
        // The user pressed "cancel" or closed the PayPal popup
        console.log('Payment cancelled!', data);
        // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    }

    const onError = (err) => {
        // The main Paypal script could not be loaded or something blocked the script from loading
        console.log("Error!", err);
        // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
        // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    }

    let env = 'sandbox'; // you can set this string to 'production'
    let currency = 'USD'; // you can set this string from your props or state  
    let total = 30;  // this is the total amount (based on currency) to charge
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

    const client = {
        sandbox: 'AXvVn6riyctY_4FZCkjZWoYm2yBZ146feq-IBKggKj54X17E4X7yaYd6QjioAFIXKWnwhcTKI_QQ31rq',
        production: 'AeMCxoGmMhadBxWipifxo_NUXPF7_gpN7-3iBMi1jjCbQfk5-R8kNvI-iF5pV7SwSgVx7_swLBPeT3dp',
    }
    // In order to get production's app-ID, you will have to send your app to Paypal for approval first
    // For your sandbox Client-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App" unless you have already done so):
    //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
    // Note: IGNORE the Sandbox test AppID - this is ONLY for Adaptive APIs, NOT REST APIs)
    // For production app-ID:
    //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

    // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!

    return (

        <Form>
            <p> press esc to unlink mouse</p>
            <p>press q to exit checkout</p>
            <label for='name' >name</label>
            <input name='name' type='text' />
            <br></br>
            <label for='email' >email</label>
            <input name='email' type='email' />
            <br></br>
            <label for='street' >street</label>
            <input name='street' type='text' />
            <br></br>
            <label for='city' >city</label>
            <input name='city' type='text' />
            <br></br>
            <label for='state' >two letter state code</label>
            <input name='state' type='text' />
            <br></br>
            <label for='zip' >zip code</label>
            <input name='zip' type='text' />
            <br></br>
            <input name='size' value='m' type='radio' />
            <label for='m' >M </label>
            <input name='size' value='l' type='radio' />
            <label for='l' >L </label>
            <input name='size' value='xl' type='radio' />
            <label for='xl' >XL </label>
            <input name='size' value='xxl' type='radio' />
            <label for='xxl' >XXL </label>
            <br></br>
            <label for='communique' >email subscribe</label>
            <input name='communique' type='checkbox' />
            <br></br>
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} style={{ color: 'black' }} />
        </Form>

    )
}