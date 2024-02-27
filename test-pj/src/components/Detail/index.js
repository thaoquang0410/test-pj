import { Row, Col, Input, Collapse } from 'antd'
import AddProduct from '../Product/AddProduct'
import { useState } from 'react'
export default function Detail ({ type }) {
    const [product, setProduct] = useState([])
    const callbackAddProduct = (childAddProduct) => {
      setProduct(childAddProduct)
    }
    return (
      <div style={{ margin: '20px'}}>
        <Row gutter={[16,16]}>
          <Col span={12}>
            <label>Mã khách hàng</label>
            <Input />  
          </Col>    
          <Col span={12}>
            <label>Ngày chứng từ</label>
            <Input /> 
          </Col>    
          <Col span={12}>
            <label>Tên khách hàng</label>
            <Input />
          </Col>    
          <Col span={12}>
            <label>Tổng tiền</label>
            <Input /> 
          </Col>    
        </Row>

        <Row style={{ marginTop: '40px'}}>
          <Col span={24}>
            <Collapse bordered={false} colorTextHeading="rgba(0, 0, 0, 0.88)"
                items={[{ key: '1', label: 'Chi tiết', children: <AddProduct type={type} parentDetail={callbackAddProduct} /> }]}
            />
          </Col>
        </Row>
      </div>
    )
}