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
      let data = product.map((item) => {
        return item
      })
    return (
      <Table columns={columns} dataSource={data} />
    )
} 