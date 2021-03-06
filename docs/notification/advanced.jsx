var React = require('react');
var Notification = require('../../src/notification');
var Trigger = require('../../src/trigger');

var AdvancedNotification = React.createClass({
  render: function () {
    return (
      <div>
        <Trigger notify="main-notifications" title="My notification" content="Notification example" color="success" position="top-left"> 
          <a className="button">Dynamic Notification</a>
        </Trigger>
        <Notification.Set id="main-notifications"></Notification.Set>
      </div>
    );
  }
});

module.exports = AdvancedNotification;