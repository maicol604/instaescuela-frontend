import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import Card from '../../../Components/Card';

const OverviewWrapper = styled.div`

`;

const Overview = () => {
    return (
        <OverviewWrapper>
        <Row
            gutter={[10, 10]}
        >
            <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 6 }}>
                <Card
                >
                </Card>
            </Col>
            <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 6 }}>
                <Card
                >
                </Card>
            </Col>
            <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 6 }}>
                <Card
                >
                </Card>
            </Col>
            <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 6 }}>
                <Card
                >
                </Card>
            </Col>
            <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 12}}>
                <Card
                >
                </Card>
            </Col>
            <Col xs={{ span: 24 }} md={{span: 12}} lg={{ span: 12}}>
                <Card
                >
                </Card>
            </Col>
        </Row>
        </OverviewWrapper>
    )
}

export default Overview;