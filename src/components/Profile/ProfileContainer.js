import React from "react";

import Profile from "./Profile";

import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReduser";
import { withRouter} from "react-router-dom";
import {withAuthredirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId);
    }

    render() {

        return (

            <Profile {...this.props} profile={this.props.profile}/>

        )
    }
}
let AuthRedirectComponent = withAuthredirect(ProfileContainer);



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});
let WithRouterProfileContainer = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithRouterProfileContainer);