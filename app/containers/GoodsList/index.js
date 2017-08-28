import * as React from 'react';
import {connect} from 'react-redux';
import {getGoods} from 'selectors/main';
import {count} from 'actions';
import {bindActionCreators} from 'redux';

class GoodsList extends React.Component {
  componentDidUpdate = (prevProps, prevState) => {
    //this.props.count();
  }

  render () {
    console.log('GoodsList render', this.props.goods.toJS());
    return (
      <div>
        <ul>
          {this.props.goods.map((g, i) => <li key={i}>{`${g.get('name')} - ${g.get('price')}$`}</li>)}
        </ul>
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
  count,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GoodsList);
