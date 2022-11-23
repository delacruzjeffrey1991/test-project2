import { Container, Row, Col } from 'react-bootstrap'

import global from '../../../global.module.scss'


import inst1Img from '../../../assets/images/inst1.png'
import inst2Img from '../../../assets/images/inst2.png'
import inst3Img from '../../../assets/images/inst3.png'
import inst4Img from '../../../assets/images/inst4.png'
import inst5Img from '../../../assets/images/inst5.png'

import Heading from '../../../components/common/Heading'
import Group from '../../../components/common/Group'
import Button from '../../../components/common/Button'
import ChatSuggestion from '../../../pages/resourceGroup/chatSuggestion'

const Notification = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={9}>
                        <div className={global.pBt20}>
                            <Heading label='Activity' variant='heading3' />
                        </div>
                        <Group
                            image={inst1Img}
                            heading='Yazdan Khan Commented on your photo.'
                            subHeading='4 minutes ago'
                            action={<span className={`${global.redDot}`}></span>}
                        />
                        <Group
                            image={inst2Img}
                            heading='Hammadou Ibrahima Followed You.'
                            subHeading='2 hours ago'
                            action={
                                <div className={`${global.followBtnSq} ${global.bGray}`}>
                                    <Button
                                        label='Followed'
                                        variant='outlined'
                                        color='black'
                                    />
                                </div>
                            }
                        />
                        <Group
                            image={inst3Img}
                            heading={`Pratap Vania Like your post "Need a logo"`}
                            subHeading='4 minutes ago'
                        />
                        <Group
                            image={inst4Img}
                            heading={`Hammadou Ibrahima Followed You.`}
                            subHeading='4 minutes ago'
                        />
                        <Group
                            image={inst5Img}
                            heading={`Yazdan Khan Commented on your photo`}
                            subHeading='2 hours ago'
                            action={
                                <div className={`${global.followBtnSq} ${global.bGray}`}>
                                    <Button
                                        label='Followed'
                                        variant='outlined'
                                        color='black'
                                    />
                                </div>
                            }
                        />
                        <Group
                            image={inst1Img}
                            heading='Yazdan Khan Commented on your photo.'
                            subHeading='4 minutes ago'
                            action={<span className={`${global.redDot}`}></span>}
                        />
                        <Group
                            image={inst2Img}
                            heading='Hammadou Ibrahima Followed You.'
                            subHeading='2 hours ago'
                            action={
                                <div className={`${global.followBtnSq} ${global.bGray}`}>
                                    <Button
                                        label='Followed'
                                        variant='outlined'
                                        color='black'
                                    />
                                </div>
                            }
                        />
                        <Group
                            image={inst3Img}
                            heading={`Pratap Vania Like your post "Need a logo"`}
                            subHeading='4 minutes ago'
                        />
                        <Group
                            image={inst4Img}
                            heading={`Hammadou Ibrahima Followed You.`}
                            subHeading='4 minutes ago'
                        />
                        <Group
                            image={inst5Img}
                            heading={`Yazdan Khan Commented on your photo`}
                            subHeading='2 hours ago'
                            action={
                                <div className={global.followBtnSq}>
                                    <Button
                                        label='Follow Back'
                                        variant='filled'
                                        color='secondary'
                                    />
                                </div>
                            }
                        />
                    </Col>
                    <Col md={3}>
                        <ChatSuggestion />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Notification;