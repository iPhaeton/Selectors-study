import * as React from 'react';
import {connect} from 'react-redux';
import {getGoods} from 'selectors/main';

class GoodsList extends React.Component {
  render () {
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

export default connect(mapStateToProps, null)(GoodsList);
