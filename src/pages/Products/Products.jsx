import { useState } from 'react'
import { products } from '../../datas'
import './Products.css'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function Users() {

  const [productsDatas, setProductsDatas] = useState(products)

  const productDelete = productID => {
    setProductsDatas(productsDatas.filter(product => product.id !== productID))
  }

  const columns = [
    { field: 'rowNumber',
      headerName: 'ID',
      flex: 0.5,
    },
    { field: 'title',
      headerName: 'Product',
      flex: 2.5,
      renderCell: (params) => {
        return (
          
            <div className="userListUser">
              <img src={params.row.avatar} className="productListImg" />
              {params.row.title}
            </div>
          
        )
      }
    },
    { field: 'price',
      headerName: 'Price',
      flex: 1,
    }, 
    { field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: (params) => {
        return (
          <div className='userAction'>
            <Link to={`/product/${params.row.id}`} className='Link'>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlinedIcon className="userListDelete" onClick={() => productDelete(params.row.id)} />
          </div>
        )
      }
    },
  ]

  const productDatas = productsDatas.map((product, index) => ({
    rowNumber: index + 1,
    id: product.id,
    title: product.title,
    avatar: product.avatar,
    status: product.status,
    price: '$' + product.price,
    email: product.email,
  }))


  return (
    <div className='productList'>
      <DataGrid
        rows={productDatas}
        columns={columns}
        rowHeight={70}
        checkboxSelection
        initialState={{
          pagination: {
            paginationModel: { 
             pageSize: 5
            },
          }
        }}
      />
    </div>
  )
}
