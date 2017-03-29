import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Chart from '../components/Chart.jsx';


Meteor.startup(() => {
  render(<Chart />, document.getElementById('react-root'));
});
