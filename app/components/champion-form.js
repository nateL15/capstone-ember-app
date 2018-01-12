import Ember from 'ember';

export default Ember.Component.extend({
  newChampion: {
    title: null,
    hidden: false
  },
  actions: {
    createChampion () {
      this.sendAction('createChampion', this.get('newChampion'));
      this.set('newChampion.name', null);
      this.set('newChampion.role', null);
      this.set('newChampion.guide', null);
    }
  }
});
