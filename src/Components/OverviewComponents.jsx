import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import facebookIcon from "../Images/icon-facebook.svg";
import upIcon from "../Images/icon-up.svg";
import twitterIcon from "../Images/icon-twitter.svg";
import youtubeIcon from "../Images/icon-youtube.svg";
import instaIcon from "../Images/icon-instagram.svg";
import downIcon from "../Images/icon-down.svg";
import '../Css/AppContainer.css'

class OverviewComponents extends Component {
    render() {
        return (
            <div>
                <Container className={'overViewContentContainer'  + ` ${this.props.theme}`}>
                    <h1 className={'overViewHeader'  + ` ${this.props.theme}`}> Overview - Today </h1>
                    <Row>

                        <Col xs={12} sm={12} md={3}>
                            <div className={'overViewCell'  + ` ${this.props.theme}`}>
                                <Row className={'overViewCellContent'  + ` ${this.props.theme}`}>
                                    <Col className={'overViewCellLeft'  + ` ${this.props.theme}`} xs={6}>
                                        <p> Page Views </p>
                                        <h1> 87 </h1>
                                    </Col>
                                    <Col className={'overViewCellRight'  + ` ${this.props.theme}`} xs={6}>
                                        <div>
                                            <img src={facebookIcon} alt={'FacebookIcon'}/>
                                        </div>
                                        <p className={'statistic decrease'  + ` ${this.props.theme}`}><img src={downIcon} alt={'downIcon'}/> 3% </p>
                                    </Col>
                                </Row>
                            </div>

                        </Col>
                        <Col xs={12} sm={12} md={3}>
                            <div className={'overViewCell'  + ` ${this.props.theme}`}>
                                <Row className={'overViewCellContent'  + ` ${this.props.theme}`}>
                                    <Col className={'overViewCellLeft'  + ` ${this.props.theme}`} xs={6}>
                                        <p> Likes </p>
                                        <h1> 52 </h1>
                                    </Col>
                                    <Col className={'overViewCellRight'  + ` ${this.props.theme}`} xs={6}>
                                        <div>
                                            <img src={facebookIcon} alt={'FacebookIcon'}/>
                                        </div>
                                        <p className={'statistic decrease'  + ` ${this.props.theme}`}><img src={downIcon} alt={'downIcon'}/> 2% </p>
                                    </Col>
                                </Row>
                            </div>


                        </Col>
                        <Col xs={12} sm={12} md={3}>
                            <div className={'overViewCell'  + ` ${this.props.theme}`}>
                                <Row className={'overViewCellContent'  + ` ${this.props.theme}`}>
                                    <Col className={'overViewCellLeft'  + ` ${this.props.theme}`} xs={6}>
                                        <p> Likes </p>
                                        <h1> 5462 </h1>
                                    </Col>
                                    <Col className={'overViewCellRight'  + ` ${this.props.theme}`} xs={6}>
                                        <div>
                                            <img src={instaIcon} alt={'instaIcon'}/>
                                        </div>
                                        <p className={'statistic increase'  + ` ${this.props.theme}`}><img src={upIcon} alt={'upIcon'}/> 2257% </p>
                                    </Col>
                                </Row>

                            </div>


                        </Col>
                        <Col xs={12} sm={12} md={3}>
                            <div className={'overViewCell'  + ` ${this.props.theme}`}>
                                <Row className={'overViewCellContent'  + ` ${this.props.theme}`}>
                                    <Col className={'overViewCellLeft'  + ` ${this.props.theme}`} xs={6}>
                                        <p> Profile Views </p>
                                        <h1> 52K </h1>
                                    </Col>
                                    <Col className={'overViewCellRight'  + ` ${this.props.theme}`} xs={6}>
                                        <div>
                                            <img src={instaIcon} alt={'instaIcon'}/>
                                        </div>
                                        <p className={'statistic increase'  + ` ${this.props.theme}`}><img src={upIcon} alt={'FacebookIcon'}/> 1375% </p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={12} md={3}>
                            <div className={'overViewCell'  + ` ${this.props.theme}`}>
                                <Row className={'overViewCellContent'  + ` ${this.props.theme}`}>
                                    <Col className={'overViewCellLeft'  + ` ${this.props.theme}`} xs={6}>
                                        <p> Retweets </p>
                                        <h1> 117 </h1>
                                    </Col>
                                    <Col className={'overViewCellRight'  + ` ${this.props.theme}`} xs={6}>
                                        <div>
                                            <img src={twitterIcon} alt={'twitterIcon'}/>
                                        </div>
                                        <p className={'statistic increase'  + ` ${this.props.theme}`}><img src={upIcon} alt={'upIcon'}/> 303% </p>
                                    </Col>
                                </Row>
                            </div>

                        </Col>
                        <Col xs={12} sm={12} md={3}>
                            <div className={'overViewCell'  + ` ${this.props.theme}`}>
                                <Row className={'overViewCellContent'  + ` ${this.props.theme}`}>
                                    <Col className={'overViewCellLeft'  + ` ${this.props.theme}`} xs={6}>
                                        <p> Likes </p>
                                        <h1> 507 </h1>
                                    </Col>
                                    <Col className={'overViewCellRight'  + ` ${this.props.theme}`} xs={6}>
                                        <div>
                                            <img src={twitterIcon} alt={'twitterIcon'}/>
                                        </div>
                                        <p className={'statistic increase'  + ` ${this.props.theme}`}><img src={upIcon} alt={'upIcon'}/> 553% </p>
                                    </Col>
                                </Row>
                            </div>


                        </Col>
                        <Col xs={12} sm={12} md={3}>
                            <div className={'overViewCell '  + ` ${this.props.theme}`}>
                                <Row className={'overViewCellContent'  + ` ${this.props.theme}`}>
                                    <Col className={'overViewCellLeft'  + ` ${this.props.theme}`} xs={6}>
                                        <p> Likes </p>
                                        <h1> 107 </h1>
                                    </Col>
                                    <Col className={'overViewCellRight'  + ` ${this.props.theme}`} xs={6}>
                                        <div>
                                            <img src={youtubeIcon} alt={'youtubeIcon'} alt={'youtubeIcon'}/>
                                        </div>
                                        <p className={'statistic decrease'  + ` ${this.props.theme}`}><img src={downIcon} alt={'downIcon'}/> 19% </p>
                                    </Col>
                                </Row>

                            </div>


                        </Col>
                        <Col xs={12} sm={12} md={3}>
                            <div className={'overViewCell'  + ` ${this.props.theme}`}>
                                <Row className={'overViewCellContent'  + ` ${this.props.theme}`}>
                                    <Col className={'overViewCellLeft'  + ` ${this.props.theme}`} xs={6}>
                                        <p> Total Views </p>
                                        <h1> 1407 </h1>
                                    </Col>
                                    <Col className={'overViewCellRight'  + ` ${this.props.theme}`} xs={6}>
                                        <div>
                                            <img src={youtubeIcon} alt={'youtubeIcon'}/>
                                        </div>
                                        <p className={'statistic decrease'  + ` ${this.props.theme}`}><img src={downIcon} alt={'downIcon'}/> 12% </p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className={'disclaimer'  + ` ${this.props.theme}`}>
                    <p> *Test Data being used</p>
                </div>

            </div>
        );
    }
}

OverviewComponents.propTypes = {};

export default OverviewComponents;
