import { Row, Col, Container } from 'react-bootstrap'
import Group from '../../../components/common/Group';
import Heading from '../../../components/common/Heading';
import Search from '../../../components/common/Search';
import Styles from './index.module.scss'


import inst3Img from '../../../assets/images/inst3.png'
import ChatSuggestion from './chatSuggestion';

import global from '../../../global.module.scss'
import Button from '../../../../components/common/button';




const ResourceGroup = () => {

    function SearchQa() {
        console.log('Search');
    }

    return (
        <>
            <Container className={Styles.containerMain}>
                <Row className={`${Styles.alighnBaseLine} ${Styles.spaceBetween}`}>
                    <Col sm={9}>
                        <Heading
                            label='My Resource Groups'
                            variant='heading1'
                        />
                        <div className={Styles.resourceGroupList}>
                            <Group
                                image={inst3Img}
                                heading={`Women's Group`}
                                subHeading='100+ members'
                                fontVariant='large'
                                border='borderBottom'
                                action={<span className={`${global.redDot} ${global.redDotLg}`}></span>}
                            />
                            <Group
                                image={inst3Img}
                                heading={`Disabilities`}
                                subHeading='100+ members'
                                fontVariant='large'
                                border='borderBottom'
                                action={<span className={`${global.redDot} ${global.redDotLg}`}></span>}
                            />
                        </div>
                        <Row className={Styles.spaceBetween}>
                            <Col sm={6}>
                                <Heading
                                    label='Find More Groups'
                                    variant='heading2'
                                />
                            </Col>
                            <Col sm={6}>
                                <Search
                                    placeholder='Serach  resource groups'
                                    icon={true}
                                    variant='seacrh2'
                                    buttonFunc={() => SearchQa()}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>

                                <Group
                                    image={inst3Img}
                                    heading={`African Heritage`}
                                    subHeading='100+ members'
                                    fontVariant='small'
                                    border='borderBottom'
                                    action={
                                        <div>
                                            <Button
                                                label='View'
                                                variant='transparent'
                                                color='primary'
                                                size='smallBtn'
                                            />
                                            <Button
                                                label='Join'
                                                variant='filled'
                                                color='primary'
                                                size='smallBtn'
                                            />
                                        </div>
                                    }
                                />

                                <Group
                                    image={inst3Img}
                                    heading={`Asian Pacific`}
                                    subHeading='100+ members'
                                    fontVariant='small'
                                    border='borderBottom'
                                    action={
                                        <div>
                                            <Button
                                                label='View'
                                                variant='transparent'
                                                color='primary'
                                                size='smallBtn'
                                            />
                                            <Button
                                                label='Join'
                                                variant='filled'
                                                color='primary'
                                                size='smallBtn'
                                            />
                                        </div>
                                    }
                                />

                                <Group
                                    image={inst3Img}
                                    heading={`Hispanic + Latino`}
                                    subHeading='100+ members'
                                    fontVariant='small'
                                    border='borderBottom'
                                    action={
                                        <div>
                                            <Button
                                                label='View'
                                                variant='transparent'
                                                color='primary'
                                                size='smallBtn'
                                            />
                                            <Button
                                                label='Join'
                                                variant='filled'
                                                color='primary'
                                                size='smallBtn'
                                            />
                                        </div>
                                    }
                                />

                                <Group
                                    image={inst3Img}
                                    heading={`Veterans`}
                                    subHeading='100+ members'
                                    fontVariant='small'
                                    border='borderBottom'
                                    action={
                                        <div>
                                            <Button
                                                label='View'
                                                variant='transparent'
                                                color='primary'
                                                size='smallBtn'
                                            />
                                            <Button
                                                label='Join'
                                                variant='filled'
                                                color='primary'
                                                size='smallBtn'
                                            />
                                        </div>
                                    }
                                />

                            </Col>
                        </Row>
                    </Col>
                    <Col sm={3}>
                        <Search
                            placeholder='Search Friends!'
                            icon={true}
                            variant='seacrh1'
                            buttonFunc={() => SearchQa()}
                        />
                        <ChatSuggestion />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ResourceGroup;