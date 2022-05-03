import React from 'react';

function Tables(props) {
    return (
        <div className='table'>
            <div className="table1">
                <h2>
                    LAST CREDITS
                </h2>
                <table className='maintable'>
                    <tr className='tableheader'>
                        <th className='left'>Date/Time</th>
                        <th>TRX</th>
                        <th className='right'>Amount</th>
                    </tr>
                    <tr className='tr'>
                        <td className='dt'>12 JAN, 2022 06:03AM</td>
                        <td>H9JKLM2345QW75</td>
                        <td className='credit'>$1,900.00</td>
                    </tr>
                    <tr className='tr'>
                        <td className='dt'>12 JAN, 2022 06:03AM</td>
                        <td>H9JKLM2345QW75</td>
                        <td className='credit'>$1,900.00</td>
                    </tr>
                    <tr className='tr'>
                        <td className='dt'>12 JAN, 2022 06:03AM</td>
                        <td>H9JKLM2345QW75</td>
                        <td className='credit'>$1,900.00</td>
                    </tr>
                    <tr className='tr'>
                        <td className='dt'>12 JAN, 2022 06:03AM</td>
                        <td>H9JKLM2345QW75</td>
                        <td className='credit'>$1,900.00</td>
                    </tr>
                    <tr className='tr'>
                        <td className='dt'>12 JAN, 2022 06:03AM</td>
                        <td>H9JKLM2345QW75</td>
                        <td className='credit'>$1,900.00</td>
                    </tr>
                    <tr className='tr'>
                        <td className='dt'>12 JAN, 2022 06:03AM</td>
                        <td>H9JKLM2345QW75</td>
                        <td className='credit'>$1,900.00</td>
                    </tr>
                </table>
            </div>
            <div className="table2">
                <h2>
                    LAST DEBITS
                </h2>
                <table className='maintable'>
                    <tr className='tableheader'>
                        <th className='left'>Date/Time</th>
                        <th>TRX</th>
                        <th className='right'>Amount</th>
                    </tr>
                    <tr className='tr'>
                        <td>12 JAN, 2022 06:03AM</td>
                        <td>H9JKLM2345QW75</td>
                        <td className='debit'>$1,900.00</td>
                    </tr>
                    <tr className='tr'>
                        <td>12 JAN, 2022 06:03AM</td>
                        <td>H9JKLM2345QW75</td>
                        <td className='debit'>$1,900.00</td>
                    </tr>
                    <tr className='tr'>
                        <td>12 JAN, 2022 06:03AM</td>
                        <td>H9JKLM2345QW75</td>
                        <td className='debit'>$1,900.00</td>
                    </tr>
                    <tr className='tr'>
                        <td>12 JAN, 2022 06:03AM</td>
                        <td>H9JKLM2345QW75</td>
                        <td className='debit'>$1,900.00</td>
                    </tr>
                    <tr className='tr'>
                        <td>12 JAN, 2022 06:03AM</td>
                        <td>H9JKLM2345QW75</td>
                        <td className='debit'>$1,900.00</td>
                    </tr>
                    <tr className='tr'>
                        <td>12 JAN, 2022 06:03AM</td>
                        <td>H9JKLM2345QW75</td>
                        <td className='debit'>$1,900.00</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Tables;