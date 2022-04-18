import Head from 'next/head'
import { Typography, Row, Breadcrumb } from 'antd';

const { Title, Text } = Typography;

function TermsAndConditions() {
    return (
        <main>
            <Head>
                <title>Terms and Conditions</title>
            </Head>
            <div className='py-3' >
                <Row className='p-3 bg-white rounded'>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Terms and Conditions</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <div className='bg-white mt-3 p-3' >
                    <Title>Terms and Conditions</Title>
                    <Title level={2}>INTRODUCTION</Title>
                    <Text>
                        Nystore.pk is delighted to welcome you (the website). You are agreeing to the terms and conditions of this website by accessing and using it. You must not use this website for any reason if you do not agree to all of the terms and conditions. The website's terms and conditions apply to all items in all of the categories that are available on the site.
                        Any reference to this website, or any other website to which a link is provided on this website, is subject to the terms and restrictions set above.
                        NY Store maintains the right to amend, modify, add to, or subtract from the terms and conditions in whole or in part. Once the changes are implemented, they will take effect.
                    </Text>
                    <Title level={2}>USE OF THIS SITE</Title>
                    <Text>
                        The use of the website for commercial purposes or as a third party on behalf of a user is not permitted unless we have been informed in advance and the user has given his or her consent. Any violation of these terms and conditions will result in the order being revoked as well as other possible consequences.
                        In terms of conditions, the information placed on the internet is subjective to the individual posting it. Any comments made by customers are in no way representative of Idealancy's opinions.
                        You will already be registered when you make a purchase on our website. You are responsible for providing accurate information on the checkout page.
                    </Text>
                    <Title level={2}>USER SUBMISSIONS</Title>
                    <Text>
                        Everything you send us or submit on the Site, including but not limited to reviews, comments, suggestions, and questions (collectively referred to as "Submissions"), shall become our sole property. All Submissions are non-refundable, and we will not consider your claim to them. The Site reserves the right, but not the obligation, to amend, edit, delete, or modify any Submissions. You must supply us with your correct name, address, email address, and other information. Furthermore, by submitting your work, you grant us permission to use the name/username you gave. You promise that you will not, under any circumstances, seek to deceive us by providing false information or posing as someone else.
                    </Text>
                    <Title level={2}>PRICING</Title>
                    <Text>
                        You should be aware that the Site may not be able to process your order in some cases for a variety of reasons. As a result, the Site reserves the right, at any time and for any reason, to cancel or refuse any order. Furthermore, the approval of your order is contingent on the verification of your personal information. You may be requested to give extra information to verify your identity before your order is accepted, such as your phone number and address.
                        Although this Site uses all available resources to give accurate and authentic information about product prices, we cannot rule out the possibility of pricing information inaccuracies. We retain the right to cancel orders if the price of a product is incorrectly posted on the Site.
                    </Text>
                </div>
            </div>
        </main>
    )
}
export default TermsAndConditions