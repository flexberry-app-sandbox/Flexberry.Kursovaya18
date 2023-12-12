import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипДоговораEnum from '../enums/i-i-s-kursovaya18-тип-договора';

export default FlexberryEnum.extend({
  enum: ТипДоговораEnum,
  sourceType: 'IIS.Kursovaya18.ТипДоговора'
});
