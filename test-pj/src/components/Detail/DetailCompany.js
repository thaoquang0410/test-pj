import { Row, Col, Input, Collapse } from 'antd'
import AddProduct from '../Product/AddProduct'
import { useEffect, useState } from 'react'
export default function Detail (props) {
    const [product, setProduct] = useState(null)
    const [code, setCode] = useState(null)
    const [name, setName] = useState(null)
    const [price, setPrice] = useState(null)
    const [date, setDate] = useState(null)
    const callbackAddProduct = (childAddProduct) => {
      setProduct(childAddProduct)
    }

    const sendNewData = (newData) => {
      props.parent = newData
    }

    const handleChangeCode = (e) => {
      setCode(e.target.value)
    }

    const handleChangeName = (e) => {
      setName(e.target.value)
    }

    const handleChangeDate = (e) => {
      setDate(e.target.value)
    }

    // if (Math.random() > 0) {
    //   let total = 0
    //   product.map((item) => {
    //     return total += item.priceTotal
    //   })
    //   console.log('total', total);
    //   setPrice(total)
    // }
    console.log('product', product);
    return (
      <div style={{ margin: '20px'}}>
        <Row gutter={[16,16]}>
          <Col span={12}>
            <label>Mã nhà cung cấp</label>
            <Input name="code" value={code} onChange={handleChangeCode} />  
          </Col>    
          <Col span={12}>
            <label>Ngày chứng từ</label>
            <Input name="date" value={date} onChange={handleChangeDate} /> 
          </Col>    
          <Col span={12}>
            <label>Tên nhà cung cấp</label>
            <Input name="name" value={name} onChange={handleChangeName} />
          </Col>    
          <Col span={12}>
            <label>Tổng tiền</label>
            <Input disabled name="price" value={price} /> 
          </Col>    
        </Row>

        <Row style={{ marginTop: '40px'}}>
          <Col span={24}>
            <Collapse bordered={false} colorTextHeading="rgba(0, 0, 0, 0.88)"
                items={[{ key: '1', label: 'Chi tiết', children: <AddProduct type={props.type} parentDetail={callbackAddProduct} /> }]}
            />
          </Col>
        </Row>
      </div>
    )
}