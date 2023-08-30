import React, { useState } from 'react';
import styles from './Faq.module.css'; // Import the module.css file
import Navbar2 from '../Website/Components/Navbar2/navbar2';
import Footer2 from '../Website/Components/Footer2/Footer2';

function FAQ({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className={styles.faq}>
            <div className={styles.question} onClick={toggleAnswer}>
                {question}
            </div>
            {isOpen && <div className={`${styles.answer} ${styles.showAnswer}`}>{answer}</div>}
        </div>
    );
}

function Faq() {
    return (
        <>
            <Navbar2 />
            <div className={styles.app}>

                <h1>Frequently Asked Questions</h1>
                <FAQ
                    question="What is WedsIn?"
                    answer="WedsIn is a revolution in the matrimony industry. It is here to break the old approach of the matchmaking apps in India with its advanced compatibility algorithm powered by AI. It is the fastest growing matrimony app in India connecting hearts through AI technology on both IOS and Android for free. With over 500K users, a million meaningful connections, WedsIn has proven to be the bold choice for Indians amongst many traditional matchmaking apps like Bharat matrimony, Jeevansathi, and Shaadi.com. If you wish to find your bride or groom based on compatibility along with the other traditional filters, we are the safest option to vouch. We cater our services in major cities like Mumbai, Pune, Delhi, Chennai, Hyderabad, Bangalore and many more."
                />
                <FAQ
                    question="How does WedsIn work?"
                    answer="With you get up to 7-10 matches daily. We sort these recommendations as per your predicted preferences and compatibility.While picking the matches, we also consider other deep layers besides keeping the mutual likes and dislikes in mind. Once you go through a profile and like the same, you can send or accept connection requests. After getting connected, go ahead and start the conversation to see if you’ve found your soulmate."
                />
                <FAQ
                    question="What is the age group of users that we serve at WedsIn?"
                    answer="We serve users between the age group of 24 & 45."
                />
                <FAQ
                    question="How does WedsIn use AI and ML?"
                    answer="Our unique AI algorithm has studied and processed over 500K compatibility use-cases and weddings around the world. With this much data, and the personality quiz that analyses your 16 demographic and behavioural traits, it is easier to predict your preferences of age, height, salary, language, location and universally-accepted compatible grounds for people and based on their social activities. it is able to match the grounds and land you a compatible partner. (unless you are way too complex for it to understand 😊)"
                />
                <FAQ
                    question="How to create a profile on WedsIn?"
                    answer="Trust us, it will just take a minute to set up your profile. All you need to do is install WedsIn from play store or app store, and sign up using: Continue with Mobile Number: By clicking this option, you will be prompted to choose your registered mobile number on the device and once you select that and click continue, you will be asked to authenticate your number through OTP. Once received, enter the OTP and you’re done! Your number is safe with us and is not shared with anyone.Our patented One-click sign up will create your profile automatically and set your match preferences based on AI and ML predictions which are 70% accurate. Just in case you want to make changes in your partner preferences, you can edit it whenever you want!"
                />
                <FAQ
                    question="Can Users Create More than One Profile on WedsIn?"
                    answer="No. Users cannot create multiple profiles on WedsIn. A user with multiple profiles isn’t serious about finding his/her partner and might temper with the safe environment of our platform. So, we don’t encourage such behaviour. And even if an individual tries to create more than one profile, it will immediately be unverified."
                />
                <FAQ
                    question="How to change my personal details like birthdate, location, email id, mobile number etc?"
                    answer="To keep the community safe from fraud users, we do not allow users to change their personal details like birthdate, name, location, email id and mobile number. However, you can write to us at feedback@wedsIn.com with the changes and government id as a proof of identity.To edit any of your personal details:‍1. Click on the topmost left profile icon from the home screen.2. Click on the pencil icon on your display picture and voila! You can add or edit any information you wish to do."
                />
                <FAQ
                    question="What does  This person has moved on means?"
                answer="This means that the connection has deactivated or deleted their profile or has blocked you."
/>
                <FAQ
                    question="How do add/remove/edit photos?"
                    answer="After the successful Login, if you wish to do any changes to your pictures, follow the steps below:1. On the topmost left corner, you will find a profile icon. Click on it and it will redirect you to your profile.2. On your Display picture, you will see a pencil option. Click on it and it will open the options to add/edit or delete a picture from your profile."
                />
                <FAQ
                    question="What is match compatibility?"
                    answer="Match compatibility refers to the compatibility grounds you share with your match. It will include compatibility grounds based on Intimacy, Settled place, Family values, Humor, Leisure, Movies etc. Click on the icon on the right side of any recommended or received match and you can see your shared compatible aspects according to your match. You can see the parameters that are common in you two and the ones that don’t share in common. If you haven’t taken your personality quiz, we insist you to do so as it will give you the best matches."
                />
                <FAQ
                    question="What is selfie verification?"
                    answer="To prevent the misuse of the platform and security reasons, we have launched this feature of verifying profiles by asking the users to click a real-time selfie. All you need to do to verify your identity is click a selfie and upload on the system and voila! You’re done!"
                />
                <FAQ
                    question="What is a personal note?"
                    answer="A personal note is an opportunity to introduce yourself, to the person you like, by sending them a straight-from-the-heart message. A personal note doubles up your chances of making a meaningful connection. Trust in the power of honest & genuine words as a few of them in your intro message can help you find your soulmate."
                />
                <FAQ
                    question="What are recommended matches?"
                    answer="Based on your profile and activity, our AI finds the compatible grounds for you within our community of users and suggests some of them to you. Recommended matches may or may not be necessarily based on your exact filters for partner search but they fall within the compatibility grounds."
                />
                <FAQ
                    question="What are the requests received?"
                    answer="If someone from our pool of users likes your profile, s/he can send you a connect request and that request can be viewed in your requests received section. You can accept or decline the request based on your preferences."
                />
                <FAQ
                    question="What is WedsIn premium?"
                    answer="For the holistic usage of the app, users can opt to upgrade their profile and become a premium member. For this, they have to buy a membership of 3 months, 6 months, 12 months and lifetime. Below are the benefits of being a WedsIn premium member:Instant boost for 24 hoursStand out from the crowd and get 10 times more profile visibility for 24 hoursInstant matchesGet up to 50 instant exclusively matched profiles instantly and upto 2x matches every dayCrown badgeStand out to the profiles you like and increase the chances of brewing meaningful relationshipsPersonal notePut a spotlight on your profile and send an intro message to double the chances of making a connectionView received requestsEnjoy unrestricted conversations with your connections"
                />
                <FAQ
                    question="How do I know the profiles are genuine?"
                    answer="Our continuous effort and the main motive behind building WedsIn is to provide the absolute best and genuine profiles for our users. To ensure that, we have established a series of verification rounds to check the authenticity of the profiles. With the selfie verification and daily manual verifications we make sure our community is safe and secure for all the members. Also, you can report if something is not right with a profile and we immediately take action against that, no questions asked."
                />
                <FAQ
                    question="How to delete my WedsIn profile?"
                    answer="We would hate to see you go. 😢 But if you wish to delete your WedsIn profile due to some reason, you can follow below-mentioned steps.‍Step 1: On the homepage of WedsIn app, you will see a profile icon on the top-left corner. Step 2: Once you click on this, you will reach your profile page. Here, choose the ‘Settings’ option. Step 3: In the ‘Settings’ option, you will see the ‘Delete’ option under the ‘Logout’. Step 4: Click on Delete, select the reason to delete your profile, and tap on continue. Remember that you will lose all your data, connections and conversations forever once you delete your profile. We suggest you choose ‘Deactivate’ if you wish to take a break or hide your profile for some time"
                />
                <FAQ
                    question="How to deactivate my WedsIn profile?"
                    answer="To deactivate your profile for sometime, please follow the steps mentioned below. Step 1: On WedsIn app homepage, click on the profile icon. Step 2: You will reach your profile page. Here, choose the ‘Settings’ option. Step 3: Here, you'll see the ‘Deactivate’ option. Step 4: Click on it, select the reason to deactivate your profile, and tap on continue. Remember you can activate your profile anytime by simply making a log in. During this time, your profile won’t be visible to any of the matches.."
                />
                <FAQ
                    question="What are the referral benefits?"
                    answer="For every successful female member referral, get additional Rs.200 off on any premium subscription plan above Rs.1000. Refer 2/3 female members to avail Rs.400/Rs.600 off and so on. The more you refer, higher the discounts! The discounted payment link to upgrade to premium will be shared once your friend's profile is registered and it goes through Govt ID & social media verification. Simple!"
                />
                <FAQ
                    question="What happens when a user has updated fake details?"
                    answer="If someone has updated fake details on their profile and any other user reports it, our team manually checks the authenticity with a valid govt. proof and if in case the accused person is unable to provide that information, we immediately delete and permanently ban his/her profile. But at the same time, we advise all of our users to NOT believe everything that a person’s BIO says or respond to messages that share their contact number in the first chat itself as that is not something under our control."
                />
                <FAQ
                    question="How can I get a refund for WedsIn premium subscription?"
                    answer="No, you cannot get a refund once upgraded to the premium subscription and after utilising the services. As stated in our Terms of Use, any purchases made in the WedsIn app are non-refundable."
                />
            </div>
            <Footer2 />
        </>
    );
}

export default Faq;
