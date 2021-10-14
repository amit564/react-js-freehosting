import { useEffect } from "react"
import { Route, useHistory, useRouteMatch } from "react-router"
import { Link, Switch } from "react-router-dom"
import EditProfile from "../EditProfile"
import ViewProfile from "../ViewProfile"

const Profile = ({ login }) => {
	const { path, url } = useRouteMatch()
	const history = useHistory()
	useEffect(() => {
		if (!login) {
			history.push("/")
		}
	}, [login, history])
	return (
		<>
			<h1>Profile Page</h1>
			<ul>
				<li>
					<Link to={`${url}/viewProfile`}>View Profile</Link>
				</li>
				<li>
					<Link to={`${url}/editProfile`}>Edit Profile</Link>
				</li>
			</ul>
			<Switch>
				<Route path={`${path}/viewProfile`} component={ViewProfile} />
				<Route path={`${path}/editProfile`} component={EditProfile} />
			</Switch>
		</>
	)
}
export default Profile
