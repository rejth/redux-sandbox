import React from 'react';
// connect - функция, которая создает новый компонент (возвращает новую функцию)
import { connect } from 'react-redux';
// функция для связывания action creators с методом store.dispatch() для отправки в reducer
import { bindActionCreators } from 'redux';
// action creators
import * as actions from '../actions';

// View Layer
const Counter = ({ count, inc, dec }) => (
  <div className="jumbotron">
    <h1 id="counter">{count}</h1>
    <button id="dec" className="btn btn-primary btn-lg" onClick={dec}>
      DEC
    </button>
    <button id="inc" className="btn btn-primary btn-lg" onClick={inc}>
      INC
    </button>
  </div>
);

//property count = state from redux-store
const mapStateToProps = state => ({ count: state });

//properties inc, dec = dispatched actions inc, dec from redux-store
const mapDispatchToProps = dispatch => {
  // связываем функции action creators с dispatch, bindActionCreators возвращает объект {}
  // созданные таким образом функции делают сразу 2 действия:
  // 1. создают action { type: ..., ...}
  // 2. передают action в метод store.dispatch - dispatch({ type: ..., ...}) или dispatch(creator())
  // таким образом мы изолируем View Layer от логики Redux,
  // что позволяет легко масштабировать View Layer независимо от того,
  // используем мы Redux или любую другую библиотеку управления состоянием компонентов
  // React-компонеты должны быть как можно меньше связаны с Redux
  return bindActionCreators(actions, dispatch);
};

// функция connect() вернет новый компонент, который оборачивает Counter
// этот компонент-обертка обеспечивает связь Counter с Redux
// т.е он имеет доступ к store и передает state и actions из store в Counter для рендеринга
// вместо mapDispatchToProps можно передать просто actions, затем connect() сам применит bindActionCreators(actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
