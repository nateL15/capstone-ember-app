import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateChampion() {
      return this.sendAction('updateChampion', this.get('champion'))
    }
  }
})
