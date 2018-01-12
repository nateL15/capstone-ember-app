import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('champion-form/singlechamp', 'Integration | Component | champion form/singlechamp', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{champion-form/singlechamp}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#champion-form/singlechamp}}
      template block text
    {{/champion-form/singlechamp}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
