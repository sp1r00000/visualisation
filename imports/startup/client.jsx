import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';


Meteor.startup(() => {
  render(<h1>Hello World</h1>, document.getElementById('react-root'));
});
