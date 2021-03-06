/*
 * @Author: An Nguyen 
 * @Date: 2018-11-04 18:24:54 
 * @Last Modified by: An Nguyen
 * @Last Modified time: 2018-12-02 16:03:19
 */
import * as types from '../type';

const initialState = {
  isConnected: true,
};
export default function info(prevState = initialState, action) {
  switch (action.type) {
    case types.network.TYPE:
      return { initialState, isConnected: action.isConnected };
    default:
      return prevState;
  }
}
