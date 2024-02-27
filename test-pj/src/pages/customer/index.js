import { Col, Row, Space, Table, Tag, Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import CreateCustomer from '../../components/Detail/DetailCustomer'
import { useState } from 'react';

export default function Customer() {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: (_, { tags }) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];

      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sydney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];

      const [open, setOpen] = useState(false)
      const [type, setType] = useState('')

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