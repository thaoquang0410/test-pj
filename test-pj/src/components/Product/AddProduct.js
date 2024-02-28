import { Row, Col, Input, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import ListProduct from './ListProduct'

export default function AddProduct(props) {
  let [show, setShow] = useState(false)
  let [product, setProduct] = useState([])
  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [count, setCount] = useState(null)
  const [price, setPrice] = useState(null)

  const sendData = (product) => {
    props.parentDetail(product)
  }
  const handleCreateProduct = () => {
    setShow(true)
  }

  const handleCancel = () => {
    setShow(false)
  }

  const handleChangeCode = (e) => {
    setCode(e.target.value)
  }

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeCount = (e) => {
    setCount(e.target.value)
  }

  const handleChangePrice = (e) => {
    setPrice(e.target.value)
  }

  const handlSaveProduct = () => {
    let newProduct = {
        STT: 1,
        code: code,
        name: name,
        count: count,
        price: price,
        priceTotal: count * price,
    }
    if (code || name || count || price) {
      product.push(newProduct)
      setProduct(product)
    }
    console.log('product', product);
    if (product) {
      sendData(product)
    }
    handleResetField()
    setShow(false)
  }

  const handleResetField = () => {
    setCode('')
    setName('')
    setCount(null)
    setPrice(null)
  }

  return (
    <div>
      <Row>
        <Col span={24}>
          <div className='flex items-center text-blue-500 cursor-pointer' onClick={handleCreateProduct}>
            <PlusOutlined />
            <span className='pl-2'>Thêm mới mặt hàng</span>
          </div>
        </Col>
      </Row>
      { show ? <Row gutter={[16,16]} style={{ marginTop: '20px'}}>
        <Col span={6}>
          <label>Mã mặt hàng</label>
          <Input name="code" value={code} onChange={handleChangeCode} />
        </Col>
        <Col span={6}>
          <label>Tên mặt hàng</label>
          <Input name="name" value={name} onChange={handleChangeName}/>
        </Col>
        <Col span={6}>
          <label>Số lượng</label>
          <Input name="count" value={count} onChange={handleChangeCount} />
        </Col>
        <Col span={6}>
          <label>Đơn giá</label>
          <Input name="price" value={price} onChange={handleChangePrice} />
        </Col>
        <Col span={3}>
         <Button onClick={handlSaveProduct}>Lưu</Button>
        </Col>
        <Col span={3}>
         <Button onClick={handleCancel}>Hủy</Button>
        </Col>
      </Row> : ''}
      
      <ListProduct product={product} />
    </div>
  )
}