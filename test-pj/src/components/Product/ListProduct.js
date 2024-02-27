import {Table} from 'antd'
export default function ListProduct({ product }) {
    const columns = [
        {
          title: '#',
          dataIndex: 'STT',
          key: 'STT',
        },
        {
          title: 'Mã mặt hàng',
          dataIndex: 'code',
          key: 'code',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Tên mặt hàng',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Số lượng',
          dataIndex: 'count',
          key: 'count',
        },
        {
            title: 'Đơn giá',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Thành tiền',
            dataIndex: 'priceTotal',
            key: 'priceTotal',
        },
      ];

      const data = product;
    return (
      <Table columns={columns} dataSource={data} />
    )
} 