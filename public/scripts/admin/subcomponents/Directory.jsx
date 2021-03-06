var React = require('react');
var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;
var Member = require('../../shared/member.jsx');

var Directory = React.createClass({
  mixins: [Navigation],
  componentDidMount: function() {
    this.props.refreshDashboard();
  },
  memberClick: function(self) {
    this.transitionTo('editUser', {user: self.props.data.id});
  },
  render: function() {
    var members;
    if (this.props.members.length > 0) {
      members = this.props.members.map(function(member) {
        return (
          <Member key={member.id} data={member} memberClick={this.memberClick} />
        );
      }.bind(this));
    } else {
      members = ( <div className="dashboard-large">Loading directory...</div> );
    }
    return (
      <div className="col-xs-8 col-xs-push-2 dashboard-content">
        <div className="row text-center dashboard-large">
          <p>DASHBOARD</p>
        </div>

        <div className="col-xs-12">
          <div className="col-xs-6 col-lg-4 text-right">
            <Link to="editOrg" className="btn btn-default dashboard-button-small dashboard-medium">Organization Info</Link>
          </div>
          <div className="col-xs-6 col-lg-4 text-center">
            <Link to="addUser" className="btn btn-default dashboard-button-small dashboard-medium">Add Member</Link>
          </div>
          <div className="col-xs-6 col-lg-4 text-left">
            <Link to="changePassword" className="btn btn-default dashboard-button-small dashboard-medium">Change Password</Link>
          </div>
        </div>

        <div className="row dashboard-directory text-center">
          {members}
        </div>
      </div>
    );
  }
});

module.exports = Directory;
