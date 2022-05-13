import React, { Component } from 'react'
import './listheader.css'
import { connect } from 'react-redux'

class Listheader extends Component {
 
  headone = () =>  {
    this.headlistt.style['display'] = 'none';
    this.headlistw.style['display'] = 'none';
    
    if(this.headlisto.style['display'] == 'block'){
        this.headlisto.style['display'] = 'none';
    }else{
        this.headlisto.style['display'] = 'block';
        }
  }
  headtwo = () =>  {
    this.headlisto.style['display'] = 'none';
    this.headlistw.style['display'] = 'none';
    
    if(this.headlistt.style['display'] == 'block'){
        this.headlistt.style['display'] = 'none';
    }else{
        this.headlistt.style['display'] = 'block';
        }
  }
  headthree = () =>  {
    this.headlistt.style['display'] = 'none';
    this.headlisto.style['display'] = 'none';
    
    if(this.headlistw.style['display'] == 'block'){
        this.headlistw.style['display'] = 'none';
    }else{
        this.headlistw.style['display'] = 'block';
        }
  }
 
  render() {
    const list = this.props.data.title;
    
    const listone = list[0].subs;
    const listtwo = list[1].subs;
    const listthree = list[2].subs;
   
    return (
      <div className='listmain'>
          <div className='container'>
              <div className='item' onClick={this.headone} >综合医院</div>
              <div className='item itemtwo' onClick={this.headtwo}>全城</div>
              <div className='item itemthree' onClick={this.headthree}>智能排序</div>
          </div>
        
        <div className='headlist' ref={c =>{this.headlisto = c}} >
          {
            listone.map((item,key) => {
              return <div className='headonelist' key={key}>
                <span className='zongheone'>{item.name}</span>
                <span className='zonghetwo'>{item.name}</span>
              </div>
            })
          }
         
        </div>
        <div className='headlist' ref={c =>{this.headlistt = c}} >
        {
            listtwo.map((item,key) => {
              return <div className='headtwolist two' key={key}>
                <span className='zonghethree'>{item.name}</span>
                
              </div>
            })
          }
        </div>
        <div className='headlist' ref={c =>{this.headlistw = c}} >
        {
            listthree.map((item,key) => {
              return <div className='headthreelist three' key={key}>
                <span className='zonghethree'>{item.name}</span>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}

export default connect(
  data => ({data}),
  dispatch => ({

  })
)(Listheader)