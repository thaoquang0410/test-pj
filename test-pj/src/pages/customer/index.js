import { Col, Row, Space, Table, Tag, Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import CreateCustomer from '../../components/Detail/DetailCustomer'
import { useEffect, useState } from 'react';
import { getListCustomer } from '../../services';

export default function Customer() {
    const columns = [
        {
          title: '#',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Mã khách hàng',
          dataIndex: 'code',
          key: 'code',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Tên khách hàng',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Ngày chứng từ',
          dataIndex: 'created_At',
          key: 'created_At',
        },
        {
          title: 'Tổng tiền',
          dataIndex: 'totalPrice',
          key: 'totalPrice',
        },
      ];

      const [open, setOpen] = useState(false)
      const [type, setType] = useState('')
      const [data, setData] = useState(null)

      const handleCreate = () => {
        setOpen(true)
        setType('create')
      }

      const handleCancel = () => {
        setOpen(false)
      }

      const handleSave = () => {
        setOpen(false)
      }

      useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await getListCustomer()
            setData(result.data)
          } catch (err) {
            console.log(err);
          }
        }

        fetchData()
      }, [])
    return (
      <div>
        <Row justify="start">
          <Col span={8}>
            <span className='text-lg font-semibold'>Quản lý khách hàng</span>
          </Col>
          <Col span={8} offset={8} className='text-end'>
            <Button icon={<PlusOutlined />} onClick={handleCreate}>Thêm mới</Button>
          </Col>
        </Row>
        <Row justify="center" style={{ marginTop: '40px'}}>
          <Col span={24}>
            <Table columns={columns} dataSource={data} />
          </Col>
        </Row>

        <Modal
          title="Thêm mới khách hàng"
          open={open}
          onCancel={handleCancel}
          width="700px"
          footer={[
            <Button type="primary" ghost onClick={handleSave}>
              Lưu
            </Button>,
            <Button className="btn-cancel" key="cancel" onClick={handleCancel}>
              Hủy
            </Button>,
          ]}
        >
          <CreateCustomer type={type} />
        </Modal>
      </div>
    )
  }