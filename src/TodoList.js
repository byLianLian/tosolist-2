import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Button } from 'antd';
import { List } from 'antd';
import{ getChangeInputValue, getHandleClick, getHandleDelete } from './store/actionCreators';

class TodoList extends Component {
	render() {
		const { list, inputValue, handleClick, changeInputValue, handleDelete } = this.props;
		return(
			<div style={{margin: '0 auto', width: 400}}>
				<div style={{marginTop: 10, marginLeft: 10}}>
					<Input value={inputValue} onChange={changeInputValue} style={{width:300, marginRight: 10}}/>
					<Button onClick={handleClick} type="primary">提交</Button>
				</div>
				<ul>
					<List
				      bordered
				      dataSource={list}
				      style={{width: 375, marginLeft: -30, marginTop: 10}}
				      renderItem={(item, index) => (<List.Item onClick={() => {handleDelete(index)}}>{item}</List.Item>)}
				    />
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	inputValue: state.inputValue,
	list: state.list
})

const mapDispatchToProps = (dispatch) => ({
	changeInputValue(e) {
		const action = getChangeInputValue(e.target.value);
		dispatch(action);
	},
	handleClick() {
		const action = getHandleClick();
		dispatch(action);
	},
	handleDelete(index) {
		const action = getHandleDelete(index);
		dispatch(action);
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);