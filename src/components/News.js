import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";

function News() {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));
    return (
        <div>
            <Accordion
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
                
            >
                <AccordionItem key="1"  aria-label="Accordion 1"  startContent={<h1 className='text-3xl  font-semibold'>
                News
            </h1>}  >
                    <ul className='border-dotted  border-2 border-gray-500 p-3     '>

                        <li className='mt-3 text-justify'><b> 6th January, 2024:</b> A new and important field is being added this coming week "Entry Type". See here for more info.</li>

                        <li className='mt-3 text-justify'><b>2nd January, 2024:</b> New permissions, only superusers or those with the "View Consulting Room" permission will be able to view the consulting room screen. In addition, clinic appointments can only be scheduled for users with this permission. Similarly, the only ACOs that can be dispatched will be those with the "Dispatch Incident" permission or superusers.</li>

                        <li className='mt-3 text-justify'><b>1st March, 2023:</b> With effect from 1st April 2023, our biennial price rise will take effect. See here for more info.</li>

                        <li className='mt-3 text-justify'><b>16th August, 2022:</b> SM now supports two-factor authentication for user accounts with the Google Authenticator app. You can enable it for your user account from the Change User Settings screen.</li>

                        <li className='mt-3 text-justify'><b>14th July, 2022:</b> We intend to stop using the wildcard DNS logins. These are the ones of the form account.sheltermanager.com. This is because wildcard DNS can be used for a number of attacks and due to the way that we set things up, they can't work over encrypted links. Please update your bookmarks to use https://sheltermanager.com/login/account instead of http://account.sheltermanager.com</li>

                        <li className='mt-3 text-justify'><b>28th May, 2021:</b> Many of our customers are reporting issues accessing our service from AT&T mobile data. Unfortunately, the issue with AT&T rather than us and we no control over or ability to fix this. If you are affected, you can work around this issue by using a VPN on your mobile device. Customers have reported success with ProtonVPN, a free and anonymous VPN service.</li>

                        <li className='mt-3 text-justify'><b>1st March, 2021:</b> With effect from 1st April 2021, our delayed biennial price rise will take effect. See here for more info.</li>

                        <li className='mt-3 text-justify'><b>28th April, 2020:</b> The default online form header has a much-improved responsive layout for mobile devices in portrait mode that allows the fields and labels to take up the full width of the screen. To get the new header, go to Edit Online Forms, then "Edit Header/Footer", delete the contents of the header box and hit save to have the system give you the new default.</li>

                        <li className='mt-3 text-justify'><b>26th April, 2020:</b> ASM can now request payments from your customers via PayPal and Stripe. For more information, see the manual.</li>

                        <li className='mt-3 text-justify'><b>15th Mar, 2020:</b> ASM now has better support for creating vouchers, with unique/non-predictable voucher codes, redemption dates and the ability to generate voucher documents from templates. Check out the new Voucher Book</li>

                        <li className='mt-3 text-justify'><b>12th Mar, 2020:</b> ASM can update adoption websites including PetFinder, AdoptAPet and PetRescue as frequently as every 2 hours. Enable it under Set Publishing Options</li>

                        <li className='mt-3 text-justify'><b>8th Nov, 2018:</b> ASM can export CSV data for shelteranimalscount.org - install the report shelteranimalscount.org monthly CSV export from Reports-&gt;Browse sheltermanager.com and run it from Settings-&gt;Export Reports as CSV</li>

                        <li className='mt-3 text-justify'><b>30th Oct, 2018:</b> A new weekly report can be sent to active fosterers every Monday with information about their foster animals and forthcoming medical treatments. Enable it under Settings-&gt;Options-&gt;Medical</li>

                        <li className='mt-3 text-justify'><b>17th Mar, 2017:</b> ASM has a new GDPR Contact Opt-In field that you can enable under Settings-&gt;Options-&gt;Data Protection. It allows communication methods to be chosen and the log is updated each time.</li>

                        <li className='mt-3 text-justify'><b>19th Nov, 2017:</b> ASM allows you to set data-retention policies to help comply with data protection legislation. See Settings-&gt;Options-&gt;Data Protection</li>

                        <li className='mt-3 text-justify'><b>25th Aug, 2017:</b> ASM now allows you to import PayPal CSV activity logs to create people and payment records! Settings-&gt;Import a PayPal CSV file.</li>

                        <li className='mt-3 text-justify'><b>23rd Aug, 2017:</b> sheltermanager integrates with Maddie's Pet Assistant, an innovative new app to assist fosterers and new adopters while providing insights to your organisation. Publishing-&gt;Set Publishing Options-&gt;Maddie's Fund</li>

                        <li className='mt-3 text-justify'><b>3rd Mar, 2017:</b> ASM now allows you to embed your adoptable animal list straight into your website without publishing and without iframes. The style of your site is inherited and the animal list is "live" and upto date at all times. See the manual for more info.</li>

                    </ul>
                </AccordionItem>
            </Accordion>
        </div >
    )
}

export default News