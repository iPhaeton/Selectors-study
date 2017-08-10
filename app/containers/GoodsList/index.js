import * as React from 'react';
import {connect} from 'react-redux';
import {getGoods} from 'selectors/main';
import {setGoods} from 'actions';
import {bindActionCreators} from 'redux';

class GoodsList extends React.Component {
  render () {
    console.log('GoodsList render', this.props.goods.toJS());
    return (
      <div>
        <ul>
          {this.props.goods.map((g, i) => <li key={i}>{`${g.get('name')} - ${g.get('price')}$`}</li>)}
        </ul>
        <button onClick={() => this.props.setGoods(this.props.goods)}>Set Goods</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('GoodsList mapStateToProps');
  return {
    goods: getGoods(state),
  };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setGoods,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GoodsList);
