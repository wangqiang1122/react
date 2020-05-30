import React from 'react';

export default class CardList extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
          textValue: '',
          cardList: [{id:1,content:'商品1'},{id:2,content:'商品2'}],
          crats: [],
      }
    }
    textChange = (ev)=>{
        this.setState({
            textValue: ev.target.value
        })
    }
    addCrad() {
        this.setState({
            cardList: [...this.state.cardList,{id: this.state.cardList.length+1, content: this.state.textValue}],
            textValue: '', 
        })
    }
    addcart = (item)=>{
      const newList = [...this.state.crats];  
      console.log(item);
      const idIndex = newList.findIndex(goods=>goods.id===item.id);
      console.log(idIndex);
      if (idIndex<0) {
        newList.push({
           ...item,
           cont: 1
        })
      } else {
        newList.splice(idIndex,1,{ ...newList[idIndex], cont: newList[idIndex].cont+1  })
      }
      this.setState({
        crats: newList
      })
    }
    minus = (item)=>{
        const newList = [...this.state.crats];  
        console.log(item);
        const idIndex = newList.findIndex(goods=>goods.id===item.id);
        newList.splice(idIndex,1,{ ...newList[idIndex], cont: newList[idIndex].cont-1  })
        this.setState({
          crats: newList
        })
    }
    add = (item) => {
        const newList = [...this.state.crats];  
        console.log(item);
        const idIndex = newList.findIndex(goods=>goods.id===item.id);
        newList.splice(idIndex,1,{ ...newList[idIndex], cont: newList[idIndex].cont+1  })
        this.setState({
          crats: newList
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.cardList.map((item)=>{
                        return (
                            <div key={item.id}>
                                <div key={item.id}>
                                    <div>{item.content}</div>
                                </div>
                                <button onClick={()=>this.addcart(item)}>添加购物车</button>
                            </div>
                            
                        )
                    })
                }
                <div>
                  <input type="text" value={this.state.textValue} onChange={this.textChange}/>
                  <button onClick={this.addCrad.bind(this)}>添加商品</button>
                </div>
                <Cart data={this.state.crats} minus={this.minus} add={this.add}></Cart>
            </div>
        )
    }
}


function Cart({ data, minus,add }) {
    return (
        <div>
           {
               data.map((item)=>{
                   return (
                       <div key={item.id}>
                          <div>{item.content}</div>
                          <button onClick={()=>minus(item)}>-</button>
                          <div>{item.cont}</div>
                          <button onClick={()=>add(item)}>+</button>
                       </div>
                   )
               })
           }
        </div>
    )
}