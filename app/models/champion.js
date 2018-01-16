import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  role: DS.attr('string'),
  guide: DS.attr('string'),
  champion: DS.hasMany('user'),
  isEmpty: Ember.computed.empty('champion')

});
