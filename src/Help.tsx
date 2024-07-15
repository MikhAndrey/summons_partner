import HelpItem, { HelpProps } from "./HelpItem";
import { motion } from "framer-motion";

function Help() {
    const HelpItemsData : HelpProps[] = [
        {
            id: 1, 
            header: 'Do I need to purchase the app again on the Apple App Store if I bought it on Google Play?',
            details: `If you originally purchased the app on Google Play, it’s important to note that the Apple App 
            Store and Google Play are entirely separate platforms. This means that, unfortunately, you will need to make 
            a separate purchase if you wish to use the app on an iOS device via the Apple App Store, and vice versa. 
            Cross-platform payments or shared purchases are not supported by Apple or Google.`
        },
        {
            id: 2, 
            header: 'What is the cost of your application?',
            details: `We provide two choices for our application. You can opt for a yearly subscription priced at $9.99, 
            which grants access to all features. Alternatively, there is a one-time payment of $49.99, which unlocks 
            both the current and any future features permanently.`
        },
        {
            id: 3, 
            header: 'Is there a free trial version available?',
            details: `Yes, you can enjoy a free 30-day trial when you subscribe. You can cancel anytime if you're not 
            satisfied with our app.`
        },
        {
            id: 4, 
            header: 'What features does your app offer?',
            details: `Our app is an all-in-one solution for your patrol needs. It includes features like reference 
            guide to Summonses, Precinct Maps, TPO guide, RDO Calendar, Overtime Calculator, and the complete Penal Law. 
            We're continually working to add even more valuable features.`
        },
        {
            id: 5, 
            header: 'I have an idea or a problem. How can I get in touch with someone to discuss it?',
            details: `We're committed to providing you with a seamless experience. We thrive on your valuable input and 
            are eager to hear your suggestions. Don't hesitate to connect with us right from the app settings, or drop 
            us an email at summonspartner@gmail.com. Your feedback helps us keep the app at its best!`
        },
        {
            id: 6, 
            header: 'When will I be charged for my subscription?',
            details: `You will be charged at the end the trial, unless you cancel your subscription.`
        },
        {
            id: 7, 
            header: 'How do I cancel my subscription?',
            details: 'Cancel at any time from the Settings tab and then the Manage Subscription section.' 
        },
        {
            id: 8, 
            header: 'Will my subscription renew automatically?',
            details: `Yes, subscriptions automatically renews unless cancelled.`
        },
        {
            id: 9,
            header: 'Are the new features available for all devices?',
            details: `Due to a higher level of interest and demand on the iOS platform, it often receives priority for 
            updates and new features. However, we still aim to support and improve the Android experience. Please note 
            that while we aim to bring updates to Android devices, it may take some time for these updates to become 
            available.`
        },
        {
            id: 10,
            header: 'Can I get a refund?',
            details: `Since payments are handled by Apple, all refunds are also handled by them. You need to contact 
            Apple's support within 14 days of your purchase.`
        },
    ];

    return (
        <div className="App-help" id="help">
            <motion.div className="App-help-header header-text color-dark-blue"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
            >
                How we can help you?
            </motion.div>
            <div className="App-help-view">
                { HelpItemsData.map(el => 
                    <HelpItem key={ el.id } 
                        id={ el.id } 
                        header={ el.header } 
                        details={ el.details }
                    />
                ) }
            </div>
        </div>
    )
}

export default Help;