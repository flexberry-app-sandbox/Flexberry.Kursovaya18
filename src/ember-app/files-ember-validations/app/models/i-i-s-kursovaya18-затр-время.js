import {
  defineNamespace,
  defineProjections,
  Model as ЗатрВремяMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya18-затр-время';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗатрВремяMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
