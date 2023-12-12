import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya18-расторж-договора', 'Unit | Serializer | i-i-s-kursovaya18-расторж-договора', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya18-расторж-договора',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya18-статус',
    'transform:i-i-s-kursovaya18-тип-договора',
    'transform:i-i-s-kursovaya18-услуга',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
