import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  actions: {
    deleteChampion(){
      return this.sendAction('deleteChampion', this.get('singlechamp'))
    }
  },
});
