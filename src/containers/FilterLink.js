import {setVisibilityFilter} from '../redux/actions/'
import Link from '../components/Link'
import { connect } from 'react-redux'


const mapDispacthToProps = dispatch => ({

    onClick: filter => dispatch(setVisibilityFilter(filter))
})

export default connect(null, mapDispacthToProps)(Link)
