import { Col, Row, Table, Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react';
import CreateCompany from '../../components/Detail/DetailCompany'
import { getListCompany } from '../../services';

export default function Customer() {
    const columns = [
        {
          title: '#',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Mã nhà cung cấp',
          dataIndex: 'code',
          key: 'code',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Tên nhà cung cấp',
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
      const [newData, setNewData] = useState(null)

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
      
      const callbackList = (childData) => {
        setNewData(childData)
      }

      useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await getListCompany()
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
            <span className='text-lg font-semibold'>Quản lý công ty</span>
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
          title="Thêm mới công ty"
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
          <CreateCompany type={type} parent={callbackList}/>
        </Modal>
      </div>
    )
  }