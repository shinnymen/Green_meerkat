import { useDispatch } from "react-redux";
import {getUsers} from '../actions/users.actions'

const WithSearchForUsers = SearchComponent => {
  const ResultComponent = (props) => {
    const dispatch = useDispatch();
    const searchForUsers = async (e) => {
      return getUsers(e.target.value)(dispatch)
    }

    return (<SearchComponent {...props} searchForUsers={searchForUsers} />)
  }

  return ResultComponent
}

export default WithSearchForUsers
