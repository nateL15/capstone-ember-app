import Ember from 'ember';

export default Ember.Component.extend({
  updateChampion: {
    hidden: false
  },
  actions: {
    updateChampion () {
      this.sendAction('updateChampion', this.get('champion'));
    }
  }
});
