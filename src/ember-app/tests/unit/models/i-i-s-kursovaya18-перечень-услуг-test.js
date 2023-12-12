import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya18-перечень-услуг', 'Unit | Model | i-i-s-kursovaya18-перечень-услуг', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-kursovaya18-дир-отд-по-раб-с-кл',
    'model:i-i-s-kursovaya18-заключ-договора',
    'model:i-i-s-kursovaya18-затр-время',
    'model:i-i-s-kursovaya18-клиент',
    'model:i-i-s-kursovaya18-оказ-консульт',
    'model:i-i-s-kursovaya18-перечень-услуг',
    'model:i-i-s-kursovaya18-расторж-договора',
    'model:i-i-s-kursovaya18-расчет-ост-врем',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
