import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('champion')
  },
  actions: {
    createChampion(champion) {
      let newChampion = this.get('store').createRecord('champion', champion)
      newChampion.save()
    },
    deleteChampion(champion) {
      champion.deleteRecord()
      champion.save()
    },
    updateChampion(champion) {
      champion.save()
    }
  }
});
