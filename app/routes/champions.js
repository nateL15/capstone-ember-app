import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('champion')
  },
  actions: {
    createChampion(champion) {
      let newChampion = this.get('store').createRecord('champion', champion)
      newChampion.save()
      .then(() => this.get('flashMessages').success('Champion created successfully!'))
      .catch(() => {
        this.get('flashMessages')
        .danger('Error creating Champion');
      });
    },

    deleteChampion(champion) {
      champion.deleteRecord()
      champion.save()
      .then(() => this.get('flashMessages').success('Champion deleted successfully!'))
      .catch(() => {
        this.get('flashMessages')
        .danger('Error deleting Champion');
      });
    },
    updateChampion(champion) {
      champion.save()
      .then(() => this.get('flashMessages').success('Champion updated successfully!!'))
      .catch(() => {
        this.get('flashMessages')
        .danger('Error updating Champion');
      });
    }
  }
});
