import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import '../Css/AppContainer.css';
import facebookIcon from '../Images/icon-facebook.svg';
import twitterIcon from '../Images/icon-twitter.svg';
import instaIcon from '../Images/icon-instagram.svg';
import youtubeIcon from '../Images/icon-youtube.svg';
import upIcon from '../Images/icon-up.svg';
import downIcon from '../Images/icon-down.svg';

class FollowerCountColumns extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={12} sm={6} md={3}>
                            <div className={'followerCounter facebookFollowerColumn'}>
                                <p className={'accountName'}><img src={facebookIcon}/> @natgeo</p>
                                <h1> 1987 </h1>
                                <p className={'followerCounterSubheading'}> Followers</p>
                                <p className={'followerUpdate increase'}><img src={upIcon}/> 12 Today</p>
                            </div>

                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <div className={'followerCounter twitterFollowerColumn'}>
                                <p className={'accountName'}><img src={twitterIcon}/> @natgeo</p>
                                <h1> 1987 </h1>
                                <p className={'followerCounterSubheading'}> Followers</p>
                                <p className={'followerUpdate increase'}><img src={upIcon}/> 99 Today</p>
                            </div>


                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <div className={'followerCounter instagramFollowerColumn'}>
                                <p className={'accountName'}><img src={youtubeIcon}/> @natgeo</p>
                                <h1> 11k </h1>
                                <p className={'followerCounterSubheading'}> Followers </p>
                                <p className={'followerUpdate increase'}><img src={upIcon}/> 1099 Today</p>


                            </div>


                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <div className={'followerCounter youtubeFollowerColumn'}>
                                <p className={'accountName'}><img src={instaIcon}/> @natgeo</p>
                                <h1> 8239 </h1>
                                <p className={'followerCounterSubheading'}> Subscribers </p>
                                <p className={'followerUpdate decrease'}><img src={downIcon}/> 12 Today</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

FollowerCountColumns.propTypes = {};

export default FollowerCountColumns;
