import React, { Component } from 'react'
import './list.css'
import { connect } from 'react-redux'
import { requestList } from '../../utils'

class List extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: []
        }
    }

    componentDidMount() {
        requestList().then((response) => {
            this.setState({
                list: response
            })
        })
    }

  render() {
    const { list } = this.state
    
    return (
        <div>
            <ul className='uls'>
               {
                   list.map((item,key) => {
                       return <li className='lists' key={key}>
                       <div className='lisone'><div className='mini' ></div></div>
                       <div className='listwo'>
                           <div className='name'>{item.shopCardInfo.baseInfoVO.shopName}</div>
                           <div className='one'><div className='xing'></div><div className='km'> {item.shopCardInfo.baseInfoVO.distance}</div></div>
                           <div className='city'><span className='add'>{item.shopCardInfo.baseInfoVO.cbdName}</span><span className='type'>{item.shopCardInfo.baseInfoVO.categoryName}</span></div>
                           {
                               item.shopCardInfo.hangInfoVO.hangList.map((i,k) => {
                                   
                                return <div className='tuano' key={k}><div className='tuanone'>{i.title}</div><div className='saleone'>{i.sale}</div></div>
                               })
                           }
                       </div>
                   </li>
                   }
                   )
                }
            </ul>
        </div>
    )
  }
}

export default connect(
    data => ({data}),
    dispatch => ({

    })
  )(List)