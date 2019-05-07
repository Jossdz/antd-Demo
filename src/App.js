import React from "react";
import { Row, Col } from "antd";
import LayoutComponent from './Layout'

function App() {
  return (
    <LayoutComponent>      
      <div>
        <Row gutter={48}>
          <Col className="gutter-row" span={6}>
            <p className='gutter-box' style={{background: 'crimson', height: '30px'}}>Col 12</p>
          </Col>
          <Col className="gutter-row" span={6} offset={12}>
            <p className='gutter-box' style={{background: 'peru', height: '30px'}}>Col 12</p>
          </Col>
        </Row>
      </div>
    </LayoutComponent>
  );
}

export default App;
