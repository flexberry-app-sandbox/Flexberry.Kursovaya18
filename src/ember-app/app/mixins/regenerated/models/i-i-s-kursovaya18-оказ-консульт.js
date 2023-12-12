import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяКонсульт: DS.attr('number'),
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  предостУслуга: DS.attr('i-i-s-kursovaya18-услуга'),
  заключДоговора: DS.belongsTo('i-i-s-kursovaya18-заключ-договора', { inverse: null, async: false }),
  переченьУслуг: DS.belongsTo('i-i-s-kursovaya18-перечень-услуг', { inverse: null, async: false }),
  расчетОстВрем: DS.belongsTo('i-i-s-kursovaya18-расчет-ост-врем', { inverse: 'оказКонсулт', async: false })
});

export let ValidationRules = {
  времяКонсульт: {
    descriptionKey: 'models.i-i-s-kursovaya18-оказ-консульт.validations.времяКонсульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya18-оказ-консульт.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-kursovaya18-оказ-консульт.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  предостУслуга: {
    descriptionKey: 'models.i-i-s-kursovaya18-оказ-консульт.validations.предостУслуга.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заключДоговора: {
    descriptionKey: 'models.i-i-s-kursovaya18-оказ-консульт.validations.заключДоговора.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  переченьУслуг: {
    descriptionKey: 'models.i-i-s-kursovaya18-оказ-консульт.validations.переченьУслуг.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расчетОстВрем: {
    descriptionKey: 'models.i-i-s-kursovaya18-оказ-консульт.validations.расчетОстВрем.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОказКонсультE', 'i-i-s-kursovaya18-оказ-консульт', {
    дата: attr('Дата', { index: 0 }),
    времяКонсульт: attr('Время консульт', { index: 1 }),
    предостУслуга: attr('Предост услуга', { index: 2 }),
    заключДоговора: belongsTo('i-i-s-kursovaya18-заключ-договора', '', {
      номер: attr('', { index: 4 })
    }, { index: 3 }),
    переченьУслуг: belongsTo('i-i-s-kursovaya18-перечень-услуг', '', {
      затрВремя: belongsTo('i-i-s-kursovaya18-затр-время', '', {
        время: attr('', { index: 5 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};
